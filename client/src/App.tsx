import { Form } from "./components/form";
import {  ToastContainer } from "react-toastify";
import { Grid } from "./components/grid";

export function App() {
  return (
    <>
    <ToastContainer autoClose={3000} position="top-left" />
    <div className=" flex mx-auto justify-center items-center mt-20 px-1 gap-6 ">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8 items-center">

        <div className=" rounded-lg bg-[#1E1E1E] flex flex-col justify-center w-96  px-10">
          <span className="font-bold text-base mt-[39px] justify-center flex">Cadastro de usuários</span>
          <Form />
        </div>
        <div className="rounded-lg bg-[#1E1E1E] flex flex-col justify-center w-96  px-10 h-[35.7rem] md:mx-4 lg:mx-auto">
        <Grid />
        </div>
      </div>


    </div></>
   
  )
}
