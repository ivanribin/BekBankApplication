import { type ReactElement, useState, useEffect, ChangeEvent } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { textMessagesList } from "../../utils/constants";
import { getCheckBalanceByNumber, takeOffCheckByNumber, ICheckOperationAnswer } from "../../api";
import CheckCart from "../../components/CheckCart";
import BankLogo from "../../components/BankLogo";
import "./style.css";
import { ApplicationsPaths } from "../../router/routes";

const CheckTakeOffPage = (): ReactElement => {
    const { checkNumber } = useParams();

    const navigate = useNavigate();

    const [areCheckBalanceLoading, setAreCheckBalanceLoading] =
        useState<boolean>(false);
    
    const [areTakeOffActionLoading, setAreTakeOffActionLoading] =
        useState<boolean>(false);
    const [checkBalance, setCheckBalance] = useState<number>(0);
    const [amount, setAmount] = useState<string>("");
    const [loadBalanceError, setLoadBalanceError] = useState(null);
    const [takeOffActionError, settakeOffActionError] = useState(null);
    

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

            if (!checkData) {
                console.log("FAIL GET BALANCE");
                return;
            }

            setCheckBalance(checkData);
        } catch (error: any) {
            setLoadBalanceError(error);
        } finally {
            setAreCheckBalanceLoading(false);
        }
    };

    const takeOffAction = async () => {
        try {
            settakeOffActionError(null);
            setAreTakeOffActionLoading(true);

            if (!checkNumber) {
                throw new Error(
                    "Cannot take off check, check number is undefined"
                );
            }

            const checkOperationAnswer: ICheckOperationAnswer = await takeOffCheckByNumber(checkNumber, Number(amount));

            if (!checkOperationAnswer.isSuccess) {
                console.log("FAIL TAKE OFF");
                return;
            }

            navigate(`${ApplicationsPaths.CHECK}/${checkOperationAnswer.bankAccount.accountGuid}`);
        } catch (error: any) {
            settakeOffActionError(error);
        } finally {
            setAreTakeOffActionLoading(false);
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

    if (areCheckBalanceLoading || areTakeOffActionLoading) {
        return <div>LOADING...</div>;
    }

    if (loadBalanceError || takeOffActionError) {
        return <div>Unable to load check</div>;
    }

    return (
        <div className="check-take-off-page-container">
            <BankLogo />

            <div className="take-off-action-container">
                <div className="take-off-check-info-container">
                    <div className="take-off-check-info-first-part">
                        <div className="take-off-check-title">
                            {textMessagesList.TAKEOFFCHECKTITLE}
                        </div>
                        <div className="take-off-check-number">{checkNumber}</div>
                    </div>
                    <div className="take-off-check-info-second-part">
                        <div className="take-off-check-balance">
                            {checkBalance}₽
                        </div>
                        <div className="take-off-check-icon">
                            <CheckCart
                                checkNumber={checkNumber}
                                width={"200px"}
                                height={"120px"}
                                isNeedShowCheckNumber={false}
                            />
                        </div>
                    </div>
                </div>

                <hr className="horizontal-line" />

                <div className="take-off-info-container">
                    <div className="take-off-info-title">
                        {textMessagesList.TAKEOFFINFOTITLE}
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

            <div className="take-off-action-button" onClick={takeOffAction}>
                {textMessagesList.TAKEOFFBUTTON}
            </div>
        </div>
    );
};

export default CheckTakeOffPage;
