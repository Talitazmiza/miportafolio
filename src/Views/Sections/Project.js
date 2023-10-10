import React from "react";
import 'flowbite';
import nextportofolio from '../../images/webportofolio-2.png';
import reactportofolio from '../../images/webportofolio.png';
import lasoyae from '../../images/lasoyae.png';
import urhealth from '../../images/urhealth.png';
import faq from '../../images/faq.png';
import etapens from '../../images/etapens.png';
import etapenscode from '../../images/etapenscode.png';
import midwife from '../../images/midwife.png';
import pos from '../../images/pos.png';
import simbidan from '../../images/simbidan.png';

export default function Project() {
    return (
        <div className="w-full h-screen lg:bg-white md:bg-red-600 overflow-hidden">
            <div className="container md:mx-auto bg-white px-4 text-black">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 md:shrink-0">
                        <a href="https://miportafolio-gold.vercel.app/">
                            <img className="rounded-t-lg" src={reactportofolio} alt=""/>
                        </a>
                        <div className="p-5">
                            <a href="https://miportafolio-gold.vercel.app/">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Web Portofolio</h5>
                            </a>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">React.js</span>
                            <span className="bg-green-100 text-blue-400 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-green-900">Tailwind CSS</span>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="https://github.com/Talitazmiza/lasoyae-culinary-app">
                            <img className="rounded-t-lg" src={lasoyae} alt=""/>
                        </a>
                        <div className="p-5">
                            <a href="https://github.com/Talitazmiza/lasoyae-culinary-app">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Lasoyae Culinary</h5>
                            </a>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">React.js</span>
                            <span
                                className="bg-pink-100 text-pink-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-pink-200 dark:text-pink-900">Laravel</span>
                            <span className="bg-green-100 text-blue-400 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-green-900">Tailwind CSS</span>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="https://github.com/Talitazmiza/urhealth">
                            <img className="rounded-t-lg" src={urhealth} alt=""/>
                        </a>
                        <div className="p-5">
                            <a href="https://github.com/Talitazmiza/urhealth">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Urhealth</h5>
                            </a>
                            <div className="grid grid-cols-3 gap-1">
                                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">React.js</span>
                                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">Express.js</span>
                                <span className="bg-red-100 text-red-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-red-900">D3.js</span>
                                <span className="bg-purple-100 text-purple-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-purple-900">Bootstrap</span>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="https://el-portafolio.vercel.app/">
                            <img className="rounded-t-lg" src={nextportofolio} alt=""/>
                        </a>
                        <div className="p-5">
                            <a href="https://el-portafolio.vercel.app/">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Web Portofolio NextJS</h5>
                            </a>
                            <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Next.js</span>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="https://github.com/Talitazmiza/FAQ-PLN-Krian">
                            <img className="rounded-t-lg" src={faq} alt=""/>
                        </a>
                        <div className="p-5">
                            <a href="https://github.com/Talitazmiza/FAQ-PLN-Krian">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Frequently Asked Questions (FAQ)</h5>
                            </a>
                            <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300">Next.js</span>
                            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-green-900">Shopify</span>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="https://bit.ly/StudentFlow">
                            <img className="rounded-t-lg" src={etapens} alt=""/>
                        </a>
                        <div className="p-5">
                            <a href="https://bit.ly/StudentFlow">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">UI/UX Final Project Library</h5>
                            </a>
                            <span className="bg-green-100 text-purple-400 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-green-900">Figma</span>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="https://github.com/Talitazmiza/storefront-app-pens">
                            <img className="rounded-t-lg" src={etapenscode} alt=""/>
                        </a>
                        <div className="p-5">
                            <a href="https://github.com/Talitazmiza/storefront-app-pens">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Final Project Library</h5>
                            </a>
                            <span className="bg-green-100 text-purple-400 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-green-900">React.js</span>
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-yellow-200 dark:text-yellow-900">Express.js</span>
                            <span className="bg-green-100 text-blue-400 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-green-900">Tailwind CSS</span>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="https://www.figma.com/proto/WyhNRDVeCqlHUjxUuL1Ahr/E-Bidan?page-id=0%3A1&type=design&node-id=708-47&viewport=35648%2C5206%2C1.52&t=25Xon7CUDeYuLXix-1&scaling=min-zoom&starting-point-node-id=708%3A47&mode=design">
                            <img className="rounded-t-lg" src={midwife} alt=""/>
                        </a>
                        <div className="p-5">
                            <a href="https://www.figma.com/proto/WyhNRDVeCqlHUjxUuL1Ahr/E-Bidan?page-id=0%3A1&type=design&node-id=708-47&viewport=35648%2C5206%2C1.52&t=25Xon7CUDeYuLXix-1&scaling=min-zoom&starting-point-node-id=708%3A47&mode=design">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">UI/UX Midwife Information System</h5>
                            </a>
                            <span className="bg-green-100 text-purple-400 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-green-900">Figma</span>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src={pos} alt=""/>
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Point Of Sales</h5>
                            </a>
                            <span className="bg-green-100 text-blue-400 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-green-900">Flutter</span>
                        </div>
                    </div>
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                        <a href="#">
                            <img className="rounded-t-lg" src={simbidan} alt=""/>
                        </a>
                        <div className="p-5">
                            <a href="https://sim-bidan.vercel.app/">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Midwife Information System</h5>
                            </a>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">React.js</span>
                            <span className="bg-green-100 text-blue-400 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-green-900">Tailwind CSS</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}