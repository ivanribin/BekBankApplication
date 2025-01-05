const API_URL = "http://localhost:5000";

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

export interface ICheckHistoryItem {
    accountId: number;
    datetime: string;
    balanceBeforeOperation: number;
    balanceAfterOperation: number;
    delta: number;
}

export type TCheckHistoryList = ICheckHistoryItem[]; 

export const adminAuthentication = async (password: string) => {
    const response = await fetch(`${API_URL}/admin/authentication/${password}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`${response.status}, ${response.statusText}`);
    }

    return await response.json();
};

export const adminCheckChoice = async (login: string) => {
    const response = await fetch(`${API_URL}/admin/check/choice/${login}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`${response.status}, ${response.statusText}`);
    }

    return await response.json();
};

export const userSignIn = async (login: string, password: string) => {
    const response = await fetch(`${API_URL}/bankAccount/authentication/${login}/${password}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`${response.status}, ${response.statusText}`);
    }

    return await response.json();
};

export const userSignUp = async (password: string) => {
    const response = await fetch(`${API_URL}/bankAccount/identification/${password}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`${response.status}, ${response.statusText}`);
    }

    return await response.json();
};

export const getCheckBalanceByNumber = async (checkNumber: string) => {
    const response = await fetch(`${API_URL}/bankAccount/showBalance/${checkNumber}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`${response.status}, ${response.statusText}`);
    }

    return await response.json();
}

export const topUpCheckByNumber = async (checkNumber: string, amount: number) => {
    const response = await fetch(`${API_URL}/bankAccount/addMoney/${checkNumber}/${amount}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`${response.status}, ${response.statusText}`);
    }

    return await response.json();
}

export const takeOffCheckByNumber = async (checkNumber: string, amount: number) => {
    const response = await fetch(`${API_URL}/bankAccount/withdrawMoney/${checkNumber}/${amount}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`${response.status}, ${response.statusText}`);
    }

    return await response.json();
}

export const getCheckHistoryByNumber = async (checkNumber: string) => {
    const response = await fetch(`${API_URL}/bankAccount/showHistory/${checkNumber}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });

    if (!response.ok) {
        throw new Error(`${response.status}, ${response.statusText}`);
    }

    return await response.json();
}