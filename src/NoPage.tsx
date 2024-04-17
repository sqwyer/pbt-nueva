import { Nav } from "./Nav";
import { Footer } from "./Footer";
import ChevronRight from "/chevron-right.svg"

export function NoPage() {
    return <main className="bg-blue-800 min-h-screen relative flex flex-col gap-0 justify-between">
            <div>
                <Nav />
                <div className="flex flex-col items-center justify-center min-h-56 p-4 gap-2">
                    <h1 className="text-white font-bold text-5xl">Page not found</h1>
                    <a href="/" className="text-white flex flex-row gap-1 text-sm cursor-pointer hover:underline">Home Page <img className="h-4" src={ChevronRight} /></a>
                </div>
            </div>
            <Footer />
        </main>
}