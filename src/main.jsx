import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './HomePage.jsx'
import NotFound from "./components/NotFound.jsx";
import './index.css'
import  { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import loginAction from "./components/actions/LoginAction.jsx";
import { useAuth } from "./contexts/AuthContext.jsx";

function App() {

    const authContext = useAuth();

    const router = createBrowserRouter(createRoutesFromElements(
        <>
            <Route path="/" element={<HomePage />}/>
            <Route path="*" element={<NotFound />} />
            <Route path="/login" action={loginAction}/>
        </>
    ))

    return (
        <RouterProvider router={router}/>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>,
)
