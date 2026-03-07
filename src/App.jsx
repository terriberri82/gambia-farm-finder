
import './App.css'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import FarmDetailPage from './pages/FarmDetailPage'
import SavedFarmPage from './pages/SavedFarmPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import Header from './shared/Header.jsx'


function App() {

  return (
    <main>
      <Header title="Gambia Farm Finder" /> 
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/farms/:id" element={<FarmDetailPage />} />
      <Route path="/saved" element={<SavedFarmPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </main>
      
  
  )
}

export default App
