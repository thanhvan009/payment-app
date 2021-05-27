import React, { Component } from "react";
import { ReactDOM } from "react";
import { StyledMenu } from "./StyledMenu";
import { slide as Menu } from 'react-burger-menu'

export class SlideMenu extends Component
{
    constructor (props:any ) {
        super(props)
      
        this.state = {
          menuOpen: false
        }
      }
      state = {
        menuOpen: false
      }
      handleStateChange (state:any) {
        this.setState({menuOpen: state.isOpen})  
      }   
      closeMenu () {
        this.setState({menuOpen: false})
      }
      toggleMenu () {
        this.setState((state:any) => ({menuOpen: !state.menuOpen}))
      }
      render () {
        return (
            <StyledMenu>
           <div className="btn_open">
            <div className="col">
             <img
              className="logo"
              src="https://i.ibb.co/mNns8MQ/logo.png"
              alt="logo.png"
            ></img>
           </div>
            <Menu 
              isOpen={this.state.menuOpen}
              right
              onStateChange={(state) => this.handleStateChange(state)}
            >
              <div className="container_slideMenu">
               <div className="select_menu" onClick={() => this.closeMenu()}><span>Home</span> </div>
               <div className="select_menu" onClick={() => this.closeMenu()}><span>Shop</span></div>
               <div className="select_menu" onClick={() => this.closeMenu()}><span>Features</span></div>
               <div className="select_menu" onClick={() => this.closeMenu()}><span>Mega gruop</span></div>
               <div className="select_menu" onClick={() => this.closeMenu()}> <span>About</span></div>
               <div className="select_menu" onClick={() => this.closeMenu()}><span>Blog</span></div>
               <div className="select_menu" onClick={() => this.closeMenu()}><span>Contact</span></div>
              </div>
            </Menu>
          </div>
            </StyledMenu>
        )
      }
}