import './App.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from './components/ThemeSetting';
import PreLoader from './components/PreLoader';
import { AnimationProvider } from './animation/AnimationContext';

function App() {
  return (
    <AnimationProvider>
      <PreLoader />
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </AnimationProvider>
  );
}

export default App;
