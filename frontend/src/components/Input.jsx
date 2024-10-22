import React, {memo} from "react";

const Input = memo(function Input({label, data, type}) {
   return <div className="mt-2 flex flex-col">
      <label htmlFor={data}>{label}</label>
      <input type={type} name={data} id={data} className="bg-slate-200 h-[3rem] rounded-md text-black" />
   </div>
})

export default Input