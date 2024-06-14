import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { TbArrowBigRightLineFilled } from "react-icons/tb";
const Grid: React.FC = () => {
    return (
        <div>
            {/* <BasicLayout /> */}
            <BasicBlogLayout />
        </div>

    );
}
export default Grid;

const BasicLayout = () => (
    <div className="container py-8">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-x-8 gap-y-8">
            <div>
                <div className="bg-blue-500 h-40 rounded-2xl"></div>
            </div>
            <div>
                <div className="bg-black h-40 rounded-2xl"></div>
            </div>
            <div>
                <div className="bg-yellow-400 h-40 rounded-2xl"></div>
            </div>
            <div>
                <div className="bg-pink-500 h-40 rounded-2xl"></div>
            </div>
        </div>
    </div>
);

const BasicBlogLayout = () => (
    <div className="container py-8 px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8">
            <div>
                <div className="flex flex-col h-full group">
                    <div className="bg-pink-500 h-40 rounded-2xl overflow-hidden">
                        <img 
                            src="/images/placeholder-image.png" 
                            alt="" 
                            className="w-full h-full group-hover:scale-105 transition-all duration-300"/>
                    </div>
                    <div className="grow">
                        <h3 className="font-semibold text-gray-500 leading-snug mb-3 text-justify group-hover:text-gray-900 transition-all duration-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        <p className="text-gray-700 leading-normal mb-4 text-justify">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, accusantium sint. Praesentium consequuntur facilis labore totam facere.
                        </p>
                    </div>
                    <div className="text-right">
                        <a href="#" className="text-blue-500 group-hover:text-blue-700 transition-all duration-300 flex items-center">
                            <span>Read More</span>
                            <TbArrowBigRightLineFilled 
                                className="group-hover:ml-2 transition-all duration-300"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-col h-full group">
                    <div className="bg-pink-500 h-40 rounded-2xl overflow-hidden">
                        <img 
                            src="/images/placeholder-image.png" 
                            alt="" 
                            className="w-full h-full group-hover:scale-105 transition-all duration-300"/>
                    </div>
                    <div className="grow">
                        <h3 className="font-semibold text-gray-500 leading-snug mb-3 text-justify group-hover:text-gray-900 transition-all duration-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        <p className="text-gray-700 leading-normal mb-4 text-justify">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, accusantium sint. Praesentium consequuntur facilis labore totam facere.
                        </p>
                    </div>
                    <div className="text-right">
                        <a href="#" className="text-blue-500 group-hover:text-blue-700 transition-all duration-300 flex items-center">
                            <span>Read More</span>
                            <FaArrowRight 
                                className="group-hover:ml-2 transition-all duration-300"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-col h-full group">
                    <div className="bg-pink-500 h-40 rounded-2xl overflow-hidden">
                        <img 
                            src="/images/placeholder-image.png" 
                            alt="" 
                            className="w-full h-full group-hover:scale-105 transition-all duration-300"/>
                    </div>
                    <div className="grow">
                        <h3 className="font-semibold text-gray-500 leading-snug mb-3 text-justify group-hover:text-gray-900 transition-all duration-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        <p className="text-gray-700 leading-normal mb-4 text-justify">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, accusantium sint. Praesentium consequuntur facilis labore totam facere.
                        </p>
                    </div>
                    <div className="text-right">
                        <a href="#" className="text-blue-500 group-hover:text-blue-700 transition-all duration-300 flex items-center">
                            <span>Read More</span>
                            <FaArrowRight 
                                className="group-hover:ml-2 transition-all duration-300"
                            />
                        </a>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex flex-col h-full group">
                    <div className="bg-pink-500 h-40 rounded-2xl overflow-hidden">
                        <img 
                            src="/images/placeholder-image.png" 
                            alt="" 
                            className="w-full h-full group-hover:scale-105 transition-all duration-300"/>
                    </div>
                    <div className="grow">
                        <h3 className="font-semibold text-gray-500 leading-snug mb-3 text-justify group-hover:text-gray-900 transition-all duration-300">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
                        <p className="text-gray-700 leading-normal mb-4 text-justify">
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellendus, accusantium sint. Praesentium consequuntur facilis labore totam facere.
                        </p>
                    </div>
                    <div className="text-right">
                        <a href="#" className="text-blue-500 group-hover:text-blue-700 transition-all duration-300 flex items-center">
                            <span>Read More</span>
                            <FaArrowRight 
                                className="group-hover:ml-2 transition-all duration-300"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
);