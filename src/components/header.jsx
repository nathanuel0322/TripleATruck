import React from "react"
import { colorSet } from "../GlobalStyles"
import Stylesheet from "reactjs-stylesheet"
import '../assets/css/header.css'
import DehazeIcon from '@mui/icons-material/Dehaze';
import { IconButton } from "@mui/material";

export default function Header({drawerfunc}) {
  return (
    <section style={{backgroundColor: colorSet.main, color: 'white'}} className="menu1 menu horizontal-menu" group="Menu">
        {/* SHOW LOGO */}
        <div className="navbar-brand">
            <div className="navbar-logo" style={{margin: '0 0'}}>
                <img src={require("../assets/images/logo2.png")} layout="responsive" height="70" width="70" alt="logo" className="mobirise-loader" />
            </div>
            <span className="navbar-caption-wrap">
                <a className="navbar-caption" href="https://8b.com">TripleA</a>
            </span>
        </div>
        <IconButton
            aria-label="menu"
            size="large"
            sx={{ mr: 2 }}
            onClick={() => {
                drawerfunc(true)
            }}
        >
            <DehazeIcon sx={{color: 'white', fontSize: 40}} />
        </IconButton>
	    {/* <div className="menu-wrapper">
	        <nav className="navbar navbar-dropdown navbar-expand-lg" mbr-className="{'navbar-fixed-top': sticky}">
                <div className="menu-container">
                    COLLAPSED MENU
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" mbr-if="showItems || showSocial || showButtons">
                            <div className="hamburger">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </button>
                        NAVBAR ITEMS
                        <ul mbr-menu className="navbar-nav nav-dropdown" mbr-theme-style="display-7" mbr-if="showItems" mbr-className="{'nav-right': !showButtons,'navbar-nav-top-padding': isPublish && !showBrand && !showLogo}">
                            <li className="nav-item">
                                <a className="nav-link mbr-bold link mbr-white" href="index.html#header1-0" data-app-selector=".nav-link,.dropdown-item" data-app-placeholder="Type Text">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link mbr-bold link mbr-white" href="https://8b.com" data-app-selector=".nav-link,.dropdown-item" data-app-placeholder="Type Text">Services</a>
                            </li>
                            <li className="nav-item"><a className="nav-link mbr-bold link mbr-white" href="index.html#features3-t" data-app-selector=".nav-link,.dropdown-item" data-app-placeholder="Type Text">Packages</a></li><li className="nav-item"><a className="nav-link mbr-bold link mbr-white" href="index.html#features3-t" data-app-selector=".nav-link,.dropdown-item" data-app-placeholder="Type Text">Game List</a></li>
                            <li className="nav-item"><a className="nav-link mbr-bold link mbr-white" href="index.html#features3-t" data-app-selector=".nav-link,.dropdown-item" data-app-placeholder="Type Text">Gallery</a></li>
                            <li className="nav-item"><a className="nav-link mbr-bold link mbr-white" href="index.html#features3-t" data-app-selector=".nav-link,.dropdown-item" data-app-placeholder="Type Text">E-Invites</a></li>
                            <li className="nav-item"><a className="nav-link mbr-bold link mbr-white" href="index.html#features3-t" data-app-selector=".nav-link,.dropdown-item" data-app-placeholder="Type Text">Contact</a></li>
                            <li className="nav-item"><a className="nav-link mbr-bold link mbr-white" href="index.html#features3-t" data-app-selector=".nav-link,.dropdown-item" data-app-placeholder="Type Text">About</a></li>
                        </ul>
                    </div>
                    Show Button
                    <div className="navbar-buttons">
                        <a className="btn btn-md mbr-bold btn-primary-outline" href="https://8b.com" data-app-placeholder="Type Text">Book Now</a>
                    </div>
                </div>
            </nav>
        </div> */}
    </section>
  )
}

