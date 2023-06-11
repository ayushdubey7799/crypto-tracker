import "./style.css"
import TemporaryDrawer from "./drawer";
import Button from "../Button";
import { Link } from "react-router-dom";


const Header = () => {
    return <div className="navbar">
        <h1>CryptoTracker<span style={{color:"var(--blue)"}}>.</span></h1>
        <div className="links">
            <Link to="/">
                <p className="link">Home</p>
            </Link>
            <Link to="/compare">
                <p className="link">Compare</p>
            </Link>
            <Link to="/dashboard">
                <Button 
                   text={"Dashboard"} 
                   onClick={() => {console.log("btn-clicked")}}/>
            </Link>
        </div>
        <div className="mobile-drawer">
        <TemporaryDrawer />
        </div>
    </div>
}

export default Header;