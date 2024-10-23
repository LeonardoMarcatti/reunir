import React, {memo} from "react";
import {Link, Form, useRouteLoaderData} from 'react-router-dom'
import Input from "../components/Input";
import Select from "../components/Select";

const NewMeeting = memo(function NewMeeting() {
   const user = useRouteLoaderData('appRoot')
   
   return <>
      <aside>
      </aside>
      <main className="flex flex-col justify-center items-center pt-2">
         <h1 className="text-4xl">Nova Reunião</h1>
         <Form method="post" className="w-1/2">
            <Input data="id" label="" type="text" val={user['id']} isHidden/>
            <Input data="title" label="Título da Reunião" type="text"/>
            <Select />
            <Input data="start_at" label="Início da Reunião" type="datetime-local"/>
            <Input data="end_at" label="Fim da Reunião" type="datetime-local"/>
            
            <button type="submit" className="bg-orange-400 px-4 py-2 rounded-lg text-black">Criar</button>
            <Link to='..'>Voltar</Link>
         </Form>
      </main>
   </>
})

export default NewMeeting