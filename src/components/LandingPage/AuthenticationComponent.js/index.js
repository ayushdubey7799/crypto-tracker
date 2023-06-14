import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import './style.css';
import { addNewUser } from '../../../functions/addNewUser';
import { authenticateUser } from '../../../functions/authenticateUser';
import {toast} from 'react-toastify';


const style = {
    display: "flex",
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    gap: '1rem',
    width: '40%',
    margin: '30px auto',
    bgcolor: 'var(--white)',
    border: '2px solid #000',
    borderRadius: '1rem',
    boxShadow: 24,
    p: 4,
};

export default function Authentication({ open, handleClose, type }) {
    const [user, setUser] = useState({name: "",email: ""})

    const handleInput = (event) => {
        console.log(event.target.name)
        if (event.target.name === "full-name") {
            let name = event.target.value;
            setUser({ ...user, name });
        }

        if (event.target.name === "email") {
            let email = event.target.value;
             setUser({ ...user, email });
        }

    }

    const handleSignUp = (event) => {
        event.preventDefault();
        if (user.email.trim() === '' || !user.email.includes('@')) {
            toast.warn('Please fill valid email')
            return;
        }
        if (user.name.trim() === '') {
            toast.warn('Please fill name field')
            return;
        }
        addNewUser(user,toast);
        setUser({name: "",email: ""});

        handleClose();
        console.log(user);
    }

    const handleLogin = (event) => {
       event.preventDefault();
       if (user.email.trim() === '' || !user.email.includes('@')) {
        toast.warn('Please fill valid email')
        return;
    }
    if (user.name.trim() === '') {
        toast.warn('Please fill name field')
        return;
    }
       if(authenticateUser(user,toast))handleClose();
       setUser({name: "",email: ""});

    }

    const handleLogout = (event) => {
        event.preventDefault();
        localStorage.setItem('currentUser',JSON.stringify(user));
        handleClose();
        toast.success("Successfully Logged Out");
    }


    return (
        <div className='modal-flex'>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className = "auth" sx={style}>
                    {type === 'signup' ?
                        (<form className="signup">
                            <h1>Sign Up</h1>
                            <div className="field">
                                <label>Full Name </label>
                                <input type="text" name="full-name" placeholder="Full Name" onChange={handleInput} />
                            </div>
                            <div className="field">
                                <label>Email </label>
                                
                                <input type="email" name="email" placeholder="Email" onChange={handleInput} />
                                
                            </div>

                            <button className="submit" type="submit" onClick={handleSignUp}>SignUp</button>
                        </form>)
                        :
                        (<form className="login">
                            <h1>Login</h1>
                            <div className="field">
                                <label>Full Name </label>
                                <input type="text" name="full-name" placeholder="Full Name" onChange={handleInput}/>
                            </div>
                            <div className="field">
                                <label>Email </label>
                                <input type="email" name="email" placeholder="Email" onChange={handleInput}/>
                            </div>

                            <button className="submit" type="submit" onClick={handleLogin}>LogIn</button>  
                            <button className="submit logout" type="submit" onClick={handleLogout}>LogOut</button>
                        </form>)}
                </Box>
            </Modal>
        </div>
    );
}
