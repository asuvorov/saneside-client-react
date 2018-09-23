import React from "react";
import {
    Route,
    IndexRoute
} from "react-router";

import Home from "./apps/home/containers/Home";


/*****************************************************************************/
/*** Exports.                                                              ***/
/*****************************************************************************/
export default (
    <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="*" component={ Home } />
    </Route>
);
