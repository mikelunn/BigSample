import React, { useState } from 'react';
import logo from './logo.svg';
import { useMenuItem } from './core/state/MenuItem';
import { AppState } from './core/state/AppState'
import {Layout} from './components/layout';
import {RouterOutlet} from './components/RouterOutlet';
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


  return (
    <Layout onToggleMenu={onToggleMenu} menuItems={menuItems} appState={appState} setAppState={setAppState}>
      <RouterOutlet />
    </Layout>
  );
}

export default App;
