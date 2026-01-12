
import React from "react";
import "./App.css";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="topbar-left">
          <span className="brand">SG</span>
          <span className="role">Full-Stack Developer</span>
        </div>
        <nav className="nav-links">
          <button onClick={() => document.getElementById("profile")?.scrollIntoView({ behavior: "smooth" })}>About</button>
          <button onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>Projects</button>
          <button onClick={() => document.getElementById("education")?.scrollIntoView({ behavior: "smooth" })}>Education</button>
          <button onClick={() => document.getElementById("skills")?.scrollIntoView({ behavior: "smooth" })}>Skills</button>
          <button onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>Contact</button>
        </nav>
      </header>
      <main className="container">
        <Profile />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App
