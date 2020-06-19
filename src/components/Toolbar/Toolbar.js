import React from 'react';
import './Toolbar.css';
import {Link} from "react-dom";
import DrawerToggleButton from '../SideDrawer/DrawerToggleButton'
import firstpage from '../pagesEX/first';


const toolbar = props => (
    <header className="toolbar">
        <nav className="toolbar_navigation">
            <div>
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="toolbar_logo"><a href="/">Zinédine MENADJELIA</a></div>
            <div className="spacer"/>
            <div className="toolbar_navigation-items">
                <ul>
                    <li><a href="/">À propos de moi</a></li>
                    <li><a href="/">Mes motivations</a></li>
                </ul>
            </div>
        </nav>
    </header>
)
export default toolbar;