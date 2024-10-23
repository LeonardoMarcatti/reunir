import React from "react";
import {useLoaderData, Link} from 'react-router-dom'

const Home = () => {
   const meetings = useLoaderData()
   
   
   return <>
      <aside className="flex flex-col justify-start items-center pt-2">
         <h2 className="text-2xl mb-4">Reservas</h2>
         {
            meetings.length == 0 && <h1>Não há reuniões marcadas</h1>
         }
         {
            meetings.length > 0 && <ul>
               {
                  meetings.map(meet => <li>{meet.title}</li>)
               }
            </ul>
         }
      </aside>
      <main className="flex flex-col justify-center items-center pt-2">
         <h1 className="text-4xl ">Reuniões</h1>
         <h2 className="text-2xl w-1/3">Selecione uma reunião ao lado na lista ou crie uma nova <Link to='newMeeting' className="text-blue-400"> aqui!</Link></h2>
      </main>
   </>
   
}

export default Home