const API_URL = "https://localhost:5000";

export interface ICheckData {
    accountGuid: number;
    balance: number
}

export interface ICheckOperationResult {
    resultType: string;
    resultMessage: string;
}

export interface INewLog {
    accountId: number;
    datetime: string;
    balanceBeforeOperation: number;
    balanceAfterOperation: number;
    delta: number;
}

export interface ICheckOperationAnswer {
    isSuccess: true;
    result: ICheckOperationResult;
    bankAccount: ICheckData;
    newLog: INewLog;
}

export const adminAuthentication = async (password: string) => {
    const response = await fetch(`${API_URL}/admin/authenticate/password=${password}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if(!response.ok) {
        throw new Error(`${response.status}, ${response.statusText}`);
    }

    return await response.json();
};

export const adminCheckChoice = async (login: string) => {
    const response = await fetch(`${API_URL}/admin/check/choice/login=${login}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if(!response.ok) {
        throw new Error(`${response.status}, ${response.statusText}`);
    }

    return await response.json();
};

export const userSignIn = async (login: string, password: string) => {
    const response = await fetch(`${API_URL}/bankAccount/authentication/login=${login}&&password=${password}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if(!response.ok) {
        throw new Error(`${response.status}, ${response.statusText}`);
    }

    return await response.json();
};

export const userSignUp = async (password: string) => {
    const response = await fetch(`${API_URL}/bankAccount/identification/password=${password}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if(!response.ok) {
        throw new Error(`${response.status}, ${response.statusText}`);
    }

    return await response.json();
};

export const getCheckBalanceByNumber = async (checkNumber: string) => {
    const response = await fetch(`${API_URL}/bankAccount/showBalance/id=${checkNumber}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if(!response.ok) {
        throw new Error(`${response.status}, ${response.statusText}`);
    }

    return await response.json();
}

export const topUpCheckByNumber = async (checkNumber: string, amount: number) => {
    const response = await fetch(`${API_URL}/bankAccount/addMoney/id=${checkNumber}&&delta=${amount}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if(!response.ok) {
        throw new Error(`${response.status}, ${response.statusText}`);
    }

    return await response.json();
}

export const takeOffCheckByNumber = async (checkNumber: string, amount: number) => {
    const response = await fetch(`${API_URL}/bankAccount/withdrawMoney/id=${checkNumber}&&delta=${amount}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if(!response.ok) {
        throw new Error(`${response.status}, ${response.statusText}`);
    }

    return await response.json();
}