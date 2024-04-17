import { Footer } from "./Footer"
import { Nav } from "./Nav"
import ChevronRight from "/chevron-right.svg"
import MapPin from "/map-pin.svg"
import Clock from "/clock.svg"
import Star from "/star.svg"
// import TestimonyPFP from "/testimony-pfp.jpg"

function App() {
  return (
    <main className="bg-blue-800 min-h-screen relative flex flex-col gap-0 justify-between">
      <div>
        <Nav />
        <div className="flex flex-col xl:flex-row py-16 px-8 sm:p-16 xl:px-32 2xl:p-32 gap-16 sm:gap-24 xl:gap-32">
          <div className="flex-1 flex flex-col gap-6 2xl:gap-12">
            <h1 className="text-white font-bold text-2xl lg:text-5xl xl:text-6xl">Let&apos;s improve your test scores, together.</h1>
            <h2 className="text-white font-semibold text-md lg:text-lg">Work with current high school students who has achieved perfect ACT and PSAT scores as well as a student with a perfect AP Calculus AB score.</h2>
            <div className="bg-blue-900 p-6 sm:p-8 flex flex-col gap-4 rounded-xl">
              <p className="text-white font-semibold text italic text-xs lg:text-base">&quot;Jonah Pulliam and Sawyer Bivens have been some of my most dedicated and hard-working students. I am sure that they can help improve your mathematical abilities.&quot;</p>
              <div className="flex flex-col sm:flex-row gap-4 sm:items-center">
                {/* <img src={TestimonyPFP} alt="&gt;" className="rounded-full w-12 h-12"></img> */}
                <div className="flex flex-row gap-2 items-center">
                  <p className="text-white font-bold text-xs md:text-md">Bruce Maddox</p>
                  <p className="text-blue-100 font-semibold text-xs italic">AP Calculus Teacher</p>
                </div>
                <div className="flex flex-row gap-1 text-yellow-500 font-bold items-center text-xs sm:text-sm">
                  <img src={Star} alt="&gt;" className="h-3 sm:h-4"></img>
                  <img src={Star} alt="&gt;" className="h-3 sm:h-4"></img>
                  <img src={Star} alt="&gt;" className="h-3 sm:h-4"></img>
                  <img src={Star} alt="&gt;" className="h-3 sm:h-4"></img>
                  <img src={Star} alt="&gt;" className="h-3 sm:h-4"></img>
                  <span>(5.0)</span>
                </div>
              </div>
            </div>
          </div>
          <hr className="border-blue-900 sm:hidden"/>
          <div className="flex-1 flex flex-col gap-8 sm:gap-4">
            {[1,2,3,4,5].map((key) => 
              <div className="bg-white w-full rounded-lg flex flex-col sm:flex-row" key={key}>
                <div className="p-4 sm:px-8">
                  <p className="font-bold text-sm sm:text-base">Math Tutoring - One on One</p>
                  <div className="font-semibold text-[10px] flex flex-row gap-2">
                    <p className="flex flex-row items-center gap-1">
                      <img className="h-[10px]" src={Clock} />
                      <span>5-7pm</span>
                    </p>
                    <p className="flex flex-row items-center gap-1">
                      <img className="h-[10px]" src={MapPin} />
                      <p>2801 Orange St NLR</p>
                    </p>
                  </div>
                </div>
                <button className="sm:ml-auto justify-center sm:justify-normal text-xs 2xl:text-base px-2 2xl:px-4 md:px-8 py-3 sm:py-4 bg-red-600 font-semibold text-white flex flex-row items-center gap-2 rounded-b-lg sm:rounded-bl-none sm:rounded-r-lg hover:gap-4 duration-100 shadow-lg sm:shadow-none">
                  <span>Book Now</span>
                  <img src={ChevronRight} alt="&gt;" height={16}></img>
                </button>
              </div>
            )}
            <p className="text-white font-semibold text-sm hover:underline cursor-pointer">See all planned sessions...</p>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default App
