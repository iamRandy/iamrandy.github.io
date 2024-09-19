import '../App.css';
import { useRef, useEffect, useState } from 'react';

function switchScreens(target) {
    if (target === "project") {
        document.getElementById("path").classList.add("hiddenSection");
        document.getElementById("projects").classList.remove("hiddenSection");
        document.getElementById("projects").classList.add("showProjects");
    } else {
        document.getElementById("path").classList.add("hiddenSection");
        document.getElementById("gallery").classList.remove("hiddenSection");
        document.getElementById("gallery").classList.add("showGallery");
    }
}

function createMotionEffect(num, direction) {
    const animArea = document.querySelector(".animationContainer");
    if (!animArea) {
        console.error("Animation container not found");
        return;
    }
    for (let i = 0; i < num; i++) {
        const animcomponent = document.createElement("div");
        animcomponent.className = "animcomponent";
        const animDuration = Math.random() * 0.8 + 1;
        const animDelay = Math.random() * 0.8;
        direction === "left" ? animcomponent.style.setProperty('--anim-direction', 'zipeffectleft') : animcomponent.style.setProperty('--anim-direction', 'zipeffectright');
        animcomponent.style.setProperty('--anim-duration', `${animDuration}s`);
        animcomponent.style.setProperty('--anim-delay', `${animDelay}s`);
        animArea.appendChild(animcomponent);
    }
}

function PathSection() {
    const [cooldown, setCooldown] = useState(false);
    const observer = useRef();

    useEffect(() => {
        observer.current = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }
            });
        });
        
        const hiddenElements = document.querySelectorAll(".hide");
        hiddenElements.forEach((el) => observer.observe(el));
        
        // const buttons = document.querySelectorAll(".pathSelect");
        const project = document.getElementById("projectSelect");
        const gallery = document.getElementById("gallerySelect");
        const footerSection = document.getElementById("footer");
        const handleClick = (element) => {
            const buttonClicked = element.target;
            if (!buttonClicked.classList.contains("pathSelect")) return;

            if (!cooldown) {
                setCooldown(true);
                buttonClicked.classList.add("clicked");
                document.body.classList.add("projectTransition");
        
                const getTransition = document.querySelector(".projectTransition");
                if (buttonClicked.id === "projectSelect") {
                    if (gallery)
                        gallery.classList.add("hiddenSection");
                    createMotionEffect(20, "right");
                    getTransition.style.setProperty('--anim-transition', 'white');
                } else {
                    if (project)
                        project.classList.add("hiddenSection");
                    createMotionEffect(20, "left");
                    getTransition.style.setProperty('--anim-transition', 'black');
                }
                
                setTimeout(function() { // Closing
                    const animArea = document.querySelector(".animationContainer");
                    const fxArray = document.querySelectorAll(".animcomponent");
                    if (!fxArray || !animArea) return;
    
                    fxArray.forEach(fx => {
                        animArea.removeChild(fx); 
                    });
    
                    buttonClicked.id === "projectSelect" ? switchScreens("project") : switchScreens("gallery");
                    project.classList.contains("hiddenSection") ? project.classList.remove("hiddenSection") : gallery.classList.remove("hiddenSection");
                    buttonClicked.classList.remove("clicked");
                    setCooldown(false);
                    if (footerSection.classList.contains("hiddenSection")) footerSection.classList.remove("hiddenSection");
    
                }, 4000);
            } else {
                console.error("Cooldown in effect, please wait.");
                return;
            }
        };
        
        // Cleanup
        const parentElement = document.getElementById("parent_element");
        parentElement.addEventListener('click', handleClick);

        return () => {
            parentElement.removeEventListener('click', handleClick)
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, [cooldown]);    


    return (
        <div id="parent_element" className="grid gap-x-48 grid-cols-2 h-screen bg-transparent relative">
            <div className="animationContainer absolute flex flex-col gap-y-10 h-full w-full pointer-events-none"></div>
            <div className="hide justify-self-end self-center">
                <button id="projectSelect" className="pathSelect">
                    /projects
                </button>
            </div>
            <div className="hide justify-self-start self-center">
                <button id="gallerySelect" className="pathSelect">
                    /gallery
                </button>
            </div>
        </div>
    );
}

export default PathSection;