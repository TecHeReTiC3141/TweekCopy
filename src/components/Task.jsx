import React from 'react'

const Task = ({data}) => {
    console.log(data);
  return (
    <div className={`flex w-full justify-between items-center ${data?.task && "py-2 px-3"} border-b border-gray-200 hover:border-gray-500 hover:border-b-0 group`}>
        {!data ? <input type="text" className="focus:outline-none  focus:shadow-md w-full py-2 indent-4 rounded-md focus:border border-gray-200 focus:z-10" />
        : <>
            <h5>{data?.task}</h5>
            <button className="hidden group-hover:block max-lg:block">
                <i className={`fa-${data?.done ? "solid" : "regular"} fa-circle-check`}></i>
            </button>
        </>
        }
        
    </div>
  )
}

export default Task