import { useState, type ReactElement } from "react";
import { buttonsText, ImagesSrcList, textMessagesList } from "../../utils/constants";
import "./style.css";

export interface ICheckCartProps {
    checkNumber?: string;
    isNeedShowCheckNumber: boolean;
    width?: string;
    height?: string;
}

const CheckCart = ({
    checkNumber = "",
    isNeedShowCheckNumber,
    width,
    height,
}: ICheckCartProps): ReactElement => {
    const [checkNumberMessage, setCheckNumberMessage] = useState<string>(
        `·· ${checkNumber.slice(-4)}`
    );

    const showAllCheckNumber = () => {
        setCheckNumberMessage(checkNumber);
    };

    return (
        <div
            className="check-number-container"
            style={{ width: width, height: height }}
        >
            <div className="apple-pay-icon-container">
                <img src={ImagesSrcList.APPLEPAY} alt="visa icon" />
            </div>

            <div className="visa-text-container">
                <img src={ImagesSrcList.VISATEXT} alt="visa text" />
            </div>

            <div className="check-cart-bank-logo-container">
                <img src={ImagesSrcList.BANKLOGO} alt="bank logo" />
            </div>

            {isNeedShowCheckNumber ? (
                <div className="check-cart-number-container">
                    {checkNumberMessage}
                    <div
                        className="show-all-number-button"
                        onClick={showAllCheckNumber}
                    >
                        {buttonsText.SHOWALLCHECKNUMBER}
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};

export default CheckCart;
