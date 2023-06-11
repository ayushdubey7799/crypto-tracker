import ArrowUpwardRoundedIcon from '@mui/icons-material/ArrowUpwardRounded'
import React from 'react'
import "./style.css";






function BackToTop() {

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let mybutton = document.getElementById("myBtn");

  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0;
}


  return (
    <div className='back-to-top-btn' id="myBtn" onClick={() => topFunction()}>
      <ArrowUpwardRoundedIcon style={{color: "var(--blue)"}}/>
    </div>
  )
}

export default BackToTop
