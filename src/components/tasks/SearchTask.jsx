import { months } from "../../scripts/utils.js";

export default function SearchTask({ data, date, }) {

    const MAX_TASK_NAME_LENGTH = 20;

    return (
        <div className={`w-full border-b
         border-gray-200 hover:border-gray-500 hover:border-b-0 group`}>
            <div className="task flex justify-between items-center py-2 px-3 cursor-pointer">
                <h5 className={`task-title px-2 py-0.5 rounded-full text-sm bg-${data.color} ` + (data.done && "opacity-40 line-through ") || ''}
                >{ data.description && <i className="fa-regular fa-note-sticky"></i> } {data.name.slice(0, MAX_TASK_NAME_LENGTH) +
                    (data.name.length > MAX_TASK_NAME_LENGTH ? "..." : "")}</h5>
                <p className="text-gray-400">
                    {`${date.getDate()} ${months[date.getMonth()].slice(0, 3)}.`}
                </p>

            </div>
        </div>
    )
}