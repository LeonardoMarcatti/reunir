import React, {lazy, Suspense } from "react";
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Login from './pages/Login.'
import Logup from './pages/Logup'
import NewMeeting from './pages/NewMeeting'
import ErrorPage from './pages/ErrorPage'
import {saveUser, login, checkUser, logOut, getMeetings, newMeeting, getMeetingRooms} from './utils/script'

const Root = lazy(() => import('./pages/Root'))
const Home = lazy(() => import('./pages/Home'))

const routes = createBrowserRouter([
   {
      path: '/', errorElement: <ErrorPage/>, children:[
         {index: true, action: login, element: <Login/>},
         {path: 'logup', action: saveUser, element: <Logup/>},
      ]},
      {
         path: '/app/', id: 'appRoot',  loader: checkUser, errorElement: <ErrorPage/>, 
         element: <Suspense fallback={<p>Aguarde...</p>}><Root/></Suspense>, 
         children: [
            {index: true, loader: getMeetings, element: <Suspense fallback={<p>Aguarde...</p>}><Home/></Suspense>},
            {path: 'newMeeting', element: <NewMeeting />, action: newMeeting, loader: getMeetingRooms},
            {path: 'logout', loader: logOut}
         ]
      }
])

const App = () => <RouterProvider router={routes}/>

export default App
