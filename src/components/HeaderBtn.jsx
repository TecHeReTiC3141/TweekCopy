import React from 'react'

const HeaderBtn = ({textColor, bgColor, icon}) => {
  return (
    <button className={`bg-${bgColor} rounded-full flex justify-center items-center w-8 h-8 lg:w-10 lg:h-10 flex-1`}>
        <i className={`${icon} lg:text-xl text-${textColor}`}></i>
    </button>
  )
}

export default HeaderBtn