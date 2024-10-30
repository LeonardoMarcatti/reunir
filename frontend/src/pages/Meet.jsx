import React, {memo, useRef, useState} from "react";
import { Link, useLoaderData, useParams, useNavigate  } from "react-router-dom";
import { dataConverter } from "../utils/dates";
import Modal from "../components/Modal";

const Meet = memo(function Meet() {
   const details = useLoaderData()
   const modalRef = useRef()
   const navigate = useNavigate();
   const [selectedRoomId, setSelectedRoomId] = useState(null);
   const {id} = useParams()

   const showModal = (id) => {
      setSelectedRoomId(id)
      modalRef.current.open()
   }
   const deleteMeet = (id) => navigate(`/app/meeting/delete/${id}`)

   return <>
      <Modal ref={modalRef} type="errorModal" callBack={deleteMeet} id={selectedRoomId}>
         <h1 className="text-red-800 font-bold text-4xl">Cuidado!</h1>
         <h2 className="text-red-800 text-2xl">Deseja deletar a reunião?</h2>
      </Modal>
      <main className="flex flex-col justify-evenly items-center px-2">
         <h1 className="text-4xl">Detalhes da Reunião</h1>
         <div className="flex flex-row justify-between items-center bg-slate-900 w-full p-2">
            <div>
               <h2 className="text-2xl">{details.title}</h2>
               <h2 className="text-2xl">{details.room.name}</h2>
               <div className="flex flex-row justify-start items-center w-full">
                  <h2 className="text-2xl">Capacidade: </h2>
                  <h2 className="text-xl">{details.room.maxPeople} Pessoas</h2>
               </div>
               <h2 className="text-xl">{dataConverter(details.start_at)} - {dataConverter(details.end_at)}</h2>
               <h2 className="text-xl">{details.participants}</h2>
            </div>
            <div className="flex flex-row justify-end items-end" >
               <Link to={`/app/meeting/edit/${id}`} className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md"><i className="fa-solid fa-pen-to-square"></i> Editar</Link>
               <button type="button" className="bg-red-600 px-4 py-2 rounded-md mx-2" onClick={() => showModal(id)}><i className="fa-solid fa-trash-can"></i> Deletar</button>
            </div>
         </div>
            
         <Link to='/app' relative="path">Voltar</Link>
      </main>
   </>
})

export default Meet
