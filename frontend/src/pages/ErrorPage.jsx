import React from "react";
import { redirect, useNavigate } from "react-router-dom";
const ErrorPage = () => {
   const navigate = useNavigate()
   const getBack = () => navigate('/app')
   return <div className="flex flex-col justify-center items-center bg-black w-screen h-screen">
       <h1 className="text-4xl text-red-400 w-1/3 text-center">Página não encontrada ou não há autorização</h1>
       <button type="button" className="text-white bg-slate-800 px-4 py-2 rounded-xl mt-4" onClick={getBack}>Voltar</button>
   </div>
}

export default ErrorPage