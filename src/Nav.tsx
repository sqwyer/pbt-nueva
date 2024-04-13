import textmark from "/textmark.png"
import ChevronRight from "/chevron-right.svg"

export function Nav() {
    return <>
        <div className="px-32 py-4 bg-white flex flex-row items-center">
            <img src={textmark} alt="Pulliam-Bivens Tutoring" height={40} />
            <div className="flex flex-row gap-16 ml-auto items-center">
                <a className="text-black font-semibold cursor-pointer hover:underline">About Us</a>
                <a className="text-black font-semibold cursor-pointer hover:underline">Testimonies</a>
                <button className="bg-red-600 font-semibold text-white px-4 py-2 flex flex-row items-center gap-4 rounded-lg hover:gap-5 hover:-ml-1 duration-100">
                    <span>Book Us</span>
                    <img src={ChevronRight} alt="&gt;" height={16}></img>
                </button>
            </div>
        </div>
    </>
}