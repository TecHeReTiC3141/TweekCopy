import React from "react"
import HeaderBtn from "./HeaderBtn"

const Header = () => {

  const HeaderBtns = [
    {
      textColor: "black",
      bgColor: "blue-200",
      icon: "fa-regular fa-user",
    },
    {
      textColor: "black",
      bgColor: "purple-200",
      icon: "fa-solid fa-ellipsis-vertical",
    },
    {
      textColor: "white",
      bgColor: "black",
      icon: "fa-solid fa-chevron-left",
    },
    {
      textColor: "white",
      bgColor: "black",
      icon: "fa-solid fa-chevron-right",
    },
  ]

  return (
    <header className="max-container flex justify-between items-center w-full gap-12 padding-x py-3 lg:py-6 bg-white">
        <h1 className="text-xl font-bold lg:text-4xl">Some header</h1>

        <div className="flex gap-3">
            {
              HeaderBtns.map((btn, index) => (
                <HeaderBtn {...btn} key={index} />
              ))
            }
        </div>
    </header>
  )
}

export default Header