import React from 'react'

const HeaderBtn = ({textColor, bgColor, icon, onClick}) => {
  return (
    <button
        className={`bg-${bgColor} rounded-full flex justify-center 
        items-center w-8 h-8 lg:w-10 lg:h-10 flex-1 hover:shadow-lg`}
        onClick={onClick}
        >
        <i className={`${icon} lg:text-lg text-${textColor}`}></i>
    </button>
  )
}

export default HeaderBtn