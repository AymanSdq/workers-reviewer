'use client';
import TableList from "./components/TableList";
import ModalForm from "./components/ModalForm";
import { useState } from "react";
import Header from "./Header";
import axios from "axios";

export default function Home() {

  const [isOpen, setIsOpen] = useState(false)
  const [modalMode, setmodalMode] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const handleOpen = (mode : string) => {
    setIsOpen(true);
    setmodalMode(mode)
    console.log(mode)
  }

  const handleSubmit = () => {

    if(modalMode == "add" ){
      console.log("Modal mode is Add ")
    }else {
      console.log("Modal mode is Update")
    }
  }

  return (
    <>
      <Header onOpen={ () => handleOpen('add')} onSearch={setSearchTerm} />
      <TableList  onOpen={ () => handleOpen('update')} searchTerm={searchTerm} />
      <ModalForm 
        isOpen={isOpen} onSubmit={handleSubmit} 
        onClose={() => setIsOpen(false) } mode={modalMode} />
    </>
  );
}
