export const removeFromWatchlist = (id) => {
    let watchlistItems = JSON.parse(localStorage.getItem('watchlist'));
    watchlistItems = watchlistItems.filter((item) => item!==id );
    localStorage.setItem('watchlist',JSON.stringify(watchlistItems));
}