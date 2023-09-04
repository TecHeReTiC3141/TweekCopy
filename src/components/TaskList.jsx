import React from 'react'

const TaskList = ({date, active}) => {

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
  return (
    <div className="flex flex-col last:col-start-6 last:col-end-7">
        <div className={`flex justify-between items-center py-4 border-b-2 ${active ? "border-blue-600" : "border-black"}`}>
            <h2 className={`text-lg lg:text-2xl font-bold  ${active ? "text-blue-600" : "text-gray-600"}`}>{getDate(date)}</h2>
            <h3 className="text-lg lg:text-2xl text-gray-300">{day.slice(0, 3)}</h3>
        </div>
    </div>
  )
}

export default TaskList