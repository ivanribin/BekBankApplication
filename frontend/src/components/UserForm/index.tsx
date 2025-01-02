import { ReactElement, useState, ChangeEvent } from "react";
import { TextLines } from "./meta";
import "./style.css";

export interface IUserFormProps {
    isNeedPasswordField?: boolean;
    passwordPlaceholder?: string;
    sendPasswordFunction?: (currentPassword: string) => Promise<void>;
    isNeedLoginField?: boolean;
    loginPlaceholder?: string;
    sendLoginFunction?: (
        currentCheckNumber: string,
    ) => Promise<void>;
    sendLoginAndPasswordFunction?: (
        currentCheckNumber: string,
        currentPassword: string
    ) => Promise<void>;
    isNeedRepeatPasswordField?: boolean;
    repeatPasswordPlaceholder?: string;
}

const UserForm = ({
    isNeedPasswordField = false,
    passwordPlaceholder = "",
    sendPasswordFunction = async () => Promise.resolve(),
    isNeedLoginField = false,
    loginPlaceholder = "",
    sendLoginFunction = async () => Promise.resolve(),
    sendLoginAndPasswordFunction = async () => Promise.resolve(),
    isNeedRepeatPasswordField = false,
    repeatPasswordPlaceholder = "",
}: IUserFormProps): ReactElement => {
    const [login, setLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [repeatPassword, setRepeatPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLogin(event.target.value);
    };

    const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleRepeatPasswordChange = (
        event: ChangeEvent<HTMLInputElement>
    ) => {
        setRepeatPassword(event.target.value);
    };

    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    const checkSendAvailable = () => {
        if (!isNeedPasswordField) {
            sendLoginFunction(login);
            return;
        }

        if (!isNeedRepeatPasswordField) {
            if (!isNeedLoginField) {
                sendPasswordFunction(password);
                return;
            }

            sendLoginAndPasswordFunction(login, password);
            return;
        }

        if (!(password === repeatPassword)) {
            console.log("PASSWORDS IS NOT MATCH");
            return;
        }

        if (!isNeedLoginField) {
            console.log("CHECK")
            sendPasswordFunction(password);
        }

        sendLoginAndPasswordFunction(login, password);
    };

    return (
        <div className="password-input-container">
            {isNeedLoginField ? (
                <input
                    className="login-input-field"
                    type="text"
                    id="login"
                    value={login}
                    onChange={handleLoginChange}
                    placeholder={loginPlaceholder}
                    required
                />
            ) : (
                <></>
            )}

            {isNeedPasswordField ? (
                <input
                    className="password-input-field"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder={passwordPlaceholder}
                    required
                />
            ) : (
                <></>
            )}

            {isNeedRepeatPasswordField ? (
                <input
                    className="repeat-password-input-field"
                    type={showPassword ? "text" : "password"}
                    id="repeat-password"
                    value={repeatPassword}
                    onChange={handleRepeatPasswordChange}
                    placeholder={repeatPasswordPlaceholder}
                    required
                />
            ) : (
                <></>
            )}

            <div className="show-password-button" onClick={toggleShowPassword}>
                {showPassword ? TextLines.HIDEPASSWORD : TextLines.SHOWPASSWORD}
            </div>

            <button
                className="sending-button"
                onClick={checkSendAvailable}
            >
                {TextLines.LOGINBUTTON}
            </button>
        </div>
    );
};

export default UserForm;
