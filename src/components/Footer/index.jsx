import "./footer.css"
import CallIcon from "../../assets/header/CallIcon.png"
import FooterLocation from "../../assets/header/FooterLocation.png"
import FooterMail from "../../assets/header/FooterMail.png"
const Footer=()=>{
    return (
        <footer className="footer">
            <div className="logo">
                <img src="https://res.cloudinary.com/das5szw5j/image/upload/v1735015555/image_erehmq.jpg"/>
                <div className="hr"></div>
            </div>
            <div class="external-links">
                <h1>Quick Links:</h1>
                <ul className="fast-links">
                    <li>Home</li>
                    <li>Events</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Blog</li>
                    <li>External Site Link 1</li>
                </ul>
            </div>
            <div className="external-links">
                <h1>Services:</h1>
                <ul className="fast-links">
                    <li>Weddings</li>
                    <li>Social Events</li>
                    <li>Corporate Events</li>
                    <li>International Events</li>
                    <li>Engagements</li>
                    <li>Birthdays</li>
                </ul>
            </div>
            <div class="contact-us">
                <h1>Contact Us:</h1>
                <ul>
                    <li><img src={CallIcon}/>+91-9816054322   +91-9220444322</li>
                    <li><img src={FooterMail}/>contact@gmail.com</li>
                    <li><img src={FooterLocation}/>
                    211, Second Floor, Ashirwad Complex,
                    <br></br>
                     Block D, 
                     Green Park, New Delhi-110016
                    </li>
                </ul>
                <div class="map"> 
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3574.6171383154783!2d77.09415439771416!3d28.505636631841185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1938456789c7%3A0x45a757aa37e73026!2sAMBIENCE%20MALL%2C%20GURUGRAM!5e0!3m2!1sen!2sin!4v1734629259691!5m2!1sen!2sin" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </footer>
    )
}
export default Footer;