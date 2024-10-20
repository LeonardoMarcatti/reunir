import React, {memo} from "react";
import Input from "../components/UI/Input";
import Form from 'react-bootstrap/Form';
import styles from './Login.module.css'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom'

const Login = memo(function Login() {
   return <main id={styles['main']}>
      <h1>Login</h1>
      <Form action="" method="post">
         <Input type="email" data="email" label="Email" />
         <Input type="password" data="password" label="Senha" />
         <div id={styles['form_buttons']}>
            <Button type="submit" className="btn-primary">Login</Button>
            <Link to='logup'>Logup</Link>
         </div>
      </Form>
   </main> 
   
});

export default Login