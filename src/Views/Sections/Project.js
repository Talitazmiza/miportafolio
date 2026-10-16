import { useState, useEffect } from "react";
import React from "react";
import 'flowbite';
import reactportofolio from '../../images/webportofolio.png';
import lasoyae from '../../images/lasoyae.png';
import urhealth from '../../images/urhealth.png';
import faq from '../../images/faq.png';
import etapens from '../../images/etapens.png';
import etapenscode from '../../images/etapenscode.png';
import midwife from '../../images/midwife.png';
import pos from '../../images/pos.png';
import edisab from '../../images/edicover.png';
import edisablon from '../../images/edisablon.png';
import superapp from '../../images/superapp/cover.png';
import saconcept from '../../images/superapp/1.png';
import sadb from '../../images/superapp/2.png';
import sawfone from '../../images/superapp/3.png';
import sawftw from '../../images/superapp/4.png';
import sawfth from '../../images/superapp/5.png';
import sadffo from '../../images/superapp/6.png';
import lasomob from '../../images/lasocover.png';
import lasoyamobile from '../../images/lasoyamobile.png';


export default function Project() {
    
const [selectedImage, setSelectedImage] = useState(null);

const [gallery, setGallery] = useState([]);   // list of images for the popup
const [current, setCurrent] = useState(0);    // which image is showing

const openGallery = (images) => {
    setGallery(images);
    setCurrent(0);
};
const closeGallery = () => setGallery([]);
const prev = () => setCurrent((c) => (c - 1 + gallery.length) % gallery.length);
const next = () => setCurrent((c) => (c + 1) % gallery.length);


const snaps = [
    { src: "/images/edicover.png", alt: "Edisablon" },
    { src: "/small.png", link: "/big.png", alt: "..." },
    { src: "/projects/lasoyae/cover.png", alt: "Lasoyae Culinary" },
    { src: "/projects/urhealth/cover.png", alt: "Urhealth" },
  ];

  useEffect(() => {
    if (gallery.length === 0) return;
    const onKey = (e) => {
        if (e.key === "Escape") closeGallery();
        if (e.key === "ArrowLeft") prev();
        if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
}, [gallery]);

    return (
        <div className="w-full bg-white">
            <div className="container md:mx-auto bg-white px-4 text-black">
                <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-4">

                    {/* CAROUSEL */}
                    {/* SUPERAPP */}
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-10">
                        <a href="#" onClick={(e) => { 
                            e.preventDefault();
                            openGallery([superapp, sadb, sawfone, sawftw, sawfth, sadffo]);
                            }}>
                            <img className="rounded-t-lg" src={superapp} alt=""/>
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Super App PPSDM Migas</h5>
                                <h5 className="mb-6 text-sm text-blue-700">Examination & Certification System</h5>
                            </a>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">Use Case</span>
                            <span className="bg-yellow-100 text-blue-400 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-yellow-900">Business Flow</span>
                            <span className="bg-purple-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-purple-300">Wireframing</span>
                            <span className="bg-grey-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-purple-300">Database Documentation</span>
                        </div>
                    </div>
                    {gallery.length > 0 && (
    <div
        className="fixed inset-0 flex items-center justify-center bg-black/70 p-4"
        style={{ zIndex: 9999 }}
        onClick={closeGallery}
    >
        <div
            className="relative"
            style={{ display: "inline-block" }}
            onClick={(e) => e.stopPropagation()}
        >
            {/* close button */}
            <button
                className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-white text-black shadow"
                style={{ zIndex: 2 }}
                onClick={closeGallery}
            >
                ✕
            </button>

            {/* current image */}
            <img
                src={gallery[current]}
                alt=""
                className="rounded-lg"
                style={{
                    width: "min(90vw, 1000px)",
                    maxHeight: "80vh",
                    objectFit: "contain",
                    background: "white",
                }}
            />

                {/* arrows, only if there is more than one image */}
                {gallery.length > 1 && (
                    <>
                        <button
                            onClick={prev}
                            className="absolute top-1/2 -translate-y-1/2 left-2 h-10 w-10 rounded-full bg-white text-black shadow"
                        >
                            ‹
                        </button>
                        <button
                            onClick={next}
                            className="absolute top-1/2 -translate-y-1/2 right-2 h-10 w-10 rounded-full bg-white text-black shadow"
                        >
                            ›
                        </button>

                        {/* dots */}
                        <div className="flex justify-center gap-2 mt-3">
                            {gallery.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrent(i)}
                                    style={{
                                        width: 10,
                                        height: 10,
                                        borderRadius: "50%",
                                        background: i === current ? "white" : "rgba(255,255,255,0.4)",
                                    }}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </div>
)}




                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-10">
                        <a href="#" onClick={(e) => { 
                            e.preventDefault();
                            setSelectedImage(edisablon);
                            }}>
                            <img className="rounded-t-lg" src={edisab} alt=""/>
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">Edisablon</h5>
                            </a>
                            <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-300">UI/UX</span>
                            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-red-900">Figma</span>
                        </div>
                    </div>
                    {selectedImage && (
                        <div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                            onClick={() => setSelectedImage(null)}
                        >
                            <div className="relative max-h-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
                                <button
                                    className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-white text-black shadow"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    ✕
                                </button>
                                <img src={selectedImage} alt="" className="max-h-[85vh] rounded-lg" />
                            </div>
                        </div>      
                    )}



                    {/* La Soyae Mobile */}
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-10">
                        <a href="#" onClick={(e) => { 
                            e.preventDefault();
                            setSelectedImage(lasoyamobile);
                            }}>
                            <img className="rounded-t-lg" src={lasomob} alt=""/>
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">La Soyae Mobile</h5>
                            </a>
                            <span className="bg-gray-100 text-gray-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-green-300">UI/UX</span>
                            <span className="bg-green-100 text-green-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-green-200 dark:text-red-900">Figma</span>
                        </div>
                    </div>
                    {selectedImage && (
                        <div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                            onClick={() => setSelectedImage(null)}
                        >
                            <div className="relative max-h-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
                                <button
                                    className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-white text-black shadow"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    ✕
                                </button>
                                <img src={selectedImage} alt="" className="max-h-[85vh] rounded-lg" />
                            </div>
                        </div>      
                    )}


                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-10">
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
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-10">
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
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-10">
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
                    <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-10">
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


                    {/* TEMPLATE CARD */}
                    {/* <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-10">
                        <a href="#" onClick={(e) => { 
                            e.preventDefault();
                            setSelectedImage(reactportofolio);
                            }}>
                            <img className="rounded-t-lg" src={pos} alt=""/>
                        </a>
                        <div className="p-5">
                            <a href="#">
                                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">New</h5>
                            </a>
                            <span className="bg-green-100 text-blue-400 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-purple-200 dark:text-green-900">Flutter</span>
                        </div>
                    </div>
                    {selectedImage && (
                        <div
                            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
                            onClick={() => setSelectedImage(null)}
                        >
                            <div className="relative max-h-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
                                <button
                                    className="absolute -top-3 -right-3 h-8 w-8 rounded-full bg-white text-black shadow"
                                    onClick={() => setSelectedImage(null)}
                                >
                                    ✕
                                </button>
                                <img src={selectedImage} alt="" className="max-h-[85vh] rounded-lg" />
                            </div>
                        </div>      
                    )} */}

                </div>
            </div>
        </div>
    )
}