import { useState } from "react";
import "./navbar.css";
import MenuIcon from "../../../assets/header/MenuIcon.png";
import CollapseArrow from "../../../assets/header/CollapseArrow.png";
import logo from "../../../assets/Logo.png";

const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  
  return (
    <div className="navbar">
      <div className="title flex items-center justify-center space-x-4">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Savoury Soirée Logo"
            className="h-16 w-auto object-contain"
          />
        </div>
        <div className="flex flex-col">
          <span 
            className="text-xl font-bold text-gray-800"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Savoury Soirée
          </span>
          <span 
            className="text-sm text-gray-600"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Fine Dining & Events
          </span>
        </div>
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
        <img src={MenuIcon} onClick={() => { setSideBar(true) }} />
      </div>

      {sideBar ?
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
          <div className="collapse-sidebar" onClick={() => { setSideBar(false) }} style={{ fontFamily: "sans-serif" }}>
            {"x"}
          </div>
        </>
        :
        null
      }
    </div>
  );
};

export default Navbar;