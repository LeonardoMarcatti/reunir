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
      method: 'GET',
      headers: {
         Authorization: `Bearer ${token}`,
         "Content-Type": "application/json",
         "Accept": "application/json"
      },
   })

      const json = await result.json()

      if (json.message == 'Unauthenticated.') {
         return redirect('/')
      }

      return json
   } catch (error) {
      console.log(error);
      
      throw new Response(error.message, {status: error.status || 500});
   }
}

const logOut = async () => {
   try {
      const token = sessionStorage.getItem('token')
      await fetch(`${base_url}logOut`, {
         method: 'get',
         headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
         },
      })
      sessionStorage.removeItem('token')
      return redirect('/')
   } catch (error) {
      console.log(error);
   }
}

const getMeetings = async () => {
   try {
      const token = sessionStorage.getItem('token')
      const meetings = await fetch(`${base_url}getMeetings`, {
         method: 'get',
         headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
         },
      })

      const json = await meetings.json()

      return json
   } catch (error) {
      console.log(error);
      
   }
}

const newMeeting = async ({request,}) => {
   const data  = await request.formData()

   const formData = {
      title: data.get('title'),
      user_id: data.get('id'),
      room_id: data.get('id'),
      start_at: data.get('start_at'),
      end_at: data.get('end_at'),
      password_confirmation: data.get('password_confirmation'),
   }
   
   try {
      const token = sessionStorage.getItem('token')
      const result = await fetch(`${base_url}newMeeting`, {
         method: 'post',
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify(formData)
      })

      const json = await result.json()
      console.log(json);
      
      return json

   } catch (error) {
      console.log(error);
      return null
   }
}

const getMeetingRooms = async () => {
   try {
      const token = sessionStorage.getItem('token')
      const meetings = await fetch(`${base_url}getMeetingRooms`, {
         method: 'get',
         headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
         },
      })

      const json = await meetings.json()

      return json
   } catch (error) {
      console.log(error);
   }
}


export {saveUser, login, checkUser, logOut, getMeetings, newMeeting, getMeetingRooms}