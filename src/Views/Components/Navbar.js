import React from "react";
import '../../App.css';
import resume from '../../../src/docs/resume.pdf';

export default function Navbar() {
    return (
        <div>
            <div className="navbar bg-transparent text-black">
                <div className="flex flex-auto text-red-400">
                    <button className="btn btn-ghost">
                        EL Portafolio.
                    </button>
                </div>
                <div className="flex flex-none w-32 text-red-400">
                    <button className="btn btn-ghost btn-sm">
                        Acerca de mí
                    </button>
                </div>
                <div className="flex flex-none w-32 text-red-400">
                    <button className="btn btn-ghost btn-sm">
                        Proyectos
                    </button>
                </div>
                <div className="flex flex-none w-32 text-red-400">
                    <button className="btn btn-ghost btn-sm">
                        <a href={resume} download="Resume">
                            Reasumir
                        </a>
                    </button>
                </div>
                <div className="flex flex-none w-32 text-red-400">
                    <button className="btn btn-ghost btn-sm">
                        Contacto
                    </button>
                </div>
            </div>
        </div>
    )
};