import React from "react"
import HeaderBtn from "./HeaderBtn"

const Header = () => {

  const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];


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

  const [isSmall, setIsSmall] = React.useState(window.innerWidth < 1024);

  const handleResize = () => {
    setIsSmall(window.innerWidth < 1024);

  }

  React.useEffect(() => {
    window.addEventListener("resize",  handleResize)
    return () => {
      window.removeEventListener("resize",  handleResize)
    }
  })

  let monthName = months[new Date().getMonth()];
  if (isSmall) monthName = monthName.slice(0, 4) + '.'; 
  return (
    <header className="max-container flex justify-between max-lg:border-b max-lg:border-gray-200 items-center w-full gap-12 padding-x py-3 lg:py-6 bg-white max-lg:fixed top-0 left-0">
        <h1 className="text-xl font-bold lg:text-4xl">{monthName} {new Date().getFullYear()}</h1>

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