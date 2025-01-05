import { type ReactElement } from "react";
import AdminAuthenticationPage from "../pages/AdminAuthentication";
import CheckPage from "../pages/Check";
import ChoiceRolePage from "../pages/ChoiceRole";
import AdminCheckChoicePage from "../pages/AdminCheckChoice";
import CheckInspectPage from "../pages/CheckInspect";
import UserMenuPage from "../pages/UserMenu";
import UserSignInPage from "../pages/UserSignIn";
import UserSignUpPage from "../pages/UserSignUp";
import CheckTopUpPage from "../pages/CheckTopUp";
import CheckTakeOffPage from "../pages/CheckTakeOff";

export const enum ApplicationsPaths {
    CHOICEROLE = "/",
    ADMINAUTHENTICATION = "/admin/authentication",
    CHECKFULL = "/user/check/:checkNumber",
    CHECK = "/user/check",
    ADMINCHECKCHOICE = "/admin/check/choice",
    CHECKINSPECT = "/admin/check/inspect",
    USERMENU = "/user",
    USERSIGNIN = "/user/sign-in",
    USERSIGNUP = "/user/sign-up",
    CHECKTOPUP = "/user/check/:checkNumber/top-up",
    CHECKTAKEOFF = "/user/check/:checkNumber/take-off",
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
        id: "adminAuthentication",
        path: ApplicationsPaths.ADMINAUTHENTICATION,
        element: <AdminAuthenticationPage />,
    },
    {
        id: "checkInfo",
        path: ApplicationsPaths.CHECKFULL,
        element: <CheckPage />,
    },
    {
        id: "adminCheckChoice",
        path: ApplicationsPaths.ADMINCHECKCHOICE,
        element: <AdminCheckChoicePage />,
    },
    {
        id: "checkInspect",
        path: ApplicationsPaths.CHECKINSPECT,
        element: <CheckInspectPage />,
    },
    {
        id: "userMenu",
        path: ApplicationsPaths.USERMENU,
        element: <UserMenuPage />,
    },
    {
        id: "userSignIn",
        path: ApplicationsPaths.USERSIGNIN,
        element: <UserSignInPage />,
    },
    {
        id: "userSignUp",
        path: ApplicationsPaths.USERSIGNUP,
        element: <UserSignUpPage />,
    },
    {
        id: "checkTopUp",
        path: ApplicationsPaths.CHECKTOPUP,
        element: <CheckTopUpPage />,
    },
    {
        id: "checkTakeOff",
        path: ApplicationsPaths.CHECKTAKEOFF,
        element: <CheckTakeOffPage />,
    },
];

export default applicationRoutes;
