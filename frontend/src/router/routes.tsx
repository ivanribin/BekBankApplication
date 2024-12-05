import { type ReactElement } from "react";
import AdminAuthorizationPage from "../pages/AdminAuthorization";
import CheckHistoryPage from "../pages/CheckHistory";
import CheckInfoPage from "../pages/CheckInfo";
import CheckRedactorPage from "../pages/CheckRedactor";
import ChecksListPage from "../pages/ChecksList";
import ChoiceRolePage from "../pages/ChoiceRole";
import LoginCheckPage from "../pages/LoginCheck";

export const enum ApplicationsPaths {
    CHOICEROLE = "/",
    ADMINAUTHORIZATION = "/admin/authorization",
    CHECKHISTORY = "/check/history",
    CHECKINFO = "/check/info",
    CHECKREDACTOR = "/check/redactor",
    CHECKSLIST = "/checks-list",
    LOGINCHECK = "/check/login",
}

export interface IApplicationRoute {
    id: string;
    path: ApplicationsPaths;
    element: ReactElement;
}

const applicationRoutes: IApplicationRoute[] = [
    {
        id: "choiceRole",
        path: ApplicationsPaths.CHOICEROLE,
        element: <ChoiceRolePage />,
    },
    {
        id: "adminAuthorization",
        path: ApplicationsPaths.ADMINAUTHORIZATION,
        element: <AdminAuthorizationPage />,
    },
    {
        id: "checkHistory",
        path: ApplicationsPaths.CHECKHISTORY,
        element: <CheckHistoryPage />,
    },
    {
        id: "checkInfo",
        path: ApplicationsPaths.CHECKINFO,
        element: <CheckInfoPage />,
    },
    {
        id: "checkRedactor",
        path: ApplicationsPaths.CHECKREDACTOR,
        element: <CheckRedactorPage />,
    },
    {
        id: "checksList",
        path: ApplicationsPaths.CHECKSLIST,
        element: <ChecksListPage />,
    },
    {
        id: "loginCheck",
        path: ApplicationsPaths.LOGINCHECK,
        element: <LoginCheckPage />,
    },
];

export default applicationRoutes;
