import React, {useEffect, useState} from "react";
import Blur from "../Blur.jsx";
import TaskMenuBtn from "./TaskMenuBtn.jsx";
import {TaskMenuColorPicker} from "./TaskMenuColorPicker.jsx";
import {Form} from "react-router-dom";
import {tryCatchDecorator, deleteTask} from "../../scripts/api.js";
import {useTaskMenu} from "../../contexts/TaskMenuContext.jsx";

const TaskMenu = () => {

    const {taskData, setTaskData} = useTaskMenu();
    const {id: taskId, date, color, name, done, description} = taskData;

    console.log("In task menu", taskData);

    // TODO: fix bugs connected with new TaskMenu

    useEffect(() => {
        const form = document.querySelector(".task-menu-form");
        form.querySelector("#task-name").value = taskData.name;
        form.querySelector("#task-description").value = taskData.description || "";
    }, [taskData]);

    function openColorPicker(ev) {
        ev.stopPropagation();
        let taskMenuColorPicker = ev.target.parentElement.parentElement.parentElement
            .querySelector(".task-menu-color-picker");
        if (!taskMenuColorPicker) {
            let taskMenuColorPicker = ev.target.parentElement.parentElement
                .querySelector(".task-menu-color-picker");
        }
        taskMenuColorPicker.classList.toggle("active");
        const buttonPos = ev.target.getBoundingClientRect();
        taskMenuColorPicker.style.left = `${Math.round(buttonPos.left + buttonPos.width / 2)}px`;
        taskMenuColorPicker.style.top = `${Math.round(buttonPos.bottom) + 12}px`;
    }

    function closeColorPicker(ev) {
        const taskMenuColorPicker = ev.target.querySelector(".task-menu-color-picker");
        if (taskMenuColorPicker) {
            taskMenuColorPicker.classList.remove("active");
        }
    }

    async function delTask(ev) {
        await tryCatchDecorator(deleteTask)(taskId);
        const bgBlur = document.querySelector(".blur-bg.active");
        bgBlur.classList.remove("active");
    }

    const taskMenuBtns = [
        {
            icon: "fa-regular fa-trash-can cursor-pointer",
            onClick: delTask,
            disabled: false,
            tooltip: "Delete",
        },
        {
            icon: "fa-solid fa-rotate cursor-pointer",
            onClick: () => {
            },
            disabled: true,
            tooltip: "Repeat",
        },
        {
            icon: `cursor-pointer inline-block rounded-full w-3 h-3 bg-${color}`,
            onClick: openColorPicker,
            disabled: false,
            tooltip: "Select color",
        },
        {
            icon: "fa-regular fa-bell cursor-pointer",
            onClick: () => {
            },
            disabled: true,
            tooltip: "Reminder",
        },
    ]

    const getDate = date => {
        const dayOfWeek = days[date.getDay()].slice(0, 3);
        const month = months[date.getMonth()].slice(0, 4);
        return `${dayOfWeek}, ${date.getDate()} ${month}. ${date.getFullYear()}`;
    }

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = days[date.getDay()];

    return (
        <Blur type="task-menu">
            <div className="task-menu relative top-40 bg-[#DDE1FB] rounded-xl
            py-4 lg:py-6 px-6 lg:px-8 w-[28rem]
             z-20 text-gray-600 transition-all duration-500 ease-linear"
                 onClick={ev => {
                     ev.stopPropagation();
                     closeColorPicker(ev);
                 }}>
                <div className="w-full flex justify-between text-sm">
                    <div className="flex gap-2 items-center">
                        <i className="fa-regular fa-calendar-days"></i>
                        <p className="text-sm">{getDate(date)}</p>
                    </div>


                    <div className="flex gap-3 items-center ">
                        {
                            taskMenuBtns.map((btn, ind) => (
                                <TaskMenuBtn key={ind} {...btn} />
                            ))
                        }
                        <TaskMenuColorPicker
                            setColor={value => setTaskData(prevData =>
                                ({
                                    ...prevData,
                                    color: value,
                                }))}/>
                    </div>
                </div>

                <div className="mt-12">
                    <Form method="POST" className="task-menu-form relative w-full">
                        <input type="text" id="task-name" name="task-name" defaultValue={name}
                               onChange={ev =>
                                   setTaskData(prevTaskData => ({
                                       ...prevTaskData,
                                       name: ev.target.value,
                                   }))
                               }
                               className={"w-full border-b border-gray-400 indent-2 py-1 text-xl bg-transparent focus:outline-none "
                                   + ((done && "line-through opacity-40") || '')}
                        />
                        <button className="absolute top-5 -translate-y-[50%] right-4"
                                onClick={ev => {
                                    ev.preventDefault();
                                    setTaskData(prevData =>
                                        ({
                                            ...prevData,
                                            done: !done,
                                        }));
                                }}>
                            <i className={`fa-${done ? "solid" : "regular"} fa-circle-check fa-lg`}></i>

                        </button>
                        <textarea name="task-description" id="task-description" cols="30" rows="3"
                                  className="w-full mt-12 focus:outline-none bg-transparent resize-none overflow-y-visible"
                                  onChange={ev =>
                                      setTaskData(prevTaskData => ({
                                          ...prevTaskData,
                                          description: ev.target.value,
                                      }))
                                  }
                                  placeholder="Write additional notes" defaultValue={description}></textarea>
                        <input type="checkbox" id="task-done" name="task-done" checked={done} className="hidden"
                               readOnly={true}/>
                        <input type="text" id="task-color" name="task-color" value={color} className="hidden"
                               readOnly={true}/>
                        <input type="text" id="task-id" name="task-id" value={taskId} className="hidden"
                               readOnly={true}/>
                    </Form>
                </div>

            </div>
        </Blur>
    )
}

export default TaskMenu;