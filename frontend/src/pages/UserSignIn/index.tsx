import { useState, type ReactElement } from "react";
import BankLogo from "../../components/BankLogo";
import { textMessagesList } from "../../utils/constants";
import { userSignIn, ICheckData } from "../../api";
import { useNavigate } from "react-router-dom";
import { ApplicationsPaths } from "../../router/routes";
import "./style.css";
import UserForm from "../../components/UserForm";

const UserSignInPage = (): ReactElement => {
    const navigate = useNavigate();

    const [signInStatus, setSignInStatus] =
        useState<string>("sending");
    const [error, setError] = useState<Error | null>(null);

    const checkSignIn = async (currentCheckNumber: string, currentPassword: string) => {
        try {
            setError(null);

            const checkData: ICheckData = await userSignIn(currentCheckNumber,
                currentPassword
            );

            if (!checkData) {
                setSignInStatus("fail");

                return;
            }

            setSignInStatus("success");

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
        <div className="user-sign-in-page-container">
            <BankLogo />
            <div className={`${signInStatus}-user-sign-in-field`}>
                <div className="sign-in-message">
                    {textMessagesList.USERSIGNIN}
                </div>

                <UserForm
                    isNeedLoginField={true}
                    loginPlaceholder={textMessagesList.LOGINPLACEHOLDER}
                    isNeedPasswordField={true}
                    passwordPlaceholder={textMessagesList.PASSWORDPLACEHOLDER}
                    sendLoginAndPasswordFunction={checkSignIn}
                />
            </div>
        </div>
    );
};

export default UserSignInPage;
