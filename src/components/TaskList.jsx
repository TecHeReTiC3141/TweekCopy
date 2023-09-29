import React from 'react'
import Task from './Task';
import {useAuth} from "../contexts/AuthContext.jsx";
import {useSubmit} from "react-router-dom";
import {createTask, tryCatchDecorator} from "../scripts/api.js";

// function formDate(date) {
//     return `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`
// }

const TaskList = ({date, active, last, maxTasks, changeMaxTasks, tasksData, ind}) => {

    // TODO: implement sorting tasks by dragging them using Sortable

    const getDate = date => {
        let day = date.getDate().toString(), month = (date.getMonth() + 1).toString();
        if (day.length < 2) day = "0" + day;
        if (month.length < 2) month = "0" + month;
        return `${day}.${month}`;
    }

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const day = days[date.getDay()];


    const {currentUser} = useAuth();

    function handleClick(ev) {
        if (ev.target.tagName !== "INPUT") return;
        const thisTaskList = ev.target.parentElement.parentElement.parentElement;
        console.log(thisTaskList, thisTaskList.querySelector('.add-task'));

        const firstInput = thisTaskList.querySelector('.add-task > form > input[type="text"]');
        firstInput.removeAttribute("readOnly");
        firstInput.focus();
    }

    const submit = useSubmit();

    async function handleKeyDown(ev) {
        if (ev.key === 'Enter') {
            const curInput = document.querySelector('input:focus');

            if (curInput.value) {

                // TODO: when Enter is pressed, next input must be focused
                if (currentUser) {
                    const formData = new FormData(curInput.parentElement);
                    console.log("creating new task", formData.get("add-task-name"), date);
                    await tryCatchDecorator(createTask)({
                        name: formData.get("add-task-name"),
                        color: "white",
                        date,
                        uid: currentUser.uid,
                        done: false,
                    });
                    curInput.blur();
                } else {
                    const thisTaskList = curInput.parentElement.parentElement.parentElement;
                    if (thisTaskList.dataset.date == date.getDate()) {
                        console.log(curInput.value)
                        const newTask = curInput.value
                    }
                    curInput.value = '';
                }

            }
        }
    }

    React.useEffect(() => {
        const thisTaskList = document.querySelector(`.task-list[data-date="${date.getDate()}"]`);
        const firstInput = thisTaskList.querySelector('input:first-of-type');
        if (firstInput) {
            firstInput.removeAttribute('disabled');
            firstInput.focus();
        }
    }, [tasksData])

    const tasksComponents = [];
    for (let i = 0; i < (last ? maxTasks / 2 : maxTasks); ++i) {
        tasksComponents.push(<Task key={i} data={i < tasksData.length && tasksData[i]}
                                   taskListInd={ind} date={date}
                                   setTask={newValue => setTasks(prevTasks => {
                                       console.log([
                                           ...prevTasks.slice(0, i),
                                           newValue,
                                           ...prevTasks.slice(i + 1),
                                       ])
                                       return [
                                           ...prevTasks.slice(0, i),
                                           newValue,
                                           ...prevTasks.slice(i + 1),
                                       ]
                                   })} ind={i}/>);
    }

    return (
        <div className="task-list flex flex-1 flex-col" data-date={date.getDate()} onClick={handleClick}
             onKeyDown={handleKeyDown}>
            <div
                className={`flex justify-between items-center py-3 border-b-2 ${active ? "border-blue-600" : "border-black"}`}>
                <h2 className={`text-lg lg:text-xl font-bold  ${active ? "text-blue-600" : "text-gray-600"}`}>{getDate(date)}</h2>
                <h3 className={`text-lg lg:text-xl ${active ? "text-blue-300" : "text-gray-300"}`}>{day.slice(0, 3)}</h3>
            </div>

            <div>
                {tasksComponents}
            </div>
        </div>
    )
}

export default TaskList