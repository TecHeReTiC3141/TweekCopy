import React from 'react'
import Task from './Task';

const TaskList = ({date, active, last, maxTasks, changeMaxTasks}) => {

    const getDate = date => {
        let day = date.getDate().toString(), month = (date.getMonth() + 1).toString();
        if (day.length < 2) day = "0" + day;
        if (month.length < 2) month = "0" + month;
        return `${day}.${month}`;
    }

    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    const day = days[ date.getDay() ];
    const month = months[ date.getMonth() ];

    const tasks = [];
    for (let i = 0; i < (last ? maxTasks / 2 : maxTasks); ++i) {
        tasks.push(<Task key={i} />);
    }
    return (
        <div className="flex flex-col last:col-start-6 last:col-end-7">
            <div className={`flex justify-between items-center py-4 border-b-2 ${active ? "border-blue-600" : "border-black"}`}>
                <h2 className={`text-lg lg:text-2xl font-bold  ${active ? "text-blue-600" : "text-gray-600"}`}>{getDate(date)}</h2>
                <h3 className="text-lg lg:text-2xl text-gray-300">{day.slice(0, 3)}</h3>
            </div>

            <div>
                {tasks}
            </div>
        </div>
    )
}

export default TaskList