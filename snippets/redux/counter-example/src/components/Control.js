import React, { Component, PropTypes } from 'react';
const propTypes = {
  onPlus: PropTypes.func,
  onSubtract: PropTypes.func,
  onRandomizeColor: PropTypesfunc
};

function createWarning(funcName) {
  return () => console.warn(funcName + ' is not defined');
}

const defaultProps = {
  onPlus: createWarning('onPlus'),
  onSubtract: createWarning('onSubtract'),
  onRandomizeColor: createWarning('onRandomizeColor')  
};
class Control extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>Control</div>
        );
    }
}
Control.propTypes = propTypes;
Control.defaultProps = defaultProps;
export default Control;
