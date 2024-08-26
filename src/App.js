import LinkButton from './components/Links.js';
import profile from './imgs/me.png';
import PathSection from './components/PathSection.js';
import Project from './components/Project.js';
import Art from './components/Art.js';
import { useEffect, useState } from 'react';

function App() {
  // Home Button
  useEffect(() => {
    const homeButton = document.getElementById("homeButton");
    if (!homeButton) return;
    
    const resetToHome = () => {
      const mainBody = document.querySelector(".projectTransition");
      const pathSection = document.getElementById("path");
      const projectSection = document.getElementById("projects");
      const gallerySection = document.getElementById("gallery");
      if (!pathSection || !projectSection || !gallerySection) {
        console.error("could not find a section");
        return;
      }
      if (!projectSection.classList.contains("hiddenSection")) {
        projectSection.classList.add("hiddenSection");
        pathSection.classList.remove("hiddenSection");
      } 
      if (!gallerySection.classList.contains("hiddenSection")) {
        gallerySection.classList.add("hiddenSection");
        pathSection.classList.remove("hiddenSection");
      }
      if (document.body.classList.contains("projectTransition")) {
        mainBody.classList.remove("projectTransition");
        document.body.style.backgroundColor = "black";
      }
    }

    homeButton.addEventListener('click', resetToHome);
    return () => {
      homeButton.removeEventListener('click', resetToHome);
    };
  }, []);
  
  // Dandelion animation
  const [reducedMotion, setReducedMotion] = useState(false);
  const handleButtonClick = () => {
    console.log("motion button clicked");
    setReducedMotion(prevState => !prevState);
  }

  useEffect(() => {
    const animationzone = document.getElementById("animation_zone");

    const zoneHeight = animationzone.offsetHeight;
    const zoneWidth = animationzone.offsetWidth;

    function createCircle(delay) {
      if (reducedMotion) {
        console.log("reduced motion is on");
        return;
      }
      setTimeout(() => {
        const ball = document.createElement("div")
        ball.className = "dande";
        // Generate a random alpha value between 0.7 and 0.1
        const randomAlpha = Math.random() * (0.7 - 0.1) + 0.1;
        const randomPos = Math.random() * zoneHeight;
        const randomSize = Math.random() * (40 - 20) + 20;
        const randomSpeed = Math.random() * (30 - 10) + 10;
        const randomAmplitude = Math.random() * (180 - 50) + 50;

        ball.style.position = "absolute";
        ball.style.width = `${randomSize}px`;
        ball.style.borderRadius = "50%";
        ball.style.height = `${randomSize}px`;
        ball.style.backgroundColor = `rgba(255, 255, 255, ${randomAlpha})`;
        ball.style.top = `${randomPos}px`;
        document.getElementById("animation_zone").appendChild(ball);

        let startTime = null;

        function animate(time) {
          if (!startTime) startTime = time;
          const elapsed = time - startTime;

          // Calculate the new position using a sine wave
          const x = elapsed / randomSpeed;
          const y = Math.sin(x / 50) * randomAmplitude + randomPos; // Adjust amplitude and frequency

          ball.style.left = `${x}px`;
          ball.style.top = `${y}px`;

          // Stop the animation when the ball moves out of the animation zone
          if (x < zoneWidth + ball.offsetWidth) {
            requestAnimationFrame(animate);
          } else {
            try {
              animationzone.removeChild(ball);
              createCircle(Math.random() * (10000 - 1000) + 1000);
            } catch (error) {
              console.error(error);
            }

          }
        }
        requestAnimationFrame(animate);
      }, delay);


    }

    for (let i = 0; i < 3; i++) {
      const delay = Math.random() * (10000 - 1000) + 1000;
      createCircle(delay);
    }
    return () => {
      const balls = document.querySelectorAll(".dande");
      if (!balls) return;
      balls.forEach(ball => animationzone.removeChild(ball));
    };
  }, [reducedMotion]);

  return (
    // HEADER/HERO CONTENT
    <div id="MAIN" className="min-h-80 flex flex-col">
      <div id="homeButton" className="linkButton home">
        <span id="homeButton" className="linkIcon" title="home">
          <svg id="homeButton" xmlns="http://www.w3.org/2000/svg" width="80%" height="80%" fill="white" class="bi bi-house" viewBox="0 0 16 16">
            <path id="homeButton" d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
          </svg>
        </span>
      </div>
      <section id="home">
        <div id="animation_zone"></div>
        <div id="header" className="flex justify-center bg-center bg-cover bg-local">
          
          <LinkButton onButtonClick={handleButtonClick} />

          <div id="profileContainer" className="absolute top-10 right-40">
            <img id="pfp" src={profile} alt="pfp" className="relative" />
          </div>
          <div id="profile_description_container">
            <div id="profile_description_text" className="profile_description_text">
              <p>An artist and a developer, learning everywhere he goes. He strives to utilize his skills to bring smiles to people’s faces every day :)</p>
            </div>
          </div>

          
        </div>
      </section>
      <section id="path">
        <PathSection />
      </section>
      <section id="projects" className="hiddenSection bg-white pl-90">
        <Project />
      </section>
      <section id="gallery" className="hiddenSection bg-white pl-90">
        <Art />
      </section>

    </div>
  );
}

export default App;
