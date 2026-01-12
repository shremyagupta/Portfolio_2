import React from "react";

const Profile = () => (
  <section className="profile" id="profile">
    <img src="/profile.jpg" alt="Profile" className="profile-img" />
    <h1>Shremya Gupta</h1>
    <h2>Full-Stack Developer | MCA @ VIT Bhopal</h2>
    <p>
      MCA student specializing in modern web development, building scalable MERN stack
      applications, high-performance React UIs, and AI-powered experiences.
    </p>
    <div className="profile-actions">
      <a href="#projects" className="btn-ghost">View Projects</a>
    </div>
  </section>
);

export default Profile;