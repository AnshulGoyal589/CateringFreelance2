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
    const eventDetails={
        "International Events":{
            main:
            `Our global reach and unwavering dedication to excellence ensure a seamless and memorable\n dining experience for every occasion, no matter the location.
The Savoury Soiree is proud to cater for prestigious international events, including:`,
special:`-JSW PAINTS corporate catering at Hyatt Regency,\n Sydney, Australia| - ASIAN PAINTS coporate catering in Bali, Indonesia| -JSW PAINTS corporate catering in Budapest, Hungary`
    }
    ,        "Social Events":{
        main:
        `The Savoury Soiree excels in catering for social gatherings, bringing people together over exceptional cuisine. 
Whether it's a casual get-together, a family reunion, or a community event, we create an inviting atmosphere with our thoughtfully crafted menus. 
Our team ensures every detail, from flavorful dishes to seamless service, is perfect, allowing you to focus on connecting with your guests. 
No matter the size or theme of your gathering, we are here to make it a truly delightful and memorable experience.`,
special:``
},
"Corporate Events":{
    main:`The Savoury Soiree excels in providing exceptional catering for corporate events, offering personalized menus for occasions such as product launches, annual conferences, and executive meetings. We ensure that every detail is catered to, delivering a seamless dining experience. Our commitment to quality and professionalism makes us the ideal partner for your corporate events, leaving a lasting impression on every guest.`,
    special:''
},
 "Wedding Events":{
    main:`The Savoury Soiree specializes in creating unforgettable dining experiences for weddings. From intimate ceremonies to grand celebrations, we offer personalized menus that cater to every couple's unique style and preferences. Our commitment to excellence ensures that each dish served is a perfect complement to your special day, leaving a lasting impression on you and your guests.`,
    special:''
 }  , 
 "Engagement Events":{
    main:`The Savoury Soiree takes pride in offering exceptional catering for engagement celebrations. Whether it's an intimate gathering or a lavish party, we craft personalized menus that reflect your love story and taste. Our attention to detail and commitment to quality ensure that every bite is as memorable as the occasion itself, making your engagement a truly special event.`,
    special:''
 },
 "Birthday Events":{
    main:`The Savoury Soiree brings exceptional catering to birthday celebrations of all sizes. Whether it's a milestone birthday or a casual get-together, we create customized menus that delight guests and reflect the birthday person’s taste. From fun appetizers to indulgent desserts, our dedication to quality and flavor ensures your celebration is memorable and stress-free.`,
    special:''
 }
}
console.log(eventDetails[props.eventType].special.split("|"))
    return (
    <div className="menu-container"
    >
        <div 
        style={{
            marginBottom:"-5%", overflow:"hidden",
            display:"flex", alignItems:"center",justifyContent:"center",height:"250px",width:"100%",backgroundImage:"url('MenuTextBorder.png')", backgroundSize:"100%"}}>
           <p className="gold-lustrous-text">
           <p style={{fontFamily:"roboto"}}>{eventDetails[props.eventType].main}</p>
        <pre style={{fontFamily:"roboto",display:"flex",justifyContent:"center",paddingLeft:"0"}} >{(eventDetails[props.eventType].special.split("|")).map((e)=>{
            return (
                <>
                {e}
                <br/>
                </>
            )
        })}</pre>
           </p>
        </div>
        <Course  name="Starters" color="yelloworange"/>
        <Course  name="Appetizers" color="#f78d4a"/>
        <Course  name="Main Course" color="maroon"/>
    </div>
    )
}
export default EventMenu;
