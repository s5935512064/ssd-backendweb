import axios from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import jwt_decode from "jwt-decode";

const URL = `http://localhost:3333/api`;

const ProfileBar = ({ token }) => {
    const router = useRouter();
    const [profile, setProfile] = useState("");

    const getProfile = () => {
        var info = jwt_decode(token)
        setProfile(info)
    }

    const logout = async () => {
        let result = await axios.get(`${URL}/logout`, { withCredentials: true })
        setTimeout(() => {
            router.push('/login');
        }, 1000)
    }

    useEffect(() => {
        getProfile();
    }, [])


    return (
        <>
            <div className="sticky top-0 h-20 bg-[#141e30] w-full px-10 py-2 flex justify-between items-center">
                <div className="md:ml-[300px] h-full flex items-center">
                    <p className="text-3xl text-white font-medium">Dashboard</p>
                </div>
                <div className="flex items-center">
                    <div className="inline-block h-12 w-12 rounded-full bg-[url('/assets/avartar.png')] bg-cover bg-center mr-3">
                    </div>
                    <div className="text-white pr-5">
                        <p className="text-sm">Welcome back</p>
                        <p className="font-medium">{profile.fName}.</p>
                    </div>
                    <button onClick={logout} className="w-fit px-4 py-2 bg-red-600 text-white rounded font-semibold uppercase">Logout</button>
                </div>
            </div>
        </>
    );
}

export default ProfileBar;

