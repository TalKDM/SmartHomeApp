import React, { useContext } from 'react'
import { Context } from '../context/Context'
import { useParams } from 'react-router-dom'

const ProductSquare = () => {
  const { roomName } = useParams()
    const { btnColor, products, roomsData, roomsProducts, setBtnColor} = useContext(Context)

    const room = roomsData.find(obj => obj.roomName === roomName)
    const whatProd = room.products.map((val) => {
      return val.product
    })

  





  return (
    <div className="productsDiv">
    {whatProd < 1 ?
    <h1></h1> 
     : room.products.map((val) => {
      return (
        <button style={{backgroundColor:btnColor}}>{val.product}</button>
      )
     }) }
     </div>
  )
}

export default ProductSquare

