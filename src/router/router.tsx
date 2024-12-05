import { type ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import applicationRoutes, { IApplicationRoute } from "./routes";

const Router = (): ReactElement => (
    <BrowserRouter>
        <Routes>
            {applicationRoutes.map((route: IApplicationRoute) => (
                <Route
                    key={route.id}
                    path={route.path}
                    element={route.element}
                />
            ))}
        </Routes>
    </BrowserRouter>
);

export default Router;
