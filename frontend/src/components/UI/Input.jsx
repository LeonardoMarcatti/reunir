import React, {memo} from "react";

const Input = memo(function Input({label, data, type, val, isHidden, onChange, className}) {
   return <div className={`mt-2 flex flex-col ${className}`}>
      <label htmlFor={data}>{label}</label>
      <input onChange={onChange} required type={type} name={data} id={data} defaultValue={val} hidden={isHidden} className='bg-slate-200 h-[3rem] rounded-md text-black' />
   </div>
})

export default Input