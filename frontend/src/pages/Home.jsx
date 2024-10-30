import React from "react";
import {Link} from 'react-router-dom'

const Home = () => {
   return <>
      <main className="flex flex-col justify-center items-center pt-2">
         <h1 className="text-4xl ">Reuniões</h1>
         <h2 className="text-2xl w-1/3">Selecione uma reunião ao lado na lista ou crie uma nova <Link to='meeting/new' className="text-blue-400"> aqui!</Link></h2>
      </main>
   </>
   
}

export default Home