/**
 * * Aqui encontra-se um conjunto de funções que buscam verificar a validade das datas de início e fim das reuniões em cada sala
 */


const mindDates = () => {
   const now = new Date();
   const pad = (num) => (num < 10 ? '0' + num : num);
   const minDateTime = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}T${pad(now.getHours())}:${pad(now.getMinutes())}`;

   const start_at = document.querySelector('#start_at');
   const end_at = document.querySelector('#end_at');
   start_at.setAttribute('min', minDateTime);
   end_at.setAttribute('min', minDateTime);

   const selectedStartDateTime = new Date(start_at.value);
   const selectedEndDateTime = new Date(end_at.value);
   if (selectedStartDateTime < now || selectedEndDateTime < now) {
      alert('Datas passadas não podem ser selecionadas');
   }

   if (selectedStartDateTime < now) {
      start_at.value = '';
   }

   if (selectedEndDateTime < now) {
      end_at.value = '';
   }

   if (selectedStartDateTime > selectedEndDateTime) {
      alert('A data de fim da reunião não pode ser anterior a data de início.')
      end_at.value = ''
   }
}

const getNotAvailableDates = async (id) => {
   
   const base_url = 'http://192.168.1.160:8000/api/'

   try {
      const meetings = await fetch(`${base_url}getNotAvailableDates`, {
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
      console.log(error)
   }
}

const dataConverter = (dateTimeStr) => {
    const date = new Date(dateTimeStr.replace(' ', 'T'));
    const options = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    };

    return new Intl.DateTimeFormat('pt-PT', options).format(date)
}

export {mindDates, getNotAvailableDates, dataConverter}