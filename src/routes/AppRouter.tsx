import * as React from 'react';
import {Switch, Route} from "react-router-dom";
import routes from "./index";

const AppRouter = () => {
    return (
        <Switch>
            {
                routes.map(
                    (route, key) => (
                        <Route
                            key={key}
                            path={route.path}
                            element={route.element}
                            index={route.index === true}
                        />
                    )
                )
            }
        </Switch>
    );
};

export default AppRouter