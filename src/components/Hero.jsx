import React, { useEffect, useState } from "react";
import "./Hero.css";

const cardsData = [
  {
    title: "Study Abroad",
    color: "#F55E4F",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80",
    text: "Achieve your study-abroad dreams with our exclusive programs.",
  },
  {
    title: "Career Launchpad",
    color: "#FBE27F",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=500&q=80",
    text: "Kickstart your career with hands-on training and mentorship.",
  },
  {
    title: "Professional Courses",
    color: "#6FC8FF",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80",
    text: "Gain professional skills to advance in your chosen field.",
  },
  {
    title: "Healthcare Jobs Abroad",
    color: "#C9A8FF",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&q=80",
    text: "Training and placement assistance for healthcare professionals.",
  },
];

export default function AnimatedCards() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cardsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero-wrapper">
      <div className="section">
        <div className="content">
            <div>
                <p style={{
                    fontSize: "1.1rem", 
                    fontWeight: "700", 
                    position: "relative", 
                    top: "50px", 
                    color: "#ff4d4d",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    lineHeight:"1.7"
                }}>
                    Exclusively Curated Program
                </p>
                <h2 className="title" style={{fontFamily: "'Plus Jakarta Sans', sans-serif"}}>
                    India's <span style={{color: "#ff4d4d"}}>#1</span>
                </h2>
            </div>
            <span className="sub-heading" style={{
                fontSize: "1.5rem", 
                fontWeight: "700",
                fontFamily: "'Plus Jakarta Sans', sans-serif"
            }}>
                Career Accelerator
            </span>
            <p className="subtitle">
                We offer industry-leading & career-focused training, internship to enhance your skills, secure a meaningful career, and bring your study-abroad dream a reality.
            </p>
            <button className="btn">Start Your Journey</button>
        </div>

        <div className="cards-container">
          {cardsData.map((card, index) => {
            const isActive = index === currentIndex;
            const isPrev =
              (index + 1) % cardsData.length === currentIndex; // for partial left
            const isNext =
              (index - 1 + cardsData.length) % cardsData.length === currentIndex; // for partial right
            return (
              <div
                key={index}
                className={`card ${
                  isActive ? "active" : isPrev ? "prev" : isNext ? "next" : ""
                }`}
                style={{ backgroundColor: card.color }}
              >
                <img src={card.img} alt={card.title} />
                <h3 style={{color: card.color === "#FBE27F" || card.color === "#6FC8FF" ? "#333" : "white"}}>{card.title}</h3>
                <p style={{color: card.color === "#FBE27F" || card.color === "#6FC8FF" ? "#666" : "white"}}>{card.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
