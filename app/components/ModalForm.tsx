'use client'
import React, { useState } from 'react'

const ModalForm : React.FC<any> = ({isOpen, onClose, mode, onSubmit}) => {

  const [rate, setHandleRate] = useState({
    name : "",
    email : "",
    job : "",
    rate : 0,
    stats : ""
  })


  const handleSubmit = (e : any) => {

    e.preventDefault();

    
  }
    

  return (
    <>
        <dialog id="my_modal_3" className="modal" open={isOpen}>
          <div className="modal-box">
            <h3 className='font-bold text-lg py-4'>{ mode === "update" ? "Edit Client" : "Client Details" }</h3>
            <form onSubmit={handleSubmit} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
              
              <label className="input input-bordered my-4 flex items-center gap-2">
                Name
                <input name='name' type="text" className="grow" />
              </label>
              <label className="input input-bordered my-4 flex items-center gap-2">
                Email
                <input name='email' type="text" className="grow" />
              </label>
              <label className="input input-bordered my-4 flex items-center gap-2">
                Job
                <input name='job' type="text" className="grow" />
              </label>

              <div className="flex mb-4 gap-4 justify-between">

                <label className="input input-bordered my-4 flex items-center gap-2">
                  Rate
                  <input name='rate' type="number" className="grow" />
                </label>

                <select name='stats' className="select my-4 select-bordered w-full max-w-xs">
                  <option value="innactive">Inactive</option>
                  <option value="active" >Active</option>
                </select>
              </div>

              <button className='btn btn-success'>{ mode === "update" ? "Save Changes" : "Create User" }</button>
            </form>
          </div>
        </dialog>
    </>
  )
}

export default ModalForm