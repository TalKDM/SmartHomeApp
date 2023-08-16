import React, { useContext, useEffect, useState } from 'react'
import { Route, Routes, useParams } from 'react-router-dom'
import Header from '../components/Header'
import '../style/room.css'
import { Context } from '../context/Context'
import ProductSquare from '../components/ProductSquare'
import AddRoom from './AddRoom'
import AddProduct from '../components/AddProduct'
import RoomNameP from '../assets/img/RoomName.png'
import RoomTypeP from '../assets/img/RoomType.png'
import ProductButton from '../components/ProductButton'
import { Key } from 'phosphor-react'

const Room = () => {
    const { roomName } = useParams()
    const [showSelect,setShowSelect] = useState(false)
    const {roomsData, productType, setProductType,btnColor} = useContext(Context)
    


    const handleSelect = ()=>{
      setShowSelect(!showSelect)
  }
  const arr = []
  const RanNum = Math.floor(Math.random() * 1000) + 1; 
arr.push(RanNum)
arr.find(x => x === Object.values) 


  const room = roomsData.find(obj => obj.roomName === roomName)
  const whatProd = room.products.map((val) => {
    return val.product
  })


  const checkProductExist = () => {
    if(whatProd.length < 1|| whatProd.length <= 4) {
      return (
        <div className="selectSection">
        <select value={productType} onChange={(e) => setProductType(e.target.value)}>
        <option selected>Choose new product:</option>
        <option>Air conditioner</option>
        <option>Boiler</option>
        <option>Stereo System</option>
        <option>Lamp</option>
        </select>
        <button onClick={() => {addProductToRoom()}}>Add Product</button>
    </div>
      )
    }else if(whatProd.length === 5) {
      return (<h3></h3>)
    }
    }





    const copyProdToLocalStorage = (product) => {
      localStorage.setItem('roomsData', JSON.stringify(product))
    }

    const addProductToRoom = () => {
      const stereo =  whatProd.find(x => x === 'Stereo System')
      const otherRooms = roomsData.filter(obj => obj.roomName !== roomName)
      roomsData.map((val) => {
        if(val.roomName === roomName) {
          if(whatProd.length === 5) {
            alert('Every room can have 5 products max!')
          }
          if(val.products.length < 1 || val.products.length <= 4 ) {
            if(productType === 'Stereo System') {
              if(stereo === undefined) {
                val.products.push({id: RanNum, status:btnColor, product:productType})
                otherRooms.splice(0,0,val)
                localStorage.setItem('roomsData', JSON.stringify(otherRooms))
                handleSelect()
              }else {
                alert('Every room has a limit of 1 stereo system!');
              }
            }else if(val.roomType !== 'Bathroom') {
                if(productType === 'Boiler') {
                  alert('you can add a boiler only in the bathroom')
                }else 
                val.products.push({id: RanNum, status:btnColor, product:productType})
                otherRooms.splice(0,0,val)
                localStorage.setItem('roomsData', JSON.stringify(otherRooms))
                handleSelect()
            }else {
              val.products.push({id: RanNum, status:btnColor, product:productType})
              otherRooms.splice(0,0,val)
              localStorage.setItem('roomsData', JSON.stringify(otherRooms))
              handleSelect()
            }
          }
        }
      })
    }




    const findRoomType = () => {
      const temp = []
      const temp2 = []
      const search = roomsData.find((x) => x.roomName === roomName)
      temp.push(search)
      for(let i = 0; i < temp.length; i++) {
        temp2.push(temp[i].roomType)
      }
      return (
        <p>{temp2}</p>
      )
    }

    // const exactProd = val.find(x => x.id === RanNum) 
    // console.log(exactProd)
    // setBtnColor(btnColor === "red" ? "green" : "red");
    
  //   const btnStatus = (index) => {
  //     roomsData.map((val) => {
  //       if(val.roomName === roomName) {
  //         const findProd = val.products[index].product
  //         console.log(findProd);
  //       }
  //   })
  // }


    




    // const onOffProduct = (index) => { 
    //   const otherRooms = roomsData.filter(obj => obj.roomName !== roomName)
    //     roomsData.map((val) => {
    //     if(val.roomName === roomName) {
    //       const findProd = val.products[index].product
    //       console.log(findProd);
    //       setBtnColor(btnColor === "red" ? "green" : "red");
    //       setProductOne({id: RanNum, status:btnColor, product:findProd})
    //       val.products.splice([index],1,productOne)
    //       otherRooms.splice(0,0,val);
    //       localStorage.setItem('roomsData', JSON.stringify(otherRooms))
    //     }
    //   }) 
    // }

    //     const onOffProduct = (index) => { 
    //   const otherRooms = roomsData.filter(obj => obj.roomName !== roomName)
    //     roomsData.map((val) => {
    //     if(val.roomName === roomName) {
    //       if(val.products[index]) {
    //         const findProd = val.products[index].product
    //         const otherProd = val.products.filter(obj => obj !== val.products[index])
    //         setBtnColor(btnColor === "red" ? "green" : "red");
    //         setProductOne({id: RanNum, status:btnColor, product:findProd})
    //         otherProd.splice(0,0,productOne)
    //         val.products.splice(0,4,otherProd)
    //         console.log(val);
            
    // if(index === index) {
    //   setBtnColor('red')
    // }

            
                        
    //       }


    //     }
    //   }) 
    // }

    const onOffProduct = (index) => {
      roomsData.map((val) => {
        if(val.products[index]) {
          console.log(btnColor[index]);
        }
        

      })
    }




    // setBtnColor(btnColor === true ? false : true);
    // console.log(index);
    // if(btnColor === true) {
    //   return 'red';
    // }else if(btnColor === false) {
    //   return 'green';
    // }





  


  return (
    <div className='mainRoomDiv'>
        <div className="header">
            <Header/>
        </div>
        <div className="roomDetails">
            <h2><img src={RoomNameP} width='80%'/> {roomName}</h2>
            <h2><img src={RoomTypeP} width='80%'/> {findRoomType()} </h2>
        </div>
        <div className="addProdBtn">
          {whatProd.length < 1|| whatProd.length <= 4 ? 
          <button onClick={handleSelect}>Add Product</button>
          : <h2 className='limit'>You reach the limit of products per room!</h2> }
          {showSelect && checkProductExist()}
        </div>
            <div className='productsDiv'>
        {whatProd < 1 ?
        <h1></h1> 
        : room.products.map((val,index) => {
            return (
                <>
                <button className='prodBtn' key={index}>{val.product}</button>
                </>
            )
        }) }
    </div>
    </div>
  )
}

export default Room
