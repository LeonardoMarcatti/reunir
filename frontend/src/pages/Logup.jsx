import React from "react";
import {Form, Link, useActionData} from 'react-router-dom'
import Input from "../components/Input";
import Footer from '../components/Footer';

const Logup = () => {
   const data = useActionData()
   console.log();
   
   return <>
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