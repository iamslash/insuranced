import React, { Component, PropTypes } from 'react';
const propTypes = {
};
const defaultProps = {
};
class Value extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>Value</div>
        );
    }
}
Value.propTypes = propTypes;
Value.defaultProps = defaultProps;
export default Value;
