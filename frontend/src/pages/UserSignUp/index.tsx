import { useState, type ReactElement } from "react";
import BankLogo from "../../components/BankLogo";
import { buttonsText, textMessagesList } from "../../utils/constants";
import { ICheckData, userSignUp } from "../../api";
import { useNavigate } from "react-router-dom";
import { ApplicationsPaths } from "../../router/routes";
import "./style.css";
import UserForm from "../../components/UserForm";
import OperationIcon from "../../components/OperationIcon";

const UserSignUpPage = (): ReactElement => {
    const navigate = useNavigate();

    const [areSignUp, setAreSignUp] = useState<boolean>(false);
    const [signUpStatus, setSignUpStatus] =
        useState<string>("sending");
    const [error, setError] = useState<Error | null>(null);

    const checkSignUp = async (currentPassword: string) => {
        try {
            setError(null);
            setAreSignUp(true);

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
        } finally {
            setAreSignUp(false);
        }
    };

    if (areSignUp) {
        return <OperationIcon />;
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <div className="user-sign-up-page-container">
            <BankLogo />
            <div className={`${signUpStatus}-user-sign-up-field`}>
                <div className="sign-up-message">
                    {buttonsText.SIGNUP}
                </div>

                <UserForm
                    isNeedPasswordField={true}
                    passwordPlaceholder={textMessagesList.PASSWORDPLACEHOLDER}
                    sendPasswordFunction={checkSignUp}
                    isNeedRepeatPasswordField={true}
                    repeatPasswordPlaceholder={textMessagesList.REPEATPASSWORDPLACEHOLDER}
                    buttonText={buttonsText.SIGNUP}
                />
            </div>
        </div>
    );
};

export default UserSignUpPage;
