import { useState, type ReactElement } from "react";
import BankLogo from "../../components/BankLogo";
import { buttonsText, textMessagesList } from "../../utils/constants";
import { userSignIn, ICheckData } from "../../api";
import { useNavigate } from "react-router-dom";
import { ApplicationsPaths } from "../../router/routes";
import "./style.css";
import UserForm from "../../components/UserForm";
import OperationIcon from "../../components/OperationIcon";

const UserSignInPage = (): ReactElement => {
    const navigate = useNavigate();

    const [areSignIn, setAreSignIn] = useState<boolean>(false);
    const [signInStatus, setSignInStatus] =
        useState<string>("sending");
    const [error, setError] = useState<Error | null>(null);

    const checkSignIn = async (currentCheckNumber: string, currentPassword: string) => {
        try {
            setError(null);
            setAreSignIn(true);

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
        } finally {
            setAreSignIn(false);
        }
    };

    if (areSignIn) {
        return <OperationIcon />;
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <div className="user-sign-in-page-container">
            <BankLogo />
            <div className={`${signInStatus}-user-sign-in-field`}>
                <div className="sign-in-message">
                    {buttonsText.SIGNIN}
                </div>

                <UserForm
                    isNeedLoginField={true}
                    loginPlaceholder={textMessagesList.LOGINPLACEHOLDER}
                    isNeedPasswordField={true}
                    passwordPlaceholder={textMessagesList.PASSWORDPLACEHOLDER}
                    sendLoginAndPasswordFunction={checkSignIn}
                    buttonText={buttonsText.SIGNIN}
                />
            </div>
        </div>
    );
};

export default UserSignInPage;
