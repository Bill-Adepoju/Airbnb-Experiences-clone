import Heroimg from "../assets/Hero.png"

export default function Hero(){
    return(
        <div className="herosection">
            <div className="imgSection">
                <img src={Heroimg} alt="image" className="imagehero"/>
            </div>
            <div className="wordSection">
                <h1 className="HeroHead">Online Experiences</h1>
                <p className="HeroPara">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </div>
    );
};