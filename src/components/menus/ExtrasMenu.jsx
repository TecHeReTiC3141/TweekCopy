import {ExtrasMenuBtn} from "./ExtrasMenuBtn.jsx";
import {useEffect} from "react";

export default function ExtrasMenu() {

    // TODO: implement "About" button which opens Invite page
    // TODO: implement "Search" button which opens Search bar to search certain tasks

    function openInvitePage() {
        const invitePage = document.querySelector(".invite");
        invitePage.classList.add("active");
    }

    const extrasBtns = [
        {
            text: "About",
            onClick: openInvitePage,
        },
        {
            text: "Search",
            icon: "fa-solid fa-magnifying-glass",
            onClick: () => {
            },
        },
        {
            text: "Print",
            icon: "fa-solid fa-print",
            onClick: () => {
            },
        },
        {
            text: "Share",
            icon: "fa-regular fa-paper-plane",
            onClick: () => {
            },
        },
        {
            text: "Support",
            onClick: () => {
            },
        },
    ];

    useEffect(() => {
        window.addEventListener("click", () => {
            const extrasMenu = document.querySelector(".extras-menu");
            extrasMenu.classList.remove("active");
        })

        window.addEventListener("scroll", () => {
            const extrasMenu = document.querySelector(".extras-menu");
            extrasMenu.classList.remove("active");
        })
    }, []);

    return (
        <div
            className="extras-menu bg-white border border-black rounded-md w-28 py-2 text-center"
            onClick={ev => ev.stopPropagation()}>
            <ul>
                {
                    extrasBtns.map((btn, index) => (
                        <ExtrasMenuBtn {...btn} key={index}/>
                    ))
                }
            </ul>
        </div>
    )
}