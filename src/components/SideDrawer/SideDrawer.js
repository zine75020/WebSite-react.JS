import React from 'react';
import './SideDrawer.css';
// eslint-disable-next-line no-unused-vars
import drawerToggleButton from './DrawerToggleButton';

const sideDrawer = props =>{
    let drawerClasses = ['side-drawer'];
    if(props.show){
        drawerClasses = ['side-drawer open' ];
    }
    return(<nav className={drawerClasses.join(' ')}>
        <ul>
            <li><a href="/">Pepito</a></li>
            <li><a href="/">Tanto</a></li>
            <li><a href="/">Kira</a></li>
        </ul>
    </nav>)

};

export default sideDrawer
