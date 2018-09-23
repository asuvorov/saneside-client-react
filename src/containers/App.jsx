import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
    twitterFeedFetch,
} from "../../common/actions/core"
import Root from "./Root";


/*****************************************************************************/
/*** Component.                                                            ***/
/*****************************************************************************/
class App extends Component {
    constructor() {
        super();
    }

    render() {
        const {
            /*****************************************************************/
            twitterFeed,

            /*****************************************************************/
            twitterFeedFetch,
        } = this.props

        return(
            <Root
                twitterFeed={ twitterFeed }
                twitterFeedFetch={ twitterFeedFetch }
            />
        )
    }
}


/*****************************************************************************/
/*** Props.                                                                ***/
/*****************************************************************************/
const mapStateToProps = state => ({
    twitterFeed:    state.core.twitterFeed,
})

/*****************************************************************************/
const mapDispatchToProps = dispatch => ({
    twitterFeedFetch: () => dispatch(twitterFeedFetch()),
})


/*****************************************************************************/
/*** Styles.                                                               ***/
/*****************************************************************************/


/*****************************************************************************/
/*** Exports.                                                              ***/
/*****************************************************************************/
export default connect(mapStateToProps, mapDispatchToProps)(App);
