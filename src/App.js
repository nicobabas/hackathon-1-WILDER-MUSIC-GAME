import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './components/Home/Home';
import { ScoreContext, ProgressContext } from './contexts/ScoreContext';
import Rules from './components/Rules/Rules.jsx';
import Header from './components/Header/Header.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer';
import Game from './components/Game/Game';
import Game2 from './components/Game/Game2';
import Game3 from './components/Game/Game3';
import Game4 from './components/Game/Game4';
import Game5 from './components/Game/Game5';
import Game6 from './components/Game/Game6';
import Game7 from './components/Game/Game7';
import Game8 from './components/Game/Game8';
import Game9 from './components/Game/Game9';
import Game10 from './components/Game/Game10';
import Final from './components/Final/Final';
import { useState } from 'react';

const App = () => {
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(10);
  
  return (
  <div className="App">
    <ScoreContext.Provider
      value={{ score: score, setScore: setScore }} 
    >
      <ProgressContext.Provider
        value={{ progress: progress, setProgress: setProgress }} 
      >
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element= {<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/regles" element={<Rules />} />
          <Route path="/jeu" element={<Game />} />
          <Route path="/jeu2" element={<Game2 />} />
          <Route path="/jeu3" element={<Game3 />} />
          <Route path="/jeu4" element={<Game4 />} />
          <Route path="/jeu5" element={<Game5 />} />
          <Route path="/jeu6" element={<Game6 />} />
          <Route path="/jeu7" element={<Game7 />} />
          <Route path="/jeu8" element={<Game8 />} />
          <Route path="/jeu9" element={<Game9 />} />
          <Route path="/jeu10" element={<Game10 />} />
          <Route path="/final" element={<Final />} />
        </Routes>
        <Footer />
      </Router>
    </ProgressContext.Provider>
  </ScoreContext.Provider>
      
  </div>
  );
}

export default App;
