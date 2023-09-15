import React, {useEffect} from 'react'

const Task = ({taskListInd, ind, data, setTask}) => {
    if (data) console.log('in task', data);
    function handleToggleDone() {
        console.log('in toggle done task', data, {
            ...data,
            done: !data.done,
        });
        console.log(`toggled ${data.done}`);
        setTask({
            ...data,
            done: !data.done,
        });
    }

    function openTaskMenu() {
        const taskMenuBg = document.querySelector('.task-menu-bg');
        taskMenuBg.classList.add('active');
    }

    return (
        <div className={`task w-full border-b border-gray-200 hover:border-gray-500 hover:border-b-0 group`} data-ind={ind}>
            {!data ? <input type="text"
                            className="focus:outline-none  focus:shadow-md w-full py-2 indent-4 rounded-md focus:border border-gray-200 focus:z-10 disabled:bg-white"
                            disabled/>
                : <div className="flex justify-between items-center py-2 px-3 cursor-grab">
                    <h5 className={"task-title" + (data.done && "line-through opacity-40") || ''} onClick={openTaskMenu}>{data?.task}</h5>
                    <button className="toggle-done hidden group-hover:block max-lg:block" onClick={handleToggleDone}>
                        <i className={`fa-${data?.done ? "solid" : "regular"} fa-circle-check`}></i>
                    </button>
                </div>
            }

        </div>
    )
}

export default Task