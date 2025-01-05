import { type ReactElement } from "react";
import "./style.css";
import { textMessagesList } from "../../utils/constants";

export interface ICheckHistoryItemProps {
    datetime: string;
    balanceBeforeOperation: number;
    balanceAfterOperation: number;
    delta: number;
}

const CheckHistoryItem = ({
    datetime,
    balanceBeforeOperation,
    balanceAfterOperation,
    delta,
}: ICheckHistoryItemProps): ReactElement => {
    const isAddMoneyOperationType: boolean = (balanceAfterOperation > balanceBeforeOperation);
    const operationName: string = isAddMoneyOperationType ? textMessagesList.CHECKHISTORYITEMTOPUP : textMessagesList.CHECKHISTORYITEMTAKEOFF;

    return (
        <div className="check-history-item-container">
            <div className="check-history-item-info">
                <div className="check-history-item-name">{operationName}</div>
                <div className="check-history-item-date">{datetime}</div>
            </div>

            <div className="check-history-item-delta">{delta}</div>
        </div>
    );
};

export default CheckHistoryItem;
