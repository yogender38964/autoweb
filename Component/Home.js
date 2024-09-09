import React from 'react';
import '../css/Home.css'; // Import CSS specific to Home component

const Home = () => {
  return (
    <div>
    <section id="Home" className="Home-section">
      <div className="container">
        <h1 className="heading">Automation & Controls Specialists</h1>
        <p className="description">
        We create and implement bespoke automation solutions that lower your expenses and enhance your business's competitive edge.
        </p>
        <a href="/about" className="learn-more-button">Learn More</a>
      </div>
    </section>
    </div>
  );
};

export default Home;
