import React from 'react';
import Layout from '../components/Layout';
import { collection, addDoc, getDocs } from "firebase/firestore";
import fireDB from '../fireConfig';

function Homepage  ()  {

    async function adddata  ()  {
        try {
            await addDoc(collection(fireDB, "users") ,{name:'otto',age:44 })
        } catch (error) {
            console.log(error)
        }
        
    }

    async function getData  ()  {
        try {
            const users = await getDocs(collection(fireDB, "users") ,{
                name:'luis',
                age:22,
             });
             const userArray = [];
             users.forEach((doc) => {
                 const obj = {
                     id: doc.id,
                     ...doc.data(),
                 };

                 userArray.push(obj);
              });

              console.log(userArray);
        } catch (error) {
            console.log(error)
        }
        
    }
    return (
        <Layout>
            <h1>Home</h1>

            <button onClick={adddata} > Add data to firebase</button>
            <button onClick={getData} > get data  firebase</button>
        </Layout>
    )
}

export default Homepage
