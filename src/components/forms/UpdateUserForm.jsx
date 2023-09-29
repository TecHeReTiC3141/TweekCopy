import {Form, useActionData, useLoaderData} from "react-router-dom";
import Blur from "../Blur.jsx";

import {useAuth} from "../../contexts/AuthContext.jsx";
import {useState} from "react";

export default function UpdateUserForm() {

    const errorMessage = useActionData();

    const {currentUser} = useAuth();
    // TODO: save button must be disabled if any data isn't changed
    const [dataChanged, setDataChanged] = useState();

    function closeBlur(ev) {
        const blur = document.querySelector('[data-id="update-user-form"]');
        console.log(blur);
        blur.classList.remove("active");
    }

    return (
        <Blur type="update-user-form">
            <div className="task-menu relative top-26 bg-[#f8e8e2] rounded-xl p-4 lg:p-8 w-[28rem]
            z-20 text-gray-600 transition-all duration-500 ease-linear"
                 onClick={ev => ev.stopPropagation()}>
                <h3 className="font-bold text-xl tracking-tight">Account</h3>

                {errorMessage && <h3
                    className="rounded-md px-2 text-sm bg-red-500 text-black py-3 my-1">
                    {errorMessage}</h3>}
                <Form method="POST" className="relative" >

                    <div className="w-full">

                    </div>
                    <input type="text" defaultValue="update-user-form" name="form-id" id="form-id" className="hidden"/>
                    <input type="text" id="name" name="name" required placeholder="Name" defaultValue={currentUser?.name}
                           className="w-full my-2 py-1 border-b border-gray-600 bg-transparent indent-1 focus:outline-none"/>
                    <input type="email" id="email" name="email" required placeholder="Email" defaultValue={currentUser?.email}
                           className="w-full my-2 py-1 border-b border-gray-600 bg-transparent indent-1 focus:outline-none"/>
                    <input type="password" id="password" name="password" placeholder="Password"
                           className="w-full my-2 py-1 border-b border-gray-600 bg-transparent indent-1 focus:outline-none"/>
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password"
                           className="w-full my-2 py-1 border-b border-gray-600 bg-transparent indent-1 focus:outline-none"/>

                    <div className="w-full flex justify-between items-center">
                        <button
                            className="py-1 px-2 border border-black bg-gray-700 text-gray-100 rounded-full font-bold"
                            onClick={closeBlur}
                        >Save
                        </button>
                        <button
                            className="my-2 py-1  rounded-full font-bold text-red-400"
                            onClick={ev => ev.preventDefault()}>
                            <i className="fa-regular fa-trash-can"></i> Delete account
                        </button>
                    </div>

                </Form>

            </div>
        </Blur>
    )
}
