import React from 'react';
import '../style/About.css';

function About() {
  return (
    <div className="about-page">
      <h1>About Us</h1>
      <div className="company-info">
        <h2>Our Company</h2>
        <p>Welcome to EaziBuy, your premier destination for fashion and lifestyle products. We aim to provide our customers with a seamless shopping experience, offering a wide range of quality products at affordable prices.</p>
      </div>
      <div className="team-section">
        <h2>Our Team</h2>
        <div className="team-member">
          <img src="/images/profile.jpeg" alt="Person 1" />
          <div className="member-details">
            <h3>John Doe</h3>
            <p>Co-Founder & CEO</p>
            <p>John is passionate about revolutionizing online shopping experiences and ensuring customer satisfaction.</p>
          </div>
        </div>
        <div className="team-member">
          <img src="/images/profile.jpeg" alt="Person 2" />
          <div className="member-details">
            <h3>Jane Smith</h3>
            <p>Co-Founder & COO</p>
            <p>Jane oversees our operations and logistics, ensuring efficient delivery and service.</p>
          </div>
        </div>
        {/* Add more team members as needed */}
      </div>
    </div>
  );
}

export default About;
