import {
    ReactElement,
    useState,
    ChangeEvent,
} from "react";
import { TextLines } from "./meta";
import "./style.css";

export interface IPasswordInputProps {
    placeholder: string;
    sendPasswordFunction: (currentPassword: string) => Promise<void>;
}

const PasswordInput = ({
    placeholder,
    sendPasswordFunction,
}: IPasswordInputProps): ReactElement => {
    const [password, setPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const toggleShowPassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className="password-input-container">
            <input
                className="password-input-field"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={handleChange}
                placeholder={placeholder}
                required
            />
            <div className="show-password-button" onClick={toggleShowPassword}>
                {showPassword ? TextLines.HIDEPASSWORD : TextLines.SHOWPASSWORD}
            </div>

            <button
                className="authentication-button"
                onClick={() => sendPasswordFunction(password)}
            >
                {TextLines.LOGINBUTTON}
            </button>
        </div>
    );
};

export default PasswordInput;
