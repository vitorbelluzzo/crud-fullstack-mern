import axios from 'axios'
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa'
import { toast } from 'react-toastify'

interface User {
  id: number
  nome: string
  email: string
  fone?: number
  data_nascimento?: Date
}
interface GridProps {
  users: User[]
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
  setOnEdit: React.Dispatch<React.SetStateAction<User[]>>
}

export function Grid({ users, setUsers }: GridProps) {
  async function handleDelete(id: number) {
    await axios
      .delete(`http://localhost:8800/${id}`)
      .then(({ data }) => {
        const newArray = data.filter((user: User) => user.id !== id)
        setUsers(newArray)
        toast.success(data)
      })
      .catch(({ data }) => {
        toast.error(data)
      })

    setOnEdit(null)
  }
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
              <FaRegTrashAlt
                onClick={() => handleDelete(user.id)}
                className="size-8 cursor-pointer text-[#FF0000]"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
