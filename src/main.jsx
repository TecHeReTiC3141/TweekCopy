import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NotFound from "./components/NotFound.jsx";
import './index.css'
import  { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import loginAction from "./components/actions/LoginAction.jsx";

const router = createBrowserRouter(createRoutesFromElements(
    <>
        <Route path="/" element={<App />}/>
        <Route path="*" element={<NotFound />} />
        <Route path="/login" action={loginAction}/>
    </>
))
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
