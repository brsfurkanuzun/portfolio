import React from 'react';

interface SocialMediaButtonProps {
  url: string;
  logo: string;
  background: string;
  shadow: string;
  textColor: string;
  text: string
}

const SocialMediaButton: React.FC<SocialMediaButtonProps> = ({ url, logo, background, shadow, textColor, text }) => {
  const openInNewTab = (url: string) => {
    window.open(url, "_blank", "noreferrer");
  };

  return (
    <button role="link" onClick={() => openInNewTab(url)} className="Btn">
      <img src={shadow} className="svgContainer" alt="shadow" />
      <img src={logo} className="socialLogo" alt="logo" />
      <span className="BG"><img src={background} className="Btn" alt="background" /></span>
      <div className="text" style={{ color: textColor }}>{text}</div>
    </button>
  );
};

export default SocialMediaButton;
