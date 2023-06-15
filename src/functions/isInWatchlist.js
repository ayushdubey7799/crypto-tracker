export const isInWatchlist = (id) => {
    const watchlistItems = JSON.parse(localStorage.getItem('currentUser'))?.watchlistCoins;
    if(!watchlistItems)return false;
    return watchlistItems.indexOf(id) !== -1;
}