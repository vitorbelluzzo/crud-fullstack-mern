
export function App() {
  return (
    <div className="grid-cols-2 flex mx-auto justify-center items-center mt-36 gap-6">
        <div className="bg-[#1E1E1E] px-9 rounded-2xl flex flex-col justify-center">
          <h1 className="text-white text-base font-semibold mt-9 w-full  justify-center flex">Cadastro de usuários</h1>
          <form action="">
            <div className="flex flex-col gap-2  mt-4">
            <span className="text-sm text-white">Nome</span>
            <input type="text" className="bg-transparent border rounded-md"/>
            </div>

          </form>
        </div>
    
    </div>
   
  )
}
