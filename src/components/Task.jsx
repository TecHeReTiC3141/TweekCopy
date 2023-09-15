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

    useEffect(() => {
        if (!data) return;

        const taskList = document.querySelector(`.task-list:nth-child(${taskListInd + 1})`);
        const curTask = taskList.querySelector(`.task[data-ind="${ind}"]`);
        const toggleBtn = curTask.querySelector('.toggle-done');
        if (!toggleBtn) return;
        toggleBtn.addEventListener('click', handleToggleDone);
        return () => {
            toggleBtn.removeEventListener('click', handleToggleDone);
        }

    }, );

    return (
        <div className={`task w-full border-b border-gray-200 hover:border-gray-500 hover:border-b-0 group`} data-ind={ind}>
            {!data ? <input type="text"
                            className="focus:outline-none  focus:shadow-md w-full py-2 indent-4 rounded-md focus:border border-gray-200 focus:z-10 disabled:bg-white"
                            disabled/>
                : <div className="flex justify-between items-center py-2 px-3 cursor-grab">
                    <h5 className={(data.done && "line-through opacity-40") || ''}>{data?.task}</h5>
                    <button className="toggle-done hidden group-hover:block max-lg:block">
                        <i className={`fa-${data?.done ? "solid" : "regular"} fa-circle-check`}></i>
                    </button>
                </div>
            }

        </div>
    )
}

export default Task