import './App.css';
import HomePage from './components/HomePage.js';
import AnalysisPage from './components/AnalysisPage.js';
import { BrowserRouter as Router, Route, Routes, useLocation, useNavigate } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/analysis" element={<AnalysisPage />} />
      </Routes>
    </Router>
  );
}

export default App;

