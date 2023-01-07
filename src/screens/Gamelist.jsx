import '../assets/css/gamelist.css'

export default function Gamelist() {
    const consoleobj = [
        {system: "Playstation 5", image: require("../assets/images/ps5.jpg")},
        {system: "Xbox Series X", image: require("../assets/images/XBX.jpeg")},
        {system: "PS4 Pro", image: require("../assets/images/Ps4Pro.jpg")},
        {system: "Playstation VR", image: require("../assets/images/PSVR.jpg")},
        {system: "Nintendo Switch", image: require("../assets/images/Switch.jpg")},
        {system: "Fire Tablet", image: require("../assets/images/firetab.jpeg")}
    ];
    return (
        <section className="team1 cid-trndaP1tRj" id="team1-p">
            <div className="container-game">
                <div className="title align-center">
                    <h3 className="section-title-game bold fonts-style white pb-4 display-2-game">Our Team</h3>
                    <h4 className="section-subtitle pt-2 fonts-style white display-5-game">Our game truck carries all the latest game systems & games, and we're always updating.
                        <div>Even better, we have JUST DANCE for the dancers!</div>
                    </h4>
                </div>
                <div className="row-game jc-c pt-4">
                    {consoleobj.map((item, index) => (
                        <div key={index} className={index === consoleobj.length - 1 ? "card-game col-sm-game col-md-6 col-lg-3-game align-center last-child" : "card-game col-sm-game col-md-6 col-lg-3-game align-center md-pb"}>
                            <div className="card-wrapper">
                                <div className="card-img m-auto">
                                <div className="img-overlay"></div>
                                <img decoding="async" alt="console" src={item.image} className="img-game i-amphtml-fill-content i-amphtml-replaced-content" />
                            </div>
                            <div className="card-box pt-3 px-4 pb-3">
                                <h3 className="card-title bold fonts-style white display-5-game">{item.system}</h3>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}