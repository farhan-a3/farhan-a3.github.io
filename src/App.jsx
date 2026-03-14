import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Career from './pages/Career';
import Projects from './pages/Projects';
import Goals from './pages/Goals';

function App() {
  return (
    <BrowserRouter basename="/farhan-portfolio">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/career" element={<Career />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/goals" element={<Goals />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
