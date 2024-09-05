import '../App.css';
import '../styles/projectstyles.css';
import React, { useEffect } from 'react';
import ProjectComponent from '../components/ProjectComponent.js';

// Images
import remora_logo from '../imgs/remoraLogo.jpeg';
import remora_ad from '../imgs/remoraAd.png';
import remora_icon from '../imgs/RemoraAppIcon.png';
import remora_demo from '../imgs/videos/remorademo.gif';

function Project() {

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
                    description='Staying hydrated can be a challenge, especially for busy students. 
                    While there are water reminder apps, they often lack the <b>motivation</b> factor. 
                    <b>That’s where Remora comes in.</b>
                    <br><br>We’ve created an app that not only reminds you to drink water, 
                    but also provides a unique incentive - a pet Remora.<br/><br/>By drinking 
                    water, you’re not just taking care of yourself, but also your 
                    virtual pet. Remora is designed to <b>make hydration fun and engaging!</b>'
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