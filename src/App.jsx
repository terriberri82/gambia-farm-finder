
import './App.css'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import FarmDetailPage from './pages/FarmDetailPage'
import SavedFarmPage from './pages/SavedFarmPage'
import NotFoundPage from './pages/NotFoundPage'
import Header from './shared/Header.jsx'
import styles from './shared/Header.module.css'

function App() {

  return (
    <main>
      <Header title="Gambia Farm Finder" /> 
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/farms/:id" element={<FarmDetailPage />} />
      <Route path="/saved" element={<SavedFarmPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </main>
      
  
  )
}

export default App
