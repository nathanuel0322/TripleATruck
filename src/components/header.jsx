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
                <a className="navbar-caption" href="/">TripleA</a>
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
    </section>
  )
}

