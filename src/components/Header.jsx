import React from 'react'
import '../style/header.css'
import {HouseLine} from 'phosphor-react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='mainHead'>
        <div className="title">
          <Link to='/'>
          <h1>Smart Home <HouseLine size={48} color="#0d0707" /></h1> 
          </Link>
        </div>
    </div>
  )
}

export default Header