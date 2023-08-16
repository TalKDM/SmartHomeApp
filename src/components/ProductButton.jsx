import React, { useContext, useEffect } from 'react'
import { Context } from '../context/Context'
import { useParams } from 'react-router-dom'

const ProductButton = () => {
    const { btnColor, products, roomsData, roomsProducts, setBtnColor, onoff} = useContext(Context)
    const { roomName } = useParams()
    const room = roomsData.find(obj => obj.roomName === roomName)
    const whatProd = room.products.map((val) => {
      return val.product
    })

    const onOffProduct = () => {
        const room = roomsData.find(obj => obj.roomName === roomName)
        setBtnColor(btnColor === "red" ? "green" : "red");
        room.products.map((val) => {
          val.status = btnColor
          console.log(val);
        })
      }
  




  return (
    <div className='productsDiv'>
        {whatProd < 1 ?
        <h1></h1> 
        : room.products.map((val,index) => {
            return (
                <>
                <button  key={index} style={{backgroundColor:btnColor}}>{val.product}</button>
                </>
            )
        }) }
    </div>
  )
}

export default ProductButton