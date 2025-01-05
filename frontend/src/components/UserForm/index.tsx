import { ReactElement, useState, ChangeEvent } from "react";
import { userFormTextLines } from "./meta";
import { NUMBERS_COUNT_IN_ONE_PATH_OF_LOGIN } from "../../utils/constants";
import "./style.css";

const getCountHyphens = (input: string): number => {
    const loginParts = input.split("-");

    return loginParts.length - 1;
};

const clearLoginToCorrectForm = (login: string): string => {
    return login.replace(/[^0-9-]/g, "");
};

export interface IUserFormProps {
    isNeedPasswordField?: boolean;
    passwordPlaceholder?: string;
    sendPasswordFunction?: (currentPassword: string) => Promise<void>;
    isNeedLoginField?: boolean;
    loginPlaceholder?: string;
    sendLoginFunction?: (currentCheckNumber: string) => Promise<void>;
    sendLoginAndPasswordFunction?: (
        currentCheckNumber: string,
        currentPassword: string
    ) => Promise<void>;
    isNeedRepeatPasswordField?: boolean;
    repeatPasswordPlaceholder?: string;
    buttonText: string;
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
    buttonText,
}: IUserFormProps): ReactElement => {
    const [login, setLogin] = useState<string>("");
    const [formattedLogin, setFormattedLogin] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [repeatPassword, setRepeatPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [sendingButtonStyle, setSendingButtonStyle] = useState<string>(
        "active-sending-button"
    );

    const MAX_FORMATTED_LOGIN_LENGTH: number = 14;

    const handleLoginChange = (event: ChangeEvent<HTMLInputElement>) => {
        let currentFormattedLogin = clearLoginToCorrectForm(event.target.value);

        const hyphenCount = getCountHyphens(currentFormattedLogin);

        if (
            currentFormattedLogin.length / (hyphenCount + 1) ===
            NUMBERS_COUNT_IN_ONE_PATH_OF_LOGIN + 1
        ) {
            const lastElement =
                currentFormattedLogin[currentFormattedLogin.length - 1];

            currentFormattedLogin =
                currentFormattedLogin.slice(
                    0,
                    currentFormattedLogin.length - 1
                ) +
                "-" +
                lastElement;
        }

        setFormattedLogin(currentFormattedLogin);
        setLogin(event.target.value.replace(/-/g, ""));
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
                    value={formattedLogin}
                    maxLength={MAX_FORMATTED_LOGIN_LENGTH}
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

            {isNeedPasswordField ? (
                <div
                    className="show-password-button"
                    onClick={toggleShowPassword}
                >
                    {showPassword
                        ? userFormTextLines.HIDEPASSWORD
                        : userFormTextLines.SHOWPASSWORD}
                </div>
            ) : (
                <></>
            )}

            <div className="show-password-button" onClick={toggleShowPassword}>
                {showPassword
                    ? userFormTextLines.HIDEPASSWORD
                    : userFormTextLines.SHOWPASSWORD}
            </div>

            <div className={sendingButtonStyle} onClick={checkSendAvailable}>
                {buttonText}
            </div>
        </div>
    );
};

export default UserForm;
