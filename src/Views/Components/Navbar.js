import React from "react";
import '../../App.css';
import resume from '../../../src/docs/Curriculum Vitae_Talita Iza Nurazmi.pdf';
import 'flowbite';

export default function Navbar() {
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <button className="btn btn-ghost text-red-400">
                    <a href="/">LITA's Portafolio.</a>
                </button>
                <button data-collapse-toggle="mobile-menu" type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clipRule="evenodd"></path>
                    </svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd"
                              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                              clipRule="evenodd"></path>
                    </svg>
                </button>
                <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium text-red-400">
                        <li>
                            <button
                                className="btn btn-ghost btn-sm block py-2 pr-4 pl-3 text-red-400 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-red-400 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-blue-600"
                                aria-current="page"><a href="/">Acerca de mi</a></button>
                        </li>
                        <li>
                            <button
                                className="btn btn-ghost btn-sm block py-2 pr-4 pl-3 text-red-400 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-red-400 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-blue-600">
                                <a href="/proyectos">Proyectos</a></button>
                        </li>
                        {/*<li>*/}
                        {/*    <button*/}
                        {/*        className="btn btn-ghost btn-sm block py-2 pr-4 pl-3 text-red-400 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-red-400 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-blue-600">*/}
                        {/*        <a href="/proyectos">Otros Proyectos</a></button>*/}
                        {/*</li>*/}
                        <li>
                            <button
                                className="btn btn-ghost btn-sm block py-2 pr-4 pl-3 text-red-400 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-red-400 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-blue-600">
                                <a href={resume} download="Resume">
                                    Reasumir
                                </a>
                            </button>
                        </li>
                        <li>
                            <button
                                className="btn btn-ghost btn-sm btn-disabled block py-2 pr-4 pl-3 text-red-400 hover:bg-gray-50 md:hover:bg-transparent md:hover:text-red-400 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-blue-600">Contacto</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};
