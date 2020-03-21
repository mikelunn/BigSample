import React, {useState} from 'react';
import {Menu, MenuItem, SubMenuItem} from '../../core/state/MenuItem';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

export const AppSubMenu = ({className,items,onMenuItemClick,root = false}:SubMenuItem) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const _onMenuItemClick =(event:any, item:any, index:any) => {
        //avoid processing disabled items
        if(item.disabled) {
            event.preventDefault();
            return true;
        }
                        
        //execute command
        if(item.command) {
            item.command({originalEvent: event, item: item});
        }

        if(index === activeIndex)
            setActiveIndex(null);  
        else
            setActiveIndex(index);

        if(onMenuItemClick) {
            onMenuItemClick({
                originalEvent: event,
                item: item
            });
        }
    }

    const renderLinkContent = (item: MenuItem) => {
		let submenuIcon = item.items && <i className="pi pi-fw pi-angle-down menuitem-toggle-icon"></i>;
		let badge = item.badge && <span className="menuitem-badge">{item.badge}</span>;

		return (
			<>
				<i className={item.icon}></i>
				<span>{item.label}</span>
				{submenuIcon}
				{badge}
			</>
		);
	}

	const renderLink = (item: MenuItem, i: any) => {
		let content = renderLinkContent(item);

		if (item.to) {
			return (
				<NavLink activeClassName="active-route" to={item.to} onClick={(e) => _onMenuItemClick(e, item, i)} exact target={item.target}>
                    {content}
                </NavLink>
			)
		}
		else {
			return (
				<a href={item.url} onClick={(e) => _onMenuItemClick(e, item, i)} target={item.target}>
					{content}
				</a>
			);

		}
    }
    
    const menuItems = items && items.map((item: any, i) => {
        let active = activeIndex === i;
        let styleClass = classNames(item.badgeStyleClass, {'active-menuitem': active && !item.to});

        return (
            <li className={styleClass} key={i}>
                {item.items && root===true && <div className='arrow'></div>}
                {renderLink(item, i)}
                <AppSubMenu items={item.items} onMenuItemClick={onMenuItemClick}/>
            </li>
        );
    });
    
    return menuItems ? <ul className={className}>{menuItems}</ul> : null;
}
