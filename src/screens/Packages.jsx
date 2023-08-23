import React from "react";
import '../assets/css/packages.css'

export default function Packages() {
    const packagesarr = [
        { title: '2-Hour Party', price: 500, },
        { title: 'Additional Hours', price: 150, },
        { title: '3-Hour Movie Package', price: 475, },
        { title: 'VR Package', price: 100, }, 
        { title: 'Movie & Gaming Combo', price: 825 },
        { title: 'Popcorn Machine', price: 150 },
        { title: 'Cotton Candy Machine', price: 150 },
        { title: 'Sip N Sing (2HR Karaoke Party)', price: 450 }
    ]

    return (
        <div>
            <section className="pricing-table1 cid-traOecPbxG">
	            <div className="container-pack">
                    <div className="row-pack jc-c">
                        {packagesarr.map((pack, index) => {
                            return (
                                <div className='card col-sm-12-pack col-md-6-pack md-pb-pack col-lg-3-pack align-center'>
                                    <div className="card-inner">
                                        <div className="card-head">
                                            <h3 className="cardtitle card-title fonts-style display-5-pack">{pack.title}</h3>
                                        </div>
                                        <div className={`card-price-wrap price-wrap${index % 3 + 1}`}>
                                            <div className="card-price">
                                                <span className="price-sign bold display-5-pack">$</span>
                                                <span className="price-value bold-pack display-2-pack">{pack.price}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
		            </div>
	            </div>
            </section>
        </div>
    );
}