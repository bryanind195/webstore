import React, {useState, useEffect} from 'react';
import Layout from '../components/Layout';
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from '../fireConfig';
import {fireproducts} from '../webstore-products';

function Homepage  ()  {

    const [products , setProducts] = useState([])

    useEffect(() => {
        getData()
    }, [])

    async function getData  ()  {
        try {
            const users = await getDocs(collection(fireDB, "products"));
             const productsArray = [];
             users.forEach((doc) => {
                 const obj = {
                     id: doc.id,
                     ...doc.data(),
                 };

                 productsArray.push(obj);
              });

          setProducts(productsArray)    
        } catch (error) {
            console.log(error)
        }        
    }

     
    return (
        <Layout>
            <div className= "container">

                <div className= "row">

                    {products.map((product) =>{
                        return <div className="col-md-4">
                            <div className="m-2 p-1 product">
                                <div className="product-content">
                                <p>{product.name} </p>
                                <div className="text-center" >
                                <img src={product.imageURL} alt= "" className='product-img'/>
                                </div>
                                </div>
                            </div>
                        </div>
                    })}
                </div>

                                  

            </div>

            
        </Layout>
    )
}

export default Homepage
