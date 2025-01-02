import { type ReactElement } from "react";
import { ImagesSrcList } from "../../utils/constants";
import { ApplicationsPaths } from "../../router/routes";
import { useNavigate } from "react-router-dom";
import "./style.css";

const BankLogo = (): ReactElement => {
    const navigate = useNavigate();

    return (
        <div className="bank-logo-container" onClick={() => {navigate(ApplicationsPaths.CHOICEROLE)}}>
            <img src={ImagesSrcList.BANKLOGO} alt="bank logo image" />
            <div className="bank-logo-name">BekBank</div>
        </div>
    );
};

export default BankLogo;
