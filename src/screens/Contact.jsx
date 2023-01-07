import '../assets/css/contact.css'
import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const [headerheight, setHeaderheight] = useState(0)
    useEffect(() => {
        setHeaderheight(document.getElementsByClassName("horizontal-menu")[0].offsetHeight)
    }, [])
    const [formfilled, setFormfilled] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        const formbutton = document.getElementById("sendform");
        formbutton.disabled = true;
        formbutton.value = "Sending...";
        emailjs.sendForm('service_rb0yd56', 'template_879ls1m', '#contactme', 'dbCtiR00Etae1Fo2Q')
        .then((result) => {
            setFormfilled(true);
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    return (
        formfilled ? 
            <div className='formfilled' id="contactme" style={{height: `calc(100vh - ${headerheight}px)`, marginTop: `${headerheight}px`}}>
                <p style={{fontSize: '2rem'}}>Thank you for your message!</p>
                <p style={{fontSize: '1.5rem'}}>We will get back to you as soon as possible.</p>
            </div>
        :
        <section className="contacts2 cid-trnpRGggDT" id="contacts2-14">
	        <div className="container-con">
                <div className="title pb-4 align-center">
                    <h3 className="section-title-con fonts-style white pb-3 display-2-con">Contact Us</h3>
                </div>
                <div className="row-con main-row jc-c">
                    <div className="first-element col-md-12-con col-sm-12 column flex jc-c col-lg-6-con">
                        <div className="contacts-block pb-4 flex jc-c column">
                            <div className="contacts-box">
                                <p className="fonts-style white pb-3 display-4"></p>
                                <div className="flex pb-1 ai-e">
                                    <div className="icon-box">
                                        <div className="iconfont-wrapper icon-wrapper2">
                                            <span className="amp-iconfont icon2 fa fa-phone"><svg width="32" height="32" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" fill="#1bc2ca"><path d="M1600 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-53-3.5t-57.5-12.5-47-14.5-55.5-20.5-49-18q-98-35-175-83-127-79-264-216t-216-264q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47-12.5-57.5-3.5-53q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z"></path></svg></span>
                                        </div>
                                    </div>
                                    <div className="cont-text-box white">
                                        <p className="fonts-style contacts-title display-4">Phone</p>
                                        <a href='tel:+19738458300' style={{textDecoration: 'underline', color: 'white'}} className="fonts-style bold contacts-info display-4">+1 973-845-8300</a>
                                    </div>
                                </div>
                                <div className="flex ai-e">
                                    <div className="icon-box">
                                        <div className="iconfont-wrapper icon-wrapper2">
                                            <span className="amp-iconfont icon2 fa fa-envelope"><svg width="32" height="32" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" fill="#1bc2ca"><path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path></svg></span>
                                        </div>
                                    </div>
                                    <div className="cont-text-box white">
                                        <p className="fonts-style contacts-title display-4">E-Mail</p>
                                        <a href='mailto:info@tripleamobilegaming.com' style={{textDecoration: 'underline', color: 'white'}} className="fonts-style bold contacts-info display-4">info@tripleamobilegaming.com</a>
                                    </div>
                                </div>
                                {/* <div className="icons-list social pt-4">
                                    <a href="https://www.youtube.com/channel/UCIl8JHjLsqZNOdgBOYC_MRQ" target="_blank" className="iconfont-wrapper" rel="noreferrer">
                                        <span className="amp-iconfont fa-facebook-f fa"><svg width="22" height="22" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg" fill="#1bc2ca"><path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759h-306v-759h-255v-296h255v-218q0-186 104-288.5t277-102.5q147 0 228 12z"></path></svg></span>
                                    </a>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="form-block second-element col-md-12-con col-sm-12 column flex jc-c col-lg-6-con m-auto">
                        <div className="formdiv" data-form-type="formoid">
                            <form className="form i-amphtml-form" id="contactme" onSubmit={sendEmail}>
                                <div className="dragArea form-row-con">
                                    {/* <div className="col-lg-6-con col-md-12-con col-sm-12 field"> */}
                                    <input name="from_name" className="inputs-con field-input display-7" type="text" placeholder="First Name" id="form[data][0][1]-contacts2-14" />
                                    {/* </div> */}
                                    {/* <div className="col-lg-6-con col-md-12-con col-sm-12 field"> */}
                                    <input name="user_email" className="inputs-con field-input display-7" type="email" placeholder="E-mail Address" data-form-field="E-mail" id="form[data][2][1]-contacts2-14" />
                                    {/* </div> */}
                                    {/* <div className="col-lg-12 col-md-12-con col-sm-12 field"> */}
                                    <textarea className="field-input display-7" name="form[data][2][1]" placeholder="Message" data-form-field="Message" id="form[data][4][1]-contacts2-14"></textarea>
                                    {/* </div> */}
                                    <div className="col col-md-12-con col-sm-12 section-btn align-center field" id="sendform">
                                        <button type="submit" className="btn btn-md btn-primary btn-form display-7">Send</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
	        </div>
        </section>
    )
}