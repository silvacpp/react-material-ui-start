import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Refund extends React.Component {

    render() {
        return (
            <div className="Refund">Olá, estou na Refund</div>
        );
    }
}

Refund.defaultProps = {

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

export default connect(mapStateToProps, mapDispatchToProps)(Refund);
