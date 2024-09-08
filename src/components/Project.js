import '../App.css';
import '../styles/projectstyles.css';
import React, { useEffect } from 'react';
import ProjectComponent from '../components/ProjectComponent.js';

// Images
import remora_logo from '../imgs/remoraLogo.jpeg';
import remora_ad from '../imgs/remoraAd.png';
import remora_icon from '../imgs/RemoraAppIcon.png';
import remora_demo from '../imgs/videos/remorademo.gif';

import ptp_logo from '../imgs/protectthepark.png';

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
    
        // Focus Effect //
        const target_imgs = document.querySelectorAll(".project_images");
        const handleImgClick = (e) => {
            const target_img = e.target;
            target_img.classList.contains("focus") ? target_img.classList.remove("focus") : target_img.classList.add("focus");
        }

        target_imgs.forEach((e) => {
            e.addEventListener('click', handleImgClick);
        });
        
        // Display Project Content //
        const target_project_heros = document.querySelectorAll(".project_hero_image");
        const target_project_displays = document.querySelectorAll(".project_display")
        const handleHeroClick = (e) => {
            const heroImgObj = e.target;
            console.log("CLIK " + heroImgObj.id);

            target_project_displays.forEach((dis) => {
                if (dis.id === heroImgObj.id) {
                    dis.classList.contains("show_right") ? dis.classList.remove("show_right") : dis.classList.add("show_right");
                    heroImgObj.classList.contains("shrink") ? heroImgObj.classList.remove("shrink") : heroImgObj.classList.add("shrink");
                }
            })
        }

        console.log("hero length: " + target_project_heros.length);
        target_project_heros.forEach((e) => {
            e.addEventListener('click', (e) => {handleHeroClick(e)});
        });

        // Cleanup //
        return () => {
            clearInterval(intervalId); // Cleanup interval on component unmount
            
            target_imgs.forEach((e) => {
                e.removeEventListener('click', handleImgClick);
            });

            target_project_heros.forEach((e) => {
                e.removeEventListener('click', handleHeroClick);
            })
        };

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
                <div className="extra_container">
                    <div className="line"></div>
                    <div className="ball_container">
                        <div id="tech1" className="ball">Swift</div>
                        <div id="tech2" className="ball">AR Kit</div>
                        <div id="tech3" className="ball">Blender</div>
                    </div>
                    <div className="line part2"></div>
                </div>
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
                    <ProjectComponent name="Protect The Park" 
                    header_image={ptp_logo}
                    description='A group of my friends and I created this game when we were making 
                    a project in our high school iOS developement app where we learned the basics 
                    of app developement. We created it in a matter of a weeks, including the planning 
                    process, and the brainstorming and such, and we developed the app using Swift and 
                    XCode.'
                    titles={["App Icon","Mockup","Demo"]}
                    image_shapes={["","",""]}
                    supporting_images={[remora_icon, remora_ad, remora_demo]}
                    />
                </div>
            </div>
        </div>
    ); 
}

export default Project;