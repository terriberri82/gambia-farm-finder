
import './App.css'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import FarmDetailPage from './pages/FarmDetailPage'
import SavedFarmPage from './pages/SavedFarmPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import Header from './shared/Header.jsx'
import { useState, useEffect} from 'react';

const url = import.meta.env.VITE_JSONBIN_URL

function App() {
//state
  const [allFarms, setAllFarms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  //useEffect
useEffect(() => {
  const fetchAllFarms = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
     
      setAllFarms(result);
      setIsLoading(false);
    } catch (err) {
      setError(err);
      setIsLoading(false);
    }
  };

  fetchAllFarms();
}, []); 

  return (
    <main>
      <Header title="Gambia Farm Finder" /> 
      <Routes>
      <Route path="/" element={<HomePage allFarms={allFarms}/>} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/farms/:id" element={<FarmDetailPage allFarms={allFarms} />} />
      <Route path="/saved" element={<SavedFarmPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    
    </main>
      
  
  )
}

export default App
