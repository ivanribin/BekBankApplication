import { type ReactElement } from "react";
import BankLogo from "../../components/BankLogo";
import { textMessagesList } from "../../utils/constants";
import UserMenuButton from "../../components/UserMenuButton";
import { ApplicationsPaths } from "../../router/routes";
import "./style.css"

const UserMenuPage = (): ReactElement => (
    <div className="user-menu-page-container">
        <BankLogo />
        <div className="user-menu">
            <UserMenuButton text={textMessagesList.USERSIGNIN} navigateURL={ApplicationsPaths.USERSIGNIN} />
            <UserMenuButton text={textMessagesList.USERSIGNUP} navigateURL={ApplicationsPaths.USERSIGNUP} />
        </div>
    </div>
)

export default  UserMenuPage;