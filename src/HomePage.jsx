import React, {useState} from 'react'
import Header from './components/Header'
import TaskListContainer from './components/TaskListContainer'
import LoginForm from "./components/forms/LoginForm.jsx";
import SignUpForm from "./components/forms/SignUpForm.jsx";
import UpdateUserForm from "./components/forms/UpdateUserForm";
import { createTask } from "./scripts/api"
import {useAuth} from "./contexts/AuthContext.jsx";
import {redirect} from "react-router-dom";

export const action = (AuthContext) => async ({ request }) => {

    const formData = await request.formData();
    const formId = formData.get("form-id");

    if (formId === "login-form") {
        const { login } = AuthContext;
        const email = formData.get("email"),
            password = formData.get("password");
        console.log(email, password, request.url);
        return await login(email, password);

    }
    else if (formId === "signup-form") {
        const { signup } = AuthContext;
        const name = formData.get("name"),
            email = formData.get("email"),
            passwordConfirm = formData.get("confirmPassword"),
            password = formData.get("password");
        if (passwordConfirm !== password) {
            return "Passwords don't match";
        }
        console.log(email, password, request.url);
        return await signup({ email, password, name });
    } else if (formId === "update-user-form") {
        const { updateUser } = AuthContext;
        const name = formData.get("name"),
            email = formData.get("email"),
            passwordConfirm = formData.get("confirmPassword"),
            password = formData.get("password");
        if (passwordConfirm !== password) {
            return "Passwords don't match";
        }
        await updateUser(email, password, { name })
        return redirect("/");
    }

    return null;

}
function HomePage() {

    return (
        <main className="max-container">

            <Header/>
            <TaskListContainer/>
            <LoginForm/>
            <SignUpForm/>
            <UpdateUserForm/>
        </main>
    )
}

export default HomePage
