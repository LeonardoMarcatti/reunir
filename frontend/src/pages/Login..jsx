import React from "react";
import {Form, Link} from 'react-router-dom'
import Input from "../components/Input";
import Footer from '../components/Footer';

const Login = () => {
   return <>
      <header className="bg-slate-600">
         <h1 className="text-4xl font-bold text-white">Reunir</h1>
      </header>
      <main className="p-2 flex flex-col justify-center items-center col-span-5">
         <h1 className="text-4xl">Login</h1>
         <Form method="post" className="mt-4 w-1/2 p-4 bg-zinc-900 hover:shadow-md hover:shadow-slate-400">
            <Input data="email" label="Email" type="email"/>
            <Input data="password" label="Senha" type="password"/>
            <div className="flex flex-row justify-between items-center px-2 py-4">
               <button type="submit" className="bg-orange-400 px-4 py-2 rounded-lg text-black">Login</button>
               <Link to="logup">Logup</Link>
            </div>
         </Form>
      </main>
      <Footer />
   </> 
}

export default Login