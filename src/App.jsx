
import './App.css'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import FarmDetailPage from './pages/FarmDetailPage'
import SavedFarmPage from './pages/SavedFarmPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import Header from './shared/Header.jsx'
import { useState, useEffect, useCallback} from 'react';

const url = import.meta.env.VITE_JSONBIN_URL

function App() {
//state
  const [allFarms, setAllFarms] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [savedFarms, setSavedFarms] =useState([]);
 

  //handler function 


const handleToggleSave= useCallback(
  (farmId) => {
  const updatedSaved = savedFarms.includes(farmId)
    ? savedFarms.filter(id => id !== farmId)
    : [...savedFarms, farmId]
  setSavedFarms(updatedSaved)
  localStorage.setItem("savedFarms", JSON.stringify(updatedSaved))
  },[savedFarms]);

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

useEffect(() => {
  const storedFarms = localStorage.getItem("savedFarms")
  if (storedFarms){
    setSavedFarms(JSON.parse(storedFarms))
  }
}, []); 

  return (
    <main>
      <Header title="Gambia Farm Finder" /> 
      {isLoading && <p>Loading...</p>}
      <Routes>
      <Route path="/" element={<HomePage allFarms={allFarms} handleSave={handleToggleSave}/>} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/farms/:id" element={<FarmDetailPage allFarms={allFarms} handleToggleSave={handleToggleSave} 
              savedFarms={savedFarms} />} />
      <Route path="/saved" element={<SavedFarmPage savedFarms={savedFarms} allFarms={allFarms}/>} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    {error && <p>Something went wrong: {error.message}</p>}
    </main>
      
  
  )
}

export default App
