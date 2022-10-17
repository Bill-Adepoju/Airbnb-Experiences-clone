import star from "../assets/star.png"
// import dd from "../assets"


export default function Card(props){

    let badgeText;

    if(props.openspots === 0){
        badgeText = "SOLD OUT"
    } else if (props.location == "Online"){
        badgeText = "ONLINE"
    };


    return(

            <div className="card">
                {badgeText && <div className="card-badge">{badgeText}</div>}
                <img src= {`images/${props.coverImg}`} alt="image" className="cardImage" />
                <div className="cardAttr">
                    <img src={star} alt="star" className="starr" />
                    <p  className="rating">{props.stats.rating}</p>
                    <p className="grey reviewcount">({props.stats.reviewCount})</p>
                    <p className="grey country">.{props.location}</p>
                </div>
                <div>
                    <p className="card-title">{props.title}</p>
                    <p><span className="bold  card-price">From ${props.price}</span> / person</p>
                </div>
            </div>
    )
}