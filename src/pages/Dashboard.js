import React from 'react'
import Header from '../components/Common/Header'
import TabsComponent from '../components/Dashboard/Tabs'
import { useState,useEffect } from 'react'
import Search from '../components/Dashboard/Search';
import PaginationControlled from '../components/Dashboard/Pagination';
import Loader from '../components/Common/Loader';
import BackToTop from '../components/Common/BackToTop';
import { get100Coins } from '../functions/get100Coins';
import Footer from '../components/Common/Footer';

function Dashboard() {
  const [coins, setCoins] = useState([]);
  const [paginatedCoins,setPaginatedCoins] = useState([]);
  const [search,setSearch] = useState("");
  const [page,setPage] = useState(1);
  const [isLoading,setIsLoading] = useState(true);

  const handlePageChange = (event,value) => {
        setPage(value);
        var previousIIndex = (value-1) * 10;
        setPaginatedCoins(coins.slice(previousIIndex, previousIIndex+10));
  }

  const onSearchChange = (e) => {
      setSearch(e.target.value);
  }

  var filteredCoins = coins.filter((coin) => { 
      return coin.name.toLowerCase().includes(search.toLowerCase())
          || coin.symbol.toLowerCase().includes(search.toLowerCase())
    }
  )

  
  useEffect(() => {
    getData();
  },[]);

  const getData = async () => {
    setIsLoading(true);
    let myCoins = await get100Coins();
    // myCoins = setWatchlist(myCoins);
    if(myCoins){
    setCoins(myCoins);
    setPaginatedCoins(myCoins.slice(0,10));
    setIsLoading(false)   
  }
  }


  return (
    <div>
      <Header/>
      <BackToTop/>
      {isLoading?<Loader/>:
      <>
     <Search search={search} onSearchChange={onSearchChange}/>
     <TabsComponent coins={search? filteredCoins : paginatedCoins} forWatchlist={false}/>
     {!search && <PaginationControlled page={page} handlePageChange={handlePageChange}/>}
     <Footer/>
     </>
     }
    </div>
  )
}

export default Dashboard
