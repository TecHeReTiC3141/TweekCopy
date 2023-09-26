import { Form } from "react-router-dom";
import Blur from "../Blur.jsx";

export default function SignUpForm() {

    function toLoginForm(ev) {
        const loginBlur = document.querySelector('.blur-bg[data-id="login-form"]');
        const signupBlur = document.querySelector('.blur-bg[data-id="signup-form"]');
        loginBlur.classList.add("active");
        signupBlur.classList.remove("active");
    }

    return (
        <Blur type="signup-form">
            <div className="task-menu relative top-26 bg-[#f8e8e2] rounded-xl p-4 lg:p-8 w-[28rem] max-w-screen-sm
            z-20 text-gray-600 transition-all duration-500 ease-linear"
                 onClick={ev => ev.stopPropagation()}>
                <div className="w-full flex justify-between items-center mb-12">
                    <h3 className="font-bold text-lg">Hello, nice to meet you!</h3>
                    <button className="border rounded-full border-gray-700 px-3 py-1 font-bold text-sm"
                    onClick={toLoginForm}>Log in</button>
                </div>
                <Form method="POST" className="relative">
                    <input type="text" value="signup-form" name="form-id" id="form-id" className="hidden" />
                    <input type="text" id="name" name="name" required placeholder="Name"
                           className="w-full my-2 py-1 border-b border-gray-600 bg-transparent indent-1 focus:outline-none"/>
                    <input type="email" id="email" name="email" required placeholder="Email"
                           className="w-full my-2 py-1 border-b border-gray-600 bg-transparent indent-1 focus:outline-none"/>
                    <input type="password" id="password" name="password" required placeholder="Password"
                           className="w-full my-2 py-1 border-b border-gray-600 bg-transparent indent-1 focus:outline-none"/>
                    <input type="password" id="confirmPassword" name="confirmPassword" required placeholder="Confirm Password"
                           className="w-full my-2 py-1 border-b border-gray-600 bg-transparent indent-1 focus:outline-none"/>

                    <p className="text-xs text-gray-400">By proceeding, you agree to the Terms and Conditions & Privacy and Cookies Policy.
                        (I don't have ones so you don't have to ;) )</p>
                    <button
                        className="w-full my-2 py-1 border border-black bg-gray-700 text-gray-100 rounded-full  font-bold "
                    >Create account</button>
                    <button
                        className="w-full my-2 py-1 border border-black  rounded-full font-bold bg-white"
                        onClick={ev => ev.preventDefault()}><i className="fa-brands fa-google"></i> Sign in with Google</button>
                </Form>

            </div>
        </Blur>
    )
}
