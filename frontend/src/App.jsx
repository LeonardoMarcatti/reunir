import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Login from './pages/Login.'
import Logup from './pages/Logup'
import {saveUser} from './utils/script'
const routes = createBrowserRouter([
   {
      path: '/', children:[
         {index: true, element: <Login/>},
         {path: 'logup', action: saveUser, element: <Logup/>},
      ]
   }
])

const App = () => <RouterProvider router={routes}/>

export default App
