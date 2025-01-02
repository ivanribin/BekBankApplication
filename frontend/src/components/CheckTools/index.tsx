import { useState, type ReactElement } from "react";
import CheckTool from "../CheckTool";
import { ImagesSrcList, textMessagesList } from "../../utils/constants";
import "./style.css";
import { useNavigate } from "react-router-dom";
import { ApplicationsPaths } from "../../router/routes";

export interface ICheckToolsProps {
    checkNumber: string;
}

const CheckTools = ({checkNumber}: ICheckToolsProps): ReactElement => {
    const navigate = useNavigate();

    const toolTopUpActionNavigate = (): void => {
        navigate(`${ApplicationsPaths.CHECK}/${checkNumber}/top-up`);
    }

    const toolTakeOffActionNavigate = (): void => {
        navigate(`${ApplicationsPaths.CHECK}/${checkNumber}/take-off`);
    }

    return (
        <div className="check-tools-container">
            <div className={"check-tools-buttons-container"}>
                <CheckTool
                    operation={toolTopUpActionNavigate}
                    iconSrc={ImagesSrcList.TOPUP}
                    text={textMessagesList.TOPUPTOOL}
                />
                <CheckTool
                    operation={toolTakeOffActionNavigate}
                    iconSrc={ImagesSrcList.TAKEOFF}
                    text={textMessagesList.TAKEOFFTOOL}
                />
            </div>
        </div>
    );
};

export default CheckTools;
