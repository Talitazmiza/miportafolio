import React from "react";
import '../../App.css';
import Navbar from "../Components/Navbar";
import About from "./About";

export default function Home() {
    return (
        <div className="flex flex-col h-screen bg-white text-black">
            <div className="animate-[wiggle_1s_ease-in-out_infinite]">
                <h1 className="text-2xl">🔥 under construction 🔥</h1>
            </div>
            {/* <h1 data-text="🔥 Hover and wave 🔥" class="text-2xl relative overflow-hidden pb-8 before:content-[attr(data-text)attr(data-text)] before:underline before:underline-offset-8 before:decoration-wavy before:decoration-red-400 before:absolute before:whitespace-nowrap before:text-transparent hover:before:animate-wiggle">
            🔥 under construction 🔥
            </h1> */}
            <Navbar />
            <About />
        </div>
    )
};