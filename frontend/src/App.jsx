import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Root from './pages/Root'
import Login from './pages/Login'

const App =() => {
   const routes = createBrowserRouter([
      {
         path: '/', element: <Root/>, children: [
            {index: true, element: <Login />}
         ]
      }
   ])

  return <RouterProvider router={routes} />
}

export default App
