import React from 'react'
import Calculator from './components/Calculator'
import Background from './components/Background'

function App() {
  return (
    <div className="min-h-screen overflow:hidden flex items-center justify-center p-4 overflow-hidden relative">
      <Background />
      <Calculator />
    </div>
  )
}

export default App
 