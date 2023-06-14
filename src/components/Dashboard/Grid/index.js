import React, { useState } from 'react'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import "./style.css"
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import BookmarkAddedRoundedIcon from '@mui/icons-material/BookmarkAddedRounded'; import { IconButton } from '@mui/material';
import BookmarkRemoveRoundedIcon from '@mui/icons-material/BookmarkRemoveRounded';
import { addToWatchlist } from '../../../functions/addToWatchlist';
import { isInWatchlist } from '../../../functions/isInWatchlist';

function Grid({ coin,key,forWatchlist,handleRemove }) {
    const [addedToWatchlist, setAddedToWatchlist] = useState(isInWatchlist(coin.id));

    const handleAddToWatchlist = (event) => {
        event.preventDefault();
        if(addedToWatchlist)return;
        if(addToWatchlist(coin.id))setAddedToWatchlist(true);
    }

    return (
        <Link to={`/coin/${coin.id}`}>
            <motion.div 
               className={`grid-container ${coin.price_change_percentage_24h < 0 && "grid-container-red"}`}
               initial={{opacity:0, y: 50}}
               whileInView={{opacity:1, y: 0}}
               transition={{duration: 0.5, delay:(key)*0.1}}>
                <div className='info-flex'>
                    <img src={coin.image} className='coin-logo' alt='i' />
                    <div className='name-col'>
                        <p className='coin-symbol'>{coin.symbol}-USD</p>
                        <p className='coin-name'>{coin.name}</p>
                    </div>
                    {
                        forWatchlist?
                           (<IconButton onClick={(event) => handleRemove(event,coin.id)} style={{ marginLeft: '3rem' }}>
                           <BookmarkRemoveRoundedIcon style={{ color: 'var(--blue)' }}/>
                        </IconButton>)
                           :
                           (<IconButton onClick={handleAddToWatchlist} style={{ marginLeft: '3rem' }}>
                               {addedToWatchlist ?
                                  <BookmarkAddedRoundedIcon style={{ color: 'var(--blue)',fontSize: '2rem' }} />
                                  :
                                  <BookmarkAddRoundedIcon style={{ fontSize: '2rem' }} />
                               }
                            </IconButton>)
                    }

                </div>
                {coin.price_change_percentage_24h > 0 ?
                    (<div className='chip-flex'>
                        <div className='price-chip'>+{coin.price_change_percentage_24h.toFixed(2)}%</div>
                        <div className='icon-chip'><TrendingUpRoundedIcon /></div>
                    </div>)
                    :
                    (<div className='chip-flex'>
                        <div className='price-chip chip-red'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                        <div className='icon-chip chip-red'><TrendingDownRoundedIcon /></div>
                    </div>)
                }
                <div className='info-container'>
                    <h3 className='coin-price'
                        style={{
                            color: coin.price_change_percentage_24h < 0
                                ? "var(--red)"
                                : "var(--green)"
                        }}
                    >
                        ${coin.current_price.toLocaleString()}
                    </h3>
                    <p className='total-volume'>
                        Total Volume: {coin.total_volume.toLocaleString()}
                    </p>
                    <p className='total-volume'>
                        Market Cap: {coin.market_cap.toLocaleString()}
                    </p>
                </div>
            </motion.div>

        </Link>
    )
}

export default Grid
