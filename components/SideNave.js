import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faImage, faUser } from '@fortawesome/free-solid-svg-icons'

const SideNave = () => {
    return (
        <>
            <div className="hidden md:flex h-full w-[300px] bg-gradient-to-r from-[#141e30] to-[#243b55]  left-0 fixed z-10 py-4 px-4 flex-col">
                <div className="w-full text-white flex justify-center mb-4">
                    <img src="/assets/logo-w.svg" alt="logo" className="w-28 h-28 object-contain" />
                </div>
                <div className="w-full h-full text-white">
                    <ul className="text-lg leading-10">
                        <li className="flex items-center"><FontAwesomeIcon icon={faHouse} className="mr-4 h-7 w-7" />Dashboard</li>
                        <li className="flex items-center"><FontAwesomeIcon icon={faImage} className="mr-4 h-7 w-7" />Gallery Management</li>
                        <li className="flex items-center"><FontAwesomeIcon icon={faUser} className="mr-4 h-7 w-7" />Member Management</li>
                    </ul>
                </div>
                <div className="text-white text-sm">
                    Copyright © 2022 Siam Sindhorn Co., Ltd. All rights reserved.
                </div>
            </div>
        </>
    );
}

export default SideNave;