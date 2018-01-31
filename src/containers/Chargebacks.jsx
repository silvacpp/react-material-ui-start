import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Chargebacks extends React.Component {

    render() {
        return (
            <div className="Chargebacks">Olá, estou na Chargebacks</div>
        );
    }
}

Chargebacks.defaultProps = {

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

export default connect(mapStateToProps, mapDispatchToProps)(Chargebacks);
