import React,{useState} from 'react'
import "./style.css"

function CoinInfo({heading,desc}) {
  const [flag,setFlag] = useState(false);


  const shortDesc = desc.slice(0,400) + "<span style='color: var(--grey)'> Read More...</span>";
  const longDesc = desc + "<span style='color: var(--grey)'> Read Less...</span>";


  return (
    <div className='grey-wrapper'>
      <h2 className='coin-info-heading'>{heading}</h2>
      { desc.length>400?
      <p 
        className='coin-info-desc'
        onClick={() => setFlag(!flag)}
        dangerouslySetInnerHTML={{__html: !flag?shortDesc:longDesc}}
      ></p>
      :
      <p 
      className='coin-info-desc'
      dangerouslySetInnerHTML={{__html:desc}}></p>
     }
    </div>
  )
}

export default CoinInfo
