import axios from 'axios'
import { useEffect, useRef } from 'react'
import { toast } from 'sonner'

interface User {
  id: number
  nome: string
  email: string
  fone: string
  data_nascimento: string
}
interface FormProps {
  getUsers: () => void
  onEdit: User | null
  setOnEdit: React.Dispatch<React.SetStateAction<User | null>>
}

export function Form({ getUsers, onEdit, setOnEdit }: FormProps) {
  const ref = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (onEdit) {
      const user = ref.current

      if (user) {
        user.nome.value = onEdit.nome
        user.email.value = onEdit.email
        user.fone.value = onEdit.fone
        user.data_nascimento.value = onEdit.data_nascimento
      }
    }
  }, [onEdit])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const user = ref.current

    if (!user) return

    if (
      !user.nome.value ||
      !user.email.value ||
      !user.fone.value ||
      !user.data_nascimento.value
    ) {
      return toast.warning('Preencha todos os campos!')
    }

    const formData: User = {
      id: onEdit ? onEdit.id : 0,
      nome: user.nome.value,
      email: user.email.value,
      fone: user.fone.value,
      data_nascimento: user.data_nascimento.value,
    }

    try {
      if (onEdit) {
        await axios.put(`http://localhost:8800/${onEdit.id}`, formData)
      } else {
        await axios.post('http://localhost:8800', formData)
      }

      toast.success('Usuário salvo com sucesso')
      getUsers()
    } catch (error: unknown) {
      if (error instanceof Error && error.message) {
        toast.error(error.message)
      } else {
        toast.error('Um erro ocorreu')
      }
    }

    if (user) {
      user.nome.value = ''
      user.email.value = ''
      user.fone.value = ''
      user.data_nascimento.value = ''
    }

    setOnEdit(null)
  }

  return (
    <form ref={ref} onSubmit={handleSubmit}>
      <label className="flex flex-col mt-4 text-xl gap-2 font-semibold ">
        Nome
        <input
          type="text"
          name="nome"
          className="bg-transparent ring-1 ring-zinc-950 rounded-xl  p-4"
        />
      </label>
      <label className="flex flex-col mt-4 text-xl gap-2 font-semibold">
        E-mail
        <input
          type="email"
          name="email"
          className="bg-transparent ring-1 ring-zinc-950 rounded-xl p-4"
        />
      </label>
      <label className="flex flex-col mt-4 text-xl gap-2 font-semibold">
        Telefone
        <input
          type="tel"
          name="fone"
          className="bg-transparent ring-1 ring-zinc-950 rounded-xl  p-4"
        />
      </label>
      <label className="flex flex-col mt-4 text-xl gap-2 font-semibold ">
        Data de nascimento
        <input
          type="date"
          name="data_nascimento"
          className="bg-transparent ring-1 ring-zinc-950 appearance-none rounded-xl p-4"
        />
      </label>

      <label className="flex justify-center mt-8  mb-6 ">
        <button
          type="submit"
          className="ring-1 ring-zinc-950  justify-center p-4 rounded-2xl w-52 flex items-center"
        >
          Salvar
        </button>
      </label>
    </form>
  )
}
