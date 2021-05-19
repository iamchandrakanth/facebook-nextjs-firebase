import Image from "next/image";
import { signIn } from "next-auth/client";

function Login() {
    return (
        <div className="grid place-items-center">
            <Image 
                src="https://cdn0.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png"
                height={300}
                width={300}
                objectFit="contain"
            />
            <h1 onClick={signIn} className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer">Login with Facebook</h1>
        </div>
    )
}

export default Login
