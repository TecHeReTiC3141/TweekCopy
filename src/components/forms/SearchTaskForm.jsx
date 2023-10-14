import Blur from "../Blur.jsx";
import {formTransition} from "../../scripts/utils.js";
import React from "react";

export default function SearchTaskForm() {

    function handleSearch(ev) {
        if (ev.currentTarget.value) {
            const clearSearchBtn = document.querySelector(".clear-search");
            clearSearchBtn.classList.remove("hidden");
        }
    }

    return (
        <Blur bgColor="bg-black" type="search-form">
            <div className="search-form relative top-16 bg-white rounded-xl p-4 lg:p-8 w-[28rem]
            z-20 text-gray-600 transition-all duration-500 ease-linear"
                 onClick={ev => ev.stopPropagation()}>
                <h3 className="font-bold text-xl tracking-tight">Search</h3>
                <div className="relative">
                    <input  className="my-6 border-b border-gray-500 w-full py-1 focus:outline-none focus:border-gray-400"
                            type="text" name="search-task-name" id="search-task-name" onChange={handleSearch}/>

                    <button className="clear-search absolute top-10 -translate-y-[50%] right-2 hidden"
                    onClick={ev => {
                        document.getElementById("search-task-name").value = "";
                        ev.currentTarget.classList.add("hidden");
                    }}>
                        <i className="fa-regular fa-circle-xmark"></i>
                    </button>
                </div>



                <div className="search-results">

                </div>
            </div>


        </Blur>
    )
}