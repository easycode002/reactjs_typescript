import React from "react";

export const Basic_Tailwind: React.FC = () => {
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

export const Hover: React.FC = () => {
    return (
        <div className="justify-center items-center m-10">
            <div className="grid w-full grid-cols-2 overflow-hidden rounded-xl border border-indigo-500 font-medium">
                <button className="bg-indigo-500 p-3 text-white ease-in-out">Subscribe</button>
                <button className="bg-white p-3 text-indigo-500 active:bg-indigo-300 active:text-white">Notifications</button>
            </div>
        </div>
    );
}