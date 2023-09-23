import React, {useState} from 'react'
import TaskList from './TaskList'

const TaskListContainer = () => {

    const [curDate, setCurDate] = useState(new Date());

    const [maxTasks, setMaxTasks] = React.useState(10);
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
        <div className="w-full padding-x flex flex-col lg:flex-row gap-6 py-4 max-lg:mt-10">
            {
                dates.slice(0, 5).map((date, index) => (
                    <TaskList date={date} key={index} ind={index} active={curDate.getDate() === date.getDate()} last={false}
                              maxTasks={maxTasks} changeMaxTasks={changeMaxTasks} tasksData={tasksData[date.getDate()]}/>
                ))
            }
            <div className="flex-1 ">
                {
                    dates.slice(5).map((date, index) => (
                        <TaskList date={date} key={index} ind={index} active={curDate.getDate() === date.getDate()} last={true}
                                  maxTasks={maxTasks} changeMaxTasks={changeMaxTasks} tasksData={tasksData[date.getDate()]}/>
                    ))
                }
            </div>

        </div>
    )
}

export default TaskListContainer