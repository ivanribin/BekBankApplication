import { type ReactElement } from "react";
import { ApplicationsPaths } from "../../router/routes";
import { buttonsText, ImagesSrcList, textMessagesList } from "../../utils/constants";
import ChoiceRoleMenuItem from "../ChoiceRoleMenuItem";
import { ButtonTextColorsList } from "./meta";
import "./style.css"

const ChoiceRoleMenu = (): ReactElement => {

    return(
        <div className="choice-role-menu-container">
            <ChoiceRoleMenuItem navigationLink={ApplicationsPaths.ADMINAUTHENTICATION} iconSrc={ImagesSrcList.ADMIN} text={buttonsText.ADMINROLE} textColor={ButtonTextColorsList.ADMIN} />
            <ChoiceRoleMenuItem navigationLink={ApplicationsPaths.USERMENU} iconSrc={ImagesSrcList.USER} text={buttonsText.USERROLE} textColor={ButtonTextColorsList.USER}/>
        </div>
    )
}

export default ChoiceRoleMenu;