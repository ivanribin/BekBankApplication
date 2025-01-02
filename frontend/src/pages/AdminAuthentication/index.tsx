import { useState, type ReactElement } from "react";
import BankLogo from "../../components/BankLogo";
import { textMessagesList } from "../../utils/constants";
import { adminAuthentication } from "../../api";
import { useNavigate } from "react-router-dom";
import { ApplicationsPaths } from "../../router/routes";
import "./style.css";
import UserForm from "../../components/UserForm";

const AdminAuthenticationPage = (): ReactElement => {
    const navigate = useNavigate();

    const [authenticateStatus, setAuthenticateStatus] =
        useState<string>("sending");
    const [error, setError] = useState<Error | null>(null);

    const checkAdminAuthentication = async (currentPassword: string) => {
        try {
            setError(null);

            const isAuthenticationSuccess: boolean = await adminAuthentication(
                currentPassword
            );

            if (!isAuthenticationSuccess) {
                setAuthenticateStatus("fail");
                return;
            }

            setAuthenticateStatus("success");

            setTimeout(() => {
                navigate(ApplicationsPaths.ADMINCHECKCHOICE, {replace: true});
            }, 1000);
        } catch (error: any) {
            setError(error);
        }
    };

    if (error) {
        return <div>{error.message}</div>;
    }

    return (
        <div className="admin-authentication-page-container">
            <BankLogo />
            <div className={`${authenticateStatus}-admin-authentication-field`}>
                <div className="authentication-message">
                    {textMessagesList.LOGINADMINISTRATOR}
                </div>

                <UserForm
                    isNeedPasswordField={true}
                    passwordPlaceholder={textMessagesList.PASSWORDPLACEHOLDER}
                    sendPasswordFunction={checkAdminAuthentication}
                />
            </div>
        </div>
    );
};

export default AdminAuthenticationPage;
