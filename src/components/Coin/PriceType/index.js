import React, {useState} from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import "./style.css";

export default function TogglePriceType({priceType,handlePriceTypeChange}) {
  

  return (
    <div className='toggle-prices'>
    <ToggleButtonGroup
    sx={{
        "& .Mui-selected": {
            color: "var(--blue) !important"
        },
        borderColor: "var(--blue)",
        border: "unset !important",
        "& .MuiToggleButtonGroup-grouped": {
            borderColor: "unset",
            border: "1px solid !important",
            color: "var(--blue)"
        },
        "& .MuiToggleButton-standard": {
            color: "var(--blue)"
        },

      }}
      value={priceType}
      exclusive
      onChange={handlePriceTypeChange}
      aria-label="text alignment"
    >
      <ToggleButton value="prices" className='toggle-btn'>Price</ToggleButton>
      <ToggleButton value="market_caps" className='toggle-btn'>Market Cap</ToggleButton>
      <ToggleButton value="total_volumes" className='toggle-btn'>Total Volume</ToggleButton>
    </ToggleButtonGroup>
    </div>
  );
}