import "./header.css"
import Navbar from "./Navbar"
import Details from "./Details"
import Preview from "./Preview"
const Header=(props)=>{
    return (
        <div className="header">
            {/* <Details/> */}
            <Navbar/>
            <Preview page={props.page}/>
        </div>
    )
}
export default Header;