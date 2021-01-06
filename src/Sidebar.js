import React from 'react'
import { NavLink } from "react-router-dom";
import './css/Sidebar.css';

function Sidebar() {
	return (
		<div className="sidebar">
			<div className="sidebar__logo">
				<h1><span>Dev</span>challenges.io</h1>
			</div>
			<div className="sidebar__menus">
				<NavLink exact activeClassName="active" to="/colors">Color</NavLink>				
			    <NavLink exact activeClassName="active" to="/typography">Typography</NavLink>
				<NavLink exact activeClassName="active" to="/spaces">Spaces</NavLink>
				<NavLink exact activeClassName="active" to="/buttons">Buttons</NavLink>
				<NavLink exact activeClassName="active" to="/inputs">Inputs</NavLink>
				<NavLink exact activeClassName="active" to="/grids"> Grids</NavLink>				
			</div>
		</div>
	)
}

export default Sidebar;
