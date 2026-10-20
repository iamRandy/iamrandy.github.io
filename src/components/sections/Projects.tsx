import type { SwapViewFn } from "../../types";
import Home from "../sections/Home";
import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react"


type projectProps = { swapViewFn: SwapViewFn }   
type BookComponentProps = {
    project: Project,
    onOpen: (project: Project) => void,
    rotateDegree?: number,
    scaleMultiplier?: number,
    color?: string
}

type Project = {
    name: string,
    description: string,
    link?: string,
}
const projects: Record<string, Project> = {
    knapsack: { name: "Knapsack", description: "A webapp that helps users plan their travels and what to pack."},
    chatRPG: { name: "ChatRPG", description: "A companion web app that lets you play an RPG adventure with an LLM."},
    chaosCart: { name: "Chaos Shopping Cart", description: "A universal cart that can be used to saved products from any retailer site in one space."},
}

type ProjectModalProps = {
    project: Project | null,
    onClose: () => void,
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    // Keep real dialog in sync with React state
    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (project && !dialog.open) dialog.showModal();
        if (!project && dialog.open) dialog.close();
    }, [project]);

    return (
        <dialog
        ref={dialogRef}
        // Fires when the dialog closes for any reason (escape key, close button, etc.)
        onClose={onClose}
        // Clicking the backdrop counts as click on the dialog itself
        onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
        className = "m-auto w-[min(90vw,32rem)] rounded-lg bg-white shadow-xl backdrop:bg-black/60"
        >
            {project && (
                <div className="p-6 flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">{project.name}</h2>
                    <p>{project.description}</p>
                    {project.link && (
                        <a href={project.link} target="_blank" className="underline">View Project</a>
                    )}
                    <form method="dialog">
                        <button className="px-4 py-2 bg-black text-white rounded">Close</button>
                    </form>
                </div>
            )}    
        </dialog>
    );
}

const BookComponent = ({ project, onOpen, color, rotateDegree = 0, scaleMultiplier = 1} : BookComponentProps) => {
    const bookRef = useRef<HTMLButtonElement>(null);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        if (!bookRef.current) return;
        const observer = new ResizeObserver(([entry]) => {
            setHeight(entry.target.clientHeight);
        });
        observer.observe(bookRef.current);
        return () => observer.disconnect();
    }, []);

    const angleInRadians = rotateDegree * (Math.PI / 180);
    const extraSpace = height * Math.sin(angleInRadians);

    return (
        <motion.button
            ref = {bookRef}
            style={{ 
                rotate: rotateDegree, 
                marginRight: extraSpace, 
                scale: scaleMultiplier, 
                backgroundColor: color ?? 'white',
                originX: 1,
                originY: 1  
            }}
            whileHover={scaleMultiplier ? { zIndex: 99, scale: scaleMultiplier + 0.1 } : { zIndex: 99, scale: 1.1 }} 
            className="origin-bottom-right w-[clamp(3rem,min(8vw,20vh),5rem)] aspect-[1/3]"
            onClick={() => onOpen(project)}
            >
                <div className="w-full h-full flex justify-center items-center">
                    <div className="[writing-mode:sideways-lr] h-full flex items-center justify-center text-center">
                        {project.name}
                    </div>
                </div>
        </motion.button>
    );
}

function Projects({ swapViewFn }: projectProps) {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    return (
        <div className="grid grid-cols-3 h-dvh bg-gray-700">
            <div className="bg-white hidden md:block">
                {/* Cat */}
            </div>
            <div className="p-5 bg-blue-500 col-span-3 md:col-span-2">
                {/* Book Shelves */}
                <div className="h-full grid gap-10 grid-cols-1 grid-rows-3"> 
                    {/* Shelf 1 */}
                    <div className="h-full relative bg-black px-4 flex items-end gap-2">
                        <BookComponent project={projects.chatRPG} rotateDegree={90} onOpen={setSelectedProject} />
                        <BookComponent project={projects.chaosCart} rotateDegree={10} color="brown" onOpen={setSelectedProject} />
                        <BookComponent project={projects.knapsack} scaleMultiplier={1.1} color="skyblue" onOpen={setSelectedProject} />
                    </div>
                    {/* Shelf 2 */}
                    <div className="h-full relative bg-black px-4 flex items-end gap-2">

                    </div>
                    {/* Shelf 3 */}
                    <div className="h-full relative bg-black px-4 flex justify-center items-end gap-2 ">
                        {/* <BookComponent project={} color="brown" scaleMultiplier={1.1} />
                        <BookComponent projectName="Abbott" rotateDegree={90} scaleMultiplier={1.1} color="skyblue" /> */}
                    </div>

                    <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                </div>
            </div>
        </div>
    )
}

export default Projects
