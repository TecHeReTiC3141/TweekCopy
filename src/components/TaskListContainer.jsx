import React, {useEffect, useState} from 'react'
import TaskList from './TaskList'
import LoginForm from "./forms/LoginForm.jsx";
import { useSearchParams } from "react-router-dom";
import { onSnapshot, collection, query, where } from "firebase/firestore";
import { db } from "../scripts/firebase";
import { useAuth } from "../contexts/AuthContext";

function formDate(date) {
    return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
}

const TaskListContainer = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const [curDate, setCurDate] = useState(new Date());

    const [tasks, setTasks] = useState([]);

    const { currentUser } = useAuth();
    console.log(tasks.length);

    useEffect(() => {

        const taskColRef = collection(db, "tasks");
        const q = query(taskColRef,
            where("uid", "==", currentUser?.uid || "null"));
        return onSnapshot(q, snapshot => {
            setTasks(snapshot.docs.map(doc => ({
                ...doc.data(),
                id: doc.id,
                date: new Date(doc.data().date),
            })))
        })
    }, [currentUser]);

    useEffect(() => {
        if (searchParams.has("weekShift")) {
            const shift = +searchParams.get("weekShift") * 7;
            console.log(shift);
            setCurDate((prevCurDate) => {
                const newDate = new Date();
                newDate.setDate(newDate.getDate() + shift);
                return newDate;
            })
        }

    }, [searchParams.get("weekShift")]);


    const [maxTasks, setMaxTasks] = React.useState(10);
    const dayOfWeek = (curDate.getDay() - 1) % 7;
    const dates = [];
    const tasksData = {};
    for (let i = -dayOfWeek; i < -dayOfWeek + 7; ++i) {
        const newDate = new Date(+curDate);
        newDate.setDate(newDate.getDate() + i);
        dates.push(newDate);
        tasksData[formDate(newDate)] = tasks.filter(task => formDate(task.date) === formDate(newDate));
    }
    // console.log(tasksData);


    const changeMaxTasks = (newTasks) => {
        if (newTasks > maxTasks) setMaxTasks(newTasks);
    }


    return (
        <div className="w-full padding-x flex flex-col lg:flex-row gap-6 py-4 max-lg:mt-10">
            {
                dates.slice(0, 5).map((date, index) => (
                    <TaskList date={date} key={index} ind={index} active={formDate(new Date()) === formDate(date)}
                              last={false}
                              maxTasks={maxTasks} changeMaxTasks={changeMaxTasks} tasksData={tasksData[formDate(date)]}/>
                ))
            }
            <div className="flex-1 ">
                {
                    dates.slice(5).map((date, index) => (
                        <TaskList date={date} key={index} ind={index} active={formDate(new Date()) === formDate(date)}
                                  last={true}
                                  maxTasks={maxTasks} changeMaxTasks={changeMaxTasks} tasksData={tasksData[formDate(date)]}/>
                    ))
                }
            </div>
        </div>
    )
}

export default TaskListContainer