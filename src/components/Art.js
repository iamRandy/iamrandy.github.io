// import '../styles/animation.css';
import '../styles/gallerystyles.css';
import { useEffect } from 'react';

function Art () {

    const handleClick = () => {
        const overlayContainer = document.getElementById("overlayContainer");
        if (overlayContainer) {
            overlayContainer.style.display = "none";
        }
    };

    useEffect(() => {
        const overlayContainer = document.getElementById("overlayContainer");
        const overlay = document.getElementById("overlay");
        if (!overlayContainer) return;
    
        const handleMouseMove = (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
    
            const anchor = document.querySelector(".selected");
            if (!anchor) return;
            const rekt = anchor.getBoundingClientRect();
            const anchorX = rekt.left + rekt.width / 2;
            const anchorY = rekt.top + rekt.height / 2;
    
            const angleX = (mouseY - anchorY) / 40;
            const angleY = (mouseX - anchorX) / 40;
    
            // anchor.style.transform = `perspective(400px) rotateX(${-angleX}deg) rotateY(${angleY}deg)`;
        };
    
        const handleClick = (e) => {
            try {
                console.log(e.target.classList);
                if (typeof(e.target.className) != "string") return;
                const classes = e.target.className.split(' ');
    
                if (classes.includes("threebox")) {
                    const style = window.getComputedStyle(e.target);
                    const backgroundImage = style.backgroundImage;
                    console.log(backgroundImage);
                    if (!classes.includes("selected")) {
                        console.log('has select');
                        const prev = document.querySelector(".selected");
                        if (prev) {
                            prev.classList.remove("selected");
                        }
                        e.target.classList.add("selected");
                        overlay.style.backgroundImage = backgroundImage;
                        overlayContainer.style.transform = 'rotateX(0deg) rotateY(0deg)';
                    } else {
                        overlay.style.backgroundImage = backgroundImage;
                        overlayContainer.style.display = "flex";
                    }
                }
            } catch (error) {
                console.error(error);
            }
        };
    
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('click', handleClick);
    
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('click', handleClick);
        };
    }, []);
    

    return(
        <div className="banner">

            <div className="welcome text-white">
                Welcome To My Gallery :)
            </div>

            <div id="overlayContainer" className="overlayContainer hidden">
                <div id="overlay" className="selected overlay">
                </div>
                    <button onClick={handleClick} id="close_overlay">
                        {/* X icon */}
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 30 30">
                        <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                        </svg>
                    </button>
            </div>
            
            <div id="row1" className="row">
                <div id="box1" className="threebox">
                    <div className="caption" data-caption="VSAM Gotta Catch em' All Event Graphic"></div>
                </div>
                <div id="box2" className="threebox">
                    <div className="caption"  data-caption="My character, 'Kaze'"></div>
                </div>
                <div id="box3" className="threebox">
                    <div className="caption" data-caption="My character, 'Lenny'"></div>
                </div>
            </div>
            <div id="row2" className="row">
                <div id="box4" className="threebox">
                    <div className="caption"></div>
                </div>
                <div id="box5" className="largebox threebox">
                    <div className="caption"></div>
                </div>
            </div>
        
        </div>
    );
}

export default Art;