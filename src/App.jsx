// src/App.jsx
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './assets/Components/LandingPage/LandingPage';
import NameInput from './assets/Components/NameInput/NameInput';
import FunctionSelection from './assets/Components/FunctionSelection/FunctionSelection';
import Templates from './assets/Components/Templates/Templates';
import Preview from './assets/Components/Preview/Preview';
import './App.css';

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/name-input" element={<NameInput />} />
        <Route path="/function-selection" element={<FunctionSelection />} />
        <Route path="/templates" element={<Templates />} />
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </AnimatePresence>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;