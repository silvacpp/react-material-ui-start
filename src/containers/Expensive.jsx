import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Expensive extends React.Component {

    render() {
        return (
           <div className="expensive">Olá, estou na expensive</div> 
        );
    }
}

Expensive.defaultProps = {
    
};

function mapStateToProps(state, ownProps) {
    return {
        
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // actions: bindActionCreators(homeActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Expensive);
