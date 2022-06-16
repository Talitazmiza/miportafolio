import React from "react";
import '../../App.css';
import Navbar from "../Components/Navbar";
import About from "./About";
import Footer from "../Components/Footer";

export default function Home() {
    return (
        <div className="flex flex-col text-black">
            <About />
        </div>
    )
};