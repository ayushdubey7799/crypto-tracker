import React,{useState} from 'react'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import Tooltip from '@mui/material/Tooltip';
import {motion} from 'framer-motion';
import { convertNumber } from '../../../functions/convertNumbers';
import "./style.css";
import { Link } from 'react-router-dom';
import BookmarkAddRoundedIcon from '@mui/icons-material/BookmarkAddRounded';
import BookmarkAddedRoundedIcon from '@mui/icons-material/BookmarkAddedRounded'; import { IconButton } from '@mui/material';
import BookmarkRemoveRoundedIcon from '@mui/icons-material/BookmarkRemoveRounded';
import { addToWatchlist } from '../../../functions/addToWatchlist';
import { isInWatchlist } from '../../../functions/isInWatchlist';

function List({coin,key,forWatchlist,handleRemove}) {
    const [addedToWatchlist, setAddedToWatchlist] = useState(isInWatchlist(coin.id));

    const handleAddToWatchlist = (event) => {
        event.preventDefault();
        if(addedToWatchlist)return;
        addToWatchlist(coin.id);
        setAddedToWatchlist(true);
    }

   

  return (
    <Link to={`/coin/${coin.id}`}>

    <motion.tr 
        className='list-row'
        initial={{opacity:0, x: -150}}
        whileInView={{opacity:1, x: 0}}
        transition={{duration: 1, delay:(key+1)*0.1}}>
           <Tooltip title="Logo">
                <td className='td-image list-sm'>
                    <img src={coin.image} className='coin-logo' alt='i' />
                </td>
                </Tooltip>
                <Tooltip title="Coin Info">
                <td>
                <div className='name-col'>
                    <p className='coin-symbol list-sm'>{coin.symbol}</p>
                    <p className='coin-name list-sm'>{coin.name.length>8?coin.name.slice(0,8)+"...":coin.name}</p>
                </div>
                </td>
                </Tooltip>
                <Tooltip title="Price Change in 24Hrs">
            {coin.price_change_percentage_24h > 0 ?
                (             
 
                <td>
                <div className='chip-flex list-chip-flex'>
                    <div className='price-chip list-sm'>
                        +{coin.price_change_percentage_24h.toFixed(2)}%
                    </div>
                    <div className='icon-chip td-icon'>
                        <TrendingUpRoundedIcon />
                    </div>
                 </div>
                 </td> )         
                :
                (             
                <td><div className='chip-flex list-chip-flex'>
                    <div className='price-chip chip-red list-sm'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                    <div className='icon-chip chip-red td-icon'><TrendingDownRoundedIcon /></div>
                    </div>
                </td>)
            }
            </Tooltip>
                <Tooltip title="Current Price">

                <td className='coin-price td-center-align list-sm'
                    style={{
                        color: coin.price_change_percentage_24h < 0
                            ? "var(--red)"
                            : "var(--green)"
                    }}
                >
                    ${coin.current_price.toLocaleString()}
                </td>
                </Tooltip>
                <Tooltip title="Total Volume">

                <td className='total-volume td-right-align td-total-volume'>
                    ${coin.total_volume.toLocaleString()}
                </td>
                </Tooltip>
                <Tooltip title="Market Cap">

                <td className='total-volume td-right-align desktop-td-mkt'>
                   ${coin.market_cap.toLocaleString()}
                </td>
                </Tooltip>
                <Tooltip title="Market Cap">
                <td className='mobile-td-mkt list-sm'>
                   ${convertNumber(coin.market_cap)}
                </td>
                </Tooltip>
                <Tooltip title="Save to WatchList">
                <td className='mark'>
                {
                        forWatchlist?
                           (<IconButton onClick={(event) => handleRemove(event,coin.id)} >
                           <BookmarkRemoveRoundedIcon style={{ color: 'var(--blue)' }}/>
                        </IconButton>)
                           :
                           (<IconButton onClick={handleAddToWatchlist} >
                               {addedToWatchlist ?
                                  <BookmarkAddedRoundedIcon style={{ color: 'var(--blue)',fontSize: '2rem' }} />
                                  :
                                  <BookmarkAddRoundedIcon style={{ fontSize: '2rem' }} />
                               }
                            </IconButton>)
                    }

                </td>
                </Tooltip>
    </motion.tr>
    </Link>
  )
}

export default List
