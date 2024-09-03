import '../App.css';
import '../styles/projectstyles.css';
import React, { useState, useEffect } from 'react';
import controllersvg from '../imgs/svgs/controller.svg';
import ProjectComponent from '../components/ProjectComponent.js';
import remora_logo from '../imgs/remoraLogo.jpeg';
import remora_ad from '../imgs/remoraAd.png';
import remora_icon from '../imgs/RemoraAppIcon.png';
import remora_demo from '../imgs/videos/remorademo.gif';

function Project() {
    const [selectedInput, setSelectedInput] = useState('c1');

    const handleInputChange = (event) => {
        setSelectedInput(event.target.id);
    };

    useEffect(() => {
        const eyes = document.getElementById("eyes");
    
        function blink() {
            setTimeout(() => {
                eyes.textContent = '-_-';
            }, 200);
            setTimeout(() => {
                eyes.textContent = 'O_O';
            }, 400);
            setTimeout(() => {
                eyes.textContent = '-_-';
            }, 600);
            setTimeout(() => {
                eyes.textContent = 'O_O';
            }, 800);
        }
    
        blink(); // Initial call to start the blinking immediately
        const intervalId = setInterval(blink, 4000); // Repeat the blinking sequence every 4 seconds
    
        return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, []);
    
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("showRight");
                } else {
                    entry.target.classList.remove("showRight");
                }
            });
        });
        
        const hiddenElements = document.querySelectorAll(".hideRight");
        hiddenElements.forEach((el) => observer.observe(el));        
    
        return () => {
            hiddenElements.forEach((el) => observer.unobserve(el));
        };
    }, []);
    

    return (
        <div className="project_section">
            <div id="container">
                <div id="projectheader" className="project_header">
                    <div className="project_header_text">
                        Peep the Projects
                        <div id="eyes" className='normal-case'>O_O</div>
                    </div>
                </div>
                <div id="content" className="project_content"> 
                    <ProjectComponent name="REMORA" 
                    header_image={remora_logo}
                    description='This project was created as an applicant for the 
                    HackIllinois 2022 competition hosted by University of Illinois 
                    where the goal was to create anything can be used to aid to a 
                    modern day problem. My group decided to create a water reminder 
                    app that reminds you to drink water on a regular and healthy basis 
                    based on your weight and height. The only difference with our app, 
                    is that we decided to give a fun and interactive way to drink 
                    water to incentivize it by putting it into augmented reality and 
                    right in front of the viewers faces!'
                    titles={["App Icon","Mockup","Demo"]}
                    image_shapes={["","","rectangle"]}
                    supporting_images={[remora_icon, remora_ad, remora_demo]}
                    />
                </div>
            </div>
        </div>
    ); 
}

export default Project;