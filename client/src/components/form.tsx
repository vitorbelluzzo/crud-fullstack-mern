export function Form() {
  return (
    <form action="" className="">
     <label htmlFor="" className="flex flex-col mt-4 text-sm gap-2 font-semibold">Nome
      <input type="text" name="" id="" className="bg-transparent border rounded-xl  p-4" />
     </label>
     <label htmlFor="" className="flex flex-col mt-4 text-sm gap-2 font-semibold">E-mail
      <input type="email" name="" id="" className="bg-transparent border rounded-xl p-4" />
     </label>
     <label htmlFor="" className="flex flex-col mt-4 text-sm gap-2 font-semibold">Telefone
      <input type="tel" name="Telefone" id="" className="bg-transparent border rounded-xl  p-4" />
     </label>
     <label htmlFor="" className="flex flex-col mt-4 text-sm gap-2 font-semibold ">Data de nascimento
      <input type="date" name="" className="bg-transparent border rounded-xl p-4  " />
     </label>

     <label htmlFor="" className="flex justify-center mt-8  mb-6 ">
     <button type="submit" className="border  justify-center p-4 rounded-2xl w-52 flex items-center">Salvar</button>
     </label>
    </form>
  )
}