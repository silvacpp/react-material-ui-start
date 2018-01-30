import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeActions from './Actions';

class Home extends React.Component {

    render() {
        return (
           <div className="home">Olá, estou na home</div> 
        );
    }
}

Home.defaultProps = {
    
};

function mapStateToProps(state, ownProps) {
    return {
        
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(homeActions, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
