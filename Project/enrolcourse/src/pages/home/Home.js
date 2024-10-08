import React from 'react';
import img1 from './img1.png';
import './Home.css'; // Ensure to import your CSS



function Home() {
    return (
        <div style={{ height: '1000px', marginTop: '20px', textAlign: 'center' }}>
            <div style={{ paddingTop: '90px' }}>
                <h1 style={{ fontSize: '3em', margin: '0' }}>
                    Learn without <br /> Limits
                </h1>
                <img src={img1} alt="Learning" style={{ height: '200px', marginTop: '20px' }} />
            </div>
            <div style={{ marginTop: '40px', fontSize: '1.5em' }}>
                <p>Welcome to our platform!</p>
                <p>Here you can find courses that fit your needs.</p>
            </div>
        </div>
    );
}

export default Home;
