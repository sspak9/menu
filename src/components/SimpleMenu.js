import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Menu from '@material-ui/core/Menu';

import Button from '@material-ui/core/Button';

class SimpleMenu extends React.Component {

  state = {
    anchorEl: null,
    drawerOpen : false
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  handleDrawerOpen = () => {
    this.setState({ drawerOpen: true });
  };

  handleDrawerClose = () => {
    this.setState({ drawerOpen: false });
  };

  
  render() {
    const { anchorEl } = this.state;

    return (
      <div>

        {/* this is the button based menu */}

        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          onClick={this.handleClick}
        >
          Button based Menu
        </Button>
        
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose} component={Link} to={this.props.homelink}>Home</MenuItem>
          <MenuItem onClick={this.handleClose} component={Link} to={this.props.aboutlink}>About</MenuItem>
          
        </Menu>

        {/* this is side menu */}
        <IconButton  
          onClick={this.handleDrawerOpen}
        >
           <MenuIcon />
        </IconButton>

        <ClickAwayListener onClickAway={this.handleDrawerClose}>
          <Drawer
            variant="persistent"
            open = {this.state.drawerOpen}
            onClose={this.handleDrawerClose}
          >
            <div
              role="button"
                onClick={this.handleDrawerClose}
                onKeyDown={this.handleDrawerClose}
            >
              <MenuItem onClick={this.handleDrawerClose} component={Link} to={this.props.homelink}>Home</MenuItem>
              <MenuItem onClick={this.handleDrawerClose} component={Link} to={this.props.aboutlink}>About</MenuItem>
            </div>
          </Drawer>
        </ClickAwayListener>

      </div>
    );
  }
}

export default SimpleMenu;