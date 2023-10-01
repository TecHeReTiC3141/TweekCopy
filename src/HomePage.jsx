import React, {useEffect, useState} from 'react'
import Header from './components/Header'
import TaskListContainer from './components/tasks/TaskListContainer.jsx'
import LoginForm from "./components/forms/LoginForm.jsx";
import SignUpForm from "./components/forms/SignUpForm.jsx";
import UpdateUserForm from "./components/forms/UpdateUserForm";
import {useAuth} from "./contexts/AuthContext.jsx";
import ResetPasswordForm from "./components/forms/ResetPasswordForm.jsx";
import InvitePage from "./components/InvitePage.jsx";

function HomePage() {

    const { currentUser } = useAuth();
    // TODO: implement basic dark theme
    useEffect(() => {
        if (localStorage.theme === 'dark' || currentUser?.darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [localStorage.theme]);

    return (
        <main className="max-container">

            <Header/>
            <TaskListContainer/>
            <LoginForm/>
            <SignUpForm/>
            <UpdateUserForm/>
            <ResetPasswordForm/>
            {!currentUser && <InvitePage />}
        </main>
    )
}

export default HomePage
