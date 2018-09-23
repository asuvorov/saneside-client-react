import URLS from "../../common/api/URLS"
import {
    TWITTER_FEED_FETCH_REQUEST,
} from "./"

/*****************************************************************************/
/*** Initials                                                              ***/
/*****************************************************************************/


/*****************************************************************************/
/*** Actions                                                               ***/
/*****************************************************************************/
export const twitterFeedFetch = () => dispatch => {
    console.log("[---  INFO   ---] INSIDE `common.actions.core.twitterFeedFetch()`.");

    $.get(URLS.TWITTER_FEED_URL)
    .done(function (data) {
        console.log("[---  INFO   ---] Success");
        console.log("           Data > ", data);

        dispatch({
            type:       TWITTER_FEED_FETCH_REQUEST,
            payload:    data,
        })
    })
    .fail(function (data) {
        console.log("[---  ERROR  ---] Fail");
        console.log("           Data > ", data);
    });

    dispatch({
        type:       TWITTER_FEED_FETCH_REQUEST,
        payload:    [],
    })
}
