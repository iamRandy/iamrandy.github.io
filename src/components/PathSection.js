import '../App.css';
import { useEffect, useState } from 'react';

function switchScreens(target) {
    if (target === "project") {
        document.getElementById("path").style.display = "none";
        document.getElementById("projects").style.display = "inline";
        document.getElementById("projects").classList.add("showProjects")
    } else {
        document.getElementById("path").style.display = "none";
        document.getElementById("gallery").style.display = "inline";
        document.body.style.backgroundColor = "gray";
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
    const [pressed, setPressed] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
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
        
        const buttons = document.querySelectorAll(".pathSelect");
        const project = document.getElementById("projectSelect");
        const gallery = document.getElementById("gallerySelect");
        const handleClick = (element) => {
            const buttonClicked = element.id;
            element.classList.add("clicked");
            document.body.classList.add("projectTransition");
    
            const getTransition = document.querySelector(".projectTransition");
            if (buttonClicked === "projectSelect") {
                if (gallery)
                    gallery.style.display = "none";
                createMotionEffect(10, "right");
                getTransition.style.setProperty('--anim-transition', 'white');
            } else {
                if (project)
                    project.style.display = "none";
                createMotionEffect(10, "left");
                getTransition.style.setProperty('--anim-transition', 'gray');
            }
            
            setTimeout(function() {
                buttonClicked === "projectSelect" ? switchScreens("project") : switchScreens("gallery");
            }, 4000);
        };
    
        if (!pressed) {
            buttons.forEach(element => {
                element.addEventListener('click', () => handleClick(element));
            });
            setPressed(true);
        }
    
        // Cleanup
        return () => {
            buttons.forEach(element => {
                element.removeEventListener('click', () => handleClick(element));
            });
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, [pressed]);    


    return (
        <div className="grid gap-x-48 grid-cols-2 h-screen bg-transparent relative">
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