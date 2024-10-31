import React, {memo, useRef, useState, useEffect} from "react";
import {Link, Form, useRouteLoaderData, useActionData, useLoaderData} from 'react-router-dom'
import Input from "../components/UI/Input";
import Select from "../components/UI/Select";
import TextArea from '../components/UI/TextArea'
import Modal from "../components/Modal";
import { getNotAvailableDates, mindDates, dataConverter } from "../utils/dates";


const NewMeeting = memo(function NewMeeting() {
   const {user} = useRouteLoaderData('appRoot')   
   const rooms = useLoaderData()
   const result = useActionData()   
   const successRef = useRef()
   const errorRef = useRef()
   const [notAvailableDates, setNotAvailableDates] = useState([])
   
   const handleSelectChange = async (event) => {
      const id = event.target.value
      const fetchedDates = await getNotAvailableDates(id)
      if (fetchedDates) {
         setNotAvailableDates(fetchedDates)
      }
   }

   if (result != undefined && result.status) {
      errorRef.current.close()
      successRef.current.open()
   }

   if (result != undefined && !result.status) {
      successRef.current.close()
      errorRef.current.open()
   }

   const refreshPage = () => window.location.reload()

   useEffect(() => {
     mindDates()
   }, [])


   return <>
      <Modal ref={successRef} type='successModal' callBack={refreshPage}>
         <h1 className="text-green-800 font-bold text-4xl">Sucesso!</h1>
         <h2 className="text-green-800 text-2xl">Reunião marcada.</h2>
      </Modal>
      <Modal ref={errorRef} type='errorModal' callBack={refreshPage} logup={true}>
         <h1 className="text-red-800 font-bold text-4xl">Erro!</h1>
         <h2 className="text-red-800 text-2xl text-center">Verifique os campos e tente novamente</h2>
      </Modal>
      <main className="flex flex-row justify-between items-center pt-2">
         <div className="w-2/3 flex flex-col justify-center items-center p-2">
            <h1 className="text-4xl">Nova Reunião</h1>
            <Form method="post" className="w-full">
               <Input data="id" label="" type="text" val={user['id']} isHidden/>
               <Input data="title" label="Título da Reunião" type="text" />
               <Select onChange={handleSelectChange} rooms={rooms}/>
               <div className="flex flex-row justify-between items-center w-full gap-x-2">
                  <Input data="start_at" label="Início da Reunião" type="datetime-local" onChange={mindDates} className="w-1/2" />
                  <Input data="end_at" label="Fim da Reunião" type="datetime-local" onChange={mindDates} className="w-1/2 " />
               </div>
               <TextArea label='Participantes/Observações' />
               <div className="flex flex-row justify-between items-center py-4">
                  <button type="submit" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg">Criar</button>
                  <Link to='/app/'>Voltar</Link>
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

export default NewMeeting