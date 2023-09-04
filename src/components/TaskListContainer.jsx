import React from 'react'
import TaskList from './TaskList'

const TaskListContainer = () => {

    const [maxTasks, setMaxTasks] = React.useState(10);
    const curDate = new Date();
    const dayOfWeek = (curDate.getDay() - 1) % 7;
    console.log('dayOfWeek', dayOfWeek);
    const dates = [];
    for (let i = -dayOfWeek; i < -dayOfWeek + 7; ++i) {
        const newDate = new Date();
        newDate.setDate(newDate.getDate() + i);
        dates.push(newDate);
    }

    const changeMaxTasks = (newTasks) => {
        if (newTasks > maxTasks) setMaxTasks(newTasks); 
    }


    return (
        <div className="max-container padding-x flex flex-col lg:grid lg:grid-cols-6 gap-6 py-4 max-lg:mt-10">
            {
                dates.map((date, index) => (
                    <TaskList date={date} key={index} active={curDate.getDate() === date.getDate()} last={index > 4} maxTasks={maxTasks} changeMaxTasks={changeMaxTasks}/>
                ))
            }
        </div>
    )
}

export default TaskListContainer