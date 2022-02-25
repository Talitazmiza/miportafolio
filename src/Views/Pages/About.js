import React from "react";
import intro from '../../images/intro.png';
import Typewriter from "typewriter-effect";

export default function About() {
    return (
        <div className="mx-auto bg-white overflow-none">
            <div className="grid grid-cols-1 md:grid-cols-2 divide-x place-items-center">
                <div className="md:flex lg:overflow-y-visible">
                    <div className="lg:shrink-0">
                        <img src={intro} alt="me" className="object-cover h-96 w-96 md:h-96 md:w-96" />
                    </div>
                </div>
                <div className="md:flex lg:overflow-y-visible">
                    <div className="flex text-left">
                        <div className="mockup-code">
                            <pre data-prefix=">">
                                <code>export default function Introduce()</code>
                                </pre>
                            <pre className="text-center text-xl">
                                <Typewriter
                                    onInit={(typewriter)=> {
                                    typewriter
                                        .typeString("Heyho")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Hi! I'm Lita")
                                        .start();
                                    }}
                                />
                                </pre><br/>
                            <pre data-prefix=">">
                                <code>I'm a web developer specialized in Front-End development</code>
                            </pre>
                            <pre data-prefix=">">
                                <code>And I love CATS!😸</code>
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white place-items-center p-4">
                <div className="indicator border-2">
                    <div className="indicator-item indicator-bottom">
                        <button className="btn ">
                            <a href="https://wa.me/82251718018">
                                Hire Me
                            </a>
                        </button>
                    </div>
                    <div className="card">
                        <div className="card-body ">
                            <h2 className="card-title text-black text-2xl md:underline">Tech Stack</h2>
                            <br />
                            <div className="grid grid-cols-4 gap-4 place-items-center">
                                <img className="object-scale-down h-20 w-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png" alt="JavaScript"/>
                                <img className="object-scale-down h-20 w-20" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React"/>
                                <img className="object-scale-down h-20 w-20" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1969px-Laravel.svg.png" alt="Laravel"/>
                                <img className="object-scale-down h-20 w-20" src="https://miro.medium.com/max/800/0*cQTv5n6xV7opBBIB" alt="ExpressJS"/>
                                <img className="object-scale-down h-20 w-20" src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git"/>
                                <img className="object-scale-down h-20 w-20" src="https://brandlogos.net/wp-content/uploads/2016/06/bootstrap-logo-vector-download.jpg" alt="Bootstrap"/>
                                <img className="object-scale-down h-20 w-20" src="https://tailwindcss.com/_next/static/media/social-square.b622e290e82093c36cca57092ffe494f.jpg" alt="Tailwind CSS"/>
                                <img className="object-scale-down h-20 w-20" src="https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-mysql-logo-png-images-are-download-crazypng-21.png" alt="MySQL"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}