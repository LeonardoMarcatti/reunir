/**
** Conjunto de funções ligadas a envio/recepção de dados para/de o back end
 */

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

const getMyMeetings = async () => {
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

const getMyReserves = async () => {
   try {
      const token = sessionStorage.getItem('token')
      const meetings = await fetch(`${base_url}getMyReserves`, {
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

const newMeeting = async ({request}) => {
   const data  = await request.formData()

   const formData = {
      title: data.get('title'),
      user_id: data.get('id'),
      room_id: data.get('room_id'),
      start_at: data.get('start_at'),
      end_at: data.get('end_at'),
      participants: data.get('participants'),
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

const getMeetingDetails = async (id) => {
   try {
      const meetings = await fetch(`${base_url}getMeetingDetails`, {
         method: 'post',
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
         },
         body: JSON.stringify({id})
      })

      const json = await meetings.json()
      
      return json
   } catch (error) {
      return null
   }
}

const deleteMeeting = async (id) => {
   try {
      await fetch(`${base_url}deleteMeeting`, {
         method: 'delete',
         headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
         },
         body: JSON.stringify({id})
      })
         return redirect('/app')         

   } catch (error) {
      return error
   }
}

const getRoomsAndDetails = async (id) => {
   const meetingDetails = await getMeetingDetails(id)
   const rooms = await getMeetingRooms()
   return {meetingDetails, rooms}
}

const updateMeeting = async ({request}) => {
   const data = await request.formData()
   const formData = {
      id: data.get('id'),
      title: data.get('title'),
      room_id: data.get('room_id'),
      start_at: data.get('start_at'),
      end_at: data.get('end_at'),
      participants: data.get('participants'),
   }

   try {
      const token = sessionStorage.getItem('token')
      const result = await fetch(`${base_url}updateMeeting`, {
         method: 'put',
         headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
         },
         body: JSON.stringify(formData)
      })

      const json = await result.json()      
      return json
   } catch (error) {
      return error
   }
}

const updateMeetingRoom = async ({request}) => {
   const data = await request.formData()
   const formData = {
      id: data.get('id'),
      name: data.get('name'),
      maxPeople: data.get('maxPeople'),
   }

   try {
      const token = sessionStorage.getItem('token')
      const result = await fetch(`${base_url}updateRoom`, {
         method: 'put',
         headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
         },
         body: JSON.stringify(formData)
      })
      const json = await result.json()      
      return json
   } catch (error) {
      return error
   }
}

const deleteRoom = async (id) => {
   try {
      const token = sessionStorage.getItem('token')
      const result = await fetch(`${base_url}deleteRoom`, {
         method: 'delete',
         headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept": "application/json",
         },
         body: JSON.stringify({id})
      })
      const json = await result.json()
      return redirect('/app/meetingRooms')
   } catch (error) {
      console.log(error);
      return error
   }
}

const createRoom = async ({request}) => {
   const data = await request.formData()
   const formData = {
      name: data.get('name'),
      maxPeople: data.get('maxPeople'),
   }
   try {
         const token = sessionStorage.getItem('token')
         const result = await fetch(`${base_url}createRoom`, {
            method: 'post',
            headers: {
               Authorization: `Bearer ${token}`,
               "Content-Type": "application/json",
               "Accept": "application/json",
            },
            body: JSON.stringify(formData)
         })
         const json = await result.json()
         return json
   } catch (error) {
         console.log(error);
         return error
   }

}

export {saveUser, login, checkUser, getMyMeetings, logOut, newMeeting, getMeetingRooms, updateMeeting, getMeetingDetails, deleteMeeting, getRoomsAndDetails, updateMeetingRoom, deleteRoom, createRoom, getMyReserves}