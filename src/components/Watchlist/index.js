import React, { useState,useEffect } from 'react'
import Header from '../Common/Header'
import BackToTop from '../Common/BackToTop'
import TabsComponent from '../Dashboard/Tabs'
import Loader from '../Common/Loader'
import { get100Coins } from '../../functions/get100Coins'
import { removeFromWatchlist } from '../../functions/removeFromWatchlist'
import "./style.css";

function Watchlist() {
    const [isLoading,setIsLoading] = useState(false);
    // const [updateToggle,setUpdateToggle] = useState(true);
    const [watchlistCoins,setWatchlistCoins] = useState([]);

    const watchlist = JSON.parse(localStorage.getItem('currentUser')).watchlistCoins;
    useEffect(() => {
        getData();
      },[]);
    
      const getData = async () => {
        setIsLoading(true);
        let myCoins = await get100Coins();
            if(myCoins){
            setWatchlistCoins(myCoins.filter((coin) => watchlist.indexOf(coin.id) !== -1));
            setIsLoading(false)   
           }
      }

      const handleRemove = (event,id) => {
        event.preventDefault();
        if(!window.confirm("Are you sure you want to remove this coin ?"))return;
        setWatchlistCoins(watchlistCoins.filter((coin) => coin.id!==id));
        event.preventDefault();
        removeFromWatchlist(id);
      }
    return (
        <div>
            <Header />
            <BackToTop />
            {isLoading ? <Loader /> : watchlistCoins.length>0?
            (<TabsComponent coins={watchlistCoins} forWatchlist={true} handleRemove={handleRemove}/>)
            :
            (<div className='empty'><h1>Your Watchlist is Empty.</h1></div>)
            }
        </div>
    )
}

export default Watchlist


