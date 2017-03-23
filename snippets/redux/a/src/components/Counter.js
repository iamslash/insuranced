import React, { Component, PropTypes } from 'react';
const propTypes = {
};
const defaultProps = {
};
class Counter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>Counter
          </div>
        );
    }
}
Counter.propTypes = propTypes;
Counter.defaultProps = defaultProps;
export default Counter;
