import { type ReactElement } from "react";
import { textMessagesList } from "../../utils/constants";
import "./style.css";
import CheckCart from "../CheckCart";

export interface ICheckFieldProps {
    checkNumber: string;
    balance: number;
}

const CheckInfoField = ({
    checkNumber,
    balance,
}: ICheckFieldProps): ReactElement => {
    return (
        <div
            className="check-info-field-container"
        >
            <div className="check-info-field-headline-container">
                {textMessagesList.CHECKFIELDHEADLINE}
            </div>
            <CheckCart checkNumber={checkNumber} isNeedShowCheckNumber={true}/>
            <div className="check-amount-container">
                {balance} {textMessagesList.CURRENCY}
            </div>
            <div className="check-info-field-currency-container">
                {textMessagesList.CURRENCYMESSAGE}
            </div>
        </div>
    );
};

export default CheckInfoField;
