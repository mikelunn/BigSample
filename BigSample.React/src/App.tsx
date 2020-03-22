import React, { useState } from 'react';
import logo from './logo.svg';
import { useMenuItem } from './core/state/MenuItem';
import {Layout} from './components/layout';
import {LayoutState} from './core/state/Layout';
import {RouterOutlet} from './components/RouterOutlet';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './styles/layout.scss';
import './App.scss';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [layoutState, setLayout] = useState(LayoutState);
  const menuItems = useMenuItem(layoutState, setLayout);
  
  const isDesktop = () => window.innerWidth > 1024;
  const onToggleMenu = (e) => isDesktop() && layoutState.layoutMode === 'overlay'
  ? setLayout({ ...layoutState, overlayMenuActive: !layoutState.overlayMenuActive })
  : layoutState.layoutMode === 'static'
    ? setLayout({ ...layoutState, staticMenuInactive: !layoutState.staticMenuInactive })
    : !isDesktop()
      ? setLayout({ ...layoutState, mobileMenuActive: !layoutState.mobileMenuActive })
      : null;


  return (
    <Layout onToggleMenu={onToggleMenu} menuItems={menuItems} layoutState={layoutState} setLayout={setLayout}>
      <RouterOutlet />
    </Layout>
    
  );
}

export default App;
