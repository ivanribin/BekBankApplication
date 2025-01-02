import { useEffect, useState, type ReactElement } from "react";
import CheckInfoField from "../../components/CheckInfoField";
import CheckTools from "../../components/CheckTools";
import BankLogo from "../../components/BankLogo";
import { useParams } from "react-router-dom";
import { getCheckBalanceByNumber } from "../../api";
import "./style.css";

const CheckPage = (): ReactElement => {
    const { checkNumber } = useParams();
    
    const [areCheckBalanceLoading, setAreCheckBalanceLoading] = useState<boolean>(false);
    const [checkBalance, setCheckBalance] = useState<number>(0);
    const [error, setError] = useState(null);

    const loadCheckBalance = async () => {
        try {
            setError(null);
            setAreCheckBalanceLoading(true);

            if (!checkNumber) {
                throw new Error("Cannot load check balance, check number is undefined");
            }

            const checkBalance: number = await getCheckBalanceByNumber(checkNumber);

            if (!checkBalance) {
                console.log("FAIL GET BALANCE");
            }

            setCheckBalance(checkBalance);
        } catch(error: any) {
            setError(error);
        } finally {
            setAreCheckBalanceLoading(false);
        }
    }

    useEffect(() => {
        loadCheckBalance();
    }, []);

    if (!checkNumber) {
        return <div>Cannot find check with undefined number</div>
    }

    if (areCheckBalanceLoading) {
        return <div>LOADING...</div>
    }

    if (error) {
        return <div>Unable to load check</div>
    }

    return (
        <div className="check-info-page-container">
            <BankLogo />
            <CheckInfoField checkNumber={checkNumber} balance={checkBalance} />
            <CheckTools checkNumber={checkNumber}/>
        </div>
    );
};

export default CheckPage;
