import React from "react"
import '../assets/css/header.css'
import DehazeIcon from '@mui/icons-material/Dehaze';
import { IconButton } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export default function Header({drawerfunc}) {
    const mobile = useMediaQuery({ query: '(max-width: 990px)' })
    return (
        <section id="headersection" className="menu1 menu horizontal-menu cid-trIi3lod2Q">
            <nav className="navbar navbar-dropdown navbar-expand-lg navbar-fixed-top">
                <div className="menu-container-head container-head">
                    {/* SHOW LOGO */}
                    <div className="navbar-brand">
                        <div className="navbar-logo">
                            <img src={require("../assets/images/logo2.png")} layout="responsive" height="70" width="70" alt="logo" className="loader" />
                        </div>
                        <span className="navbar-caption-wrap">
                            <Link to="" className="navbar-caption bold white display-5">
                                TripleA
                            </Link>
                        </span>
                    </div>
                    {mobile ?
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
                    :
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav nav-dropdown">
                                {['Services', 'Packages', 'Game List', 
                                // 'Gallery', 
                                'E-Invites', 'Contact Us', 'About'].map((text, index) => (
                                    <li className="nav-item">
                                        <Link className="nav-link bold link white text-white display-7" key={index} to={`/${text.split(" ").join("").toLowerCase()}`}>
                                            {text}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                            <div className="navbar-buttons section-btn">
                                <a class="btn btn-md bold btn-primary-outline display-7" style={{textAlign: 'center'}} target="_blank" rel="noreferrer" href="https://pkcjftgpluneupxnjv.10to8.com">Book Now</a>               
                            </div>
                        </div>
                    }
                </div>
            </nav>
        </section>
    )
}

