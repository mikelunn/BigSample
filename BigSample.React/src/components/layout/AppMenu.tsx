import React, { useState } from 'react';
import {NavLink} from 'react-router-dom'
import classNames from 'classnames';
import { AppSubMenu } from './AppSubMenu';
import {Menu, SubMenuItem} from '../../core/state/MenuItem';


export const AppMenu = ({items, onMenuItemClick} : SubMenuItem ) =>{
    return (
        <div className="layout-menu-container">
            <AppSubMenu items={items} className="layout-menu" onMenuItemClick={onMenuItemClick} root={true}/>
        </div>
    );
}

