import { useParams } from "react-router-dom";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

interface SessionParams {
    session: string
}

export function Session() {
    const params = useParams() as unknown as SessionParams;
    // lookup session info in database using params.session

    return <main className="bg-blue-800 min-h-screen relative flex flex-col gap-0 justify-between">
            <div>
                <Nav />
                <h1>Session id: {params.session}</h1>
            </div>
            <Footer />
        </main>
}