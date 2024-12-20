import { useEffect,useRef} from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import MenuCard from "./MenuCard";
import Course from "./Course"
import "./eventmenu.css";

const EventMenu = (props) => {
    const scrollRef=useRef(null);
    useEffect(() => {
        props.setPreview("Corporate Events");
        AOS.init({
            duration: 500, 
        });
    }, []);

    return (
    <div className="menu-container">
        <Course name="Starters" color="yelloworange"/>
        <Course name="Appetizers" color="#f78d4a"/>
        <Course name="Main Course" color="maroon"/>
    </div>
    )
}
export default EventMenu;
