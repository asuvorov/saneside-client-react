import {
    createStore,
    applyMiddleware,
    combineReducers
} from "redux";
import thunk from "redux-thunk";

import core from "../../common/reducers/core";


/*****************************************************************************/
const configureStore = () => {
    const rootReducer = combineReducers({
        core,
    });

    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    );

    store.subscribe(() => {
        console.log(">>> `store.getState()` :", store.getState());
    });

    return store;
}

export default configureStore;
