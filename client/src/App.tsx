import { Form } from "./components/form";

export function App() {
  return (
    <div className=" flex mx-auto justify-center items-center mt-20 px-1 gap-6 ">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:gap-8 items-center">
    
    <div className=" rounded-lg bg-[#1E1E1E] flex flex-col justify-center w-96  px-10">
    <span className="font-bold text-base mt-[39px] justify-center flex">Cadastro de usuários</span>
   <Form />
   </div>
   <div className="rounded-lg bg-[#1E1E1E] flex flex-col justify-center w-96  px-10">
    <div className="">
      <table>
        
      </table>
    </div>
    <div></div>
   </div>
</div>
       
    
    </div>
   
  )
}
