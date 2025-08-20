// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './components/header'
import Footer from './components/footer'
import About from './pages/about'
import Contact from './pages/contact'
import Portfolio from './pages/portfolio'
import Resume from './pages/resume'
import Home from './pages/home'
import Skills from './pages/skills'
import '@fortawesome/fontawesome-free/css/all.min.css';


//   function App() {
//   return (
//     <Router>
//       <div className='app'>
//         <Header />
//         <main>
//           <Routes>
//             <Route path="/" element ={<About />} />
//             <Route path="/portfolio" element={<Portfolio />} />
//             <Route path="/contact" element={<Contact />} />
//             <Route path="/resume" element={<Resume />} />
//           </Routes>
//           </main>
//           <Footer />
//           </div>
//         </Router>
//   );
// }

function App() {
  return ( 
    <div className='app'>
      <Header />
      <main>
        <section id="home">
          <Home />
        </section>
         <section id="about">
          <About />
        </section>
        <section id="skills">
          <Skills />
        </section>

        <section id="portfolio">
          <Portfolio />
        </section>

        <section id="contact">
          <Contact />
        </section>

        <section id="resume">
          <Resume />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App
