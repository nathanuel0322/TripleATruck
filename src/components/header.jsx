import React from "react"
import { colorSet } from "../GlobalStyles"
import Stylesheet from "reactjs-stylesheet"
import '../assets/css/header.css'
import DehazeIcon from '@mui/icons-material/Dehaze';
import { IconButton } from "@mui/material";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

export default function Header({drawerfunc}) {
    const phone = useMediaQuery({ query: '(max-width: 600px)' })
    const tablet = useMediaQuery({ query: '(max-width: 1024px)' })
    const desktop = useMediaQuery({ query: '(min-width: 1025px)' })
    return (
        <section id="headersection" style={{backgroundColor: colorSet.main, color: 'white', justifyContent: phone ? 'space-between' : 'space-around'}} className="menu1 menu horizontal-menu">
            {/* SHOW LOGO */}
            <div className="navbar-brand">
                <div className="navbar-logo" style={{margin: '0 0'}}>
                    <img src={require("../assets/images/logo2.png")} layout="responsive" height="70" width="70" alt="logo" className="mobirise-loader" />
                </div>
                <span className="navbar-caption-wrap">
                    <a className="navbar-caption" href="/">TripleA</a>
                </span>
            </div>
            {phone ?
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
                <div className="menu-navs">
                    {['Services', 'Packages', 'Game List', 'Gallery', 'E-Invites', 'Contact Us', 'About', 'Book Now'].map((text, index) => (
                        <Link key={index} to={`/${text.split(" ").join("").toLowerCase()}`} 
                            style={{
                                textDecoration: 'none',
                                color: index === 7 ? '#1bc2ca' : 'white',
                                fontFamily: "'Play', sans-serif",
                                fontSize: '1rem',
                                fontWeight: 600,
                                margin: '.667rem 1rem',
                                borderColor: index === 7 && '#1bc2ca',
                                borderRadius: index === 7 && 40,
                                textTransform: index === 7 && 'uppercase',
                                padding: index === 7 && '.625rem 2rem',
                                width: index === 7 && '100%',
                                textAlign: index === 7 && 'center',
                                border: index === 7 && '2px solid'
                            }}
                        >
                            {text}
                        </Link>
                    ))}
                </div>
            }
        </section>
    )
}

