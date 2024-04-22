import { Form } from "./components/form";
// import {  ToastContainer } from "react-toastify";
import { Grid } from "./components/grid";

export function App() {
  return (
    <>
    {/* <ToastContainer autoClose={3000} position="top-left" /> */}
    <div className="flex justify-center items-center mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 items-center  max-w-4xl">

        <div className="rounded-lg bg-[#1E1E1E] flex flex-col justify-center px-10 my-10 lg:w-[460px] w-[650px]">
          <span className="font-bold text-2xl mt-[39px] justify-center flex">Cadastro de usuários</span>
          <Form />
        </div>

        <div className="rounded-lg bg-[#1E1E1E] flex flex-col py-10 px-10 h-[40.5rem] w-[650px]">
          <Grid />
        </div>

      </div>
    </div>
    </>
  );
}
