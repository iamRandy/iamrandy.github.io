import NavButton from './components/NavButton.js';
import profile from './imgs/meblackandwhite.PNG';
import PathSection from './components/PathSection.js';
import Project from './components/Project.js';
import Art from './components/Art.js';

function App() {
  return (
    // HEADER/HERO CONTENT
    <div id="MAIN" className="min-h-80 flex flex-col">
      <section id="home">
        <div id="header" className="flex justify-center bg-center bg-cover bg-local">
          <div id="profileContainer" className="top-12 left-24 relative w-1/2 h-auto items-center">
            <img id="pfp" src={profile} alt="pfp" className="relative order-2 z-10" />
          </div>
          <div className="flex justify-center">
            <div id="descriptionCard" className="bg-white opacity-80 w-96 h-1/4 right-60 bottom-24 order-1 absolute z-20 rounded-lg">
              <p className="p-4 bg-transparent z-0">A student from the University of Minnesota who shows his endless creativity through the art of programming and developement.</p>
              <div className="overflow-x-auto whitespace-nowrap px-2 z-10"> 
              {/* TODO figure out how to center the mf text */}
                <NavButton text="JS" />
                <NavButton text="Java" />
                <NavButton text="Python" />
                <NavButton text="WebDev" />
                <NavButton text="C" />
                <NavButton text="C#" />
                <NavButton text="Swift" />
                <NavButton text="..." />
              </div>
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
