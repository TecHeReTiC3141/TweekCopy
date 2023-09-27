import React, {useEffect} from 'react'
import TaskMenu from "./TaskMenu.jsx";
import {Form} from "react-router-dom";
import { addTask } from "../scripts/api.js";
import {useAuth} from "../contexts/AuthContext.jsx";

const Task = ({taskListInd, ind, data, setTask, date}) => {
    function handleToggleDone() {
        // console.log('in toggle done task', data, {
        //     ...data,
        //     done: !data.done,
        // });
        // console.log(`toggled ${data.done}`);
        setTask({
            ...data,
            done: !data.done,
        });
    }

    const { currentUser } = useAuth();

    async function handleFocusOut(ev) {
        // TODO: there must be implementing saving tasks based on form value
        console.log(ev.target.value);
        // await addTask({
        //     uid: currentUser.uid,
        //     color: date.color || "white",
        //     name: ev.target.value,
        //     date:
        // })
    }

    function openTaskMenu(ev) {
        if (document.querySelector('.blur-bg.active')) return;
        const taskMenuBg = ev.target.parentElement.querySelector('.blur-bg');
        taskMenuBg.classList.add('active');
        document.body.style.overflowY = "hidden";
    }

    let taskDate = date.toISOString().split("T")[0];

    return (
        <div className={`${!data && "add-task"} w-full border-b
         border-gray-200 hover:border-gray-500 hover:border-b-0 group`} data-ind={ind}>
            {!data ?
                <Form method="POST">
                    {/*<input type="text" defaultValue="add-task-form" name="form-id" id="form-id" className="hidden" />*/}

                    <input type="text"
                           name="add-task-name"
                           id="add-task-name"
                           className="focus:outline-none focus:px-1.5 focus:shadow-lg focus:border w-full py-2 indent-1.5 rounded-md  border-gray-300 focus:z-5"
                           readOnly={true}
                           onBlur={handleFocusOut}
                    />
                    <input type="date" defaultValue={taskDate} className="hidden"/>
                </Form>
                :
                <div className="task flex justify-between items-center py-2 px-3 cursor-grab">
                    <h5 className={"task-title flex-1 bg-red-100" + (data.done && "line-through opacity-40") || ''}
                        onClick={openTaskMenu}>{data?.task}</h5>
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