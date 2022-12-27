import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import Stylesheet from "reactjs-stylesheet";
import '../assets/css/packages.css'

export default function Packages() {
    const mobile = useMediaQuery({ query: "(max-width: 480px)" });
    const tablet = useMediaQuery({ query: "(min-width: 768px)" });
    const desktop = useMediaQuery({ query: "(min-width: 992px)" });
    return (
        <div>
            <section className="pricing-table1 cid-traOecPbxG">
	            <div className="container" style={{maxWidth: desktop ? '960px' : tablet && '720px'}}>
                    <div className="mbr-row mbr-jc-c">
			            <div style={desktop ? packagesstyles.cardlg : tablet && packagesstyles.cardmd} className='card card1 mbr-col-sm-12 mbr-col-md-6 md-pb mbr-col-lg-3 align-center'
                            onMouseOver={() => {
                                document.getElementById("card1title").style.color = "#1bc2ca"
                            }}
                            onMouseLeave={() => {
                                document.getElementById("card1title").style.color = "white"
                            }}
                        >
				            <div class="card-inner">
					            <div class="card-head">
						            <h3 id="card1title" class="card-title mbr-fonts-style display-5">2-Hour Party</h3>
					            </div>
					            <div style={{backgroundColor: '#3dd0d8'}} class="card-price-wrap">
                                    <div class="card-price">
                                        <span class="price-sign mbr-bold display-5">$</span>
                                        <span class="price-value mbr-bold display-2">500</span>
                                    </div>
					            </div>
                                <div class="items-list-wrap">
                                    <ul class="items-list">
                                        {["Personal Use", "One Site", "Email Support", "Email Support", "Email Support", "Email Support"].map((item, index) => {
                                            return (
                                                <li class="list-item">
                                                    <span class="item-text mbr-fonts-style display-7">{item}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
				            </div>
			            </div>
                        <div class="card card2 mbr-col-sm-12 mbr-col-md-6 md-pb mbr-col-lg-3 align-center"
                            onMouseOver={() => {
                                document.getElementById("card2title").style.color = "#1bc2ca"
                            }}
                            onMouseLeave={() => {
                                document.getElementById("card2title").style.color = "white"
                            }}
                        >
                            <div class="card-inner">
                                <div class="card-head">
                                    <h3 id="card2title" class="card-title mbr-fonts-style display-5">Additional Hours</h3>
                                </div>
                                <div class="card-price-wrap price-wrap2">
                                    <div class="card-price">
                                        <span class="price-sign mbr-bold mbr-fonts-style display-5">+$</span>
                                        <span class="price-value mbr-bold mbr-fonts-style display-2">150</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card card3 mbr-col-sm-12 mbr-col-md-6 mbr-col-lg-3 align-center"
                            onMouseOver={() => {
                                document.getElementById("card3title").style.color = "#1bc2ca"
                            }}
                            onMouseLeave={() => {
                                document.getElementById("card3title").style.color = "white"
                            }}
                        >
                            <div class="card-inner">
                                <div class="card-head">
                                    <h3 id="card3title" class="card-title mbr-fonts-style display-5">3-Hour Movie Package</h3>
                                </div>
                                <div class="card-price-wrap price-wrap3">
                                    <div class="card-price">
                                        <span class="price-sign mbr-bold mbr-fonts-style display-5">$</span>
                                        <span class="price-value mbr-bold mbr-fonts-style display-2">475</span>
                                    </div>
                                    
                                </div>
                                <div class="items-list-wrap">
                                    <ul class="items-list">
                                        
                                        
                                        
                                    <li class="list-item">
                                            
                                            <span class="item-text mbr-fonts-style display-7">Commercial Use</span>
                                        </li><li class="list-item">
                                            
                                            <span class="item-text mbr-fonts-style display-7">Unlimited sites</span>
                                        </li><li class="list-item">
                                            
                                            <span class="item-text mbr-fonts-style display-7">Premium Support</span>
                                        </li><li class="list-item">
                                            
                                            <span class="item-text mbr-fonts-style display-7">Premium Support</span>
                                        </li><li class="list-item">
                                            
                                            <span class="item-text mbr-fonts-style display-7">Premium Support</span>
                                        </li><li class="list-item">
                                            
                                            <span class="item-text mbr-fonts-style display-7">Premium Support</span>
                                        </li></ul>
                                </div>
                            </div>
                        </div>
                        <div class="card card4 mbr-col-sm-12 mbr-col-md-6 mbr-col-lg-3 align-center last-child"
                            onMouseOver={() => {
                                document.getElementById("card4title").style.color = "#1bc2ca"
                            }}
                            onMouseLeave={() => {
                                document.getElementById("card4title").style.color = "white"
                            }}
                        >
                            <div class="card-inner">
                                <div class="card-head">
                                    <h3 id="card4title" class="card-title mbr-fonts-style display-5">VR Package</h3>
                                </div>
                                <div class="card-price-wrap price-wrap4">
                                    <div class="card-price">
                                        <span class="price-sign mbr-bold mbr-fonts-style display-5">$</span>
                                        <span class="price-value mbr-bold mbr-fonts-style display-2">200</span>
                                    </div>
                                    
                                </div>
                                <div class="items-list-wrap">
                                    <ul class="items-list">
                                        
                                        
                                        
                                    <li class="list-item">
                                            
                                            <span class="item-text mbr-fonts-style display-7">Lorem ipsum</span>
                                        </li><li class="list-item">
                                            
                                            <span class="item-text mbr-fonts-style display-7">Lorem ipsum</span>
                                        </li><li class="list-item">
                                            
                                            <span class="item-text mbr-fonts-style display-7">Lorem ipsum</span>
                                        </li><li class="list-item">
                                            
                                            <span class="item-text mbr-fonts-style display-7">Lorem ipsum</span>
                                        </li><li class="list-item">
                                            
                                            <span class="item-text mbr-fonts-style display-7">Lorem ipsum</span>
                                        </li><li class="list-item">
                                            
                                            <span class="item-text mbr-fonts-style display-7">Lorem ipsum</span>
                                        </li></ul>
                                </div>
                            </div>
                        </div>
		            </div>
	            </div>
            </section>
        </div>
    );
}

const packagesstyles = Stylesheet.create({
    cardlg: {
        flex: '0 0 25%',
        maxWidth: '25%',
        paddingRight: '1rem',
        paddingLeft: '1rem'
    },
    cardmd: {
        flex: '0 0 50%',
        maxWidth: '25%',
        paddingRight: '1rem',
        paddingLeft: '1rem'
    }
})