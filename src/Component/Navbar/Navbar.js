import React, { useContext } from 'react'
import './Navbar.css'
import logo from  '../../assets/logo.png'
import arrow_icon from '../../assets/arrow_icon.png'
import { CoinContext } from '../../Context/CoinContext'

export default function Navbar() {
  const {setcurrency}=useContext(CoinContext)
  const currencyHandler=(event)=>{
        switch (event.target.value){
          case "usd":{
            setcurrency({name:"usd",symbol:"$"});
            break;
          }
          case "eur":{
            setcurrency({name:"eur",symbol:"€"});
            break;
          }
          case "inr":{
            setcurrency({name:"inr",symbol:"₹"});
            break;
          }
          default:{
            setcurrency({name:"usd",symbol:"$"});
            break;
          }         
        }
  }
  return (
    <>
    <div className="navbar">
    <img className='logo' src={logo} alt="" />
    <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
    </ul>
    <div className="nav-right">
        <select onChange={currencyHandler} >
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="inr">INR</option>
        </select> 
        <button>sign up <img src={arrow_icon} alt="" /></button>
    </div>
    </div>
    <hr />
     </>
  )
}
