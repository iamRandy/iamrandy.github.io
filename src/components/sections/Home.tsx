import Projects from "../sections/Projects";
import type { View, SwapViewFn } from "../../types";

type homeProps = { swapViewFn: SwapViewFn };

function Home({ swapViewFn }: homeProps) {
    
    return (
        <div className="flex flex-col justify-between h-dvh p-2">
            <div className="flex gap-2">
                {/* Buttons for volume and dark mode */}
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded p-2">vol</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded p-2">dark</button>
            </div>
            <div className="h-1/2 bg-gray-500">
                {/* Randy's website image */}
            </div>
            <div className="flex justify-center gap-2">
                <button className="bg-gray-900 font-bold rounded p-2 text-white"
                onClick={ ()=>swapViewFn({ whichView: 'contact' }) }>Contact</button>
                <button className="bg-gray-900 font-bold rounded p-2 text-white"
                onClick={ ()=>swapViewFn({ whichView: 'projects' }) }>Projects</button>
                <button className="bg-gray-900 font-bold rounded p-2 text-white"
                onClick={ ()=>swapViewFn({ whichView: 'gallery' }) }>Art Gallery</button>
            </div>
        </div>
    )
}

export default Home; 