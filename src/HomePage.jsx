import React, {useState} from 'react'
import Header from './components/Header'
import TaskListContainer from './components/tasks/TaskListContainer.jsx'
import LoginForm from "./components/forms/LoginForm.jsx";
import SignUpForm from "./components/forms/SignUpForm.jsx";
import UpdateUserForm from "./components/forms/UpdateUserForm";
import {useAuth} from "./contexts/AuthContext.jsx";
import ResetPasswordForm from "./components/forms/ResetPasswordForm.jsx";
import InvitePage from "./components/InvitePage.jsx";

// TODO: fix issue when action returns null

// TODO: add component of right sidebar which appears when user is not logged in
function HomePage() {

    const { currentUser } = useAuth();

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
