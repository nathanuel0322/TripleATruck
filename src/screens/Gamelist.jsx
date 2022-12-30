import '../assets/css/gamelist.css'

export default function Gamelist() {
    const consoleobj = [
        {system: "Playstation 5", image: require("../assets/images/ps5.jpg")},
        {system: "Xbox Series X", image: require("../assets/images/XBX.jpeg")},
        {system: "PS4 Pro", image: require("../assets/images/Ps4Pro.jpg")},
        {system: "Playstation VR", image: require("../assets/images/PSVR.jpg")},
        {system: "Xbox One X", image: require("../assets/images/XboxOneX.jpg")},
        {system: "Nintendo Switch", image: require("../assets/images/Switch.jpg")},
        {system: "Fire Tablet", image: require("../assets/images/firetab.jpeg")}
    ];
    return (
        <section className="team1 cid-trndaP1tRj" id="team1-p">
            <div className="container">
                <div className="title align-center">
                    <h3 className="mbr-section-title mbr-bold mbr-fonts-style mbr-white mbr-pb-4 display-2">Our Team</h3>
                    <h4 className="mbr-section-subtitle mbr-pt-2 mbr-fonts-style mbr-white display-5">Our game truck carries all the latest game systems & games, and we're always updating.
                        <div>Even better, we have JUST DANCE for the dancers!</div>
                    </h4>
                </div>
                <div className="mbr-row mbr-jc-c mbr-pt-4">
                    {consoleobj.map((item, index) => (
                        <div className={index === consoleobj.length - 1 ? "card mbr-col-sm-game mbr-col-md-6 mbr-col-lg-3 align-center last-child" : "card mbr-col-sm-game mbr-col-md-6 mbr-col-lg-3 align-center md-pb"}>
                            <div className="card-wrapper">
                                <div className="card-img mbr-m-auto">
                                <div className="img-overlay"></div>
                                <img decoding="async" alt="console" src={item.image} className="img-game i-amphtml-fill-content i-amphtml-replaced-content" />
                            </div>
                            <div className="card-box mbr-pt-3 mbr-px-4 mbr-pb-3">
                                <h3 className="card-title mbr-bold mbr-fonts-style mbr-white display-5">{item.system}</h3>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}