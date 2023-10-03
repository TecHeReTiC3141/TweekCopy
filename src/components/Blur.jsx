import { updateTask, tryCatchDecorator } from "../scripts/api.js";

export default function Blur({ children, type }) {

    // TODO: think about adding animation of form fade in using keyframes
    async function handleTaskMenuClose(ev) {
        ev.stopPropagation();
        ev.target.classList.remove('active');
        const form = ev.target.querySelector(".task-menu-form");
        if (form) {
            const formData = new FormData(form);

            await tryCatchDecorator(updateTask)(formData.get("task-id"), {
                name: formData.get("task-name"),
                done: formData.has("task-done"),
                color: formData.get("task-color"),
                description: formData.get("task-description"),
            });
            const colorPicker = ev.target.querySelector(".task-menu-color-picker");
            colorPicker.classList.remove("active");
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
