import axios from 'axios'
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa'
import { toast } from 'sonner'

interface User {
  id: number
  nome: string
  email: string
  fone: string
  data_nascimento: string
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
    <table className="w-full h-full  ">
      <thead>
        <tr className=" gap-40 inline-flex p-5 items-start">
          <th className=" text-xl font-semibold">Nome</th>
          <th className=" text-xl font-semibold">E-mail</th>
        </tr>
      </thead>
      <div className=" ring-[0.1px] ring-zinc-950 shadow-2xl "></div>
      <tbody className=" mt-6 flex flex-col gap-3">
        {users.map((user) => (
          <tr key={user.id} className=" gap-16  flex justify-between">
            <td className="text-xl font-normal ">{user.nome}</td>
            <td className="text-xl font-normal w-48">{user.email}</td>
            <td className="text-xl font-normal w-48 hidden">{user.fone}</td>
            <td className="text-xl font-normal w-48 hidden">
              {user.data_nascimento}
            </td>

            <td className="justify-center items-end w-fit gap-3 flex ">
              <FaRegEdit
                className="size-6 cursor-pointer"
                onClick={() => handleEdit(user)}
              />

              <FaRegTrashAlt
                onClick={() => handleDelete(user.id)}
                className="size-6 cursor-pointer text-[#FF0000]"
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
