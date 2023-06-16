import React,{useState,useEffect, useContext} from 'react';
import Switch from '@mui/material/Switch';
import {ThemeContext} from './ThemeContext';

export default function ThemeToggle({theme, toggleTheme,children}) {
   

    

  
  console.log(theme);
  return (
    <div>
      <Switch onClick={toggleTheme} theme={theme}/>
      {children}
    </div>
  );
}