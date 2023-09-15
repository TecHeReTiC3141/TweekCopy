export const TaskMenu = () => {

    function handleTaskMenuClose(ev) {
        ev.target.classList.remove('active');
    }

    return (
        <div className="task-menu-bg bg-white bg-opacity-70 fixed top-0 left-0 h-full w-full transition-all duration-300 ease-linear" onClick={handleTaskMenuClose}>
            <div className="task-menu fixed top-20 left-1/2 -translate-x-[50%] bg-blue-400 slate-400 rounded-xl p-4" onClick={ev => ev.stopPropagation()}>
                Task menu
            </div>
        </div>
    )
}