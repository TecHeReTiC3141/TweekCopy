import React, {useContext, useEffect, useState} from 'react';
import {auth} from "../scripts/firebase.js";
import {createUserWithEmailAndPassword, onAuthStateChanged} from "firebase/auth"

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function TaskMenuProvider({children}) {

    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        return onAuthStateChanged(auth, user => {
            setCurrentUser(user);
        });
    }, []);

    async function signup(email, password) {
        return await createUserWithEmailAndPassword(auth, email, password);
    }

    function login(email, password) {

    }

    const value = {
        currentUser,
        signup,
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}