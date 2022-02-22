import React from "react";
import '../../App.css';
import Navbar from "../Components/Navbar";
import About from "./About";

export default function Home() {
    return (
        <div className="flex flex-col h-screen w-screen bg-white">
            <Navbar />
            <About />
        </div>
    )
};