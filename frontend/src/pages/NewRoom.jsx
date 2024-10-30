import React, {memo, useRef} from "react";
import { Link, Form, useActionData } from "react-router-dom";
import Input from "../components/UI/Input";
import Modal from "../components/Modal";

const NewRoom = memo(function NewRoom() {
   const successRef = useRef()
   const errorRef = useRef()
   const result = useActionData() 

   if (result != undefined && result.status) {
      successRef.current.open()
   }

   if (result != undefined && !result.status) {
      errorRef.current.open()
   }

   return <>
      <Modal ref={successRef} type='successModal'>
         <h1 className="text-green-800 font-bold text-4xl">Sucesso!</h1>
         <h2 className="text-green-800 text-2xl">Sala criada.</h2>
      </Modal>
      <Modal ref={errorRef} type='errorModal'>
         <h1 className="text-red-800 font-bold text-4xl">Error!</h1>
         <h2 className="text-red-800 text-2xl">Não foi possível atualizar</h2>
      </Modal>

      <main className="flex flex-col justify-center items-center pt-2">
         <h1 className="text-4xl">Criar Sala de Reunião</h1>
         <Form method="post" className="w-1/3">
            <Input label='Nome' data='name' type='text'/>
            <Input label='Capacidade' data='maxPeople' type='number' />
            <div className="flex flex-row justify-between items-center py-4">
               <button type="submit" className="bg-green-600 px-4 py-2 rounded-lg">Criar</button>
               <Link to='..'>Voltar</Link>
            </div>
         </Form>
      </main>
   </>
})

export default NewRoom