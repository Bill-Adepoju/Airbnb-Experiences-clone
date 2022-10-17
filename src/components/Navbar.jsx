import AirbnbLogo from "../assets/airbnb1.png"

export default function Navbar(){
    return(
        <nav className="navbarr">
            <img className="logo" src={AirbnbLogo} alt="logo" />
        </nav>
    )
}