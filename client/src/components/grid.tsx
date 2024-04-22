 import { FaRegTrashAlt, FaRegEdit } from "react-icons/fa";

export function Grid() {
  return (
    <table className="w-full h-full ">
    <thead>
      <tr className=" gap-40 inline-flex  p-5">
        <th className=" text-2xl font-normal">Nome</th>
        <th className=" text-2xl font-normal">E-mail</th>
      </tr>
      
    </thead>
    <div className=" border border-white "></div>
    <tbody>
      <tr className="  items-center gap-16 inline-flex">
        <td className=" text-xl font-normal ">Vitor Belluzzo</td>
        <td className=" text-xl font-normal ">vitorbelluzzo@teste.com</td>
        <td className="justify-center items-center gap-6 flex">
          <FaRegEdit className="w-8 h-8  cursor-pointer" />
          <FaRegTrashAlt className="w-8 h-8  cursor-pointer text-[#FF0000]" />
        </td>
      </tr>
    </tbody>
  </table>
  )
}