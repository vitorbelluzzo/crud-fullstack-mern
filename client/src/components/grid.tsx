import axios from 'axios'
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa'
import { toast } from 'sonner'

interface User {
  id: number
  nome: string
  email: string
  fone: string
  data_nascimento: number
}

interface GridProps {
  users: User[]
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
  setOnEdit: React.Dispatch<React.SetStateAction<User | null>>
}

export function Grid({ users, setUsers, setOnEdit }: GridProps) {
  const handleEdit = (item: User) => {
    setOnEdit(item)
  }

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8800/${id}`)
      const newArray = users.filter((user) => user.id !== id)
      setUsers(newArray)
      toast.error('Usuário deletado com sucesso')
    } catch (error: unknown) {
      if (error instanceof Error && error.message) {
        toast.error(error.message)
      } else {
        toast.error('Um erro ocorreu')
      }
    }
    setOnEdit(null)
  }

  return (
    <table className="w-full h-full ">
      <thead>
        <tr className=" gap-40 inline-flex p-5 items-start">
          <th className=" text-2xl font-normal">Nome</th>
          <th className=" text-2xl font-normal">E-mail</th>
        </tr>
      </thead>
      <div className=" border border-black "></div>
      <tbody className="">
        {users.map((user) => (
          <tr key={user.id} className=" gap-16  inline-flex ">
            <td className="text-xl font-normal ">{user.nome}</td>
            <td className="text-xl font-normal w-48">{user.email}</td>
            <td className="text-xl font-normal w-48 hidden">{user.fone}</td>
            <td className="text-xl font-normal w-48 hidden">
              {user.data_nascimento}
            </td>

            <td className="justify-center items-center gap-6 flex w-24">
              <FaRegEdit
                className="size-8 cursor-pointer"
                onClick={() => handleEdit(user)}
              />

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
