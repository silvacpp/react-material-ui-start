import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Expense extends React.Component {

    render() {
        return (
           <div className="expense">Olá, estou na Expense</div> 
        );
    }
}

Expense.defaultProps = {
    
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

export default connect(mapStateToProps, mapDispatchToProps)(Expense);
