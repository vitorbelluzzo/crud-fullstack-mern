/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react'
import { Form } from './components/form'
import { toast, ToastContainer } from 'react-toastify'
import { Grid } from './components/grid'
import axios from 'axios'

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
      <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        className={'size-4'}
        theme="light"
      />
      <div className="flex justify-center items-center mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 items-center  max-w-4xl">
          <div className="rounded-lg bg-zinc-200 border ring-1 ring-zinc-950 flex flex-col justify-center px-10 my-10 lg:w-[460px] w-[650px]">
            <span className="font-bold text-2xl mt-[39px] justify-center flex">
              Cadastro de Convidados
            </span>
            <Form getUsers={getUsers} onEdit={onEdit} setOnEdit={setOnEdit} />
          </div>

          <div className="rounded-lg bg-zinc-200 flex ring-1 ring-zinc-950 flex-col py-10 px-10 h-[40.5rem] w-[650px]">
            <Grid users={users} setOnEdit={setOnEdit} setUsers={setUsers} />
          </div>
        </div>
      </div>
    </>
  )
}
