import { db } from "./firebase.js";
import {
    collection,
    addDoc,
    doc,
    getDoc,
    getDocs,
    deleteDoc,
} from "firebase/firestore";

const taskColRef = collection(db, "Task");

export function tryCatchDecorator(func) {

    return async function () {
        try {
            const data = await func.call(this, ...arguments);
            return {
                success: true,
                data,
            }
        } catch (err) {
            return {
                success: false,
                message: err.message,
            }
        }
    }
}

export async function addTask(data) {
    const docRef = await addDoc(taskColRef, data);
    const newTask =  await getDoc(docRef);
    return {
        ...newTask.data(),
        id: newTask.id,
    };
}


