import React from 'react'
import logo from '../../public/yukaa/yukaa-31.png'
import icon1 from '../../public/yukaa/icons/icon1.svg'

function Footer() {
    return (
        <footer class="bg-gray-900 px-4 py-4 w-full lg:w-full xl:w-[70%] 2xl:w-[50%] 3xl:w-[30%]">
            <nav class="flex flex-col sm:flex-row  justify-between items-center w-full mx-auto">
                <div class='hidden sm:block w-full sm:w-2/3 md:w-1/2 lg:w-1/3 items-center justify-center font-bold text-3xl text-gray-300'>
                    <img class="w-16 cursor-pointer" src={logo} alt="..." />
                    <span>YUKAA MEDIA </span>
                </div>
                <div class="flex justify-center text-xs sm:text-md text-gray-300 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 hover:text-gray-500  font-semibold mt-4 sm:mt-0">
                    <div>Privacy Policy</div>
                </div>
                <div class='flex flex-col items-center gap-2 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mt-4 sm:mt-0'>
                    <ul class='flex gap-3 justify-center'>
                        <li><img src={icon1} alt='icon1' /></li>
                        <li><img src={icon1} alt='icon1' /></li>
                        <li><img src={icon1} alt='icon1' /></li>
                        <li><img src={icon1} alt='icon1' /></li>
                    </ul>
                    <ul class='text-gray-300 text-xs sm-text-base text-center'>
                        © 2023 Yukaa Media, All Rights Reserved
                    </ul>
                </div>
            </nav>
        </footer>
    )
}

export default Footer