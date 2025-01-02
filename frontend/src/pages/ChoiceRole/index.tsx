import { type ReactElement } from "react";
import "./style.css"
import ChoiceRoleMenu from "../../components/ChoiceRoleMenu";
import BankLogo from "../../components/BankLogo";

const ChoiceRolePage = (): ReactElement => (
    <div className="choice-role-page-container">
        <BankLogo />
        <ChoiceRoleMenu />
    </div>
)

export default  ChoiceRolePage;