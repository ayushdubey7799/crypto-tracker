import {useState,useEffect} from 'react';
import Drawer from '@mui/material/Drawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton, Switch } from '@mui/material';
import { Link } from 'react-router-dom';
import Authentication from '../../LandingPage/AuthenticationComponent.js';


export default function TemporaryDrawer() {
  const [open, setOpen] = useState(false);
  const [signUpOpen, setSignupOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [toggle,setToggle] = useState(false);
  const [isLight,setIsLight] = useState(JSON?.parse(localStorage.getItem('mode'))==='light'?true:false);


 const handleSignupOpen = () => setSignupOpen(true);
 const handleSignupClose = () => setSignupOpen(false);

 const handleLoginOpen = () => setLoginOpen(true);
 const handleLoginClose = () => setLoginOpen(false);

  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const toggleTheme = () => {
    setToggle(!toggle);
  };
   
   const applyTheme = () => {
    setIsLight(!isLight);
    let currentTheme = JSON.parse(localStorage.getItem('mode'));
    currentTheme = currentTheme=='dark'?'light':'dark';
    let themeToBeRemoved = currentTheme=='dark'?'light':'dark';
    document.body.classList.remove(themeToBeRemoved);
    document.body.classList.add(currentTheme);
    localStorage.setItem('mode',JSON.stringify(currentTheme));
  };
 

  useEffect(() => {
    let currentTheme = JSON.parse(localStorage.getItem('mode'));
    
    if(!currentTheme)localStorage.setItem('mode',JSON.stringify('dark'));
    console.log(isLight);
  }, []);

  useEffect(() => {
    applyTheme();
  }, [toggle]);

  
  return (
    <div>
          <IconButton onClick={() => setOpen(true)}><MenuRoundedIcon className='link'/></IconButton>
          <Drawer
            anchor={"right"}
            open={open}
            onClose={() => setOpen(false)}
          >
            <div className='drawer-div'>
            <Link to="/"><p className="link">Home</p></Link>
            <Link to="/compare"><p className="link">Compare</p></Link>
            <Link to="/dashboard"><p className="link">Dashboard</p></Link>
            {currentUser?.name &&
               (<Link to="/watchlist">
              <p className="link">Watchlist</p>
           </Link>)   
        }
         <div>
                <p className="link" onClick={handleSignupOpen}>SignUp</p>
                <Authentication open={signUpOpen} handleClose={handleSignupClose} handleOpen={handleSignupOpen} type={'signup'}/>
            </div>
            <div>
                <p className="link" onClick={handleLoginOpen}>LogIn/LogOut</p>
                <Authentication open={loginOpen} handleClose={handleLoginClose} handleOpen={handleLoginOpen} type={'login'}/>
            </div>
            <Switch onClick={toggleTheme} defaultChecked={isLight}/>
            </div>
          </Drawer>
       
    </div>
  );
}