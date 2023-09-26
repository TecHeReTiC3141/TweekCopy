import React, {useContext, useEffect, useState} from 'react';
import {auth} from "../scripts/firebase.js";
import { redirect } from "react-router-dom"
import {signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    updatePassword,
    updateEmail,
    sendPasswordResetEmail,
} from "firebase/auth"

const AuthContext = React.createContext();

export function useAuth() {
    return React.useContext(AuthContext);
}

function AuthProvider({ children }) {

    const [currentUser, setCurrentUser] = React.useState(null);

    React.useEffect(() => {
        return auth.onAuthStateChanged(async user => {
            setCurrentUser(user);
        })
    }, []);

    async function signup({ email, password, name, age }) {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // await createUser(auth.currentUser.uid, {email, name, age});
            return redirect('/profile');
        } catch (err) {
            return err.message;
        }
    }

    async function login(email, password) {
        try {
            await signInWithEmailAndPassword(auth, email, password);
            return redirect("/");
        } catch (err) {
            console.log(err);
            return err.message;
        }
    }

    async function logout() {
        return await signOut(auth);
    }

    // async function updateUser(email, password, data) {
    //     try {
    //         if (email !== currentUser.email) {
    //             await updateEmail(auth.currentUser, email);
    //         }
    //         if (password && password !== currentUser.password) {
    //             await updatePassword(auth.currentUser, password);
    //         }
    //         await updateUserData(currentUser.uid, data);
    //         setCurrentUser(await getCurrentUser(currentUser.uid));
    //         return redirect('/profile');
    //     } catch(err) {
    //         return err.message;
    //     }
    // }

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
    }

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthProvider;