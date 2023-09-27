import React, {useState} from 'react'
import Header from './components/Header'
import TaskListContainer from './components/TaskListContainer'
import LoginForm from "./components/forms/LoginForm.jsx";
import SignUpForm from "./components/forms/SignUpForm.jsx";

export const action = (AuthContext) => async ({ request }) => {
    const formData = await request.formData();
    const formId = formData.get("form-id");
    console.log(request.body, request);
    console.log(formData);

    if (formId === "login-form") {
        const { login } = AuthContext;
        const email = formData.get("email"),
            password = formData.get("password");
        console.log(email, password, request.url);
        return await login(email, password);

    } else if (formId === "signup-form") {
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
    } else if (formId === "add-task-form") {
        console.log(formData);
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
