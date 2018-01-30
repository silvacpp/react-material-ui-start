import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Routes from './Routes';
import {withStyles} from 'material-ui/styles';
import CustomToolbar from './components/Toolbar/CustomToolbar';
import CustomDrawer from './components/Drawer/CustomDrawer';


class App extends Component {
  render() {
    const {classes, anchor} = this.props;
    

    return (
      <div className={classes.root}>
        <div className={classes.appFrame}>
          <CustomToolbar classes={classes}/>
          <CustomDrawer classes={classes} anchor={anchor}/>
          <main className={classes.content}>
            <Routes/>
          </main>
        </div>
      </div>
    );
  }

}


App.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};


const drawerWidth = 240;
const styles = theme => ({
  root: {
    width: '100%',
    height: '100vh',
    marginTop: 0,
    zIndex: 1,
    overflow: 'hidden'
  },

  appFrame: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    height: '100%'
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [
      theme
        .breakpoints
        .up('md')
    ]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  navIconHide: {
    [
      theme
        .breakpoints
        .up('md')
    ]: {
      display: 'none'
    }
  },
  drawerHeader: theme.mixins.toolbar,
  drawerPaper: {
    width: 250,
    [
      theme
        .breakpoints
        .up('md')
    ]: {
      width: drawerWidth,
      position: 'relative',
      height: '100%'
    }
  },
  content: {
    backgroundColor: theme.palette.background.default,
    width: '100%',
    padding: theme.spacing.unit * 3,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [
      theme
        .breakpoints
        .up('sm')
    ]: {
      height: 'calc(100% - 64px)',
      marginTop: 64
    }
  }
});

export default withStyles(styles, {withTheme: true})(App);
