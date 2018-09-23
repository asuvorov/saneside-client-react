import { combineReducers } from "redux";
import {
    TWITTER_FEED_FETCH_REQUEST,
} from "../actions"


/*****************************************************************************/
/*** Reducers.                                                             ***/
/*****************************************************************************/
const twitterFeed = (state = {}, action) => {
    console.log("[---  INFO   ---] INSIDE `common.reducers.core`");
    console.log("                > STATE  : ", state);
    console.log("                > ACTION : ", action);

    switch (action.type) {
        case TWITTER_FEED_FETCH_REQUEST:
            // === Add the Timestamp to the Product.
            const timestamp = new Date().getTime();

            return {
                ...state,
                twitterFeed:    action.payload,
            }

        default:
            return {
                ...state,
                twitterFeed:    [],
            }
    }
}


/*****************************************************************************/
/*** Exports.                                                              ***/
/*****************************************************************************/
export default combineReducers({
    twitterFeed,
});
