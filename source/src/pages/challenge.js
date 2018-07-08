import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Challenge extends React.Component {

    render() {
        const { classes } = this.props;
        return (
            <div className="margin-top-50">
                <div className="container">
                    <div className="row legend">
                        <span>Challenges 1</span>
                    </div>
                    <div className="row">
                    </div>
                </div>
            </div>
        )
    }
}

Challenge.propTypes = {
    classes: PropTypes.object.isRequired,
};