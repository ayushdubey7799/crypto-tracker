import React,{useState} from "react";
import "./style.css"
import TemporaryDrawer from "./drawer";
import Button from "../Button";
import { Link } from "react-router-dom";
import Authentication from "../../LandingPage/AuthenticationComponent.js";


const Header = () => {
    const [signUpOpen, setSignupOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);

   const handleSignupOpen = () => setSignupOpen(true);
   const handleSignupClose = () => setSignupOpen(false);

   const handleLoginOpen = () => setLoginOpen(true);
   const handleLoginClose = () => setLoginOpen(false);


   const currentUser = JSON.parse(localStorage.getItem('currentUser'));


    return <div className="navbar">
        <h1>CryptoTracker<span style={{color:"var(--blue)"}}>.</span></h1>
        <div className="links">
            <Link to="/">
                <p className="link">Home</p>
            </Link>
            <Link to="/compare">
                <p className="link">Compare</p>
            </Link>
            <div>
                <p className="link" onClick={handleSignupOpen}>SignUp</p>
                <Authentication open={signUpOpen} handleClose={handleSignupClose} handleOpen={handleSignupOpen} type={'signup'}/>
            </div>
            <div>
                <p className="link" onClick={handleLoginOpen}>LogIn/LogOut</p>
                <Authentication open={loginOpen} handleClose={handleLoginClose} handleOpen={handleLoginOpen} type={'login'}/>
            </div>
            <Link to="/dashboard">
                <Button 
                   text={"Dashboard"} 
                   onClick={() => {console.log("btn-clicked")}}/>
            </Link>
            {currentUser.name?
               (<Link to="/watchlist">
               <Button 
                  text={"Watchlist"} 
                  onClick={() => {console.log("btn-clicked")}}/>
           </Link>)
            :
            ("")   
        }
            
        </div>
        <div className="mobile-drawer">
        <TemporaryDrawer />
        </div>
    </div>
}

export default Header;