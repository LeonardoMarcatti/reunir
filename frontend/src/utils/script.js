import {redirect} from 'react-router-dom'

const base_url = 'http://192.168.1.160:8000/api/'

const saveToken = token => sessionStorage.setItem('token', token)

const saveUser = async ({request, params}) => {
   const data  = await request.formData()

   const formData = {
      name: data.get('name'),
      email: data.get('email'),
      password: data.get('password'),
      password_confirmation: data.get('password_confirmation'),
   }
   try {
      const result = await fetch(`${base_url}logup`, {
         method: 'post',
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         },
         body: JSON.stringify(formData)
      })

      const json = await result.json()

      return json
   } catch (error) {
      console.log(error);
      return null
   }
}

const login = async ({request}) => {
   const data = await request.formData()

   const formData = {
      email: data.get('email'),
      password: data.get('password'),
   }

   try {
      const result = await fetch(`${base_url}login`, {
         method: 'post',
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
         },
         body: JSON.stringify(formData)
      })

      const json = await result.json()
      if (json.status) {
         saveToken(json.token)
         return redirect('app')
      }
      
      return json

   } catch (error) {
      console.log(error);
        
   }
}

const checkUser = async () => {
   const token = sessionStorage.getItem('token')
   
   try {
      const result = await fetch(`${base_url}checkUser`, {
      method: 'get',
      headers: {
         Authorization: `Bearer ${token}`
      },
   })

      const json = await result.json()
      
      if (json.message == 'Unauthenticated.') {
         return redirect('/')
      }

      return json
   } catch (error) {
      throw new Response(error.message, {status: error.status || 500});
   }
}

export {saveUser, login, checkUser}