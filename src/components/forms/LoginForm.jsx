import { Form } from "react-router-dom";
import Blur from "../Blur.jsx";

export default function LoginForm() {
    return (
        <Blur>
            <div className="task-menu relative top-26 bg-[#DDE1FB] rounded-xl p-4 w-1/3
            max-w-screen-md z-20 text-gray-600 transition-all duration-500 ease-linear"
                 onClick={ev => ev.stopPropagation()}>
                    <div>

                    </div>

            </div>
        </Blur>
    )
}
