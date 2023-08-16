import React, { useContext } from 'react'
import { Context } from '../context/Context'

const AddProduct = () => {
    const {checkProductExist } = useContext(Context);


    
  return (
    <div>
        <div className="selectSection">
            {checkProductExist()}
                </div>
                </div>
                )
            }

export default AddProduct

