/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import ThemeContext from '../../../style/themes/ThemeContext';
import React, { useState, useContext } from 'react';
import Router from 'react-router-dom/BrowserRouter';
import Link from 'react-router-dom/Link';
import { MdMenu, MdClose, MdArrowBack } from "react-icons/md";

import { srOnly } from '../../../style/shared';

import { mobileLayout, drawerHeader, mobileItem_action, globalNavDropdown, globalNavDropdown__item, globalNavMobileToggle_expand, logo, globalNavMobile__subToggle, globalNavPrimary__mobileItem, globalNavDropdown__mobileMenu, globalNavMobileToggle, globalNavBar, globalNavPrimary, globalNavPrimary__menu, laptopLayout, globalNavPrimary__item, globalNavDropdown__menu, globalNavDropdown__links } from './GobalNav.style';
import { Logo } from './Logo';


export const GlobalNavLaptop = ({ drawer, rtl }) => {
    const [drawerVisible, showDrawer] = useState(false);
    const theme = useContext(ThemeContext);
    const isServer = typeof window === 'undefined';
    let showHeaderMenu = isServer || !drawer;
    let showMobileMenu = isServer || drawer;

    return (
        <div css={globalNavBar} dir={rtl ? 'rtl' : null}>
            <div css={globalNavPrimary}>
                <a href="#content" css={srOnly}>
                    Skip to main content
                </a>
                <Link to="/" css={logo}>
                    <Logo />
                    GBIF
                </Link>
                <ul css={css`${globalNavPrimary__menu} ${laptopLayout}`}>
                    <li css={globalNavPrimary__item({ theme })}>
                        <Link to="/about" className="gbif-menu-title">Get data</Link>
                    </li>
                    <li css={globalNavPrimary__item({ theme })}>
                        <span className="gbif-menu-title">How-to</span>
                        <ul css={globalNavDropdown}>
                            <li css={globalNavDropdown__menu({ menuItemCount: 2 })}>
                                <a href="">Overview</a>
                                <p style={{ color: '#666' }}>Some prose could go here to explain items without children</p>
                            </li>
                            <li css={globalNavDropdown__menu({ menuItemCount: 2 })}>
                                <a css={globalNavDropdown__item} href="">Share data</a>
                                <ul css={globalNavDropdown__links}>
                                    <li css={globalNavDropdown__item}><a href="">Data hosting</a></li>
                                    <li css={globalNavDropdown__item}><a href="">Data classes</a></li>
                                    <li css={globalNavDropdown__item}><a href="">Standards</a></li>
                                    <li css={globalNavDropdown__item}><a href="">Become a publisher</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    {/* <li css={globalNavPrimary__item({theme})}>
                        <a href="" className="gbif-menu-title">Tools</a>
                    </li>
                    <li css={globalNavPrimary__item({theme})}>
                        <a href="" className="gbif-menu-title">Community</a>
                    </li>
                    <li css={globalNavPrimary__item({theme})}>
                        <a href="" className="gbif-menu-title">About</a>
                    </li> */}
                </ul>
                <div style={{ flex: '1 1 auto' }} css={mobileLayout}></div>
                <ul className="globalNavActions">

                </ul>


                <label htmlFor="menuToggle" css={mobileLayout} style={{ zIndex: 10 }}>
                    {!drawerVisible && <MdMenu style={{ fontSize: 30 }} />}
                    {drawerVisible && <MdClose style={{ fontSize: 30 }} />}
                </label>
                <input id="menuToggle" type="checkbox" css={css`${globalNavMobileToggle({ rtl })} ${mobileLayout} ${srOnly}`} onChange={() => showDrawer(!drawerVisible)} checked={drawerVisible} />
                <div>
                    <div>
                        <div css={drawerHeader}></div>
                        <div style={{ position: 'relative' }}>
                            <ul css={globalNavDropdown__mobileMenu}>
                                <li css={globalNavPrimary__mobileItem}>
                                    <a href="" css={mobileItem_action()}>About GBIF</a>
                                </li>
                                <li css={globalNavPrimary__mobileItem}>
                                    <label htmlFor="subToggle" css={mobileItem_action()}>Get data</label>
                                    <input id="subToggle" type="checkbox" css={globalNavMobile__subToggle({ rtl })} />
                                    <div>
                                        <div css={drawerHeader}>
                                            <label htmlFor="subToggle">
                                                {<MdArrowBack style={{ fontSize: 30 }} />}
                                            </label>
                                        </div>
                                        <ul css={globalNavDropdown__mobileMenu}>
                                            <li css={globalNavPrimary__mobileItem}>
                                                <a href="" css={mobileItem_action()}>Overview</a>
                                            </li>
                                            <li css={globalNavPrimary__mobileItem}>
                                                <label htmlFor="menuToggle2" css={mobileItem_action()}>Data types</label>
                                                <input id="menuToggle2" type="checkbox" css={globalNavMobileToggle_expand} />
                                                <div>
                                                    <ul css={globalNavDropdown__mobileMenu}>
                                                        <li css={globalNavPrimary__mobileItem}><a href="" css={mobileItem_action()}>Marketing</a></li>
                                                        <li css={globalNavPrimary__mobileItem}><a href="" css={mobileItem_action()}>Marketing2</a></li>
                                                        <li css={globalNavPrimary__mobileItem}><a href="" css={mobileItem_action()}>Marketing3</a></li>
                                                        <li css={globalNavPrimary__mobileItem}><a href="" css={mobileItem_action()}>Marketing4</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                            <li css={globalNavPrimary__mobileItem}>
                                                <label htmlFor="menuToggle3" css={mobileItem_action()}>Expand below</label>
                                                <input id="menuToggle3" type="checkbox" css={globalNavMobileToggle_expand} />
                                                <div>
                                                    <ul css={globalNavDropdown__mobileMenu}>
                                                        <li css={globalNavPrimary__mobileItem}><a href="" css={mobileItem_action()}>test</a></li>
                                                        <li css={globalNavPrimary__mobileItem}><a href="" css={mobileItem_action()}>test2</a></li>
                                                    </ul>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export const Example = props => {
    return <Router>
        <GlobalNavLaptop drawer />
    </Router>
}