/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { Form } from './components/form'
import { Grid } from './components/grid'
import axios from 'axios'
import { toast, Toaster } from 'sonner'

export function App() {
  const [users, setUsers] = useState<any[]>([])
  const [onEdit, setOnEdit] = useState<any>(null)

  async function getUsers() {
    try {
      const res = await axios.get('http://localhost:8800')
      setUsers(
        res.data.sort((a: { nome: number }, b: { nome: number }) =>
          a.nome > b.nome ? 1 : -1,
        ),
      )
    } catch (error) {
      if (error instanceof Error && error.message) {
        toast.error(error.message)
      } else {
        toast.error('Um erro ocorreu')
      }
    }
  }

  useEffect(() => {
    getUsers()
  }, [setUsers])

  return (
    <>
      <Toaster position="top-center" richColors />
      <div className="flex justify-center items-center mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 items-center  max-w-4xl">
          <div className="rounded-lg bg-white   flex flex-col justify-center px-10 my-10 lg:w-[460px] w-[650px] shadow-2xl  ">
            <span className="font-semibold text-2xl mt-[39px] justify-center flex">
              Cadastro de Convidados
            </span>
            <Form getUsers={getUsers} onEdit={onEdit} setOnEdit={setOnEdit} />
          </div>

          <div className="rounded-lg bg-white flex  flex-col py-10 px-10 h-[39.7rem] w-[650px]  justify-center my-10 shadow-2xl ">
            <span className="font-semibold text-2xl  justify-center flex">
              Lista de convidados
            </span>
            <Grid users={users} setOnEdit={setOnEdit} setUsers={setUsers} />
          </div>
        </div>
      </div>
    </>
  )
}
