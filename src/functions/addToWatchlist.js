import {toast} from "react-toastify";

export const addToWatchlist = (id) => {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(!currentUser?.name){
        toast.error("Log in to add to watchlist");
        return false;
    }
    console.log(currentUser);
    let watchlistItems = currentUser.watchlistCoins;
    let newWatchlistItems = [...watchlistItems,id];
    currentUser.watchlistCoins = newWatchlistItems;
    localStorage.setItem('currentUser',JSON.stringify(currentUser));

    let userArray = JSON.parse(localStorage.getItem('userArray'));

    userArray = userArray.filter((user) => user.email !== currentUser.email);
    const newUserArray = [...userArray,currentUser];
    localStorage.setItem('userArray',JSON.stringify(newUserArray));
    toast.success("Added to watchlist")
    return true;
}