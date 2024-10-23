import React, {forwardRef, useImperativeHandle, useRef} from "react";
import {createPortal} from 'react-dom'

const Modal = forwardRef(({children}, ref) => {
   const modalRef = useRef()

     useImperativeHandle(ref, () => {
      return {
         open() {
            modalRef.current.showModal()
         }
      }}
   )

   return createPortal(<dialog ref={modalRef} className="bg-green-200 w-1/4 flex flex-col justify-center items-center rounded-lg">
      {children}
      <form method="dialog" className="mt-8 mb-2">
         <button type="submit" className='px-8 py-2 bg-green-600 rounded-md text-white font-bold'>OK</button>
      </form>
   </dialog>, document.querySelector('#modal'))
})

export default Modal
