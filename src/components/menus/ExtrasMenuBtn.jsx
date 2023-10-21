export function ExtrasMenuBtn({ text, icon, onClick }) {
    return (
        <li className="w-full flex justify-between items-center text-sm px-2 py-1
        bg-white hover:bg-purple-200 cursor-pointer"
            onClick={onClick}>
            <p>{text}</p>
            <i className={icon}></i>
        </li>
    )
}