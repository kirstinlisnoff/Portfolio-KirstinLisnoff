// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import About from './pages/about'
import Contact from './pages/contact'
import Portfolio from './pages/portfolio'
import Resume from './pages/resume'

  function App() {
  return (
    <Router>
      <div className='app'>
        <Header />
        <main>
          <Routes>
            <Route path="/" element ={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
          </main>
          <Footer />
          </div>
        </Router>
  );
}

export default App
