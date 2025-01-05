import { type ReactElement } from "react";
import "./style.css"
import ChoiceRoleMenu from "../../components/ChoiceRoleMenu";
import BankLogo from "../../components/BankLogo";
import { textMessagesList } from "../../utils/constants";

const ChoiceRolePage = (): ReactElement => (
    <div className="choice-role-page-container">
        <BankLogo />
        <div className="choice-role-page-header">
            {textMessagesList.CHOICEROLEPAGETITLE}
        </div>
        <ChoiceRoleMenu />
    </div>
)

export default  ChoiceRolePage;