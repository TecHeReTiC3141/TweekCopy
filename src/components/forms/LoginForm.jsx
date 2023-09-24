import { Form } from "react-router-dom";
import Blur from "../Blur.jsx";

export default function LoginForm() {
    return (
        <Blur type="login-form">
            <div className="task-menu relative top-26 bg-yellow-200 rounded-xl p-4 md:w-1/2
            max-md:w-2/3 min-w-24 max-w-screen-sm
            z-20 text-gray-600 transition-all duration-500 ease-linear"
                 onClick={ev => ev.stopPropagation()}>
                    <div className="w-full flex justify-between items-center mb-12">
                        <h3 className="font-bold text-lg">Hello, welcome back!</h3>
                        <button className="border rounded-full border-gray-700 px-3 py-1 font-bold text-sm
                        ">Sign Up</button>
                    </div>
                    <Form method="POST" action="/login" className="relative">
                        <input type="email" id="email" name="email"
                               className="w-full my-2 py-1 border-b border-gray-600 bg-transparent indent-1 focus:outline-none"/>
                        <input type="password" id="password" name="password"
                               className="w-full my-2 py-1 border-b border-gray-600 bg-transparent indent-1 focus:outline-none"/>
                        <button className="text-gray-400 w-full text-right"onClick={ev => ev.preventDefault()}>Forgot password?</button>

                        <button
                            className="w-full my-2 py-1 border border-black bg-gray-700 text-gray-100 rounded-full  font-bold "
                        >Let me in</button>
                        <button
                            className="w-full my-2 py-1 border border-black  rounded-full font-bold "
                        onClick={ev => ev.preventDefault()}>Sign in with Google</button>
                    </Form>

            </div>
        </Blur>
    )
}
