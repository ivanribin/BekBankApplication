export const enum ImagesSrcList {
    CHECK = "/assets/images/cardImage.png",
    TOPUP = "/assets/images/topUpIcon.png",
    TAKEOFF = "/assets/images/takeOffIcon.png",
    HISTORY = "/assets/images/historyIcon.png",
    USER = "/assets/images/userIcon.png",
    ADMIN = "/assets/images/adminIcon.png",
    APPLEPAY = "/assets/images/applePayIcon.png",
    VISATEXT = "/assets/images/visaTextImage.png",
    BANKLOGO = "/assets/images/bankLogoIcon.png"
}

export const enum textMessagesList {
    CURRENCY = "₽",
    CURRENCYMESSAGE = "account in rubles",
    CHECKFIELDHEADLINE = "Visa Gold",
    LOGINADMINISTRATOR = "System password",
    ADMINCHECKCHOICE = "Selecting an account to inspect",
    PASSWORDPLACEHOLDER = "Password",
    LOGINPLACEHOLDER = "Login",
    REPEATPASSWORDPLACEHOLDER = "Repeat password",
    TOPUPCHECKTITLE = "The account where the money will be sent",
    TOPUPINFOTITLE = "How many",
    AMOUNTPLACEHOLDER = "Enter the amount",
    TAKEOFFCHECKTITLE = "The account from which the money will be withdrawn",
    TAKEOFFINFOTITLE = "How many",
    CHECKHISTORYTITLE = "History",
    CURRENTDATETITLE = "Date:",
    CHECKHISTORYITEMTOPUP = "Add money",
    CHECKHISTORYITEMTAKEOFF = "Withdraw money",
    OPERATIONMINUSSIGN = "-",
    OPERATIONPLUSSSIGN = "+",
    CHOICEROLEPAGETITLE = "Welcome! Please, choose your role:"
}

export const enum buttonsText {
    ADMINROLE = "System administrator",
    USERROLE = "Bank client",
    SHOWALLCHECKNUMBER = "Show data",
    SIGNIN = "Sign in",
    SIGNUP = "Sign up",
    TOPUP = "Top up",
    TAKEOFF = "Take off",
}

export const enum ApiEndpoints {
    ADMINAUTHORIZATION = "http://localhost:5026/admin-authorization"
}

export const NUMBERS_COUNT_IN_ONE_PATH_OF_LOGIN: number = 4;

export const getLoginInFormattedForm = (login: string | undefined): string => {
    if (!login) {
        return "";
    }

    let formattedLogin: string = "";

    for (let index = 0; index< login.length; index++) {
        if (index === 0 || (index % NUMBERS_COUNT_IN_ONE_PATH_OF_LOGIN) !== 0) {
            formattedLogin += login[index];
            continue;
        }

        formattedLogin += `-${login[index]}`;
    }

    return formattedLogin;
}