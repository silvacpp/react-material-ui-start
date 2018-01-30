import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as drawerActions from '../Drawer/actions';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

class CustomToolbar extends React.Component {
    render() {
        const {classes} = this.props

        return (
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={this.props.actions.toggleDrawer}
                        className={classes.navIconHide}>
                        <MenuIcon/>
                    </IconButton>
                    Zup Awesome
                </Toolbar>
            </AppBar>
        );
    }
}

CustomToolbar.defaultProps = {};

CustomToolbar.propTypes = {};

function mapStateToProps(state, ownProps) {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(drawerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomToolbar);
