import React from 'react'
import ReactDOM from 'react-dom/client'
import HomePage from './HomePage.jsx'
import NotFound from "./components/NotFound.jsx";
import './index.css'
import  { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import AuthProvider, { useAuth } from "./contexts/AuthContext";
import { action as loginAction } from "./components/forms/LoginForm";
import { action as signupAction } from "./components/forms/SignUpForm.jsx";
import { action as resetPasswordAction } from "./components/forms/ResetPasswordForm.jsx";
import { action as updateUserAction } from "./components/forms/UpdateUserForm.jsx";

function App() {

    const authContext = useAuth();

    const router = createBrowserRouter(createRoutesFromElements(
        <>
            <Route path="/" element={<HomePage />}/>
            <Route path="/login"  action={loginAction(authContext)}/>
            <Route path="/signup" action={signupAction(authContext)}/>
            <Route path="/reset-password" action={resetPasswordAction(authContext)}/>
            <Route path="/update-user" action={updateUserAction(authContext)}/>
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
