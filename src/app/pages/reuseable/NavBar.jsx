//React Imports
import React, { Component } from 'react';
import { Menu } from 'antd';

import HamMenu from './HamMenu';
import Search from "./Search";
import ThemeMode from './ThemeChanger';
import NavLogo from "../reuseable/NavLogo";
/* import Clicker from "../clicker/Clicker"; */


import './styles/navBarTop.scss';
import './styles/navBarBottom.scss';

const { SubMenu } = Menu;

if (typeof window !== 'undefined') 
{
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    const maxScroll = document.body.clientHeight - window.innerHeight;
    let currentScrollPos = window.pageYOffset;
    
    if ((maxScroll > 0 && prevScrollpos > currentScrollPos && prevScrollpos <= maxScroll) 
      || (maxScroll <= 0 && prevScrollpos > currentScrollPos)
      || (prevScrollpos <= 0 && currentScrollPos <= 0)) 
    {
      document.getElementById("navbar").style.top = "0";
    } 
    else 
    {
      document.getElementById("navbar").style.top = "-3.25rem"; // adjustable based your need
    }
    prevScrollpos = currentScrollPos;
  }
}

class NavBar extends Component
{
	render()
	{
		return (
    <>
      <div>
        <div id="navbar" className="navBarTop">
          <HamMenu />
          <ThemeMode/>          
          <NavLogo />
          <div className="navLogoRight" />
         {/*  <Clicker /> */}
          <div><Search /></div>


          <Menu
          className="navBarBottom"
          mode="horizontal"
          defaultSelectedKeys={['2']}
        >
          <Menu.Item className="navBarLinks" key="1">Poopie</Menu.Item>
          {/*<SubMenu className="navBarLinks" key="2" title="Nav 2"><Menu.Item key="9">Option 9</Menu.Item></SubMenu>*/}        
          <Menu.Item className="navBarLinks" key="7">Nav 2</Menu.Item>
          <Menu.Item className="navBarLinks" key="3">Nav 3</Menu.Item>
          <Menu.Item className="navBarLinks" key="4">Nav 4</Menu.Item>
          <Menu.Item className="navBarLinks" key="5">Nav 5</Menu.Item>
          <Menu.Item className="navBarLinks" key="6">Nav 6</Menu.Item>
        </Menu> 
        </div>
      </div>

      <div className="bgk">
           
      </div>
    </>
		);
	}
}

export default NavBar;