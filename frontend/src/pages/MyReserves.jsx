import React from "react";
import { useLoaderData } from "react-router-dom";
import Reserve from "../components/Reserve";

const MyReserves = () => {
   const reserves = useLoaderData()
   console.log(reserves);
   
   return <main className="flex flex-col justify-start items-center pt-2">
      <h1 className="text-4xl">Minhas Reservas</h1>
      {
         reserves.map(reserve => <Reserve data={reserve} />)
      }
   </main> 
}

export default MyReserves