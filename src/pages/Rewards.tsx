import React from "react";
import "./Rewards.css";

const rewards = [
  {
    title: "Earn ₹50 Cashback",
    subtitle: "On your monthly Netflix subscription",
    brand: "netflix",
  },
  {
    title: "Earn ₹50 Cashback",
    subtitle: "On your monthly Prime subscription",
    brand: "prime",
  },
  {
    title: "Cashback ₹25",
    subtitle: "On your Spotify Premium plan",
    brand: "spotify",
  },
  {
    title: "Extra ₹75 Bonus",
    subtitle: "Pay via wallet and earn more",
    brand: "figma",
  },
  {
    title: "Earn ₹50 Cashback",
    subtitle: "On your monthly Netflix subscription",
    brand: "netflix",
  },
  {
    title: "Earn ₹50 Cashback",
    subtitle: "On your monthly Prime subscription",
    brand: "prime",
  },
];

const Rewards: React.FC = () => {
  return (
    <div className="rewards-wrapper">
      {/* Header */}
      <header className="rewards-header">
        <h2>Rewards</h2>
        <div className="icons">
          <span>🔔</span>
          <span>👤</span>
        </div>
      </header>

      {/* Tabs */}
      <div className="tabs">
        {["All", "AI", "Streaming", "Music", "Gaming"].map((tab, i) => (
          <button key={i} className={tab === "All" ? "active" : ""}>
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="cards">
        {rewards.map((item, index) => (
          <div className={`card ${item.brand}`} key={index}>
            <div className="logo">{getLogo(item.brand)}</div>

            <div className="card-content">
              <h3>{item.title}</h3>
              <p>{item.subtitle}</p>
              <button className="claim-btn">Claim Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Nav */}
      <nav className="bottom-nav">
        <div>🏠<span>Home</span></div>
        <div>✨<span>AI Optimise</span></div>
        <div className="active">🎁<span>Reward</span></div>
      </nav>
    </div>
  );
};

const getLogo = (brand: string) => {
  switch (brand) {
    case "netflix":
      return (
        <img
          src="https://i.ibb.co/sdq3S1cb/netflix-logo-3d-icon-png-download-10995342-2-2x.png"
          alt="Netflix"
          className="brand-logo"
        />
      );

    case "prime":
      return (
        <img
          src="https://i.ibb.co/N67mSg7v/netflix-logo-3d-icon-png-download-10995342-2-1.png"
          alt="Prime Video"
          className="brand-logo"
        />
      );

    case "spotify":
      return (
        <img
          src="https://i.ibb.co/v4LgY5z6/netflix-logo-3d-icon-png-download-10995342-2.png"
          alt="Spotify"
          className="brand-logo"
        />
      );

    case "figma":
      return (
        <img
          src="https://i.ibb.co/abcd123/figma.png"
          alt="Figma"
          className="brand-logo"
        />
      );

    default:
      return null;
  }
};


export default Rewards;
