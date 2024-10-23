import React from "react";
import { useLoaderData } from "react-router-dom";


const Select = () => {
   const rooms = useLoaderData()
   
   return <div className="mt-2 flex flex-col">
      <label htmlFor='room'>Sala de Runião</label>
      <select name="room_id" id="room_id" className="bg-slate-200 h-[3rem] rounded-md text-black">
         <option value="0" disabled>Selecione uma sala</option>
         {
            rooms.map(room => <option value={room.id} key={room.id}>{room.name} - {room.maxPeople} Pessoas</option>)
         }
      </select>
   </div> 
}

export default Select