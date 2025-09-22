import { useState } from 'react'
import './App.css'
import Header from './Componentes/Header'
import Carrusel from './Componentes/Carrusel'

function App() {
  return (
    <>
        {/* Primera pantalla con carrucel */}
        <div className="relative h-screen w-full">
            <Carrusel />
            <Header />    
        </div>
    </> 
  )
}

export default App
