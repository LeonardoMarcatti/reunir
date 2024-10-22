import React, {memo} from "react";
import { Link } from "react-router-dom";

const Header = memo(function Header({user}) {
   return <header className="flex flex-row justify-between items-center px-2 bg-stone-900 text-white w-screen">
      <h1 className="text-4xl">Reunir</h1>
      <h2>{user.name}</h2>
      <nav>
         <Link to='home' className="mx-2 p-0">Home</Link>
         <Link to='rooms' className="mx-2 p-0">Salas</Link>
         <Link to='myMeetings' className="mx-2 p-0">Minhas Reservas</Link>
      </nav>
   </header>
})

export default Header