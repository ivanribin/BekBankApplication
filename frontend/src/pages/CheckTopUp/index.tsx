import { type ReactElement, useState, useEffect, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { buttonsText, textMessagesList } from "../../utils/constants";
import { topUpCheckByNumber, ICheckOperationAnswer, getCheckBalanceByNumber } from "../../api";
import CheckCart from "../../components/CheckCart";
import BankLogo from "../../components/BankLogo";
import { ApplicationsPaths } from "../../router/routes";
import { getLoginInFormattedForm } from "../../utils/constants";
import "./style.css";
import OperationIcon from "../../components/OperationIcon";

const CheckTopUpPage = (): ReactElement => {
    const { checkNumber } = useParams();

    const formattedCheckNumber: string = getLoginInFormattedForm(checkNumber);

    const navigate = useNavigate();

    const [areCheckBalanceLoading, setAreCheckBalanceLoading] =
        useState<boolean>(false);
    
    const [areTopUpActionLoading, setAreTopUpActionLoading] =
        useState<boolean>(false);
    const [checkBalance, setCheckBalance] = useState<number>(0);
    const [amount, setAmount] = useState<string>("");
    const [loadBalanceError, setLoadBalanceError] = useState(null);
    const [topUpActionError, setTopUpActionError] = useState(null);
    

    const loadCheckBalance = async () => {
        try {
            setLoadBalanceError(null);
            setAreCheckBalanceLoading(true);

            if (!checkNumber) {
                throw new Error(
                    "Cannot load check balance, check number is undefined"
                );
            }

            const checkData: number = await getCheckBalanceByNumber(checkNumber);

            if (checkData === null) {
                console.log("FAIL GET BALANCE");
            }

            setCheckBalance(checkData);
        } catch (error: any) {
            setLoadBalanceError(error);
        } finally {
            setAreCheckBalanceLoading(false);
        }
    };

    const topUpAction = async () => {
        try {
            setTopUpActionError(null);
            setAreTopUpActionLoading(true);

            if (!checkNumber) {
                throw new Error(
                    "Cannot top up check, check number is undefined"
                );
            }

            const checkOperationAnswer: ICheckOperationAnswer = await topUpCheckByNumber(checkNumber, Number(amount));

            if (!checkOperationAnswer.isSuccess) {
                console.log("FAIL TOP UP");
                return;
            }

            navigate(`${ApplicationsPaths.CHECK}/${checkOperationAnswer.bankAccount.accountGuid}`);
        } catch (error: any) {
            setTopUpActionError(error);
        } finally {
            setAreTopUpActionLoading(false);
        }
    };

    useEffect(() => {
        loadCheckBalance();
    }, []);

    const handleAmountChange = (event: ChangeEvent<HTMLInputElement>) => {
        setAmount(event.target.value);
    };

    if (!checkNumber) {
        return <div>Cannot find check with undefined number</div>;
    }

    if (areCheckBalanceLoading || areTopUpActionLoading) {
        return <OperationIcon />;
    }

    if (loadBalanceError || topUpActionError) {
        return <div>Unable to load check</div>;
    }

    return (
        <div className="check-top-up-page-container">
            <BankLogo />

            <div className="top-up-action-container">
                <div className="top-up-check-info-container">
                    <div className="top-up-check-info-first-part">
                        <div className="top-up-check-title">
                            {textMessagesList.TOPUPCHECKTITLE}
                        </div>
                        <div className="top-up-check-number">{formattedCheckNumber}</div>
                    </div>
                    <div className="top-up-check-info-second-part">
                        <div className="top-up-check-balance">
                            {checkBalance}
                        </div>
                        <div className="top-up-check-icon">
                            <CheckCart
                                width={"200px"}
                                height={"120px"}
                                isNeedShowCheckNumber={false}
                            />
                        </div>
                    </div>
                </div>

                <hr className="horizontal-line" />

                <div className="top-up-info-container">
                    <div className="top-up-info-title">
                        {textMessagesList.TOPUPINFOTITLE}
                    </div>

                    <input
                        className="amount-input-field"
                        type={"text"}
                        id="amount"
                        value={amount}
                        onChange={handleAmountChange}
                        placeholder={textMessagesList.AMOUNTPLACEHOLDER}
                        required
                    />
                </div>
            </div>

            <div className="top-up-action-button" onClick={topUpAction}>
                {buttonsText.TOPUP}
            </div>
        </div>
    );
};

export default CheckTopUpPage;
