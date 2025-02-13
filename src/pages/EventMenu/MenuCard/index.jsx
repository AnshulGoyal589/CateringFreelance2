const MenuCard=(props)=>{
    return (
    <div className="menu-card">
        <div className="img-container">
            <img src="./Services.png" alt="service-icon" />
        </div>
        <div className="text-content">
            <h2>{props.name}</h2>
            <p>
                {props.description}
            </p>
            <span>
               {props.price}
            </span>
        </div>
    </div>)
}
export default MenuCard;