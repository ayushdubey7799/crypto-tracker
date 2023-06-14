import React, { useState,useEffect } from 'react'
import Header from '../Common/Header'
import BackToTop from '../Common/BackToTop'
import TabsComponent from '../Dashboard/Tabs'
import Loader from '../Common/Loader'
import { get100Coins } from '../../functions/get100Coins'
import { removeFromWatchlist } from '../../functions/removeFromWatchlist'

function Watchlist() {
    const [isLoading,setIsLoading] = useState(false);
    const [updateToggle,setUpdateToggle] = useState(true);
    const [watchlistCoins,setWatchlistCoins] = useState([]);

    const watchlist = JSON.parse(localStorage.getItem('watchlist'));
    useEffect(() => {
        getData();
      },[updateToggle]);
    
      const getData = async () => {
        setIsLoading(true);
        let myCoins = await get100Coins();
            if(myCoins){
            setWatchlistCoins(myCoins.filter((coin) => watchlist.indexOf(coin.id) !== -1));
            setIsLoading(false)   
           }
      }

      const handleRemove = (event,id) => {
        setUpdateToggle(!updateToggle);
        event.preventDefault();
        removeFromWatchlist(id);
      }
    return (
        <div>
            <Header />
            <BackToTop />
            {isLoading ? <Loader /> :
                <TabsComponent coins={watchlistCoins} forWatchlist={true} handleRemove={handleRemove}/>
            }
        </div>
    )
}

export default Watchlist


