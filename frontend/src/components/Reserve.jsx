import React, {memo} from "react";
import { dataConverter } from "../utils/dates";

const Reserve = memo(function Reserve({data}) {
   return <div className="bg-slate-900 hover:bg-slate-800 w-full flex flex-row justify-between items-center my-4 p-4 rounded-sm">
      <div className="w-1/3">
         <h1 className="text-3xl">{data.title}</h1>
         <h2 className="text-2xl">{data.room.name}</h2>
         <h3>{dataConverter(data.start_at)} - {dataConverter(data.end_at)}</h3>
      </div>
      <h2 className="w-2/3 indent-4 text-justify">{data.participants}</h2>
   </div>
})

export default Reserve