import { type ReactElement } from "react";
import { textMessagesList } from "../../utils/constants";
import "./style.css"

const CurrentDate = (): ReactElement => {
    const currentDate = new Date();

    const year: string = String(currentDate.getFullYear());
    const month: string = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day: string = String(currentDate.getDate()).padStart(2, "0");

    return( 
        <div className="current-date-container">
            <div className="current-date-title">
                {textMessagesList.CURRENTDATETITLE}
            </div>
            <div className="current-date">
                {`${day}.${month}.${year}`}
            </div>
        </div>
    )
}

export default CurrentDate;