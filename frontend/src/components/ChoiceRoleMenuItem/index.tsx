import { type ReactElement } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

export interface IChoiceRoleMenuItemProps {
    navigationLink: string;
    iconSrc: string;
    text: string;
    textColor: string;
}

const ChoiceRoleMenuItem = ({navigationLink, iconSrc, text, textColor}: IChoiceRoleMenuItemProps): ReactElement => {
    const navigate = useNavigate();

    const choiceRoleNavigate = (navigationLink: string) => {
        navigate(navigationLink);
        return;
    }

    return (
        <div className="choice-role-menu-item-container" style={{color: textColor}} onClick={() => choiceRoleNavigate(navigationLink)}>
            <img src={iconSrc} alt="navigate image"/>
            {text}
        </div>
    );
};

export default ChoiceRoleMenuItem;
