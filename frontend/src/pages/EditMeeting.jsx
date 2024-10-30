import React, {memo, useRef, useState, useEffect} from "react";
import { Link, useRouteLoaderData, useLoaderData, Form, useParams, useActionData  } from "react-router-dom";
import Input from "../components/UI/Input";
import Modal from "../components/Modal";
import Select from "../components/UI/Select";
import TextArea from "../components/UI/TextArea";
import { mindDates, dataConverter, getNotAvailableDates } from "../utils/dates";

const EditMeeting = memo(function EditMeeting() {
   const {user} = useRouteLoaderData('appRoot')
   const result = useActionData()   
   const {id} = useParams()   
   const {meetingDetails, rooms} = useLoaderData()
   const successRef = useRef()
   const warningRef = useRef()
   const [notAvailableDates, setNotAvailableState] = useState([])

   const handleSelectChange = async (param) => {
      let id = ''
      if (typeof param == 'string' || typeof param == 'number') {
         id = param
      }
      if (typeof param == 'object') {
         id = param.target.value
      }
      
      const fetchedDates = await getNotAvailableDates(id)
      
      if (fetchedDates) {
         setNotAvailableState(fetchedDates)
      }
   }

   useEffect(() => {
      const getRooms = async (id) => await handleSelectChange(id)
      getRooms(meetingDetails.room.id)
      mindDates()
   }, [])

   if (result != undefined && result.status) {
      warningRef.current.close()
      successRef.current.open()
   }

   if (result != undefined && !result.status) {
      successRef.current.close()
      warningRef.current.open()
   }

   const refreshPage = () => window.location.reload()

   return <>
      <Modal ref={successRef} type='successModal' callBack={refreshPage}>
         <h1 className="text-green-800 font-bold text-4xl">Sucesso!</h1>
         <h2 className="text-green-800 text-2xl">Reunião atualizada.</h2>
      </Modal>
      <Modal ref={warningRef} type='warningModal' callBack={refreshPage}>
         <h1 className="text-yellow-600 font-bold text-4xl">Erro!</h1>
         <h2 className="text-yellow-600 text-2xl">Dia e hora não diposnível.</h2>
      </Modal>
      <main className="flex flex-row justify-between items-center pt-2">
         <div className="w-2/3 flex flex-col justify-center items-center p-2">
            <h1 className="text-4xl">Editar Reunião</h1>
            <Form method="post"  className="w-full">
               <Input data="user_id" label="" type="text" val={user['id']} isHidden/>
               <Input data="id" label="" type="number" val={id} isHidden />
               <Input data="title" label="Título da Reunião" type="text" val={meetingDetails.title}/>
               <Select onChange={handleSelectChange} rooms={rooms} val={meetingDetails.room.id}/>
               <div className="flex flex-row justify-between items-center w-full gap-x-2">
                  <Input data="start_at" label="Início da Reunião" type="datetime-local" onChange={mindDates} val={meetingDetails.start_at} className="w-1/2"/>
                  <Input data="end_at" label="Fim da Reunião" type="datetime-local" onChange={mindDates} val={meetingDetails.end_at} className="w-1/2"/>
               </div>
               <TextArea label='Participantes/Observações' val={meetingDetails.participants} />
               <div className="flex flex-row justify-between items-center px-2 py-4">
                  <button type="submit" className="bg-orange-400 px-4 py-2 rounded-lg text-black">Editar</button>
                  <Link to='/app' relative="path">Voltar</Link>
               </div>
            </Form>
         </div>
         {
            notAvailableDates.length != 0 && <div className="w-1/3 flex flex-col justify-center items-center p-2 bg-black h-full bg-red-800">
            <h1 className="text-4xl text-center w-full">Dias e Horários Indisponíveis</h1>
            
            <ul className="w-full">
               {notAvailableDates.map((date, index) => (
                  <li className="my-2 text-center" key={index}>Início: {dataConverter(date.start_at)} <br /> Fim: {dataConverter(date.end_at)}</li>
               ))}
            </ul>
         </div>
         }
      </main>
   </>
})

export default EditMeeting