import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import FarmDetailPage from './pages/FarmDetailPage'
import SavedFarmPage from './pages/SavedFarmPage'
import NotFoundPage from './pages/NotFoundPage'


function App() {
 

  return (
    <div>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/farms/:id" element={<FarmDetailPage />} />
      <Route path="/saved" element={<SavedFarmPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    </div>
      
  
  )
}

export default App
