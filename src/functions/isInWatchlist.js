export const isInWatchlist = (id) => {
    const watchlistItems = JSON.parse(localStorage.getItem('watchlist'));
    if(!watchlistItems)return false;
    return watchlistItems.indexOf(id) !== -1;
}