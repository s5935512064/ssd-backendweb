import Head from "next/head";
import { useRouter } from "next/router";
import axios from "axios";
import { useState, useEffect } from "react";

const URL = `http://localhost:3333/api`;


const Login = ({ token }) => {

    const router = useRouter();
    const [status, setStatus] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const login = async (req, res) => {
        event.preventDefault();

        try {
            let result = await axios.post(
                `${URL}/login`,
                { username, password },
                { withCredentials: true }
            );

            if (result.data.isLogin === true) {
                setStatus("Sign-in success");
                router.push("/");
            } else {
                setStatus(result.data.status);
            }

        } catch (e) {
            console.log("error: ", JSON.stringify(e.response));
            setStatus("Not Sign-in success");
        }
    };

    return (
        <div className="w-full h-screen bg-[url('/assets/service6.jpg')] bg-cover bg-no-repeat bg-center">
            <div className="w-full h-screen flex justify-center items-center bg-gradient-to-b from-[#141e30]/80 to-[#243b55]/80 backdrop-blur">
                <div className="login-box">
                    <h2 className="text-2xl font-medium">Login</h2>
                    <form onSubmit={login}>
                        <div className="user-box">
                            <input type="text" name="username" required onChange={(e) => setUsername(e.target.value)} />
                            <label className="">Username</label>
                        </div>
                        <div className="user-box">
                            <input type="password" name="password" required onChange={(e) => setPassword(e.target.value)} />
                            <label>Password</label>
                        </div>
                        <p className="text-red-500">
                            {status}
                        </p>
                        <button>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            Login
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Login;

export function getServerSideProps({ req, res }) {
    return { props: { token: req.cookies.token || "" } };
}