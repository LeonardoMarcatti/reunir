import React from "react";
import {Outlet, useLoaderData} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Root = () => {
   const user = useLoaderData()

   return <>
      <Header user={user}/>
         <Outlet/>
      <Footer/>
   </> 
}

export default Root
