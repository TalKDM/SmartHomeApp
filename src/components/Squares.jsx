import React, { useContext } from 'react'
import { Context } from '../context/Context'
import '../style/squares.css'

const Squares = (props) => {
    const {allRooms, updateRoomList} = useContext(Context);


  return (
    <div>
        <div className="roomSquare">
            {allRooms.map((val,index) => {
                return (
                    <div key={index} className="inRoomSquare" style={{backgroundColor:val.roomColor}}>
                        <button>X</button>
                        <h3>{val.roomName}SSS</h3>
                    </div>
                )
            })}
        </div>

        
    </div>
  )
}

export default Squares