import { type ReactElement } from "react";
import { TCheckHistoryList } from "../../api";
import "./style.css";
import { textMessagesList } from "../../utils/constants";
import CurrentDate from "../CurrentDate";
import CheckHistoryItem from "../CheckHistoryItem";

export interface ICheckHistoryProps {
    historyData: TCheckHistoryList;
}

const CheckHistory = ({ historyData }: ICheckHistoryProps): ReactElement => {
    return (
        <div className="check-history-container">
            <div className="check-history-title-container">
                <div className="check-history-title">
                    {textMessagesList.CHECKHISTORYTITLE}
                </div>
                <CurrentDate />
            </div>
            {historyData.map((historyField, index) => (
                <CheckHistoryItem
                    key={index}
                    datetime={historyField.datetime}
                    balanceBeforeOperation={historyField.balanceBeforeOperation}
                    balanceAfterOperation={historyField.balanceAfterOperation}
                    delta={historyField.delta}
                />
            ))}
        </div>
    );
};

export default CheckHistory;
