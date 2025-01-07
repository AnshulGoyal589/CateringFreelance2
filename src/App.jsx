import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from "./pages/Home/index.jsx"
import EventHome from "./pages/Events/index.jsx"
import Header2 from "./components/Header/index.jsx"
import Footer from "./components/Footer/index.jsx"
import {useState} from "react"
import './index.css'
import AboutUs from "./pages/AboutUs"
import ContactUs from './pages/ContactUs'
import EventMenu from "./pages/EventMenu"
const App=()=>{
    const [pageData,setPageData]=useState("");
    return (
        <div className="max-w-screen overflow-x-hidden min-h-screen flex flex-col font-inter">
        <Header2 className="w-full" page={pageData}/>
        <Router>
            <Routes>
                <Route path="/" element={<Home setPreview={setPageData}/>} />
                <Route path="/events" element={<EventHome setPreview={setPageData}/>}/>
                <Route path="/about-us" element={<AboutUs setPreview={setPageData}/>}/>
                <Route path="/contact-us" element={<ContactUs setPreview={setPageData}/>}/>
                <Route path="/corporate-event" element={<EventMenu setPreview={setPageData} eventType="Corporate Events"/>}/>
                <Route path="/social-event" element={<EventMenu setPreview={setPageData} eventType="Social Events"/>}/>
                <Route path="/international-event" element={<EventMenu setPreview={setPageData} eventType="International Events"/>}/>
            </Routes>
        </Router>
        <div>
        <Footer/>
        </div>
        </div>
    )
}
export default App;