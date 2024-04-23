import { useEffect, useState } from 'react'
import { Form } from './components/form'
import { toast, ToastContainer } from 'react-toastify'
import { Grid } from './components/grid'
import axios from 'axios'

export function App() {
  const [users, setUsers] = useState([])
  const [onEdit, setOnEdit] = useState(null)

  async function getUsers() {
    try {
      const res = await axios.get(`http://localhost:8800/`)

      setUsers(
        res.data.sort((primeiroNome: string, segundoNome: string) => {
          return primeiroNome > segundoNome ? 1 : -1
        }),
      )
    } catch (error: unknown) {
      typeof error === 'string'
        ? toast.error(error)
        : toast.error('um erro ocorreu')
    }
  }

  useEffect(() => {
    getUsers()
  }, [setUsers])

  return (
    <>
      <ToastContainer autoClose={3000} position="top-left" />
      <div className="flex justify-center items-center mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 items-center  max-w-4xl">
          <div className="rounded-lg bg-zinc-200 border ring-1 ring-zinc-950 flex flex-col justify-center px-10 my-10 lg:w-[460px] w-[650px]">
            <span className="font-bold text-2xl mt-[39px] justify-center flex">
              Cadastro de Convidados
            </span>
            <Form />
          </div>

          <div className="rounded-lg bg-zinc-200 flex ring-1 ring-zinc-950 flex-col py-10 px-10 h-[40.5rem] w-[650px]">
            <Grid users={users} />
          </div>
        </div>
      </div>
    </>
  )
}
