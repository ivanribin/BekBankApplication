import { useState, type ReactElement } from "react";
import BankLogo from "../../components/BankLogo";
import { textMessagesList } from "../../utils/constants";
import { ICheckData, userSignUp } from "../../api";
import { useNavigate } from "react-router-dom";
import { ApplicationsPaths } from "../../router/routes";
import "./style.css";
import UserForm from "../../components/UserForm";

const UserSignUpPage = (): ReactElement => {
    const navigate = useNavigate();

    const [signUpStatus, setSignUpStatus] =
        useState<string>("sending");
    const [error, setError] = useState<Error | null>(null);

    const checkSignUp = async (currentPassword: string) => {
        try {
            setError(null);

            const checkData: ICheckData = await userSignUp(currentPassword
            );

            if (!checkData) {
                setSignUpStatus("fail");

                return;
            }

            setSignUpStatus("success");

            setTimeout(() => {
                navigate(`${ApplicationsPaths.CHECK}/${checkData.accountGuid}`, {replace: true});
            }, 1000);
        } catch (error: any) {
            setError(error);
        }
    };

    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <div className="user-sign-up-page-container">
            <BankLogo />
            <div className={`${signUpStatus}-user-sign-up-field`}>
                <div className="sign-up-message">
                    {textMessagesList.USERSIGNUP}
                </div>

                <UserForm
                    isNeedPasswordField={true}
                    passwordPlaceholder={textMessagesList.PASSWORDPLACEHOLDER}
                    sendPasswordFunction={checkSignUp}
                    isNeedRepeatPasswordField={true}
                    repeatPasswordPlaceholder={textMessagesList.REPEATPASSWORDPLACEHOLDER}
                />
            </div>
        </div>
    );
};

export default UserSignUpPage;
