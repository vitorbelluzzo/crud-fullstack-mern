import { useRef } from "react"

export function Form() {
  const ref = useRef<HTMLFormElement>(null)
  return (
    <form  ref={ref} className="">
     <label className="flex flex-col mt-4 text-sm gap-2 font-semibold">Nome
      <input type="text" name="nome"  className="bg-transparent border rounded-xl  p-4" />
     </label>
     <label className="flex flex-col mt-4 text-sm gap-2 font-semibold">E-mail
      <input type="email" name="email"  className="bg-transparent border rounded-xl p-4" />
     </label>
     <label className="flex flex-col mt-4 text-sm gap-2 font-semibold">Telefone
      <input type="tel" name="fone"  className="bg-transparent border rounded-xl  p-4" />
     </label>
     <label className="flex flex-col mt-4 text-sm gap-2 font-semibold ">Data de nascimento
      <input type="date" name="data_nascimento" className="bg-transparent border  rounded-xl p-4 appearance-none" />
     </label>

     <label className="flex justify-center mt-8  mb-6 ">
     <button type="submit" className="border  justify-center p-4 rounded-2xl w-52 flex items-center">Salvar</button>
     </label>
    </form>
  )
}