import textmark from "/textmark.png"
import ChevronRight from "/chevron-right.svg"
import Menu from "/menu.svg"
import Close from "/x.svg"
import { useState } from "react"

export function Nav() {
    let [navIsOpen, setNavIsOpen] = useState(false);
    return <div className={`bg-white flex flex-col ${navIsOpen && "gap-4 shadow-lg"} md:shadow-none md:gap-0 px-8 sm:px-16 xl:px-32 py-4 sticky top-0 z-50`}>
        <div className="flex flex-row items-center">
            <img src={textmark} alt="Pulliam-Bivens Tutoring" className="h-8" />
            <div className="hidden md:flex flex-row gap-6 md:gap-8 lg:gap-12 xl:gap-16 ml-auto items-center">
                <a className="text-black font-semibold cursor-pointer hover:underline">Meet the Tutors</a>
                <a className="text-black font-semibold cursor-pointer hover:underline">Testimonies</a>
                <button className="bg-red-600 font-semibold text-white px-4 py-2 flex flex-row items-center gap-4 rounded-lg hover:gap-5 hover:-ml-1 duration-100">
                    <span>Book Us</span>
                    <img src={ChevronRight} alt="&gt;" height={16}></img>
                </button>
            </div>
            <div className="flex md:hidden ml-auto text-red-600 font-extrabold">
                {navIsOpen 
                    ? <img src={Close} alt="Close Menu" height={16} onClick={() => setNavIsOpen(false)}></img>
                    : <img src={Menu} alt="Open Menu" height={16} onClick={() => setNavIsOpen(true)}></img>
                }
            </div>
        </div>
        {navIsOpen && <div className="md:hidden flex flex-col gap-2">
            <a className="text-black font-semibold cursor-pointer hover:underline block bg-gray-50 px-3 py-2 rounded-md">Meet the Tutors</a>
            <a className="text-black font-semibold cursor-pointer hover:underline block bg-gray-50 px-3 py-2 rounded-md">Testimonies</a>
            <button className="bg-red-600 text-white font-semibold flex flex-row gap-2 py-2 px-3 justify-center items-center rounded-md">
                <span>Book Us</span>
                <img src={ChevronRight} alt="&gt;" height={16}></img>
            </button>
        </div>}
    </div>
}