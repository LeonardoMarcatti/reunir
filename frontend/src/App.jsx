import React, {lazy, Suspense } from "react";
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Login from './pages/Login.'
import Logup from './pages/Logup'
import Home from './pages/Home'
import ErrorPage from './pages/ErrorPage'
import {saveUser, login, checkUser} from './utils/script'

const Root = lazy(() => import('./pages/Root'))

const routes = createBrowserRouter([
   {
      path: '/', errorElement: <ErrorPage/>, children:[
         {index: true, action: login, element: <Login/>},
         {path: 'logup', action: saveUser, element: <Logup/>},
         {path: 'app/', loader: checkUser, element: <Suspense fallback={<p>Aguarde...</p>}><Root/></Suspense>, children: [
            {index: true, element: <Home/>}
         ]}
      ]
   }
])

const App = () => <RouterProvider router={routes}/>

export default App
