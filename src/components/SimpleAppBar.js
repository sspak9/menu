import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import SimpleMenu from './SimpleMenu';


const styles = {
  root: {
    flexGrow: 1
  },
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>

          {/* display some menu */}
          <SimpleMenu homelink={props.homelink} aboutlink={props.aboutlink} />
         
          {/* display buttons */}
          <Button component={Link} to={props.homelink} variant="contained" className={classes.button}>Btn: Home</Button>
          <Button component={Link} to={props.aboutlink} variant="contained" className={classes.button}>Btn: About</Button>
       
          <Typography variant="h6" color="inherit">
            Try these menus
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
