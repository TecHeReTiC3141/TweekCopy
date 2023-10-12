import React, {useEffect} from 'react'
import TaskMenu from "./TaskMenu.jsx";
import {Form } from "react-router-dom";
import {createTask, toggleDoneTask, tryCatchDecorator} from "../../scripts/api.js";
import {useAuth} from "../../contexts/AuthContext.jsx";
import {useTaskMenu} from "../../contexts/TaskMenuContext.jsx";
import {openForm} from "../../scripts/utils.js";

function formDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
}

const Task = ({taskListInd, ind, data, setTask, date, tasksCol}) => {
    async function handleToggleDone(ev) {
        ev.stopPropagation();
        await toggleDoneTask(data.id);
    }

    const { currentUser } = useAuth();

    const { setTaskData } = useTaskMenu();

    function openTaskMenu(ev) {
        if (document.querySelector('.blur-bg.active')) return;
        openForm("task-menu");
        console.log(data);
        setTaskData(data);
    }


    return (
        <div className={`w-full border-b
         border-gray-200 hover:border-gray-500 hover:border-b-0 group`} data-ind={ind}>
            <div className="task flex justify-between items-center py-2 px-3 cursor-grab" onClick={openTaskMenu}>
                <h5 className={`task-title px-2 py-0.5 rounded-full text-sm bg-${data.color} ` + (data.done && "opacity-40 line-through ") || ''}
                >{data?.name}</h5>
                <button className="toggle-done hidden group-hover:block max-lg:block" onClick={handleToggleDone}>
                    <i className={`fa-${data?.done ? "solid" : "regular"} fa-circle-check`}></i>
                </button>

            </div>
        </div>
    )
}

export default Task