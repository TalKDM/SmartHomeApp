import React, { useContext, useEffect, useState } from 'react'
import Logo from '../assets/img/Logo.png'
import Noroomsadded from '../assets/img/Noroomsadded.gif'
import {PlusCircle} from 'phosphor-react'
import '../style/homepage.css'
import { Link } from 'react-router-dom'
import Squares from '../components/Squares'
import { Context } from '../context/Context'

export const Homepage = () => {
    const {checkRoomExist} = useContext(Context);




  return (
    <div className='homeMain'>
        <div className="logoDiv">
            <img src={Logo} />
        </div>
        <div className="btn">
            <Link to='/addRoom'>
            <PlusCircle size={100} color="#5b2f2f" />
            </Link>
        </div>
        <div className="rooms">
            {checkRoomExist()}
  
        </div>
    </div>
  )
}
