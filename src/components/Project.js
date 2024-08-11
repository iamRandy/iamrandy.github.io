import '../App.css';
import React, { useState, useEffect } from 'react';
// import NavButton from './NavButton';
import controllersvg from '../imgs/svgs/controller.svg';

//Remora Images
import watersvg from '../imgs/svgs/watersvg.svg';
import remoraad from '../imgs/remoraAd.png';
import remorademo from '../imgs/videos/remorademo.gif';
import remorademo2 from '../imgs/videos/remorademo2.gif';

window.onload = function() {
    const eyes = document.getElementById("eyes");

    function blink() {
        setTimeout(() => {
            eyes.textContent = '-_-';
            console.log("blink1");
        }, 200);
        setTimeout(() => {
            eyes.textContent = 'O_O';
            console.log("blink2");
        }, 400);
        setTimeout(() => {
            eyes.textContent = '-_-';
            console.log("blink3");
        }, 600);
        setTimeout(() => {
            eyes.textContent = 'O_O';
            console.log("blink4");
        }, 800);
    }

    blink(); // Initial call to start the blinking immediately
    setInterval(blink, 4000); // Repeat the blinking sequence every 4 seconds
};

function Project() {
    const [selectedInput, setSelectedInput] = useState('c1');

    const handleInputChange = (event) => {
        setSelectedInput(event.target.id);
    };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                console.log(entry)
                if (entry.isIntersecting) {
                    entry.target.classList.add("showRight");
                } else {
                    entry.target.classList.remove("showRight");
                }
            });
        });
        
        const hiddenElements = document.querySelectorAll(".hideRight");
        hiddenElements.forEach((el) => observer.observe(el));        
    })

    return (
        <div className="flex w-fit">
            <div id="project container">
                <div id="projectheader" className="flex justify-center flex-nowrap font-extrabold my-48 uppercase">
                        <div className="content-center text-center">
                            Peep the Projects
                            <div id="eyes" className='normal-case'>O_O</div>
                        </div>
                </div>
                <div id="content" className="bg-white wrapper"> 
                    <div className="container">
                        <input type="radio" name="slide" id="c1" defaultChecked onChange={handleInputChange} />
                        <label htmlFor="c1" className="card">
                            <div className="row">
                                <div className="icon">
                                    <img src={watersvg} alt="1"></img>
                                </div>
                                <div className="description">
                                    <h4 className="font-bold">Remora</h4>
                                    <p>iOS Application</p>
                                </div>
                            </div>
                        </label>
                        <input type="radio" name="slide" id="c2" onChange={handleInputChange} />
                        <label htmlFor="c2" className="card">
                            <div className="row">
                                <div className="icon"><img src={controllersvg} alt="2"></img></div>
                                <div className="description">
                                    <h4 className="font-bold">Protect The Park</h4>
                                    <p>iOS Application</p>
                                </div>
                            </div>
                        </label>
                        <input type="radio" name="slide" id="c3" onChange={handleInputChange} />
                        <label htmlFor="c3" className="card">
                            <div className="row">
                                <div className="icon">3</div>
                                <div className="description">
                                    <h4 className="font-bold">Mrs. Kelly's Tea Website</h4>
                                    <p>Tea Website Mockup on Figma </p>
                                </div>
                            </div>
                        </label>
                        <input type="radio" name="slide" id="c4" onChange={handleInputChange}/>
                        <label htmlFor="c4" className="card">
                            <div className="row">
                                <div className="icon">4</div>
                                <div className="description">
                                    <h4 className="font-bold">Eggs and Stuff</h4>
                                    <p>iOS Application Mockup</p>
                                </div>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="extraInfo p-5 rounded-xl ml-20 mr-6 w-11/12 h-11/12">
                    {selectedInput === 'c1' && (
                        <div className="descArea">
                            <div className="row1 flex pt-10 hideRight">
                                <p>
                                    <p>ABOUT REMORA</p>
                                    Staying hydrated can be a challenge, especially for busy students.
                                    <br/><br/>While there are water reminder apps, they often lack the 
                                    <b> motivation</b> factor. <b>That’s where Remora comes in.</b>
                                </p>
                                <div className="bg-contain pl-10">
                                    <img src={remoraad} alt="remora ad"/>
                                </div>
                            </div>
                            <div className="row2 flex pt-12 hideRight">
                                <div className="bg-contain pr-5">
                                    <img src={remorademo} style={{width: "481px"}} alt="remora demo"/>
                                </div>
                                <div className="bg-contain">
                                    <img src={remorademo2} alt="remora demo 2"/>
                                </div>
                                <p className="pl-10">
                                    We’ve created an app that not only reminds you to drink water, 
                                    but also provides a unique incentive - a pet Remora.<br/><br/>By drinking 
                                    water, you’re not just taking care of yourself, but also your 
                                    virtual pet. Remora is designed to <b>make hydration fun and engaging!</b>
                                </p>
                            </div>
                        </div> 
                    )}
                    {selectedInput === 'c2' && (
                        <div className="descArea"><p>c2 is checked hehe</p></div> 
                    )}
                    {selectedInput === 'c3' && (
                        <div className="descArea"><p>c3 is checked hehe</p></div> 
                    )}
                    {selectedInput === 'c4' && (
                        <div className="descArea"><p>c4 is checked hehe</p></div> 
                    )}
                </div>
            </div>
        </div>
    ); 
}

export default Project;