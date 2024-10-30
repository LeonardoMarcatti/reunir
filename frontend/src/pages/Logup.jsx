import React, {useRef} from "react";
import {Form, Link, useActionData} from 'react-router-dom'
import Input from "../components/UI/Input";
import Footer from '../components/Footer';
import Modal from '../components/Modal'
import {getSentencePart} from '../utils/diverse'

const Logup = () => {
   const data = useActionData()
   console.log(data);
   
   const successRef = useRef()
   const errorRef = useRef()


   if (data != undefined && data.status) {
      errorRef.current.close()
      successRef.current.open()
   }

   if (data != undefined && !data.status) {
      successRef.current.close()
      errorRef.current.open()
   }
   
   return <>
      <Modal ref={successRef} type="successModal">
         <h1 className="text-green-800 font-bold text-4xl">Sucesso!</h1>
         <h2 className="text-green-800 text-2xl">Usuário criado.</h2>
      </Modal>
      <Modal ref={errorRef} type="errorModal" logup={true}>
         <h1 className="text-red-800 font-bold text-4xl">Erro</h1>
         <h2 className="text-red-800 text-2xl">Usuário não pode ser criado.</h2>
         <h3 className="text-red-800 text-xl">{data != undefined && !data.status && getSentencePart(data.message)}</h3>
      </Modal>
      <header className="bg-slate-600">
         <h1 className="text-4xl font-bold text-white">Reunir</h1>
      </header>
      <main className="p-2 flex flex-col justify-center items-center col-span-5">
         <h1 className="text-4xl">Cadastro </h1>
         <Form method="post" className="mt-4 w-1/2 p-4 bg-zinc-900 shadow-lg shadow-slate-400">
            <Input data="name" label="Nome" type="text"/>
            <Input data="email" label="Email" type="email"/>
            <Input data="password" label="Senha" type="password"/>
            <Input data="password_confirmation" label="Repita senha" type="password"/>
            <div className="flex flex-row justify-between items-center px-2 py-4">
               <button type="submit" className="bg-orange-400 px-4 py-2 rounded-lg text-black">Cadastrar</button>
               <Link to="..">Voltar</Link>
            </div>
         </Form>
      </main>
      <Footer />
   </> 
}

export default Logup