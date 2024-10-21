import React from "react";
import {Form, Link} from 'react-router-dom'

const Login = () => {
   return <main>
      <h1>Login</h1>
      <Form method="post">
         <label htmlFor="email">Email</label>
         <input type="email" name="email" id="email" />
         <label htmlFor="password">Senha</label>
         <input type="password" name="password" id="paswwrod" />
         <button type="submit">Login</button>
         <Link to="logup">Logup</Link>
      </Form>
   </main>
}

export default Login