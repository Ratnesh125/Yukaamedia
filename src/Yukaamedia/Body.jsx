import React from 'react'
import dp from '../../public/yukaa/dp.png'
import image from '../../public/yukaa/image.png'
import icon1 from '../../public/yukaa/icons/icon1.svg'
import icon2 from '../../public/yukaa/icons/icon2.svg'
import icon3 from '../../public/yukaa/icons/icon3.svg'

function Body() {
    return (
        <div className='flex flex-col items-center w-full min-h-screen '>
            <div className="flex flex-1 flex-col sm:flex-row pb-8 items-center sm:justify-center bg-gray-900 w-full lg:w-full xl:w-[70%] 2xl:w-[50%] 3xl:w-[30%]">

                {/* Left Side */}
                <div className="w-[70%] sm:w-[50%] max-h-screen flex flex-col gap-4 items sm:pl-28 sm:pr-6 pt-8 text-center sm:text-left ">
                    <div className="text-2xl sm:text-3xl lg:text-5xl text-gray-100 font-bold">
                        Traffic, <br /> Visibility, Sales <br />We deliver
                    </div>
                    <div className='text-xs text-gray-100'>
                        Unlock your brand's potential with Yukaa Media! We craft compelling ad campaigns,
                        drive leads, and ignite success for your business. Your journey to greatness
                        starts here.
                    </div>
                    <div>
                        <button type="submit" className="bg-blue-600 text-xs text-white py-2 px-4 rounded-md hover:shadow-2xl hover:bg-blue-800">Let's Join Us</button>
                    </div>
                </div>

                {/* Right Side */}
                <div className="px-8 py-4 pt-20 sm:pt-0 md:pr-24 sm:w-[50%] flex-shrink-0 flex flex-col items-center text-center lg:text-left">
                    <img src={dp} alt="img" className=" rounded-lg" />
                </div>
            </div>

            <div className="flex flex-1 flex-col sm:flex-row justify-center bg-gray-900 w-full lg:w-full xl:w-[70%] 2xl:w-[50%] 3xl:w-[30%]">

                {/* Left Side */}
                <div className="sm:w-[50%]  flex flex-col py-8 sm:pl-28 sm:pr-6 ">
                    <div className="text-2xl sm:text-3xl lg:text-4xl text-gray-100 font-bold text-center sm:text-left">
                        Why Yukaa Is The Best Choice?
                    </div>
                </div>

                {/* Right Side */}
                <div className=" py-4 px-8 sm:pr-24 sm:w-[50%]  flex flex-col items-center text-center lg:text-left">
                    <div className='text-md py-2 text-gray-300'>
                        Yukaa Media is the best choice for high-quality advertising and data-driven results.
                        With a track record of excellence, customized solutions, and a focus on measurable
                        ROI, we deliver outstanding campaigns that captivate audiences and drive real impact.
                        Choose Yukaa Media for advertising that works.
                    </div>
                </div>
            </div>

            <img src={image} alt='poster' className='px-8 md:px-52 bg-gray-900 w-full lg:w-full xl:w-[70%] 2xl:w-[50%] 3xl:w-[30%]' />

            <div className='w-full lg:w-full xl:w-[70%] 2xl:w-[50%] 3xl:w-[30%] text-gray-100 bg-gray-900'>
                <div className="text-2xl sm:text-3xl lg:text-5xl text-center font-semibold p-8">
                    Our Services
                </div>
                <div className='flex text-center sm:flex-row flex-col  sm:px-24 gap-8 sm:gap-12 items-center sm:items-start'>
                    <ul className='flex flex-col gap-2 w-1/2 sm:w-1/3  '>
                        <li className='flex justify-center'><img src={icon1} alt='icon1' /></li>
                        <li className='sm:text-2xl font-bold'>Paid Traffic Campaigns</li>
                        <li className='text-xs sm:text-base text-gray-300'>Drive traffic, engage customers, and maximize ROI with strategic advertising.</li>
                    </ul>
                    <ul className='flex flex-col gap-2 w-1/2 sm:w-1/3'>
                        <li className='flex justify-center'><img src={icon2} alt='icon1' /></li>
                        <li className='sm:text-2xl font-bold'>Strategic Planning</li>
                        <li className='text-xs sm:text-base text-gray-300'>Navigating the Future: Crafting Your Brand's Strategic Advertising Blueprint.</li>
                    </ul>

                    <ul className='flex flex-col gap-2 w-1/2 sm:w-1/3 '>
                        <li className='flex justify-center'><img src={icon3} alt='icon1' /></li>
                        <li className='sm:text-2xl font-bold'>Strategic Generation</li>
                        <li className='text-xs sm:text-base text-gray-300'>Leveraging analytics to refine lead generation tactics, optimizing efforts for maximum ROI and growth.</li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col flex-1 py-14 sm:py-24 sm:flex-row items-center justify-center bg-gray-900 w-full lg:w-full xl:w-[70%] 2xl:w-[50%] 3xl:w-[30%]">

                {/* Left Side */}
                <div className=" w-[70%]  flex flex-col  sm:pl-28 sm:pr-6 text-center sm:text-left ">
                    <div className="lg:text-4xl 2xl:text-5xl text-2xl text-gray-100 font-semibold">
                        Contact us for the service you want to use
                    </div>

                </div>

                {/* Right Side */}
                <div className=" pt-4 sm:pr-24 w-[50%] sm:w-[50%]  flex flex-col justify-center items-center text-center lg:text-left ">
                    <button class="bg-blue-500 text-white px-8 py-2 rounded-3xl hover:bg-blue-700 text-xs lg:text-2xl ">Contact Us</button>
                </div>
            </div>
        </div>
    )
}

export default Body
