import React from "react";
import Blur from "./Blur.jsx";

const TaskMenu = ({date, task, done}) => {

    const getDate = date => {
        const dayOfWeek = days[date.getDay()].slice(0, 3);
        const month = months[date.getMonth()].slice(0, 4);
        return `${dayOfWeek}, ${date.getDate()} ${month}.${date.getFullYear()}`;
    }

    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const day = days[ date.getDay() ];

    return (
        <Blur>
            <div className="task-menu relative top-26 bg-[#DDE1FB] rounded-xl p-4 w-1/3
            max-w-screen-md z-20 text-gray-600 transition-all duration-500 ease-linear"
                 onClick={ev => ev.stopPropagation()}>
                <div className="w-full flex justify-between text-sm">
                    <div className="flex gap-2 items-center">
                        <i className="fa-regular fa-calendar-days"></i>
                        <p className="text-sm">{getDate(date)}</p>
                    </div>

                    <div className="flex gap-3 items-center ">
                        <i className="fa-solid fa-trash-can cursor-pointer"></i>
                        <i className="fa-solid fa-rotate cursor-pointer"></i>
                        <div className="inline p-1.5 rounded-full border border-transparent hover:border-gray-400 cursor-pointer" >
                            <div className="rounded-full w-3 h-3 bg-amber-500"></div>
                        </div>
                        <i className="fa-regular fa-bell cursor-pointer"></i>
                    </div>
                </div>

                <div className="my-12">
                    <div className="relative w-full">
                        <input type="text" id="task-name" name="tast-name" value={task} className="w-full border-b border-gray-400 indent-2 py-1 text-xl bg-transparent focus:outline-none" />
                        <button className="absolute top-1/2 -translate-y-[50%] right-4">
                            <i className={`fa-${done ? "solid" : "regular"} fa-circle-check fa-lg`}></i>

                        </button>
                    </div>
                </div>
                <div className="w-full">
                    <textarea name="task-description" id="task-description" cols="30" rows="1" className="w-full focus:outline-none bg-transparent resize-none overflow-visible" placeholder="Write additional notes"></textarea>
                </div>
            </div>
        </Blur>
    )
}

export default TaskMenu;