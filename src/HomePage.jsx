import React, {useState} from 'react'
import Header from './components/Header'
import TaskListContainer from './components/TaskListContainer'
import LoginForm from "./components/forms/LoginForm.jsx";
import SignUpForm from "./components/forms/SignUpForm.jsx";
import UpdateUserForm from "./components/forms/UpdateUserForm";
import { createTask } from "./scripts/api"
import {useAuth} from "./contexts/AuthContext.jsx";
import {redirect} from "react-router-dom";
import ResetPasswordForm from "./components/forms/ResetPasswordForm.jsx";

// TODO: fix issue when action returns null

// TODO: add component of right sidebar which appears when user is not logged in
function HomePage() {

    return (
        <main className="max-container">

            <Header/>
            <TaskListContainer/>
            <LoginForm/>
            <SignUpForm/>
            <UpdateUserForm/>
            <ResetPasswordForm/>
        </main>
    )
}

export default HomePage
