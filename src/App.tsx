import { Nav } from "./Nav"
import ChevronRight from "/chevron-right.svg"
import Star from "/star.svg"
import TestimonyPFP from "/testimony-pfp.jpg"

function App() {
  return (
    <main className="bg-blue-800 min-h-screen">
      <Nav />
      <div className="flex flex-row p-32 gap-32">
        <div className="flex-1 flex flex-col gap-12">
          <h1 className="text-white font-bold text-6xl">Let&apos;s improve your ACT scores, together.</h1>
          <h2 className="text-white font-semibold text-lg">Work with a current high-school student who has achieved a 35 ACT and a perfect PSAT to improve your ACT scores right here in North Little Rock, Arkansas.</h2>
          <div className="bg-blue-900 p-8 flex flex-col gap-4 rounded-xl">
            <p className="text-white font-semibold text">&quot;Jonah and Sawyer from Pulliam-Bivens Tutoring are 100% worth it for anyone trying to get their ACT scores higher! They helped me improve my ACT score by double digits.&quot;</p>
            <div className="flex flex-row gap-4 items-center">
              <img src={TestimonyPFP} alt="&gt;" className="rounded-full w-12 h-12"></img>
              <div className="flex flex-row gap-2 items-baseline">
                <p className="text-white font-bold text-lg">Jane Doe</p>
                <p className="text-blue-200 font-semibold text-md">Class of 2026</p>
              </div>
              <div className="flex flex-row gap-1 text-yellow-500 font-bold items-center text-sm">
                <img src={Star} alt="&gt;" className="h-4"></img>
                <img src={Star} alt="&gt;" className="h-4"></img>
                <img src={Star} alt="&gt;" className="h-4"></img>
                <img src={Star} alt="&gt;" className="h-4"></img>
                <img src={Star} alt="&gt;" className="h-4"></img>
                <span>(5.0)</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-4">
          {[1,2,3,4,5].map((key) => 
            <div className="bg-white w-full rounded-lg flex flex-row" key={key}>
              <div className="pl-8 py-4">
                <p className="font-bold">ACT Tutoring - One on One</p>
                <p className="font-semibold text-sm">5-7pm, April 10th 2024 @ 2801 Orange St NLR</p>
              </div>
              <button className="ml-auto px-8 py-4 bg-red-600 font-semibold text-white flex flex-row items-center gap-4 rounded-r-lg hover:gap-5 duration-100">
                <span>Book This Session</span>
                <img src={ChevronRight} alt="&gt;" height={16}></img>
              </button>
            </div>
          )}
          <p className="text-white font-semibold text-sm hover:underline cursor-pointer">See all planned sessions...</p>
        </div>
      </div>
    </main>
  )
}

export default App
