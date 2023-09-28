import { updateTask, tryCatchDecorator } from "../scripts/api.js";

export default function Blur({ children, type }) {
    async function handleTaskMenuClose(ev) {
        ev.stopPropagation();
        ev.target.classList.remove('active');
        const form = ev.target.querySelector(".task-menu-form");
        if (form) {
            const formData = new FormData(form);
            // TODO: implement task update + deletion

            await tryCatchDecorator(updateTask)();
        }
        document.body.style.overflowY = 'auto';
    }

    return (
        <div data-id={type} className="blur-bg bg-white bg-opacity-70 fixed top-0 left-0 h-full w-full z-10
        transition-all duration-300 ease-linear cursor-default flex justify-center items-start" onClick={handleTaskMenuClose} >
            { children }
        </div>
    )
}
