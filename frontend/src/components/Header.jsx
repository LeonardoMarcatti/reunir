import React, {memo} from "react";
import { Link } from "react-router-dom";

const Header = memo(function Header({user}) {
   return <header className="flex flex-row justify-between items-center px-2 bg-stone-900 text-white w-screen">
      <h1 className="text-4xl">Reunir</h1>
      <h2>{user.name}</h2>
      <nav>
         <Link to='/app' className="mx-2 p-0">Home</Link>
         {
            user.is_admin == 1 && <Link to='meetingRooms' className="mx-2 p-0">Salas</Link>
         }         
         <Link to='myReserves' className="mx-2 p-0">Histórico</Link>
         <Link to='logout' className="mx-2 p-0"><i className="fa-solid fa-power-off text-red-400"></i></Link>
      </nav>
   </header>
})

export default Header