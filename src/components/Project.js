import '../App.css';
import '../styles/projectstyles.css';
import React, { useEffect } from 'react';
import ProjectComponent from '../components/ProjectComponent.js';

// Images
import remora_logo from '../imgs/remoraLogo.jpeg';
import remora_ad from '../imgs/remoraAd.png';
import remora_icon from '../imgs/RemoraAppIcon.png';
import remora_demo from '../imgs/videos/remorademo.gif';

import ptp_logo from '../imgs/protecttheparkicon.png';
import ptp_gameplay from '../imgs/protecttheparkgameplay.jpeg';
import ptp_startscreen from '../imgs/protectthepark.png';

import abbott_tag from '../imgs/myabbottcard.JPG';
import chicago_pic from '../imgs/meinchicago.gif';
import willis_pic from '../imgs/willis.jpg';
import intern_pic from '../imgs/meandinterns.JPG';

function Project() {

    useEffect(() => {

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.log("WORKKKJDSLKFJSL:DJ");
                    entry.target.classList.add("showRight");
                } else {
                    console.log("part2");
                    entry.target.classList.remove("showRight");
                }
            });
        });
        
        const hiddenElements = document.querySelectorAll(".hideRight");
        hiddenElements.forEach((el) => observer.observe(el));        


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

            target_project_displays.forEach((dis) => {
                if (dis.id === heroImgObj.id) {
                    dis.classList.contains("show_right") ? dis.classList.remove("show_right") : dis.classList.add("show_right");
                    heroImgObj.classList.contains("shrink") ? heroImgObj.classList.remove("shrink") : heroImgObj.classList.add("shrink");
                }
            })
        }

        target_project_heros.forEach((e) => {
            e.addEventListener('click', (e) => {handleHeroClick(e)});
        });

        // Cleanup //
        return () => {
            clearInterval(intervalId); // Cleanup interval on component unmount
            hiddenElements.forEach((el) => observer.unobserve(el));

            target_imgs.forEach((e) => {
                e.removeEventListener('click', handleImgClick);
            });

            target_project_heros.forEach((e) => {
                e.removeEventListener('click', handleHeroClick);
            })
        };

    }, []);
    

    return (
        <div className="project_section">
            <div id="container">
                <div id="projectheader" className="project_header">
                    <div className="project_header_text">
                        Peep the Experience
                        <div id="eyes" className='normal-case'>O_O</div>
                    </div>
                </div>
                <div id="content" className="project_content"> 
                    <ProjectComponent name="Abbott AI Accelerator" 
                    header_image={willis_pic}
                    description='Developed, with the help of one of my talented coworkers, an 
                    <b>AI assistant</b> for Abbott Laboratories during my internship in Chicago, IL!<br/><br/>
                    Utilizing <b>Azure</b>, we hosted and created a chatbot that could assist
                    customers and clients with any queries or questions they might have about any 
                    Abbott product.<br/><br/>
                    I was able to utilize a lot of skills, such as my <b>frontend skills in React and
                    Web-Dev tools</b>, in order to build a user-friendly and attractive user interface.
                    In addition, I developed and optimized the chatbot to handle over 100 queries by
                    clients and employees, <b>working in the backend as well.</b>'
                    titles={["My keycard for Willis Tower","Chicago","Me and a couple other interns"]}
                    image_shapes={["","",""]}
                    supporting_images={[abbott_tag, chicago_pic, intern_pic]}
                    technologies={["Python", "React", "Streamlit", "TypeScript", "Postgres"]}
                    theme="white"
                    />
                    <ProjectComponent name="Remora" 
                    header_image={remora_icon}
                    description='Staying hydrated can be a challenge, especially for busy students. 
                    While there are water reminder apps, they often lack the <b>motivation</b> factor. 
                    <b>That’s where Remora comes in.</b>
                    <br/><br/>We’ve created an app that not only reminds you to drink water, 
                    but also provides a unique incentive - a pet Remora.<br/><br/>By drinking 
                    water, you’re not just taking care of yourself, but also your 
                    virtual pet. Remora is designed to <b>make hydration fun and engaging!</b>'
                    titles={["Logo","Mockup","Demo"]}
                    image_shapes={["","","rectangle"]}
                    supporting_images={[remora_logo, remora_ad, remora_demo]}
                    technologies={["Swift", "AR Kit", "XCode"]}
                    theme="black"
                    />
                    <ProjectComponent name="Protect The Park" 
                    header_image={ptp_logo}
                    description='A group of my friends and I created this game when we were making 
                    a project in our high school <b>iOS developement class</b>. 
                    <br/><br/> 
                    We created it in a matter of a 4 weeks, this included drawing up the art, 
                    the planning process, and the programming. We developed the app using <b>Swift and 
                    XCode.</b><br/><br/>It was an awesome experience, as we were able to learn the basics of iOS 
                    developement and how to ship a finished app!'
                    titles={["Start Screen","Gameplay!"]}
                    image_shapes={["","",""]}
                    supporting_images={[ptp_startscreen, ptp_gameplay]}
                    technologies={["Swift", "XCode"]}
                    theme="white"
                    />
                </div>
            </div>
        </div>
    ); 
}

export default Project;