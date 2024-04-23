import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa'

export function Grid({ users }) {
  return (
    <table className="w-full h-full ">
      <thead>
        <tr className=" gap-40 inline-flex  p-5">
          <th className=" text-2xl font-normal">Nome</th>
          <th className=" text-2xl font-normal">E-mail</th>
        </tr>
      </thead>
      <div className=" border border-black "></div>
      <tbody>
        {users.map((user, i) => (
          <tr key={i} className="items-center gap-12  inline-flex">
            <td className="text-xl font-normal w-48">{user.nome}</td>
            <td className="text-xl font-normal w-48">{user.email}</td>
            <td className="justify-center items-center gap-6 flex w-24">
              <FaRegEdit className="size-8 cursor-pointer" />
              <FaRegTrashAlt className="size-8 cursor-pointer text-[#FF0000]" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
