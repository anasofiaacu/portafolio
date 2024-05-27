import React from 'react'
import "../css/Footer.css"
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";



const Footer = () => {
  return (
    <> 
     
    <div className='footer'>
      <h4>Mis redes sociales</h4>

      <div className='facebook'>
        <a href="https://www.facebook.com/aniitaa.acuna/" target='_vblank'>
          <FaFacebook style={{ width: "30px", height: "30px", color:"black" }} />
          {' '}</a>
      </div>
      <div className='insta'>
        <a href="https://www.instagram.com/anasofia.acu?igsh=MWdsaTdoeTg3Znd1bw==" target='_vblank'>
          <FaInstagramSquare style={{width: "30px", height: "30px", color: "black"}} />
          {' '}</a>
      </div>

    </div>
    
    </>
  )
}

export default Footer