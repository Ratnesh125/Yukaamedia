import React from 'react'
import logo from '../../public/yukaa/yukaa-31.png'

function Header() {
    return (
        <header class="bg-gray-900 w-full lg:w-[100%] xl:w-[70%] 2xl:w-[50%] 3xl:w-[30%]  ">
            <nav class="flex justify-between items-center text-gray-300">
                <div className='flex items-center font-semibold '>
                    <img class="w-8 sm:w-16 cursor-pointer" src={logo} alt="..." />
                    <span>YUKKA MEDIA </span>
                </div>
                <div
                    class="hidden sm:block nav-links duration-500 md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full items-center px-5">
                    <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
                        <li>
                            <a class="hover:text-gray-500" href="#">Home</a>
                        </li>
                        <li>
                            <a class="hover:text-gray-500" href="#">Services</a>
                        </li>
                        <li>
                            <a class="hover:text-gray-500" href="#">About Us</a>
                        </li>
                    </ul>
                </div>
                <div class="flex items-center pr-2 sm:pr-8 sm:gap-6">
                    <button class="bg-blue-500 text-white px-3 sm:px-8  sm:py-2 rounded-full hover:bg-blue-700 ">Sign in</button>
                    <ion-icon onclick="onToggleMenu(this)" name="menu" class="text-3xl cursor-pointer md:hidden"></ion-icon>
                </div>
            </nav>
        </header>
    )
}

export default Header