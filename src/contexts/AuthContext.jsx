import React, {useContext, useEffect, useState} from 'react';
import {auth} from "../scripts/firebase.js";
import {signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    updatePassword,
    updateEmail,
    sendPasswordResetEmail,
} from "firebase/auth"
import { createUser, getCurrentUser, updateUserData } from "../scripts/api.js";

const AuthContext = React.createContext();

export function useAuth() {
    return React.useContext(AuthContext);
}

// TODO: store currentUser in localStorage

function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = React.useState(null);

    React.useEffect(() => {
        return auth.onAuthStateChanged(async user => {
            setCurrentUser(await getCurrentUser(user.uid));
            localStorage.isLoggedIn = user ? "true" : "false";
            console.log(localStorage.isLoggedIn);
        })
    }, []);

    async function signup({ email, password, name }) {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            localStorage.isLoggedIn = "true";
            return await createUser(auth.currentUser.uid, {email, name});
        } catch (err) {
            return {
                type: "error",
                errorMessage: err.message,
            };
        }
    }

    async function login(email, password) {
        try {
            localStorage.isLoggedIn = "true";
            return await signInWithEmailAndPassword(auth, email, password);
        } catch (err) {
            return {
                type: "error",
                errorMessage: err.message,
            };
        }
    }

    async function logout() {
        await signOut(auth);
        localStorage.isLoggedIn = "false";
        return window.location.reload();
    }

    async function updateUser(email, password, data) {
        try {
            if (email !== currentUser.email) {
                await updateEmail(auth.currentUser, email);
            }
            if (password && password !== currentUser.password) {
                await updatePassword(auth.currentUser, password);
            }
            await updateUserData(currentUser.uid, data);
            return setCurrentUser(await getCurrentUser(currentUser.uid));
        } catch(err) {
            return err.message;
        }
    }

    async function resetPassword(email) {
        try {
            await sendPasswordResetEmail(auth, email);
            return 'Check your inbox';
        } catch (err) {
            return err.message;
        }
    }

    const value = {
        currentUser,
        signup,
        login,
        logout,
        resetPassword,
        updateUser,
    }

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthProvider;