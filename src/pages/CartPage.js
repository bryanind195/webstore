import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {FaTrash} from 'react-icons/fa'
import Layout from '../components/Layout'

const CartPage = () => {
    const {cartItems} = useSelector(state=>state.cartReducer);
    const dispatch = useDispatch();
    const deleteFromCart =(product) =>{
        dispatch({ type: "DELETE_FROM_CART" , payload: product });

    };
    return (
        
        <Layout> 

            <table className='table'>
                <thead>
                    <tr>
                        <th>Imagen </th>        
                        <th>Nombre </th>     
                        <th>Precio </th>  
                        <th>Action </th>
                        
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item=>{
                        return <tr>
                                    <td><img src={item.imageURL} height="80" width='80' /> </td>

                                    <td>{item.name} </td>
                                    <td>{item.price} </td>
                                    <td><FaTrash onClick={()=>deleteFromCart(item)} /></td>
                                </tr>
                    } ) }
                </tbody>
            </table>  

        </Layout>
    )
}

export default CartPage
