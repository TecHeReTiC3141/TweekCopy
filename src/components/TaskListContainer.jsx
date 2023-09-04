import React from 'react'
import TaskList from './TaskList'

const TaskListContainer = () => {
    const curDate = new Date();
    const dayOfWeek = (curDate.getDay() - 1) % 7;
    console.log('dayOfWeek', dayOfWeek);
    const dates = [];
    for (let i = -dayOfWeek; i < -dayOfWeek + 7; ++i) {
        const newDate = new Date();
        newDate.setDate(newDate.getDate() + i);
        dates.push(newDate);
    }
    return (
        <div className="max-container padding-x flex flex-col lg:grid lg:grid-cols-6 gap-6">
            {
                dates.map((date, index) => (
                    <TaskList date={date} key={index} active={curDate.getDate() === date.getDate()}/>
                ))
            }
        </div>
    )
}

export default TaskListContainer