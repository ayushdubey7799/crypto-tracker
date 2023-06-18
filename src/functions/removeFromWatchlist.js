import {toast} from "react-toastify";

export const removeFromWatchlist = (id) => {
    
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const coins = currentUser.watchlistCoins.filter((coin) => coin !== id);
    currentUser.watchlistCoins = coins;
    
    localStorage.setItem('currentUser',JSON.stringify(currentUser));

    let userArray = JSON.parse(localStorage.getItem('userArray'));
    userArray = userArray.filter((user) => user.email !== currentUser.email);
    const newUserArray = [...userArray,currentUser];
    localStorage.setItem('userArray',JSON.stringify(newUserArray));
    toast.success("Removed Successfully",{autoClose: 3000});
}