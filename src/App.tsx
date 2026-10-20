import './App.css'
import Home from './components/sections/Home'
import Projects from "./components/sections/Projects";
import Nav from './components/nav'
import { useState } from 'react';
import type { View, SwapViewFn } from './types';

function renderView(currentView: View, swapViewFn: SwapViewFn) {
  switch (currentView) {
    case 'home':
      return <Home swapViewFn={swapViewFn} />;
    case 'projects':
      return <Projects swapViewFn={swapViewFn} />;
  }
}

function App() {
  const [currentView, setCurrentView] = useState<View>('home');
  
  const swapView = ({ whichView } : { whichView: View }) => {
    if (currentView === whichView) return; // technically redundant because react naturally guards against this already
    setCurrentView(whichView);
    console.log(`[swapView] Swapped to ${whichView}`);
  }

  return (
    <div>
      <main>
        {renderView(currentView, swapView)}
      </main>
    </div>
  )
}

export default App
