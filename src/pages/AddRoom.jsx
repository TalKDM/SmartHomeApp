import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import '../style/addRoom.css'
import { Context } from '../context/Context'
import Squares from '../components/Squares'


const AddRoom = () => {
  const { setRoomName, setRoomColor, createRoom, setRoomType, roomType} = useContext(Context);
  const [openSignIn, setOpenSignIn] = useState(false);


  return (
    <div className='addRoomMain'>
        <div className="title">
        <Header />
        </div>
        <div className="inputs">
            <select value={roomType} onChange={(e) => setRoomType(e.target.value)}>
                <option>Choose new room:</option>
                <option>Bedroom</option>
                <option>Kitchen</option>
                <option>Bathroom</option>
            </select>
            <input type="text" placeholder='Room Name:' maxLength='5' onChange={(e) => (setRoomName(e.target.value))}/>
            <input type="text" placeholder='Room Color:' onChange={(e) => (setRoomColor(e.target.value))}/>
            <button onClick={() => {createRoom()}}>Create Room</button>
        </div>
    </div>
  )
}

export default AddRoom