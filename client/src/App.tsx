import { Form } from "./components/form";

export function App() {
  return (
    <div className=" flex mx-auto justify-center items-center mt-36 gap-6">
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
   <div className=" rounded-lg bg-[#1E1E1E] px-9  flex flex-col justify-center">
    <span>Cadastro de usuários</span>
   <Form />
   </div>
   <div className="rounded-lg bg-[#1E1E1E] px-9  flex flex-col justify-center">teste</div>
</div>
       
    
    </div>
   
  )
}
