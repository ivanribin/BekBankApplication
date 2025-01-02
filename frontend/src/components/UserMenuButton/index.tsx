import { type ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"

export interface IUserMenuButtonProps {
    text: string;
    navigateURL: string;
}

const UserMenuButton = ({text, navigateURL}: IUserMenuButtonProps): ReactElement => {
    const navigate = useNavigate();

    return(
        <div
                    className="user-menu-button"
                    onClick={() => navigate(navigateURL)}
                    >
                        {text}
                    </div>
    )
}

export default UserMenuButton;