import React from 'react';
import '../assets/css/services.css'

export default function Services() {
    const textarr = ["Our Game Coaches are there to help, instruct, or even play with our guests! They are also present in order to ensure all the kids are having a great time while under our roof!", "Safe environment for you and your children's safety", "Charging Station for all your Cell Phone Needs, Along with Soundbars for each TV, and a Stand-alone VR section", "This trailer is definitely where you want to celebrate your next function, and take pictures with GORGEOUS backgrounds. Included with your package, you'll receive up to 30 invites per booking, or an electronic option"]
    return(
        <section className="title1 cid-trmAg1lINL" id="title1-o">
            <div className="container-serv">
                <div className="title pb-5 align-center">
                    <h3 className="section-title-serv fonts-style bold white display-2-serv">Game Coaches</h3>
                </div>
                <div className="row-serv pt-5">
                    {textarr.map((text, index) => {
                        return (
                            <div className="col-sm-12-serv col-md-12-serv col-lg-6-serv" key={index} style={{margin: index === 1 && '0 auto'}}>
                                <div className={`card-box box${index+1} flex`}>
                                    <div className="text-box white align-center">
                                        <h3 className="fonts-style text-box-title display-5-serv">{text}</h3>
                                    </div>
                                    <div className="icon-box">
                                        <div className={`round-box round${index+1}`}>
                                            <div className="number-box">
                                                <p className="fonts-style bold white number-box-number display-2">{index+1}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}