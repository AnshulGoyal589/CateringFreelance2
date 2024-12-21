import { useEffect} from "react";
import {useNavigate} from "react-router-dom"
import AOS from "aos";
import "aos/dist/aos.css"; 

import Corporate from "../../assets/events/Corporate.png";
import Table from "../../assets/events/Table.png";
import Yashobhoomi from "../../assets/events/Yashobhoomi.png";
import Social from "../../assets/events/Social.png";
import Engagement from "../../assets/events/Engagement.png";
import Birthday from "../../assets/events/Birthday.png";
import Wedding from "../../assets/events/Wedding.png";
import "./events.css";

const EventHome = (props) => {
    useEffect(() => {
        props.setPreview("Services");
        AOS.init({
            duration: 500, 
        });
    }, []);
    const navigate = useNavigate();
    return (
        <div className="event-container">
            <div className="event-list">
                <div
                    className="corporate-event"
                    style={{ backgroundImage: `url(${Corporate})` }}
                    data-aos="fade-up"
                >
                    <div className="placeholder"></div>
                    <div className="auxiliary">
                        <h2>Corporate Events</h2>
                        <div className="description">
                            <p>
                                qui dolorem ipsum quia dolor sit amet, consectetur,
                                adipisci velit, sed quia non numquam eius modi
                                tempora incidunt ut labore et dolore magnam aliquam
                                quaerat voluptatem. Ut enim ad minima veniam, quis
                            </p>
                        </div>
                        <button onClick={()=>(navigate("/corporate-event"))}>View More</button>
                    </div>
                </div>

                <div
                    className="social-event"
                    style={{ backgroundImage: `url(${Social})` }}
                    data-aos="fade-up"
                >
                    <div className="circle">
                        <h2>Social Gatherings</h2>
                        <p>
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam
                        </p>
                        <button onClick={()=>(navigate("/corporate-event"))}>View More</button>
                    </div>
                </div>

                <div className="international-event" data-aos="fade-up">
                    <div
                        className="img-backdrop"
                        style={{ backgroundImage: `url(${Yashobhoomi})` }}
                    >
                        <h2>International Conventions</h2>
                    </div>
                    <div className="title">
                        <p>
                            qui dolorem ipsum liquam quaerat voluptatem. Ut enim
                            ad minima veniam, quis
                        </p>
                        <button onClick={()=>(navigate("/corporate-event"))}>View More</button>
                    </div>
                </div>

                <div
                    className="engagement"
                    style={{ backgroundImage: `url(${Engagement})` }}
                    data-aos="fade-up"
                >
                    <div className="simple">
                        <h2>Engagement Ceremonies</h2>
                        <p>
                            qui dolorem adipisci velit, sed quia non numquam eius
                            modi temp dolorem ipsum quia dolor sit amet, dolorem
                            ipsum quia dolor sit amet,
                        </p>
                        <button onClick={()=>(navigate("/corporate-event"))}>View More</button>
                    </div>
                </div>

                <div className="birthday" data-aos="fade-up">
                    <div className="image-container">
                        <img src={Birthday} alt="Birthday" />
                    </div>
                    <div className="title">
                        <h2>Birthdays</h2>
                        <button onClick={()=>(navigate("/corporate-event"))}>View More</button>
                    </div>
                    <div className="color-line"></div>
                    <div className="description">
                        qui dolorem adipisci velit, sed quia non numquam eius
                        modi temp dolorem ipsum quia dolor sit amet, dolorem
                        ipsum quia dolor sit
                    </div>
                </div>

                <div
                    className="quick-links"
                    style={{ backgroundImage: `url(${Wedding})` }}
                    data-aos="fade-up"
                >
                    <p>
                        qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora{" "}
                        <span>
                            incidun ci velit, sed quia non numquam eius modi
                            tempora in qui dolorem ipsum quia dolor sit amet,
                            consectetur, adipisci velit, sed quia non numquam
                            eius modi tempora incidun
                        </span>
                    </p>
                    <h1>Weddings</h1>
                </div>
            </div>

            <div className="on-your-right">
                <div
                    className="quick-links"
                    style={{ backgroundImage: `url(${Table})` }}
                    data-aos="fade-up"
                >
                    <div className="inner-content">
                        <h2>Event Domains</h2>
                        <p>
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi tempora
                            incidun
                        </p>
                    </div>
                </div>
                <div
                    className="quick-links"
                    style={{ backgroundImage: `url(${Wedding})` }}
                    data-aos="fade-up"
                >
                    <p>
                        qui dolorem ipsum quia dolor sit amet, consectetur,
                        adipisci velit, sed quia non numquam eius modi tempora
                        incidun ci velit, sed quia non numquam eius modi tempora
                        in qui dolorem ipsum quia dolor sit amet, consectetur
                        cidun
                    </p>
                    <h1>Weddings</h1>
                </div>
            </div>
        </div>
    );
};

export default EventHome;
