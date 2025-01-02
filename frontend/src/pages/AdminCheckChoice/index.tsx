import { type ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import BankLogo from "../../components/BankLogo";
import UserForm from "../../components/UserForm";
import { textMessagesList } from "../../utils/constants";
import { adminCheckChoice, ICheckData } from "../../api";
import { ApplicationsPaths } from "../../router/routes";
import "./style.css";

const AdminCheckChoicePage = (): ReactElement => {
    const navigate = useNavigate();

    const [choiceStatus, setChoiceStatus] = useState<string>("sending");
    const [error, setError] = useState<Error | null>(null);

    const checkAdminChoiceCheck = async (currentCheckNumber: string) => {
        try {
            setError(null);

            const checkData: ICheckData = await adminCheckChoice(
                currentCheckNumber
            );

            if (!checkData) {
                setChoiceStatus("fail");
                return;
            }

            setChoiceStatus("success");

            setTimeout(() => {
                // navigate(`${ApplicationsPaths.CHECKINSPECT}/${checkData.accountGuid}`, {replace: true});
                navigate(`${ApplicationsPaths.CHECK}/${checkData.accountGuid}`);
            }, 1000);
        } catch (error: any) {
            setError(error);
        }
    };

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
                />
            </div>
        </div>
    );
};

export default AdminCheckChoicePage;
