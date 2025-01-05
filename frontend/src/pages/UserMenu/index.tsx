import { type ReactElement } from "react";
import BankLogo from "../../components/BankLogo";
import { buttonsText, textMessagesList } from "../../utils/constants";
import UserMenuButton from "../../components/UserMenuButton";
import { ApplicationsPaths } from "../../router/routes";
import "./style.css"

const UserMenuPage = (): ReactElement => (
    <div className="user-menu-page-container">
        <BankLogo />
        <div className="user-menu">
            <UserMenuButton text={buttonsText.SIGNIN} navigateURL={ApplicationsPaths.USERSIGNIN} />
            <UserMenuButton text={buttonsText.SIGNUP} navigateURL={ApplicationsPaths.USERSIGNUP} />
        </div>
    </div>
)

export default  UserMenuPage;