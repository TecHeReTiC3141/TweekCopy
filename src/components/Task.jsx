import React, {useEffect} from 'react'
import TaskMenu from "./TaskMenu.jsx";
import {Form, useSubmit} from "react-router-dom";
import { createTask, toggleDoneTask } from "../scripts/api.js";
import {useAuth} from "../contexts/AuthContext.jsx";

const Task = ({taskListInd, ind, data, setTask, date}) => {
    async function handleToggleDone() {
        await toggleDoneTask(data.id);
    }

    const { currentUser } = useAuth();
    const submit = useSubmit();


    // TODO: implement toggleDoneBtn on backend
    async function handleFocusOut(ev) {
        if (!ev.target.value) return;
        if (currentUser) {
            const formData = new FormData(ev.target.parentElement);
            console.log("creating new task", formData.get("add-task-name"));
            await createTask({
                name: formData.get("add-task-name"),
                color: "white",
                date: formData.get("task-date"),
                uid: currentUser.uid,
                done: false,
            })
        }
    }

    function openTaskMenu(ev) {
        if (document.querySelector('.blur-bg.active')) return;
        const taskMenuBg = ev.target.parentElement.querySelector('.blur-bg');
        taskMenuBg.classList.add('active');
        taskMenuBg.querySelector(".task-menu").classList.add("active");
        console.log(taskMenuBg.querySelector(".task-menu"));

    }

    let taskDate = date.toISOString().split("T")[0];

    return (
        <div className={`${!data && "add-task"} w-full border-b
         border-gray-200 hover:border-gray-500 hover:border-b-0 group`} data-ind={ind}>
            {!data ?
                <Form method="POST">
                    <input type="text"
                                           name="add-task-name"
                                           id="add-task-name"
                                           className="focus:outline-none focus:px-1.5 focus:shadow-lg focus:border w-full py-2 indent-1.5 rounded-md  border-gray-300 focus:z-5"
                                           readOnly={true}
                                           onBlur={handleFocusOut}
                />
                    <input type="text" defaultValue="add-task-form" name="form-id" id="form-id" className="hidden" />


                    <input type="date" defaultValue={taskDate} className="hidden" name="task-date" id="task-date"/>
                </Form>
                :
                <div className="task flex justify-between items-center py-2 px-3 cursor-grab" onClick={openTaskMenu}>
                    <h5 className={`task-title px-2 py-0.5 rounded-full text-sm bg-${data.color} ` + (data.done && "opacity-40 line-through ") || ''}
                        >{data?.name}</h5>
                    <button className="toggle-done hidden group-hover:block max-lg:block" onClick={handleToggleDone}>
                        <i className={`fa-${data?.done ? "solid" : "regular"} fa-circle-check`}></i>
                    </button>
                    <TaskMenu {...data}/>

                </div>
            }

        </div>
    )
}

export default Task