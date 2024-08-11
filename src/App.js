import NavButton from './components/NavButton.js';
import profile from './imgs/me.png';
import PathSection from './components/PathSection.js';
import Project from './components/Project.js';
import Art from './components/Art.js';

function App() {
  return (
    // HEADER/HERO CONTENT
    <div id="MAIN" className="min-h-80 flex flex-col">
      <section id="home">
        <div id="header" className="flex justify-center bg-center bg-cover bg-local">
          

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
      <section id="projects" className="hidden bg-white pl-90">
        <Project />
      </section>
      <section id="gallery" className="hidden bg-white pl-90">
        <Art />
      </section>

    </div>
  );
}

export default App;
