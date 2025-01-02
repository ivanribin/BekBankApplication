import { type ReactElement } from "react";
import { ApplicationsPaths } from "../../router/routes";
import { ImagesSrcList, textMessagesList } from "../../utils/constants";
import ChoiceRoleMenuItem from "../ChoiceRoleMenuItem";
import "./style.css"

const ChoiceRoleMenu = (): ReactElement => {

    return(
        <div className="choice-role-menu-container">
            <ChoiceRoleMenuItem navigationLink={ApplicationsPaths.ADMINAUTHENTICATION} iconSrc={ImagesSrcList.ADMIN} text={textMessagesList.ADMINROLE}/>
            <ChoiceRoleMenuItem navigationLink={ApplicationsPaths.USERMENU} iconSrc={ImagesSrcList.USER} text={textMessagesList.USERROLE} />
        </div>
    )
}

export default ChoiceRoleMenu;