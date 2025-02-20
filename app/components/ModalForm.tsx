'use client'
import React, { useEffect, useState } from 'react'


interface addClient {
  name : string,
  email : string,
  job : string,
  rate : number,
  stats : boolean;
}

const ModalForm : React.FC<any> = ({isOpen, onClose, mode, makeSubmit, clientData}) => {

  const [clientRate, setClientRate] = useState<addClient>({
    name : "",
    email : "",
    job : "",
    rate : 0,
    stats : false
  })

  const handleChange = (e : React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {

    const {name , value } = e.target;

    setClientRate( (prevElement) => ({
        ...prevElement,
        [name] : value
      }))

  }

  // Searching for API callers 

  const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try{
      await makeSubmit(clientRate)
      onClose();
    }catch(err){

    }
    onClose()
  }

  useEffect( () => {
    if(mode === "update" && clientData){
      setClientRate(clientData)
      
    }
  }, [mode, clientData] )

    

  return (
    <>
        <dialog id="my_modal_3" className="modal" open={isOpen}>
          <div className="modal-box">
            <h3 className='font-bold text-lg py-4'>{ mode === "update" ? "Edit Client" : "Client Details" }</h3>
            <button onClick={onClose} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            <form onSubmit={handleSubmit} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <label className="input input-bordered my-4 flex items-center gap-2">
                Name 
                <input name='name'  onChange={handleChange} value={clientRate.name} type="text" className="grow" required/>
              </label>
              <label className="input input-bordered my-4 flex items-center gap-2">
                Email
                <input name='email' onChange={handleChange} value={clientRate.email} type="text" className="grow" required/>
              </label>
              <label className="input input-bordered my-4 flex items-center gap-2">
                Job
                <input name='job' onChange={handleChange} value={clientRate.job} type="text" className="grow" required/>
              </label>

              <div className="flex mb-4 gap-4 justify-between">

                <label className="input input-bordered my-4 flex items-center gap-2">
                  Rate
                  <input name='rate' onChange={handleChange} value={clientRate.rate} type="number" className="grow" required/>
                </label>

                <select name='stats' onChange={handleChange} className="select my-4 select-bordered w-full max-w-xs" required> 
                  <option value="false">Inactive</option>
                  <option value="true" >Active</option>
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