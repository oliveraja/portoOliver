import './App.css';
import Home from './pages/Home';
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from './components/ThemeSetting';

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
