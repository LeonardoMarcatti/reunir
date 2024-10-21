import React from "react";
import {Form, Link} from 'react-router-dom'

const Logup = () => {
   return <main>
      <Form method="post">
         <label htmlFor="name">Nome</label>
         <input type="text" name="name" id="name" />
         <label htmlFor="email">Email</label>
         <input type="email" name="email" id="email" />
         <label htmlFor="password">Senha</label>
         <input type="password" name="password" id="paswwrod" />
         <label htmlFor="password_confirmation">Repita Senha</label>
         <input type="password" name="password_confirmation" id="password_confirmation" />
         <button type="submit">Login</button>
         <Link to="..">Voltar</Link>
      </Form>
   </main>
}

export default Logup