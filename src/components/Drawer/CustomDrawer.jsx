import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as drawerActions from './actions';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import Hidden from 'material-ui/Hidden';
import List from 'material-ui/List';
import CustomDrawerHeader from './CustomDrawerHeader';
import { mailFolderListItems, otherMailFolderListItems } from './tileData';


class CustomDrawer extends React.Component {

    render() {
        const {classes, anchor, open} = this.props
        const drawer = (
            <div>
                <CustomDrawerHeader parentClasses={classes}/>
                <Divider/>
                <List>{mailFolderListItems}</List>
                <Divider />
                <List>{otherMailFolderListItems}</List>
            </div>
        );

        return (
            <div>
                <Hidden mdUp>
                    <Drawer
                        type="temporary"
                        open={open}
                        anchor={anchor}
                        classes={{
                        paper: classes.drawerPaper
                    }}
                        onClose={this.props.actions.toggleDrawer}
                        ModalProps={{
                        keepMounted: true
                    }}>
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden smDown implementation="css">
                    <Drawer
                        type="permanent"
                        open
                        classes={{
                        paper: classes.drawerPaper
                    }}>
                        {drawer}
                    </Drawer>
                </Hidden>
            </div>
        );
    }
}

CustomDrawer.defaultProps = {
};

function mapStateToProps(state, ownProps) {
    return {open: state.drawer.open};
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(drawerActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDrawer);
