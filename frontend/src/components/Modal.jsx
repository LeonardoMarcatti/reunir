import React, {forwardRef, useImperativeHandle, useRef} from "react";
import {createPortal} from 'react-dom'

const Modal = forwardRef(({children, type, callBack, id, logup}, ref) => {
   const modalRef = useRef()

     useImperativeHandle(ref, () => {
      return {
         open() {
            modalRef.current.showModal()
         },
         close() {
            modalRef.current.close();
         }
      }}
   )

   return createPortal(<dialog ref={modalRef} className={`${type} w-1/4 flex flex-col justify-center items-center rounded-lg`}>
      {children}
      <form method="dialog" className="mt-8 mb-2">
         {
            type == 'errorModal' && <>
               {
                  !logup && <button type="submit" className='px-8 py-2 rounded-md text-white font-bold mx-2' onClick={() => callBack(id)}>Deletar</button>
               }
               <button type="submit" id="cancel" className='px-8 py-2 rounded-md text-white font-bold mx-2'>{logup? 'OK' : 'Cancel'}</button>
            </>
         }
         {
            type == 'successModal' && <button type="submit" className='px-8 py-2 rounded-md text-white font-bold mx-2' onClick={callBack? () => callBack(id) : null}>OK</button>
         }

         {
            type == 'warningModal' && <button type="submit" className='px-8 py-2 rounded-md text-white font-bold mx-2'>OK</button>
         }
      </form>
   </dialog>, document.querySelector('#modal'))
})

export default Modal
