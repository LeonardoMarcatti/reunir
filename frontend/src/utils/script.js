const base_url = 'http://192.168.1.160:8000/api/'

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
   
   return {result, json}
   } catch (error) {
      console.log(error);
      return null
      
   }
   
}

export {saveUser}