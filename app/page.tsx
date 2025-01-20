'use client'
import Image from "next/image";
import TableList from "./components/TableList";
import ModalForm from "./components/ModalForm";
import { useState } from "react";
import Header from "./Header";

export default function Home() {

  const [isModalOpen , setIsModalOpen] = useState(true)
  const handleOpen = () => {
      setIsModalOpen((prevValue) => !prevValue)
      console.log(isModalOpen)
  }

  const [isModalOpenUpdate , setIsModalOpenUpdate] = useState(true)
  const handleOpenUpdate = () => {
    setIsModalOpenUpdate((prevValue) => !prevValue)
  }


  return (
    <>
      <Header handleOpen={handleOpen} />
      <TableList />
      { isModalOpen && <ModalForm handleClick={handleOpen}/>}
    </>
  );
}
