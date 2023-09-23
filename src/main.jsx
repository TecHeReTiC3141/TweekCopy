import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NotFound from "./components/NotFound.jsx";
import './index.css'
import  { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App />}/>
        <Route path="*" element={<NotFound />} />
    </>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
