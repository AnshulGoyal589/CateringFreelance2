import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
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
        <>
            <Helmet>
                <title>Premier Catering Services in Delhi - Corporate Events, Weddings & More</title>
                <meta name="description" content="Top-rated catering services in Delhi for corporate events, weddings, birthdays, and social gatherings. Offering customized menus with authentic Indian and international cuisine." />
                <meta name="keywords" content="delhi catering, corporate catering delhi, wedding catering services, birthday party catering, event catering delhi, international cuisine delhi" />
                <link rel="canonical" href="https://yourwebsite.com/events" />
                <meta property="og:title" content="Premier Catering Services in Delhi - Corporate Events, Weddings & More" />
                <meta property="og:description" content="Top-rated catering services in Delhi for corporate events, weddings, birthdays, and social gatherings. Offering customized menus with authentic Indian and international cuisine." />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_IN" />
            </Helmet>

            <main className="event-container">
                <h1 className="sr-only">Premier Catering Services in Delhi</h1>
                <section className="event-list">
                    <article
                        className="corporate-event"
                        style={{
                            backgroundImage: `url("https://res.cloudinary.com/das5szw5j/image/upload/v1734984113/image_ocmsuo.jpg")`,
                            backgroundSize: '65% 100%',
                        }}
                        data-aos="fade-up"
                    >
                        <div className="placeholder"></div>
                        <div className="auxiliary">
                            <h2>Corporate Events</h2>
                            <div className="description">
                                <p>
                                    We provide premium corporate catering services in Delhi NCR, specializing in conferences, team meetings, and corporate parties.
                                    <span>
                                        Our expert chefs craft high-quality, diverse menus that accommodate various dietary preferences and ensure a seamless experience.
                                    </span>
                                </p>
                            </div>
                        </div>
                    </article>

                    <article
                        className="social-event"
                        style={{ backgroundImage: `url(https://res.cloudinary.com/das5szw5j/image/upload/v1734984288/image_vbv5ns.jpg)` }}
                        data-aos="fade-up"
                    >
                        <div className="circle">
                            <h2>Social Gatherings</h2>
                            <p>
                                Experience Delhi's finest social gathering catering services, offering customized menus that foster connection and celebration with authentic local and international cuisines.
                            </p>
                        </div>
                    </article>

                    <article className="international-event" data-aos="fade-up">
                        <div
                            className="img-backdrop"
                            style={{
                                backgroundImage: `url(https://res.cloudinary.com/das5szw5j/image/upload/a_-90/v1734984480/image_lwboch.jpg)`,
                                backgroundSize: "120% 100%"
                            }}
                        >
                            <h2>International Conventions</h2>
                        </div>
                        <div className="title">
                            <p>
                                Delhi's premier international convention catering service, offering diverse, authentic global cuisines that cater to multinational tastes and preferences.
                            </p>
                        </div>
                    </article>

                    <article
                        className="engagement"
                        style={{ backgroundImage: `url(https://res.cloudinary.com/das5szw5j/image/upload/v1734984212/image_hsjmoo.jpg)` }}
                        data-aos="fade-up"
                    >
                        <div className="simple">
                            <h2>Engagement Ceremonies</h2>
                            <p>
                                Exclusive engagement ceremony catering in Delhi, featuring elegant menus that blend traditional Indian flavors with contemporary cuisine.
                            </p>
                        </div>
                    </article>

                    <article className="birthday" data-aos="fade-up">
                        <div className="image-container">
                            <img 
                                src="https://res.cloudinary.com/das5szw5j/image/upload/a_-90/v1734984546/image_ad3ccr.jpg" 
                                alt="Birthday celebration catering services in Delhi" 
                            />
                        </div>
                        <div className="title">
                            <h2>Birthdays</h2>
                        </div>
                        <div className="color-line"></div>
                        <div className="description">
                            Premium birthday party catering services in Delhi NCR, creating memorable celebrations with custom menus and themed food presentations.
                        </div>
                    </article>

                    <article
                        className="quick-links"
                        style={{ backgroundImage: `url(https://res.cloudinary.com/das5szw5j/image/upload/a_90/a_vflip/v1734984159/image_gfzag8.jpg)` }}
                        data-aos="fade-up"
                    >
                        <p>
                            Delhi's leading wedding catering service, specializing in creating unforgettable culinary experiences with bespoke menus.
                            <span>
                                From elegant cocktail receptions to grand wedding feasts, our expert team ensures perfection in every detail.
                            </span>
                        </p>
                        <h2>Weddings</h2>
                    </article>
                </section>

                <aside className="on-your-right">
                    <div
                        className="quick-links"
                        style={{ backgroundImage: `url(${Table})` }}
                        data-aos="fade-up"
                    >
                        <div className="inner-content">
                            <h2>Event Domains</h2>
                            <p>
                                Comprehensive catering services in Delhi for all event types - corporate functions, weddings, parties, and cultural celebrations.
                            </p>
                        </div>
                    </div>
                    <div
                        className="quick-links"
                        style={{ backgroundImage: `url(https://res.cloudinary.com/das5szw5j/image/upload/a_90/a_vflip/v1734984159/image_gfzag8.jpg)` }}
                        data-aos="fade-up"
                    >
                        <p>
                            Expert wedding catering in Delhi NCR, delivering exceptional culinary experiences for your special day.
                            <span>
                                From traditional Indian cuisine to international delicacies, we create perfect wedding feasts.
                            </span>
                        </p>
                        <h2>Weddings</h2>
                    </div>
                </aside>
            </main>
        </>
    );
};

export default EventHome;