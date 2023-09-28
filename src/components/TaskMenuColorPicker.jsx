import TaskMenuBtn from "./TaskMenuBtn";

export function TaskMenuColorPicker({ setColor }) {

    const colors = [
        "white",
        "amber-500",
        "green-500",
        "red-500",
    ]

    return (
        <div className="task-menu-color-picker bg-[#DDE1FB] border border-black rounded-md w-20 py-4 z-20 -translate-x-[50%] text-center"
             onClick={ev => ev.stopPropagation()}>
            <div className="flex gap-2 flex-wrap justify-center">
                {
                    colors.map((color, ind) => {
                        return (
                            <TaskMenuBtn key={ind} icon={`cursor-pointer inline-block rounded-full w-3 h-3 bg-${color}`} disabled={false}
                                         onClick={() => setColor(color)} />
                        )
                    })
                }
            </div>
        </div>
    )
}