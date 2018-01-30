import React from 'react';
import Grid from 'material-ui/Grid';
import {withStyles} from 'material-ui/styles';

const styles = theme => ({
    grid: {
        width: '100%',
        height: '64px',
        margin:'0'
    }
});

const CustomDrawerHeader = ({parentClasses,classes}) => {
    return (
        <div className={parentClasses.drawerHeader}>
            <Grid  className={classes.grid} container alignItems="center" direction="row" justify="center">
                <Grid  item>
                    ZUP AWESOME
                </Grid>
            </Grid>
        </div>
    );
};

CustomDrawerHeader.defaultProps = {};

export default withStyles(styles)(CustomDrawerHeader);
