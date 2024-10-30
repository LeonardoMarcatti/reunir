import React, {memo, useRef, useState, useEffect} from "react";
import { useLoaderData, Link, useNavigate } from "react-router-dom";
import Room from "../components/Room";
import Modal from "../components/Modal";

const MeetingRooms = memo(function MeetingRooms() {
   const rooms = useLoaderData()
   const modalRef = useRef()
   const navigate = useNavigate()
   const [selectedRoomId, setSelectedRoomId] = useState(null);

   useEffect(() => {
      if (rooms && rooms.status === false) {
         navigate('/app');
      }
   }, [rooms, navigate]);
   
   const showModal = (id) => {
      setSelectedRoomId(id)
      modalRef.current.open()
   }
   const deleteRoom = (id) => navigate(`/app/meetingRooms/delete/${id}`)   

   return <>
         <Modal ref={modalRef} type="errorModal" callBack={deleteRoom} id={selectedRoomId}>
            <h1 className="text-red-800 font-bold text-4xl">Cuidado!</h1>
            <h2 className="text-red-800 text-2xl">Deseja apagar deletar a sala?</h2>
         </Modal>
      <main className="flex flex-col justify-evenly items-center">
         <h1 className="text-4xl">Meeting Rooms</h1>
         <div className="w-11/12 text-right">
            <Link to='new' className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-md"><i className="fa-solid fa-door-open"></i> Nova Sala</Link>
            {
               Array.isArray(rooms) && rooms.map(room => <Room key={room.id} room={room} show={() => showModal(room.id)} />)
            }
         </div>
      </main>
   </>
})

export default MeetingRooms