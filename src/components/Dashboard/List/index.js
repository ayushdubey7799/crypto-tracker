import React from 'react'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import Tooltip from '@mui/material/Tooltip';
import { convertNumber } from '../../../functions/convertNumbers';
import "./style.css";
import { Link } from 'react-router-dom';

function List({coin}) {

  return (
    <Link to={`/coin/${coin.id}`}>

    <tr className='list-row'>
           <Tooltip title="Logo">
                <td className='td-image'>
                    <img src={coin.image} className='coin-logo' alt='i' />
                </td>
                </Tooltip>
                <Tooltip title="Coin Info">
                <td>
                <div className='name-col'>
                    <p className='coin-symbol list-sm-font'>{coin.symbol}-USD</p>
                    <p className='coin-name'>{coin.name}</p>
                </div>
                </td>
                </Tooltip>
                <Tooltip title="Price Change in 24Hrs">
            {coin.price_change_percentage_24h > 0 ?
                (             
 
                <td>
                <div className='chip-flex list-chip-flex'>
                    <div className='price-chip list-sm-font'>
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
                    <div className='price-chip chip-red list-sm-font'>{coin.price_change_percentage_24h.toFixed(2)}%</div>
                    <div className='icon-chip chip-red td-icon'><TrendingDownRoundedIcon /></div>
                    </div>
                </td>)
            }
            </Tooltip>
                         <Tooltip title="Current Price">

                <td className='coin-price td-center-align list-sm-font'
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

                <td className='mobile-td-mkt list-sm-font'>
                   ${convertNumber(coin.market_cap)}
                </td>
                </Tooltip>
    </tr>
    </Link>
  )
}

export default List
