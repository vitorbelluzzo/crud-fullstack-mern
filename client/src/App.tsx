/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, useEffect, useState } from "react";
import { Form } from "./components/form";
import { Grid } from "./components/grid";
import axios from "axios";
import { toast, Toaster } from "sonner";

export function App() {
  const [users, setUsers] = useState<any[]>([]);
  const [onEdit, setOnEdit] = useState<any>(null);
  const [Event, SetEvent] = useState<string>(() => {
    return localStorage.getItem("Event") || "";
  });
  const [eventSaved, setEventSaved] = useState<boolean>(() => {
    return localStorage.getItem("Event") !== null;
  });

  async function getUsers() {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(
        res.data.sort((a: { nome: number }, b: { nome: number }) =>
          a.nome > b.nome ? 1 : -1
        )
      );
    } catch (error) {
      if (error instanceof Error && error.message) {
        toast.error(error.message);
      } else {
        toast.error("Um erro ocorreu");
      }
    }
  }

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    SetEvent(event.target.value);
  }

  function saveEventName() {
    localStorage.setItem("Event", Event);
    setEventSaved(true);
  }

  function editEvent() {
    setEventSaved(false);
  }

  return (
    <>
      {!eventSaved ? (
        <div className="flex mt-20  -mb-24 gap-3 justify-center  mx-auto items-center   ">
          <input
            className="border w-2/6 p-2 rounded-lg max-w-96 "
            type="text"
            required
            placeholder="Insira o nome do evento..."
            value={Event}
            onChange={handleInputChange}
          />
          <button
            className="ring-[0.5px] ring-zinc-500  justify-center px-4 py-3 rounded-2xl  flex items-center"
            onClick={saveEventName}
          >
            Salvar
          </button>
        </div>
      ) : (
        <div className="flex flex-col mt-20 -mb-24 gap-2 justify-center  mx-auto items-center    ">
          <span className="font-semibold text-4xl  justify-center items-center flex">
            {Event}
          </span>
          <button
            className="underline ring-zinc-500 p-2  text-sm  justify-center  rounded-2xl  flex items-center"
            onClick={editEvent}
          >
            Editar Nome do evento
          </button>
        </div>
      )}
      <Toaster position="top-center" richColors />
      <div className="flex justify-center items-center mt-20  mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-20 items-center max-w-4xl ">
          <div className="rounded-lg bg-white border   flex flex-col justify-center px-10 my-10 lg:w-[460px] w-[650px] shadow-2xl  ">
            <Form getUsers={getUsers} onEdit={onEdit} setOnEdit={setOnEdit} />
          </div>

          <div className="rounded-lg bg-white flex border  flex-col py-10 px-10 h- h-5/6 w-[650px]  justify-center my-10 shadow-2xl ">
            <span className="font-semibold text-2xl  justify-center flex">
              Lista de Participantes
            </span>
            <Grid users={users} setOnEdit={setOnEdit} setUsers={setUsers} />
          </div>
        </div>
      </div>
    </>
  );
}
