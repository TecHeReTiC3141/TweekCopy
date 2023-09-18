import React from "react";

const TaskMenu = ({date, task, done}) => {

    const getDate = date => {
        const dayOfWeek = days[date.getDay()].slice(0, 3);
        const month = months[date.getMonth()].slice(0, 4);
        return `${dayOfWeek}, ${date.getDate()} ${month}.${date.getFullYear()}`;
    }

    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const day = days[ date.getDay() ];

    function handleTaskMenuClose(ev) {
        ev.stopPropagation();
        ev.target.classList.remove('active');
        document.body.style.overflowY = 'auto';
    }

    return (
        <div className="task-menu-bg bg-white bg-opacity-70 fixed top-0 left-0 h-full w-full z-10
        transition-all duration-300 ease-linear cursor-default" onClick={handleTaskMenuClose} >
            <div className="task-menu fixed top-20 left-1/2 -translate-x-[50%] bg-blue-300 rounded-xl p-4 w-1/3 max-w-screen-md z-20" onClick={ev => ev.stopPropagation()}>
                <div className="w-full flex justify-between text-sm">
                    <div className="flex gap-2 items-center">
                        <i className="fa-regular fa-calendar-days"></i>
                        <p className="text-sm">{getDate(date)}</p>
                    </div>

                    <div className="flex gap-3 items-center ">
                        <i className="fa-solid fa-trash-can"></i>
                        <i className="fa-solid fa-rotate"></i>
                        <div className="inline p-1.5 rounded-full border border-transparent hover:border-gray-400" >
                            <div className="rounded-full w-3 h-3 bg-amber-500"></div>
                        </div>
                        <i className="fa-regular fa-bell"></i>
                    </div>
                </div>

                <div className="my-12">
                    <div className="relative w-full">
                        <input type="text" value={task} className="w-full border-b border-gray-400 indent-2 py-1 text-xl bg-transparent" />
                        <i className={`absolute top-1/2 -translate-y-[50%] right-4 fa-${done ? "solid" : "regular"} fa-circle-check fa-xl `}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TaskMenu;