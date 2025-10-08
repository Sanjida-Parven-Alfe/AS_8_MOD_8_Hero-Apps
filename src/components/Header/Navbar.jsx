import React from 'react';

const Navbar = () => {
    return (
        <div className="navbar bg-white shadow-sm px-4 md:px-8 lg:px-[80px] py-[16px]">

            <div className="navbar-start">
                {/* Mobile Dropdown */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="block md:hidden pl-0 pr-4 cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5  text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-white rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        <li className="rounded-none text-black hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-transparent hover:bg-clip-text hover:border-b-2 hover:border-purple-500"><a>Home</a></li>
                        <li className="rounded-none text-black hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-transparent hover:bg-clip-text hover:border-b-2 hover:border-purple-500"><a>Apps</a></li>
                        <li className="rounded-none text-black hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-transparent hover:bg-clip-text hover:border-b-2 hover:border-purple-500"><a>Installation</a></li>
                    </ul>
                </div>

                <a className="flex items-center gap-[4px] text-[16px] font-bold text-transparent bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text cursor-pointer">
                    <img src="/src/assets/logo.png" className='w-[40px] h-[40px]' alt="logo" />
                    HERO.IO
                </a>
            </div>

            {/* CENTER Buttons */}
            <div className="navbar-center hidden md:flex lg:flex">
                <ul className="menu menu-horizontal text-black px-1 py-0">
                    <li className='h-[24px]'>
                        <a className="pt-0 rounded-none text-black text-[16px] font-semibold hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-transparent hover:bg-clip-text hover:border-b-2 hover:border-purple-500">
                            Home
                        </a>
                    </li>
                    <li className='h-[24px]'>
                        <a className="pt-0 rounded-none text-black text-[16px] font-semibold hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-transparent hover:bg-clip-text hover:border-b-2 hover:border-purple-500">
                            Apps
                        </a>
                    </li>
                    <li className='h-[24px]'>
                        <a className="pt-0 rounded-none text-black text-[16px] font-semibold hover:bg-gradient-to-r hover:from-[#632EE3] hover:to-[#9F62F2] hover:text-transparent hover:bg-clip-text hover:border-b-2 hover:border-purple-500">
                            Installation
                        </a>
                    </li>
                </ul>
            </div>

            {/* RIGHT Button */}
            <div className="navbar-end mt-2 md:mt-0">
                <a className="btn w-[140px] h-[40px] text-[16px] font-semibold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] border-none shadow-none">
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 16 16">
                        <path fill="#fff" d="M8 .198a8 8 0 0 0-2.529 15.591c.4.074.547-.174.547-.385c0-.191-.008-.821-.011-1.489c-2.226.484-2.695-.944-2.695-.944c-.364-.925-.888-1.171-.888-1.171c-.726-.497.055-.486.055-.486c.803.056 1.226.824 1.226.824c.714 1.223 1.872.869 2.328.665c.072-.517.279-.87.508-1.07c-1.777-.202-3.645-.888-3.645-3.954c0-.873.313-1.587.824-2.147c-.083-.202-.357-1.015.077-2.117c0 0 .672-.215 2.201.82A7.7 7.7 0 0 1 8 4.066c.68.003 1.365.092 2.004.269c1.527-1.035 2.198-.82 2.198-.82c.435 1.102.162 1.916.079 2.117c.513.56.823 1.274.823 2.147c0 3.073-1.872 3.749-3.653 3.947c.287.248.543.735.543 1.481c0 1.07-.009 1.932-.009 2.195c0 .213.144.462.55.384A8 8 0 0 0 8.001.196z"></path>
                    </svg>
                    Contribute
                </a>
            </div>
        </div>
    );
};

export default Navbar;
