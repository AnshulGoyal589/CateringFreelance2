import "./details.css"
import LocationIcon from "../../../assets/header/LocationIcon.png"
import PhoneIcon from "../../../assets/header/PhoneIcon.png"
import MailIcon from "../../../assets/header/MailIcon.png"
import XIcon from "../../../assets/header/XIcon.png"
import FacebookIcon from "../../../assets/header/FacebookIcon.png"
import InstagramIcon from "../../../assets/header/InstagramIcon.png"
const Details=()=>{
    return (
        <div className="details">
            <div className="contact-details">
                <div>
                    <img src={LocationIcon}/>
                    <text>211, Second Floor, Ashirwad Complex, Block D, Green Park, New Delhi 110016</text>
                </div>
                <div>
                    <img src={PhoneIcon}/>
                    <text>+91 9879988322</text>
                </div>
                <div>
                    <img src={MailIcon}/>
                    <text>caterers@savourysoiree.com</text>
                </div>
            </div>
            <div className="links">
            <img src={FacebookIcon}/>
            <img src={XIcon}/>
            <img src={InstagramIcon}/>
            </div>
        </div>
    )
}
export default Details;