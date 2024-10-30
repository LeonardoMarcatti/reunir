import React, {memo, useState, useEffect}  from "react";
import {Outlet, useLoaderData, useLocation} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Aside from "../components/Aside";
import { checkUser, getMyMeetings } from "../utils/script";

const loadData = async () => {
   const user = await checkUser()
   return {user}
}

const Root = memo(function Root() {
   const {user} = useLoaderData()   
   const location = useLocation();
   const [meetings, setMeetings] = useState([])

   useEffect(() => {
      const fetchMeetings = async () => {
         const fetchedMeetings = await getMyMeetings();
         setMeetings(fetchedMeetings);
      };
      fetchMeetings();
   }, [location.pathname])
   
   
   return <>
      <Header user={user}/>
      <Aside meetings={meetings} location={location.pathname}/>
      <Outlet/>
      <Footer/>
   </> 
})

export {loadData}
export default Root
