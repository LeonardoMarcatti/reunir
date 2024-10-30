import React, {memo} from "react";
import { Link } from "react-router-dom";

const Room = memo(function Room({room, show, id}) {
   return <>
      <div className="bg-slate-900 hover:bg-slate-800 w-full flex flex-row justify-between items-center my-4 p-4 rounded-sm">
         <div className="w-1/3">
            <div className="flex flex-row justify-between">
               <h3 className="text-2xl">Nome:</h3>
               <h4 className="text-xl">{room.name}</h4>
            </div>
            <div className="flex flex-row justify-between">
               <h3  className="text-2xl">Capacidade</h3>
               <h4 className="text-xl">{room.maxPeople} pessoas</h4>
            </div>
         </div>
         <div>
            <Link to={`edit/${room.id}`} className="bg-green-600 px-4 py-2 rounded-md mx-2">
               <i className="fa-solid fa-pen-to-square"></i> Editar
            </Link>
            <button type="button" onClick={() => show(id)} className="bg-red-600 px-4 py-2 rounded-md mx-2"><i className="fa-solid fa-trash-can"></i> Delete</button>
         </div>
      </div>
   </> 
})

export default Room