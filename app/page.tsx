'use client';
import TableList from "./components/TableList";
import ModalForm from "./components/ModalForm";
import { useState } from "react";
import Header from "./Header";
import axios from "axios";

interface addClient {
  name : string,
  email : string,
  job : string,
  rate : number,
  stats : boolean;
}



export default function Home() {

  const [isOpen, setIsOpen] = useState(false)
  const [modalMode, setmodalMode] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [clientData, setClientData] = useState(null)

  const handleOpen = (mode : string) => {
    setIsOpen(true);
    setmodalMode(mode);
  }

  const handleSubmit = async (newClientData : addClient) => {
    if(modalMode == "add" ){
      try {
        const response = await axios.post("http://localhost:3002/api/createclient", newClientData);
      } catch (error) {
        console.log(error)
      }
    }else {
      console.log("Modal mode is Update")
    }
  }

  return (
    <>
      <Header onOpen={ () => handleOpen('add')} onSearch={setSearchTerm} />
      <TableList  onOpen={ () => handleOpen('update')} searchTerm={searchTerm} />
      <ModalForm 
        isOpen={isOpen} makeSubmit={handleSubmit} 
        onClose={() => setIsOpen(false) } mode={modalMode} clientData={clientData} />
    </>
  );
}
