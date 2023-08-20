import React from "react"
import DehazeIcon from '@mui/icons-material/Dehaze';
import { IconButton } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import '../assets/css/header.css'

export default function Header({drawerfunc}) {
    const mobile = useMediaQuery({ query: '(max-width: 990px)' })
    return (
        <section id="headersection" className="menu1 menu horizontal-menu cid-trIi3lod2Q">
            <nav className="navbar navbar-dropdown navbar-expand-lg navbar-fixed-top">
                <div className="menu-container-head container-head">
                    {/* SHOW LOGO */}
                    <div className="navbar-brand">
                        <div className="navbar-logo">
                            <img src={require("../assets/images/logo2.png")} layout="responsive" height="70" width="70" alt="logo" 
                                className="loader"
                            />
                        </div>
                        <span className="navbar-caption-wrap">
                            <Link to="" className="navbar-caption bold text-white display-5">
                                Triple A Mobile Gaming - Game Truck
                            </Link>
                        </span>
                    </div>
                    {mobile ?
                        <IconButton
                            aria-label="menu"
                            size="large"
                            onClick={() => drawerfunc(true)}
                        >
                            <DehazeIcon sx={{color: 'white', fontSize: 40}} />
                        </IconButton>
                    :
                        <div className="flex flex-row items-center justify-end basis-auto">
                            <ul className="navbar-nav nav-dropdown">
                                {['Home', 'Services', 'Packages', 'Game List', 
                                'E-Invites', 
                                'Contact Us', 'About'].map((text, index) => (
                                    <li className="nav-item" key={index}>
                                        <Link className="nav-link bold link text-white display-7" key={index} 
                                            to={`/${text === 'Home' ? "" : text.split(" ").join("").toLowerCase()}`}
                                        >
                                            {text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="navbar-buttons section-btn">
                                <a className="btn btn-md bold btn-primary-outline display-7 text-center" style={{wordBreak: 'inherit', minWidth: '65%'}}
                                    target="_blank" rel="noreferrer" href="https://pkcjftgpluneupxnjv.10to8.com"
                                >
                                    Book Now
                                </a>               
                            </div>
                        </div>
                    }
                </div>
            </nav>
        </section>
    )
}

