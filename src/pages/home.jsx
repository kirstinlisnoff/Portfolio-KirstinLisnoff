import React from 'react';
import './home.css'
import Header from '../components/header';

function Home () {
    return (
         <main>
            
            <div className="HomeContent">
             <Header />   
                <h2>Hi, I'm Kirstin</h2>
                <p>I'm an aspiring software developer looking to connect with others who enjoy creating. Welcome to my journey!</p>
            </div>
        </main>
     
    );
}

export default Home;