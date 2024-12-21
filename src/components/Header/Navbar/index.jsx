import "./navbar.css"
import {useState} from "react"
import MenuIcon from "../../../assets/header/MenuIcon.png"
import CollapseArrow from "../../../assets/header/CollapseArrow.png"
const Navbar=()=>{
    const [sideBar,setSideBar]=useState(false);
    return(
        <div className="navbar">
            <div className="title">
                <text>ENCANTO</text>
            </div>
            <div className="navigation">
                <div>
                    <a href="/" onClick={{}}><button>HOME</button></a>
                </div>
                <div>
                    <a href="/events"><button>EVENTS</button></a>
                </div>
                <div>
                    <a href="/contact-us"><button>CONTACT US</button></a>
                </div>
                <div>
                    <a href="/about-us"><button>ABOUT US</button></a>
                </div>
                <div>
                    <a href="/blog"><button>BLOG</button></a>
                </div>
            </div>
            <div className="optional">
                <img src={MenuIcon} onClick={()=>{setSideBar(true)}}/>
            </div>
            {sideBar?
            <>
            <div className="sidebar"> 
                <div>
                    <text><a href="/">Home</a></text>
                </div>
                <div>
                    <text><a href="/events">Events</a></text>
                </div>
                <div>
                    <text><a href="/contact-us">Contact Us</a></text>
                </div>
                <div>
                    <text><a href="/about-us">About Us</a></text>
                </div>
                <div>
                    <text><a href="/">Blog</a></text>
                </div>
            </div>
            <div class="collapse-sidebar" onClick={()=>{setSideBar(false)}} style={{fontFamily:"sans-serif"}}>
                    {"x"}
            </div>
            </>
            :
            null
            }
        </div>
    )
}
export default Navbar;