import React from "react";

const Experience = () => (
  <section className="experience" id="projects">
    <h2>Projects &amp; Achievements</h2>
    <div className="exp-item">
      <h3>JMK Beauty Salon - Full-Stack Booking Platform</h3>
      <span>Tech Stack: MERN (MongoDB, Express, React, Node.js), Calendly API</span>
      <p>
        Engineered a MERN stack application for salon service browsing and booking,
        increasing user engagement and streamlining appointment management.
      </p>
      <p>
        Integrated Calendly API to automate appointment scheduling and reduce manual
        coordination, and designed a responsive MongoDB schema for testimonials and
        dynamic service catalogs.
      </p>
    </div>
    <div className="exp-item">
      <h3>AI-Image Generator</h3>
      <span>Tech Stack: React.js, Tailwind CSS</span>
      <p>
        Built a modern glassmorphism-inspired UI for an AI-powered image generator,
        optimized for performance with fast asset loading and smooth interactions.
      </p>
      <p>
        Managed complex state transitions with React hooks to deliver responsive,
        high-speed user experiences when interacting with AI APIs.
      </p>
    </div>
    <div className="exp-item">
      <h3>Deepfake Video Detection</h3>
      <span>Tech Stack: JavaScript, HTML/CSS, Machine Learning</span>
      <p>
        Developed an interactive frontend for a security-focused ML project that
        identifies manipulated media samples and visualizes detection accuracy for
        large video datasets.
      </p>
      <p>
        Streamlined the video-analysis workflow to provide faster feedback cycles
        and clearer insights to end users.
      </p>
    </div>
    <div className="exp-item">
      <h3>Certifications &amp; Achievements</h3>
      <span>Highlights: HackerRank (Java, React, JavaScript), Apna College DSA, Google Solution Challenge</span>
      <p>
        HackerRank Certified in Java, React, and JavaScript (Gold Badge), completed
        Data Structures &amp; Algorithms in Java Specialization (Apna College), and
        participated in the Google Solution Challenge focused on social impact
        innovation.
      </p>
    </div>
  </section>
);

export default Experience;
