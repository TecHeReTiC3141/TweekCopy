import {db} from "./firebase.js";
import {
    collection,
    addDoc,
    doc,
    getDoc,
    getDocs,
    deleteDoc,
    updateDoc,
    query,
    where,
    setDoc,
} from "firebase/firestore";

const taskColRef = collection(db, "tasks");
const userColRef = collection(db, "users");

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

// Tasks CRUD

export async function createTask(data) {
    const docRef = await addDoc(taskColRef, data);
    const newTask = await getDoc(docRef);
    console.log(`creating task ${data.name}`)
    return {
        ...newTask.data(),
        id: newTask.id,
    };
}

export async function getUserTasks(userId) {
    const q = query(taskColRef,
        where("uid", "==", userId || "null"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
        date: new Date(doc.data().date),
    }))
}

export async function updateTask(taskId, data) {
    console.log(`updating task ${taskId}`);
    console.log(data);
    const taskRef = doc(db, "tasks", taskId);
    await updateDoc(taskRef, data);
}

export async function deleteTask(taskId) {
    await deleteDoc(doc(db, "tasks", taskId));
}
export async function toggleDoneTask(taskId) {
    const taskRef = doc(db, "tasks", taskId);
    const taskDone = (await getDoc(taskRef)).data().done;
    await updateDoc(taskRef, {
        done: !taskDone,
    });
}

export async function clearUsersTasks(userId) {
    const tasks = await getUserTasks(userId);
    console.log(`deleting ${tasks.length}`)
    tasks.map(async ({ id }) => {
        await deleteDoc(doc(db, "tasks", id));
    })
}

// Users CRUD

export async function createUser(id, data) {
    console.log('in create user', id, data);
    await setDoc(doc(db, 'users', id), data);
}

export async function getCurrentUser(id) {
    if (!id) return null;
    const userRef = doc(db, 'users', id);
    const userSnapshot = await getDoc(userRef);
    return {
        uid: userSnapshot.id,
        ...userSnapshot.data(),
    }
}

export async function updateUserData(id, data) {
    const userRef = doc(db, 'users', id);
    await updateDoc(userRef, data);
}

