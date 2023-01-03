import React from "react";
import Stylesheet from "reactjs-stylesheet";
import '../assets/css/packages.css'

export default function Packages() {
    return (
        <div>
            <section className="pricing-table1 cid-traOecPbxG">
	            <div className="container-pack">
                    <div className="row-pack jc-c">
			            <div className='card card1 col-sm-12-pack col-md-6-pack md-pb-pack col-lg-3-pack align-center'
                            onMouseOver={() => {
                                document.getElementById("card1title").style.color = "#1bc2ca"
                            }}
                            onMouseLeave={() => {
                                document.getElementById("card1title").style.color = "white"
                            }}
                        >
				            <div className="card-inner">
					            <div className="card-head">
						            <h3 id="card1title" className="card-title fonts-style display-5-pack">2-Hour Party</h3>
					            </div>
					            <div style={{backgroundColor: '#3dd0d8'}} className="card-price-wrap">
                                    <div className="card-price">
                                        <span className="price-sign bold display-5-pack">$</span>
                                        <span className="price-value bold-pack display-2-pack">500</span>
                                    </div>
					            </div>
                                <div className="items-list-wrap">
                                    <ul className="items-list">
                                        {["Personal Use", "One Site", "Email Support", "Email Support", "Email Support", "Email Support"].map((item, index) => {
                                            return (
                                                <li className="list-item" key={index}>
                                                    <span className="item-text fonts-style display-7">{item}</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
				            </div>
			            </div>
                        <div className="card card2 col-sm-12-pack col-md-6-pack md-pb-pack col-lg-3-pack align-center"
                            onMouseOver={() => {
                                document.getElementById("card2title").style.color = "#1bc2ca"
                            }}
                            onMouseLeave={() => {
                                document.getElementById("card2title").style.color = "white"
                            }}
                        >
                            <div className="card-inner">
                                <div className="card-head">
                                    <h3 id="card2title" className="card-title fonts-style display-5-pack">Additional Hours</h3>
                                </div>
                                <div className="card-price-wrap price-wrap2">
                                    <div className="card-price">
                                        <span className="price-sign bold fonts-style display-5-pack">+$</span>
                                        <span className="price-value bold fonts-style display-2-pack">150</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card card3 col-sm-12-pack col-md-6-pack col-lg-3-pack align-center"
                            onMouseOver={() => {
                                document.getElementById("card3title").style.color = "#1bc2ca"
                            }}
                            onMouseLeave={() => {
                                document.getElementById("card3title").style.color = "white"
                            }}
                        >
                            <div className="card-inner">
                                <div className="card-head">
                                    <h3 id="card3title" className="card-title fonts-style display-5-pack">3-Hour Movie Package</h3>
                                </div>
                                <div className="card-price-wrap price-wrap3">
                                    <div className="card-price">
                                        <span className="price-sign bold fonts-style display-5-pack">$</span>
                                        <span className="price-value bold fonts-style display-2-pack">475</span>
                                    </div>
                                    
                                </div>
                                <div className="items-list-wrap">
                                    <ul className="items-list">
                                        
                                        
                                        
                                    <li className="list-item">
                                            
                                            <span className="item-text fonts-style display-7">Commercial Use</span>
                                        </li><li className="list-item">
                                            
                                            <span className="item-text fonts-style display-7">Unlimited sites</span>
                                        </li><li className="list-item">
                                            
                                            <span className="item-text fonts-style display-7">Premium Support</span>
                                        </li><li className="list-item">
                                            
                                            <span className="item-text fonts-style display-7">Premium Support</span>
                                        </li><li className="list-item">
                                            
                                            <span className="item-text fonts-style display-7">Premium Support</span>
                                        </li><li className="list-item">
                                            
                                            <span className="item-text fonts-style display-7">Premium Support</span>
                                        </li></ul>
                                </div>
                            </div>
                        </div>
                        <div className="card card4 col-sm-12-pack col-md-6-pack col-lg-3-pack align-center last-child"
                            onMouseOver={() => {
                                document.getElementById("card4title").style.color = "#1bc2ca"
                            }}
                            onMouseLeave={() => {
                                document.getElementById("card4title").style.color = "white"
                            }}
                        >
                            <div className="card-inner">
                                <div className="card-head">
                                    <h3 id="card4title" className="card-title fonts-style display-5-pack">VR Package</h3>
                                </div>
                                <div className="card-price-wrap price-wrap4">
                                    <div className="card-price">
                                        <span className="price-sign bold fonts-style display-5-pack">$</span>
                                        <span className="price-value bold fonts-style display-2-pack">200</span>
                                    </div>
                                    
                                </div>
                                <div className="items-list-wrap">
                                    <ul className="items-list">
                                        
                                        
                                        
                                    <li className="list-item">
                                            
                                            <span className="item-text fonts-style display-7">Lorem ipsum</span>
                                        </li><li className="list-item">
                                            
                                            <span className="item-text fonts-style display-7">Lorem ipsum</span>
                                        </li><li className="list-item">
                                            
                                            <span className="item-text fonts-style display-7">Lorem ipsum</span>
                                        </li><li className="list-item">
                                            
                                            <span className="item-text fonts-style display-7">Lorem ipsum</span>
                                        </li><li className="list-item">
                                            
                                            <span className="item-text fonts-style display-7">Lorem ipsum</span>
                                        </li><li className="list-item">
                                            
                                            <span className="item-text fonts-style display-7">Lorem ipsum</span>
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
})