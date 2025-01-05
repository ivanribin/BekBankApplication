import { useEffect, useState, type ReactElement } from "react";
import CheckInfoField from "../../components/CheckInfoField";
import CheckTools from "../../components/CheckTools";
import BankLogo from "../../components/BankLogo";
import { useParams } from "react-router-dom";
import { getCheckBalanceByNumber, getCheckHistoryByNumber, TCheckHistoryList } from "../../api";
import CheckHistory from "../../components/CheckHistory";
import { getLoginInFormattedForm } from "../../utils/constants";
import "./style.css";
import OperationIcon from "../../components/OperationIcon";

const CheckPage = (): ReactElement => {
    const { checkNumber } = useParams();

    const formattedCheckNumber: string = getLoginInFormattedForm(checkNumber);

    const [areCheckDataLoading, setAreCheckDataLoading] = useState<boolean>(false);
    const [checkBalance, setCheckBalance] = useState<number>(0);
    const [checkHistory, setCheckHistory] = useState<TCheckHistoryList>([]);
    const [error, setError] = useState(null);

    const loadCheckBalance = async () => {
        try {
            setError(null);
            setAreCheckDataLoading(true);

            if (!checkNumber) {
                throw new Error("Cannot load check balance, check number is undefined");
            }

            const checkBalance: number = await getCheckBalanceByNumber(checkNumber);

            if (checkBalance === null) {
                console.log("FAIL GET BALANCE");
            }

            const checkHistoryData: TCheckHistoryList = await getCheckHistoryByNumber(checkNumber);

            if (checkHistoryData.length === 0) {
                console.log("FAIL GET HISTORY");
            }

            setCheckBalance(checkBalance);
            setCheckHistory(checkHistoryData);
        } catch(error: any) {
            setError(error);
        } finally {
            setAreCheckDataLoading(false);
        }
    }

    useEffect(() => {
        loadCheckBalance();
    }, []);

    if (!checkNumber) {
        return <div>Cannot find check with undefined number</div>
    }

    if (areCheckDataLoading) {
        return <OperationIcon />
    }

    if (error) {
        return <div>Unable to load check</div>
    }

    return (
        <div className="check-info-page-container">
            <BankLogo />
            <CheckInfoField checkNumber={formattedCheckNumber} balance={checkBalance} />
            <CheckTools checkNumber={checkNumber}/>
            <CheckHistory historyData={checkHistory}/>
        </div>
    );
};

export default CheckPage;
