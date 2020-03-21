import { useState, useEffect } from "react";

export interface MenuItem {
    label:string,
    icon:string,
    badge?:string,
    to?:string,
    target?:string,
    url?:string,
    command?:Function,
    items?: MenuItem[]
}
export interface SubMenuItem{
    className?: string,
    items: MenuItem[],
    onMenuItemClick: Function,
    root?: boolean

}
export interface Menu{
    items: MenuItem[],
    onMenuItemClick: Function
}
const  CreateMenuItems = (appState, setAppState) : MenuItem[] => [
    {label: 'Dashboard', icon: 'pi pi-fw pi-home', command: () => {window.location.href = '/'}},
    {
        label: 'Menu Modes', icon: 'pi pi-fw pi-cog',
        items: [
            {label: 'Static Menu', icon: 'pi pi-fw pi-bars',  command: () => setAppState({...appState, layoutMode: 'static'}) },
            {label: 'Overlay Menu', icon: 'pi pi-fw pi-bars',  command: () => setAppState({...appState,layoutMode: 'overlay'}) }
        ]
    },
    {
        label: 'Menu Colors', icon: 'pi pi-fw pi-align-left',
        items: [
            {label: 'Dark', icon: 'pi pi-fw pi-bars',  command: () => setAppState({...appState, layoutColorMode: 'dark'}) },
            {label: 'Light', icon: 'pi pi-fw pi-bars',  command: () => setAppState({...appState,layoutColorMode: 'light'}) }
        ]
    },
    {
        label: 'Components', icon: 'pi pi-fw pi-globe', badge: '9',
        items: [
            {label: 'Sample Page', icon: 'pi pi-fw pi-th-large', to: '/sample'},
            {label: 'Forms', icon: 'pi pi-fw pi-file', to: '/forms'},
            {label: 'Data', icon: 'pi pi-fw pi-table', to: '/data'},
            {label: 'Panels', icon: 'pi pi-fw pi-list', to: '/panels'},
            {label: 'Overlays', icon: 'pi pi-fw pi-clone', to: '/overlays'},
            {label: 'Menus', icon: 'pi pi-fw pi-plus', to: '/menus'},
            {label: 'Messages', icon: 'pi pi-fw pi-spinner',to: '/messages'},
            {label: 'Charts', icon: 'pi pi-fw pi-chart-bar', to: '/charts'},
            {label: 'Misc', icon: 'pi pi-fw pi-upload', to: '/misc'}
        ]
    },
    {
        label: 'Template Pages', icon: 'pi pi-fw pi-file',
        items: [
            {label: 'Empty Page', icon: 'pi pi-fw pi-circle-off', to: '/empty'}
        ]
    },
    {
        label: 'Menu Hierarchy', icon: 'pi pi-fw pi-search',
        items: [
            {
                label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
                items: [
                    {
                        label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark'},
                        ]
                    },
                    {
                        label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'Submenu 1.2.2', icon: 'pi pi-fw pi-bookmark'}
                        ]
                    },
                ]
            },
            {
                label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
                items: [
                    {
                        label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'Submenu 2.1.3', icon: 'pi pi-fw pi-bookmark'},
                        ]
                    },
                    {
                        label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
                        items: [
                            {label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark'},
                            {label: 'Submenu 2.2.2', icon: 'pi pi-fw pi-bookmark'}
                        ]
                    }
                ]
            }
        ]
    },
    {label: 'Documentation', icon: 'pi pi-fw pi-question', command: () => {window.location.href = "#/documentation"}},
    {label: 'View Source', icon: 'pi pi-fw pi-search', command: () => {window.location.href = "https://github.com/primefaces/sigma"}}
];
export const useMenuItem = (appState, setAppState) : MenuItem[] => {
    const [menuItems, setMenuItems] = useState(CreateMenuItems(appState, setAppState));

    return menuItems;
}
