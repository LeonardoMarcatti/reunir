import React, {lazy, Suspense } from "react";
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import Login from './pages/Login.'
import Logup from './pages/Logup'
import NewRoom from './pages/NewRoom'
import ErrorPage from './pages/ErrorPage'
import MyReserves from './pages/MyReserves'
import {saveUser, login, logOut, newMeeting, getMeetingRooms, updateMeeting, getMeetingDetails, deleteMeeting, getRoomsAndDetails, updateMeetingRoom, deleteRoom, createRoom, getMyReserves} from './utils/script'
import { loadData } from "./pages/Root";

const Root = lazy(() => import('./pages/Root'))
const Home = lazy(() => import('./pages/Home'))
const Meet = lazy(() => import('./pages/Meet'))
const EditMeeting = lazy(() => import('./pages/EditMeeting'))
const NewMeeting = lazy(() => import('./pages/NewMeeting'))
const MeetingRooms = lazy(() => import('./pages/MeetingRooms'))
const EditRoom = lazy(() => import('./pages/EditRoom'))


const routes = createBrowserRouter([
   {
      path: '/', errorElement: <ErrorPage/>, children:[
         {index: true, action: login, element: <Login/> },
         {path: 'logup', action: saveUser, element: <Logup/>},
      ]
   },
   {
      path: '/app/', id: 'appRoot', loader: loadData, errorElement: <ErrorPage/>, 
      element: <Root/>, 
      children: [
         {index: true, element: <Suspense fallback={<p>Aguarde...</p>}><Home/></Suspense>},
         {path: 'logout', loader: logOut},
         {path: 'meeting', children: [
            {path: 'new', element: <NewMeeting />, action: newMeeting, loader: getMeetingRooms},
            {path: 'view/:id', element: <Meet />, loader: ({ params }) => getMeetingDetails(params.id)},
            {path: 'delete/:id', loader:({params}) => deleteMeeting(params.id)},
            {path: 'edit/:id', action: updateMeeting, element: <EditMeeting />, loader:({params}) => getRoomsAndDetails(params.id)}
            ]
         },
         {path: 'meetingRooms', children:[
            {index: true, loader: getMeetingRooms, element: <MeetingRooms />},
            {path: 'new', action: createRoom, element: <NewRoom />},
            {path: 'edit/:id', loader: getMeetingRooms, action: updateMeetingRoom, element: <EditRoom />},
            {path: 'delete/:id', loader: ({params}) => deleteRoom(params.id)},
         ]},
         {path: 'myReserves', loader: getMyReserves,  element: <MyReserves />}
      ]
   }
])

const App = () => <RouterProvider router={routes}/>

export default App
