import React, { useState } from 'react';
import logo from './logo.svg';
import { useMenuItem } from './core/state/MenuItem';
import { AppState } from './core/state/AppState'
import classNames from 'classnames';
import AppFooter from './components/layout/AppFooter';
import { AppTopbar } from './components/layout/AppTopbar';
import { AppProfile } from './components/layout/AppProfile';
import { AppMenu } from './components/layout/AppMenu';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './styles/layout.scss';
import './App.scss';

function App() {
  const [appState, setAppState] = useState(AppState);
  const menuItems = useMenuItem(appState, setAppState);

  const isDesktop = () => window.innerWidth > 1024;
  const onToggleMenu = (e) => isDesktop() && appState.layoutMode === 'overlay'
    ? setAppState({ ...appState, overlayMenuActive: !appState.overlayMenuActive })
    : appState.layoutMode === 'static'
      ? setAppState({ ...appState, staticMenuInactive: !appState.staticMenuInactive })
      : !isDesktop()
        ? setAppState({ ...appState, mobileMenuActive: !appState.mobileMenuActive })
        : null;
  

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

      </div>

      <AppFooter />

      <div className="layout-mask"></div>
    </div>
  );
}

export default App;
