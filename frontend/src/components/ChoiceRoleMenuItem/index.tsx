import { type ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export interface IChoiceRoleMenuItemProps {
    navigationLink: string;
    iconSrc: string;
    text: string;
    width?: string;
    height?: string;
}

const ChoiceRoleMenuItem = ({navigationLink, iconSrc, text, width, height}: IChoiceRoleMenuItemProps): ReactElement => {
    const navigate = useNavigate();

    const choiceRoleNavigate = (navigationLink: string) => {
        navigate(navigationLink);
        return;
    }

    return (
        <div className="choice-role-menu-item-container" style={{width: width, height: height}} onClick={() => choiceRoleNavigate(navigationLink)}>
            <img src={iconSrc} alt="navigate image"/>
            {text}
        </div>
    );
};

export default ChoiceRoleMenuItem;
