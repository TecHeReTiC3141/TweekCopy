import React  from 'react'
import TaskList from './TaskList'

const TaskListContainer = () => {

    const [maxTasks, setMaxTasks] = React.useState(10);
    const curDate = new Date();
    const dayOfWeek = (curDate.getDay() - 1) % 7;
    const dates = [];
    const tasksData = {}
    for (let i = -dayOfWeek; i < -dayOfWeek + 7; ++i) {
        const newDate = new Date();
        newDate.setDate(newDate.getDate() + i);
        dates.push(newDate);
        tasksData[newDate.getDate()] = [];
        for (let j = 0; j < Math.round(6 * Math.random()); ++j) {
            tasksData[newDate.getDate()].push({
                task: `Task ${j}`,
                done: Boolean(Math.round(Math.random())),
                date: newDate,
            })
        }
    }


    const changeMaxTasks = (newTasks) => {
        if (newTasks > maxTasks) setMaxTasks(newTasks); 
    }


    return (
        <div className="max-container padding-x flex flex-col lg:grid lg:grid-cols-6 gap-6 py-4 max-lg:mt-10">
            {
                dates.map((date, index) => (
                    <TaskList date={date} key={index} ind={index} active={curDate.getDate() === date.getDate()} last={index > 4} maxTasks={maxTasks} changeMaxTasks={changeMaxTasks} tasksData={tasksData[date.getDate()]}/>
                ))
            }
        </div>
    )
}

export default TaskListContainer