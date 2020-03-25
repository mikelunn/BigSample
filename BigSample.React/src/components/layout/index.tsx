import React, { Children } from 'react';
import classNames from 'classnames';
import AppFooter from './AppFooter'
import { AppTopbar } from './AppTopbar'

import { AppMenu } from './AppMenu'
import { AppProfile } from './AppProfile'

export const Layout = ({ children, mobile, onToggleMenu, menuItems, layoutState, setLayout }) => {

  const logo = layoutState.layoutColorMode === 'dark' ? 'assets/layout/images/logo-white.svg' : 'assets/layout/images/logo.svg';

  const wrapperClass = classNames('layout-wrapper', {
    'layout-overlay': layoutState.layoutMode === 'overlay',
    'layout-static': layoutState.layoutMode === 'static',
    'layout-static-sidebar-inactive': layoutState.staticMenuInactive && layoutState.layoutMode === 'static',
    'layout-overlay-sidebar-active': layoutState.overlayMenuActive && layoutState.layoutMode === 'overlay',
    'layout-mobile-sidebar-active': layoutState.mobileMenuActive
  });

  const sidebarClassName = classNames("layout-sidebar", {
    'layout-sidebar-dark': layoutState.layoutColorMode === 'dark',
    'layout-sidebar-light': layoutState.layoutColorMode === 'light'
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
            ? setLayout({ ...layoutState, overlayMenuActive: false, mobileMenuActive: false })
            : null} />
      </div>
      <div className="layout-main" onClick={() => layoutState.layoutMode == 'overlay' ? setLayout({ ...layoutState, overlayMenuActive: false }) : null}>
        {children}
      </div>

      <AppFooter />

      <div className="layout-mask"></div>
    </div>
  )
}