import { useState, type ReactElement } from "react";
import "./style.css";

export interface ICheckToolProps {
    operation: () => void;
    iconSrc: string;
    text: string;
    width?: string;
    height?: string;
}

const CheckTool = ({
    operation,
    iconSrc,
    text,
    width,
    height,
}: ICheckToolProps): ReactElement => {

    return (
        <div
            className={"check-tool-container"}
            style={{ width: width, height: height }}
            onClick={operation}
        >
            <img className="check-icon" src={iconSrc} alt="tool icon" />
            {text}
        </div>
    );
};

export default CheckTool;
