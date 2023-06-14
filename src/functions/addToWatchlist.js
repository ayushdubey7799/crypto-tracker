export const addToWatchlist = (id) => {
   
    let watchlistItems = JSON.parse(localStorage.getItem('watchlist'));
    let newWatchlistItems = [];
    if(watchlistItems)newWatchlistItems = [...watchlistItems,id];
    localStorage.setItem('watchlist',JSON.stringify(newWatchlistItems));
}