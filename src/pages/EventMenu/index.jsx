import { useEffect,useRef} from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import Course from "./Course"
import "./eventmenu.css";
const EventMenu = (props) => {
    const scrollRef=useRef(null);
    console.log(props.eventType)
    useEffect(() => {
        props.setPreview(props.eventType);
        AOS.init({
            duration: 500, 
            once:true,
        });
    }, []);

    return (
    <div className="menu-container"
    >
        <div 
        style={{
            marginBottom:"-5%", overflow:"hidden",
            display:"flex", alignItems:"center",justifyContent:"center",height:"250px",width:"100%",backgroundImage:"url('MenuTextBorder.png')", backgroundSize:"100%"}}>
           <p className="gold-lustrous-text">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
             officia deserunt.
           </p>
        </div>
        <Course  name="Starters" color="yelloworange"/>
        <Course  name="Appetizers" color="#f78d4a"/>
        <Course  name="Main Course" color="maroon"/>
    </div>
    )
}
export default EventMenu;
