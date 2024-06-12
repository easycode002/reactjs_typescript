import React from "react";
import { FiArrowRight, FiBell, FiUser } from "react-icons/fi";

export const Basic: React.FC = () => {
    return (
        <div className="justify-center items-center m-10">
            <div className="min-w-20 bg-yellow-200 rounded-lg p-10 shadow-lg shadow-indigo-500/20">
                <h1 className="text-xl font-bold">@TomIsLoading</h1>
                <p className="mb-5 mt-3 leading-relaxed text-zinc-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur facilisis cursus orci, in congue risus.</p>
                <div className="grid w-full grid-cols-2 overflow-hidden rounded-xl border border-indigo-500 font-medium"> {/*used to control the behavior of content that overflows its container.*/}
                    <button className="bg-indigo-500 p-3 text-white ease-in-out hover:bg-indigo-600">Subscribe</button>
                    <button className="bg-white p-3 text-indigo-500 ">Notifications</button>
                </div>
            </div>
        </div>
    );
}

export const HoverAndActive: React.FC = () => {
    return (
        <div className="justify-center items-center m-10">
            <div className="grid w-full grid-cols-2 overflow-hidden rounded-xl border border-indigo-500 font-medium">
                <button className="bg-indigo-500 p-3 text-white ">Subscribe</button>
                <button className="bg-white p-3 text-indigo-500 active:bg-indigo-300 active:text-white hover:bg-indigo-200 hover:scale-105">Notifications</button>
            </div>
        </div>
    );
}

export const FirstLastEvenOdd: React.FC = () => {
    return (
        <div className="flex bg-indigo-400 items-center justify-center h-auto m-20 rounded-md">
            <div className="flex bg-white h-auto w-80 m-20 justify-center items-center p-4 rounded-sm ease-in-out shadow-xl shadow-red-400/20 hover:shadow-red-400/40">
                <ul className="grid grid-rows-4 text-black">
                    <li className=" p-4 first:text-indigo-500 odd/custom-class:bg-zinc-100">Tom and Jerry</li>
                    <li className=" p-4 first:text-indigo-500 odd/custom-class:bg-zinc-100">Dog and Cat</li>
                    <li className=" p-4 first:text-indigo-500 odd/custom-class:bg-zinc-100">Rolex watches</li>
                    <li className=" p-4 first:text-indigo-500 odd/custom-class:bg-zinc-100">Escalade Carluxury SUV</li>
                </ul>
            </div>
        </div>
    );
}

export const Group: React.FC = () => {
    return (
        <div className=" bg-red-300 w-screen h-screen justify-center items-center flex">
            <div className="flex bg-yellow-100 w-1/2 h-40 justify-center items-center">
                <div className="group flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="grid size-12 place-content-center rounded-full bg-neutral-900 text-xl text-neutral-50">
                            <FiUser />
                        </div>
                        <span className="opacity-0 transition-opacity group-hover:opacity-100">
                            @Tom and Jerry
                        </span>
                    </div>
                    <button className="group/follow flex items-center gap-2 rounded-md bg-indigo-600 py-2 px-4 text-white shadow-lg transition-all hover:-translate-y-0.5 active:translate-y-1 active:bg-indigo-700 active:shadow-inner ml-2">
                        Follow
                        <FiArrowRight className="transition-transform group-hover/follow:-rotate-45 group-active/follow:rotate-0" />
                    </button>
                </div>
            </div>
        </div>
    );
}

export const PsuedoElement: React.FC = () => {
    console.log("Testing")
    return (
        <div></div>
        // <main className="flex min-h-screen items-center justify-center bg-zinc-100 p-8 dark:bg-zinc-950">
        //     <a href="#">
        //         <FiBell/>
                
        //     </a>
        // </main>
    );
}