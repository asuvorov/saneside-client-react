import React, { Component } from "react";
import PropTypes from "prop-types";

import Home from "../../apps/home/containers/Home"


/*****************************************************************************/
/*** Component.                                                            ***/
/*****************************************************************************/
class Root extends Component {
    render() {
        const {
            /*****************************************************************/
            twitterFeed,

            /*****************************************************************/
            twitterFeedFetch,
        } = this.props;

        return (
            <Home
                twitterFeed={ twitterFeed }
                twitterFeedFetch={ twitterFeedFetch }
            />
        )
    }
}


/*****************************************************************************/
/*** Props.                                                                ***/
/*****************************************************************************/
Root.propTypes = {
    twitterFeed:        PropTypes.array,
    twitterFeedFetch:   PropTypes.func.isRequired,
}

Root.defaultProps = {
    twitterFeed:    [],
}


/*****************************************************************************/
/*** Styles.                                                               ***/
/*****************************************************************************/


/*****************************************************************************/
/*** Exports.                                                              ***/
/*****************************************************************************/
export default Root;
