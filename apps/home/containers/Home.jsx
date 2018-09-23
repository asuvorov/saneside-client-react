import React, { Component } from "react";
import PropTypes from "prop-types";

import Carousel from "../components/Carousel"
import Welcome from "../components/Welcome"
import HowItWorks from "../components/HowItWorks"
import LatestFromTwitter from "../components/LatestFromTwitter"


/*****************************************************************************/
/*** Component.                                                            ***/
/*****************************************************************************/
class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        const {
            twitterFeedFetch,
        } = this.props;

        twitterFeedFetch();
    }

    render() {
        const {
            twiterFeed,
            twitterFeedFetch,
        } = this.props;

        return (
            <div className="Home__Wrapper">
                <Carousel />

                <Welcome />

                <HowItWorks />

                <LatestFromTwitter
                    twitterFeedFetch={ twitterFeedFetch }
                />
            </div>
        )
    }
}


/*****************************************************************************/
/*** Handlers.                                                             ***/
/*****************************************************************************/


/*****************************************************************************/
/*** Props.                                                                ***/
/*****************************************************************************/
Home.propTypes = {
    twitterFeed:        PropTypes.array,
    twitterFeedFetch:   PropTypes.func.isRequired,
}

Home.defaultProps = {
    twitterFeed:    [],
}


/*****************************************************************************/
/*** Styles.                                                               ***/
/*****************************************************************************/


/*****************************************************************************/
/*** Exports.                                                              ***/
/*****************************************************************************/
export default Home;
