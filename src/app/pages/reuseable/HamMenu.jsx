//React Imports
import React, { Component } from 'react';
import { Drawer, Menu, Button } from 'antd';

import LeftMenu from './LeftMenu';

import './styles/navBarTop.scss';

const { SubMenu } = Menu;

class HamMenu extends Component
{
  state = {
    current: 'mail',
    visible: false
  }
  
  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };
  
  onClose = () => {
    this.setState({
      visible: false,
    });
  };

	render()
	{
		return (
    <>
      <div className="navHamburgerMenu">            
        <Button className="navMenu" type="primary" onClick={this.showDrawer}>
          <span className="navBtn">
            <a href="#" className="hamMenuIcon">
              &#9776;
            </a>
          </span>
        </Button>

        <Drawer
          className="garfield"
          title="Hamburger Menu"
          placement="top"
          closable={true}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <LeftMenu />
        </Drawer>   
      </div>

    </> 
		);
	}
}

export default HamMenu;