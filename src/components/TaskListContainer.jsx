import React, {useEffect, useState} from 'react'
import TaskList from './TaskList'
import LoginForm from "./forms/LoginForm.jsx";
import { useSearchParams } from "react-router-dom";

const TaskListContainer = () => {

    const [searchParams, setSearchParams] = useSearchParams();

    const [curDate, setCurDate] = useState(new Date());

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

    }, [searchParams.get("weekShift")])

    const [maxTasks, setMaxTasks] = React.useState(10);
    const dayOfWeek = (curDate.getDay() - 1) % 7;
    const dates = [];
    const tasksData = {};
    for (let i = -dayOfWeek; i < -dayOfWeek + 7; ++i) {
        const newDate = new Date(+curDate);
        newDate.setDate(newDate.getDate() + i);
        dates.push(newDate);
        tasksData[newDate.getDate()] = [];
        for (let j = 0; j < Math.round(6 * Math.random()); ++j) {
            tasksData[newDate.getDate()].push({
                task: `Task ${j}`,
                done: Boolean(Math.round(Math.random())),
                date: newDate,
            })
        }
    }


    const changeMaxTasks = (newTasks) => {
        if (newTasks > maxTasks) setMaxTasks(newTasks);
    }


    return (
        <>
            <LoginForm />
            <div className="w-full padding-x flex flex-col lg:flex-row gap-6 py-4 max-lg:mt-10">
                {
                    dates.slice(0, 5).map((date, index) => (
                        <TaskList date={date} key={index} ind={index} active={new Date().getDate() === date.getDate()
                            && new Date().getMonth() === date.getMonth()} last={false}
                                  maxTasks={maxTasks} changeMaxTasks={changeMaxTasks} tasksData={tasksData[date.getDate()]}/>
                    ))
                }
                <div className="flex-1 ">
                    {
                        dates.slice(5).map((date, index) => (
                            <TaskList date={date} key={index} ind={index} active={new Date().getDate() === date.getDate()
                                && new Date().getMonth() === date.getMonth()} last={true}
                                      maxTasks={maxTasks} changeMaxTasks={changeMaxTasks} tasksData={tasksData[date.getDate()]}/>
                        ))
                    }
                </div>

            </div>
        </>
    )
}

export default TaskListContainer