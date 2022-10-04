import React from "react"
import logo from '../logo.svg';
import * as emoji from 'node-emoji'

export default function Home () {
    const welcome = emoji.emojify('Site in progress :male-construction-worker:')
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {welcome}
                </p>
            </header>
        </div>
    )
}