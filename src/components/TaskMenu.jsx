import React from "react";
import Blur from "./Blur.jsx";
import TaskMenuBtn from "./TaskMenuBtn.jsx";

const TaskMenu = ({date, name, done}) => {

    const taskMenuBtns = [
        {
            icon: "fa-solid fa-trash-can cursor-pointer",
            onClick: () => {},
            disabled: false,
            tooltip: "Delete",
        },
        {
            icon: "fa-solid fa-rotate cursor-pointer",
            onClick: () => {},
            disabled: true,
            tooltip: "Repeat",
        },
        {
            icon: "cursor-pointer inline-block rounded-full w-3 h-3 bg-amber-500",
            onClick: () => {},
            disabled: true,
            tooltip: "Reminder",
        },
        {
            icon: "fa-regular fa-bell cursor-pointer",
            onClick: () => {},
            disabled: true,
            tooltip: "Reminder",
        },
    ]

    const getDate = date => {
        const dayOfWeek = days[date.getDay()].slice(0, 3);
        const month = months[date.getMonth()].slice(0, 4);
        return `${dayOfWeek}, ${date.getDate()} ${month}.${date.getFullYear()}`;
    }

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = days[date.getDay()];

    return (
        <Blur>
            <div className="task-menu relative top-40 bg-[#DDE1FB] rounded-xl
            py-4 lg:py-6 px-6 lg:px-8 w-[28rem]
             z-20 text-gray-600 transition-all duration-500 ease-linear"
                 onClick={ev => ev.stopPropagation()}>
                <div className="w-full flex justify-between text-sm">
                    <div className="flex gap-2 items-center">
                        <i className="fa-regular fa-calendar-days"></i>
                        <p className="text-sm">{getDate(date)}</p>
                    </div>

                    <div className="flex gap-3 items-center ">
                        {
                            taskMenuBtns.map(btn => (
                                <TaskMenuBtn {...btn} />
                            ))
                        }

                    </div>
                </div>

                <div className="my-12">
                    <div className="relative w-full">
                        <input type="text" id="task-name" name="tast-name" defaultValue={name}
                               className="w-full border-b border-gray-400 indent-2 py-1 text-xl bg-transparent focus:outline-none"/>
                        <button className="absolute top-1/2 -translate-y-[50%] right-4">
                            <i className={`fa-${done ? "solid" : "regular"} fa-circle-check fa-lg`}></i>

                        </button>
                    </div>
                </div>
                <div className="w-full">
                    <textarea name="task-description" id="task-description" cols="30" rows="1"
                              className="w-full focus:outline-none bg-transparent resize-none overflow-visible"
                              placeholder="Write additional notes"></textarea>
                </div>
            </div>
        </Blur>
    )
}

export default TaskMenu;