import React, {memo, useRef} from "react";
import { Link, useParams, Form, useLoaderData, useActionData } from "react-router-dom";
import Input from "../components/UI/Input";
import Modal from "../components/Modal";

const EditRoom = memo(function EditRoom(){
   const {id} = useParams()
   const rooms = useLoaderData()
   const selectedRoom = rooms.find(el => el.id == id)
   const result = useActionData() 
   const successRef = useRef()
   const errorRef = useRef()

   if (result != undefined && result.status) {
      successRef.current.open()
   }

   if (result != undefined && !result.status) {
      errorRef.current.open()
   }
   
   return <>
      <Modal ref={successRef} type='successModal'>
         <h1 className="text-green-800 font-bold text-4xl">Sucesso!</h1>
         <h2 className="text-green-800 text-2xl">Sala Atualizada.</h2>
      </Modal>
      <Modal ref={errorRef} type='errorModal'>
         <h1 className="text-red-800 font-bold text-4xl">Error!</h1>
         <h2 className="text-red-800 text-2xl">Não foi possível atualizar sala</h2>
      </Modal>
      <main className="flex flex-col justify-center items-center pt-2">
         <h1 className="text-4xl">Editar Sala de Reunião</h1>
         <Form method="post" className="w-1/3">
            <Input label='' data='id' type='number' val={id} isHidden />
            <Input label='Nome' data='name' type='text' val={selectedRoom.name}/>
            <Input label='Capacidade' data='maxPeople' type='number' val={selectedRoom.maxPeople}/>
            <div className="flex flex-row justify-between items-center py-4">
               <button type="submit" className="bg-green-600 px-4 py-2 rounded-lg">Editar</button>
               <Link to='..'>Voltar</Link>
            </div>
         </Form>
      </main>
   </>
})

export default EditRoom