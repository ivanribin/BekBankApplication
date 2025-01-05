import { type ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import BankLogo from "../../components/BankLogo";
import UserForm from "../../components/UserForm";
import { buttonsText, textMessagesList } from "../../utils/constants";
import { adminCheckChoice, getCheckBalanceByNumber, ICheckData } from "../../api";
import { ApplicationsPaths } from "../../router/routes";
import "./style.css";
import OperationIcon from "../../components/OperationIcon";

const AdminCheckChoicePage = (): ReactElement => {
    const navigate = useNavigate();

    const [areCheckChoice, setAreCheckChoice] = useState<boolean>(false);
    const [choiceStatus, setChoiceStatus] = useState<string>("sending");
    const [error, setError] = useState<Error | null>(null);

    const checkAdminChoiceCheck = async (currentCheckNumber: string) => {
        try {
            setError(null);
            setAreCheckChoice(true);

            const checkBalance: number = await getCheckBalanceByNumber(
                currentCheckNumber
            );

            if (checkBalance === null) {
                setChoiceStatus("fail");
                return;
            }

            setChoiceStatus("success");

            setTimeout(() => {
                // navigate(`${ApplicationsPaths.CHECKINSPECT}/${checkData.accountGuid}`, {replace: true});
                navigate(`${ApplicationsPaths.CHECK}/${currentCheckNumber}`);
            }, 1000);
        } catch (error: any) {
            setError(error);
        } finally {
            setAreCheckChoice(false);
        }
    };

    if (areCheckChoice) {
        return <OperationIcon />
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <div className="admin-check-choice-page-container">
            <BankLogo />
            <div className={`${choiceStatus}-admin-check-choice-field`}>
                <div className="check-choice-message">
                    {textMessagesList.ADMINCHECKCHOICE}
                </div>

                <UserForm
                    isNeedLoginField={true}
                    loginPlaceholder={textMessagesList.LOGINPLACEHOLDER}
                    sendLoginFunction={checkAdminChoiceCheck}
                    buttonText={buttonsText.SIGNIN}
                />
            </div>
        </div>
    );
};

export default AdminCheckChoicePage;
