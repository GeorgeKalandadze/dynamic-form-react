import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Personal from './Pages/Personal/Personal'
import Education from './Pages/Education/Education' 
import Experience from './Pages/Experience/Experience' 

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Personal/>}/>
          <Route path='/experience' element={<Education/>}/>
          <Route path='/education' element={<Experience/>}/>
          <Route path='/resume'/>
        </Routes>
      </Router>
    </>
  )
}

export default App
