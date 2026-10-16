import React from "react";
import intro from '../../images/intro.png';
import Typewriter from "typewriter-effect";

export default function About() {
    return (
        <div className="w-full h-screen lg:bg-white md:bg-red-600 overflow-hidden">
            <div className="animate-[wiggle_1s_ease-in-out_infinite]">
                <h1 className="text-2xl">🔥 Pardon the mess, I'm still rendering. 🔥</h1>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 divide-x place-items-center gap-3">
                <div className="md:flex lg:overflow-y-visible">
                    <div className="lg:shrink-0">
                        <img src={intro} alt="me" className="object-cover h-96 w-96 md:h-96 md:w-96" />
                    </div>
                </div>
                <div className="w-3/4">
                    <div className="text-left">
                        <div className="mockup-code">
                            <pre data-prefix=">">
                                <code>export default function Introduce()</code>
                            </pre>
                            <pre data-prefix=">">
                                <code>Nice meeting you</code>
                            </pre>
                            <pre data-prefix=">">
                                <code>Hi! It's Lita, wbu?</code>
                            </pre>
                            <pre data-prefix=">">
                                <code>And I love CATS!😸</code>
                            </pre>
                            <pre className="text-center text-xl">
                                <Typewriter
                                    options={{
                                        autoStart: true,
                                        loop: true,
                                    }}
                                    onInit={(typewriter)=> {
                                    typewriter
                                        .typeString("I am a Front End Developer")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Sometimes do code")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Sometimes design")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Sometimes volunteering")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("Sometimes analyst system")
                                        .pauseFor(1000)
                                        .deleteAll()
                                        .typeString("sometimes lie down and play games")
                                        .pauseFor(1000)
                                        .start();
                                    }}
                                />
                                </pre><br/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white place-items-center p-4">
                <div className="indicator border-2">
                    <div className="indicator-item indicator-bottom">
                        <button className="btn">
                            <a href="https://wa.me/82251718018">
                                Hire Me
                            </a>
                        </button>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <h2 className="card-title text-black text-2xl md:underline">Technical Skills</h2>
                            <br />
                            <div className="grid grid-cols-4 gap-4 place-items-center">
                                <img className="object-scale-down h-20 w-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyC1LazfpPsDecwFwxiBe_L61Wmq8jWBBgL5Y2CI0wTQ&s=10" alt="JavaScript"/>
                                <img className="object-scale-down h-20 w-20" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt="React.js"/>
                                <img className="object-scale-down h-20 w-20" src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original" alt="Node.js"/>
                                <img className="object-scale-down h-20 w-20" src="https://brandlogos.net/wp-content/uploads/2016/06/bootstrap-logo-vector-download.jpg" alt="Bootstrap"/>
                                <img className="object-scale-down h-20 w-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShIdpmAM4l6ifTIFwCPjaMBsFJnY6otNl5FFbW2RpLmHh9APqc4-tZ23Y&s=10" alt="Tailwind CSS"/>
                                <img className="object-scale-down h-20 w-20" src="https://thumb.wikimedia.org/wikipedia/commons/thumb/3/33/Figma-logo.svg/960px-Figma-logo.svg.png?utm_source=id.wikipedia.org&utm_campaign=index&utm_content=thumbnail" alt="Figma"/>        
                                <img className="object-scale-down h-20 w-20" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoX10UR3aJwo8bLc-5qMQvlp8l1mn537Jc0P2bzr6xFg&s=10" alt="Miro"/>
                                <img className="object-scale-down h-20 w-20" src="https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/Notion-logo.svg/3840px-Notion-logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" alt="Notion"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}