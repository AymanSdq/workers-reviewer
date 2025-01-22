'use client';
import TableList from "./components/TableList";
import ModalForm from "./components/ModalForm";
import { useState } from "react";
import Header from "./Header";

export default function Home() {

  const [isModalOpen , setIsModalOpen] = useState(false)
  const handleOpen = () => {
      setIsModalOpen((prevValue) => !prevValue)
      console.log(isModalOpen)
  }


  return (
    <>
      <Header handleOpen={handleOpen} />
      <TableList />
      { isModalOpen && <ModalForm handleClick={handleOpen} statsOpen={isModalOpen} />}
    </>
  );
}
