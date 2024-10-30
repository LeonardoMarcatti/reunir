import React, { memo } from "react";
import { Link } from "react-router-dom";

const Aside = memo(function Aside({ meetings }) {
   return (
      <aside className="flex flex-col justify-start items-center pt-2">
         <h2 className="text-2xl mb-4">Reservas</h2>
         {meetings.length === 0 && <h1>Não há reuniões marcadas</h1>}
         {meetings.length > 0 && (
            <ul>
               {meetings.map(meet => (
                  <Link to={`/app/meeting/view/${meet.id}`} key={meet.id}>
                     <li className="bg-slate-300 hover:bg-slate-500 hover:text-white px-6 py-4 rounded mb-4">
                        {meet.title}
                     </li>
                  </Link>
               ))}
            </ul>
         )}
      </aside>
   );
});

export default Aside;