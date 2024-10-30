import React, {memo} from "react"

const TextArea = memo(function TextArea({label, data, val}) {
   return <div className="mt-2 flex flex-col">
      <label htmlFor='participants'>{label}</label>
      <textarea name='participants' id='participants' rows="4" cols="50" className='resize-none bg-slate-200 rounded-md text-black' defaultValue={val}></textarea>
   </div>
})

export default TextArea