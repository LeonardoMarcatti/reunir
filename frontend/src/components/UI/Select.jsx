import React from "react";

const Select = ({onChange, rooms, val}) => {
   return <div className="mt-2 flex flex-col">
      <label htmlFor='room_id'>Sala de Runião</label>
      <select name="room_id" defaultValue={val} id="room_id" onChange={onChange} className="bg-slate-200 h-[3rem] rounded-md text-black">
         <option value="0" selected disabled>Selecione uma sala</option>
         {
            rooms.map(room => {
               if (room.id == val) {
                  return <option selected value={room.id} key={room.name}>{room.name} - {room.maxPeople} Pessoas</option>
               } else {
                  return <option value={room.id} key={room.name}>{room.name} - {room.maxPeople} Pessoas</option>
               }
            })
         }
      </select>
   </div> 
}

export default Select