import React, { createContext, useEffect, useState } from 'react';
import { Link, redirect, useNavigate } from 'react-router-dom';
import Squares from '../components/Squares';
import Room from '../pages/Room';
import Noroomsadded from '../assets/img/Noroomsadded.gif'

export const Context = createContext(null);



export const ContextProvider = (props) => {
    const [roomType,setRoomType] = useState('');
    const [roomName,setRoomName] = useState('');
    const [roomColor,setRoomColor] = useState('');
    const [productType,setProductType] = useState('');
    const [newRoom,setNewRoom] = useState({});
    const [btnColor,setBtnColor] = useState('red')
    const [products,setProducts] = useState('')
    const [allRooms,setAllRooms] = useState([]);
    const [threeProdLimit,setThreeProdLimit] = useState([])
    const [productOne,setProductOne] = useState({})
    const [addToProducts,setAddToProducts] = useState([])








    let roomsData = JSON.parse(localStorage.getItem('roomsData'))
    let roomsProducts = JSON.parse(localStorage.getItem('roomsProducts'))


    const checkRoomExist = () => {
      if(roomsData === null) {
        return (
          <div className="noRoomA">
            <img src={Noroomsadded}/>
          </div>
        )
      }else if(roomsData !== null) {
        return (
          <div className="roomSquare">
            {roomsData.map((val,index) => {
              return (
                <>
                <Link to={'/room/'+val.roomName} style={{textDecoration:'none'}}>
                <div key={index} className="inRoomSquare" style={{backgroundColor:val.roomColor}} >
                <h3>{val.roomName}</h3>
            </div>
            </Link>
            </>
              )
            })}
          </div>
        )
      }
    }


    const addNewRoom = (insertNewR) => {
      setAllRooms([...allRooms, insertNewR])
    }

    const copyToLocalStorage = (room) => {
      localStorage.setItem('roomsData', JSON.stringify(room))
    }

    const createLocalRooms = () => {
      if(roomsData === null) {
        copyToLocalStorage([{roomType:roomType, roomName:roomName, roomColor:roomColor, products:[]}])
      }else {
        copyToLocalStorage([...roomsData, ({roomType:roomType, roomName:roomName, roomColor:roomColor, products:[]})])
      }
    }



    const createRoom = () => {
        if(roomName < 1) {
            alert('ERROR:The room name should be greater than one character!')
            window.location.href = '/'
        }else {
            setNewRoom({roomType,roomName,roomColor})
            addNewRoom({roomType:roomType, roomName:roomName, roomColor:roomColor, products:[]})
            createLocalRooms()
            setInterval(function () {window.location.href = '/'}, 200)
          }
        }


        const addProd = (newProduct) => {
          setThreeProdLimit([...threeProdLimit, newProduct])
        }

        const copyProdToLocalStorage = (product) => {
          localStorage.setItem('roomsData', JSON.stringify(product))
        }

        const createLocalProducts = () => {
          if(products === null) {
            copyProdToLocalStorage([{productName:products}])
          }else {
            copyProdToLocalStorage([...products, ({productName:products})])
          }

        }


        const addProductToState = () => {
          setProducts({productType}) 
        }


    const contextValue = {setRoomColor, roomColor, setRoomName, roomName, createRoom, setRoomType,
       roomType, setAllRooms, allRooms, checkRoomExist, addProductToState, 
       createRoom, roomsData, products, 
       setProducts, setProductType, setBtnColor,
        btnColor, threeProdLimit, setProducts, productType, setProductOne, productOne, roomsProducts, addToProducts, setAddToProducts};

  return (
    <Context.Provider value={contextValue}>
      {props.children}
      </Context.Provider>
  )
}


