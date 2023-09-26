import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage, { action as homeAction } from './HomePage.jsx'
import NotFound from "./components/NotFound.jsx";
import './index.css'
import  { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import AuthProvider, { useAuth } from "./contexts/AuthContext";

function App() {

    const authContext = useAuth();

    const router = createBrowserRouter(createRoutesFromElements(
        <>
            <Route path="/" element={<HomePage />} action={homeAction(authContext)}/>
            <Route path="*" element={<NotFound />} />
        </>
    ))

    return (
        <RouterProvider router={router}/>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
  </React.StrictMode>,
)
