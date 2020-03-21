import React, { Children } from 'react';
import classNames from 'classnames';
import AppFooter from './AppFooter'
import {AppTopbar} from './AppTopbar'

import {AppMenu} from './AppMenu'
import {AppProfile} from './AppProfile'

export const Layout = ({children, onToggleMenu, menuItems, appState, setAppState}) => {

    const logo = appState.layoutColorMode === 'dark' ? 'assets/layout/images/logo-white.svg' : 'assets/layout/images/logo.svg';
  
    const wrapperClass = classNames('layout-wrapper', {
      'layout-overlay': appState.layoutMode === 'overlay',
      'layout-static': appState.layoutMode === 'static',
      'layout-static-sidebar-inactive': appState.staticMenuInactive && appState.layoutMode === 'static',
      'layout-overlay-sidebar-active': appState.overlayMenuActive && appState.layoutMode === 'overlay',
      'layout-mobile-sidebar-active': appState.mobileMenuActive
    });
  
    const sidebarClassName = classNames("layout-sidebar", {
      'layout-sidebar-dark': appState.layoutColorMode === 'dark',
      'layout-sidebar-light': appState.layoutColorMode === 'light'
    });
    return (
        <div className={wrapperClass} >
        <AppTopbar onToggleMenu={onToggleMenu} />
  
        <div className={sidebarClassName}>
          <div className="layout-logo">
            <img alt="Logo" src={logo} />
          </div>
          <AppProfile />
          <AppMenu items={menuItems} onMenuItemClick={(e) =>
            !e.item.items && !e.item.command
              ? setAppState({ ...appState, overlayMenuActive: false, mobileMenuActive: false })
              : null} />
        </div>
  
        <div className="layout-main" onClick={() => appState.layoutMode == 'overlay' ? setAppState({...appState, overlayMenuActive: false}) : null}>
        {children}
        </div>
  
        <AppFooter />
  
        <div className="layout-mask"></div>
      </div>
    )
}