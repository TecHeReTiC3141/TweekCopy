import React, {useState} from 'react'
import Header from './components/Header'
import TaskListContainer from './components/TaskListContainer'
import LoginForm from "./components/forms/LoginForm.jsx";
import SignUpForm from "./components/forms/SignUpForm.jsx";
import { addTask } from "./scripts/api"

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
        return await signup(email, password);
    }
    else if (formId === "add-task-form") {
        const { currentUser } = AuthContext;

        await addTask({
            name: formData.get("add-task-name"),
            color: "white",
            date: formData.get("task-date"),
            uid: currentUser.uid,
            done: false,
        })
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
        </main>
    )
}

export default HomePage
