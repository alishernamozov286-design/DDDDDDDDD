import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaCut, FaCalendarAlt, FaStar, FaAward } from 'react-icons/fa';

const HeroSection = styled.section`
  background: linear-gradient(135deg, #0c1a33 0%, #1a2a4a 50%, #2c3e6b 100%);
  color: white;
  padding: 100px 20px;
  text-align: center;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;

  /* Animated starfield background */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(2px 2px at 20px 30px, rgba(255, 255, 255, 0.8), transparent),
      radial-gradient(1px 1px at 40px 70px, rgba(255, 255, 255, 0.6), transparent),
      radial-gradient(1px 1px at 90px 40px, rgba(255, 255, 255, 0.9), transparent),
      radial-gradient(2px 2px at 130px 80px, rgba(255, 255, 255, 0.7), transparent),
      radial-gradient(2px 2px at 160px 30px, rgba(255, 255, 255, 0.8), transparent),
      radial-gradient(1px 1px at 200px 50px, rgba(255, 255, 255, 0.5), transparent),
      radial-gradient(2px 2px at 250px 90px, rgba(255, 255, 255, 0.6), transparent);
    background-repeat: repeat;
    background-size: 300px 150px;
    opacity: 0.4;
    pointer-events: none;
    animation: twinkleStars 8s infinite alternate;
  }
  
  /* Floating particles effect */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(1px 1px at 10% 20%, rgba(135, 206, 235, 0.3), transparent),
      radial-gradient(1px 1px at 80% 80%, rgba(135, 206, 235, 0.2), transparent),
      radial-gradient(2px 2px at 40% 40%, rgba(135, 206, 235, 0.4), transparent),
      radial-gradient(1px 1px at 90% 10%, rgba(135, 206, 235, 0.3), transparent),
      radial-gradient(1px 1px at 20% 90%, rgba(135, 206, 235, 0.2), transparent);
    background-size: 400px 400px;
    animation: floatingParticles 15s infinite linear;
    pointer-events: none;
    opacity: 0.6;
  }
  
  @keyframes twinkleStars {
    0% { 
      opacity: 0.3; 
      transform: scale(1);
    }
    50% { 
      opacity: 0.6; 
      transform: scale(1.02);
    }
    100% { 
      opacity: 0.4; 
      transform: scale(1);
    }
  }
  
  @keyframes floatingParticles {
    0% { 
      transform: translateY(0px) rotate(0deg); 
    }
    33% { 
      transform: translateY(-10px) rotate(120deg); 
    }
    66% { 
      transform: translateY(5px) rotate(240deg); 
    }
    100% { 
      transform: translateY(0px) rotate(360deg); 
    }
  }

  @media (max-width: 768px) {
    padding: 80px 15px;
    min-height: 80vh;
  }
  
  @keyframes heroFloat {
    0%, 100% { transform: translateY(0px) rotateX(0deg); }
    50% { transform: translateY(-10px) rotateX(2deg); }
  }
  
  @keyframes glowingBorder {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  
  @keyframes heroEntrance {
    0% { 
      opacity: 0; 
      transform: translateY(50px) scale(0.9); 
    }
    100% { 
      opacity: 1; 
      transform: translateY(0px) scale(1); 
    }
  }
`;

const HeroContent = styled.div`
  max-width: 900px;
  padding: 50px;
  position: relative;
  z-index: 2;
  background: rgba(12, 26, 51, 0.1);
  border-radius: 30px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 
    0 25px 80px rgba(0, 0, 0, 0.3),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  animation: heroFloat 6s ease-in-out infinite;
  background: rgba(12, 26, 51, 0.9);
  border-radius: 25px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(44, 62, 80, 0.6);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(135, 206, 235, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  z-index: 1;
  animation: heroEntrance 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  
  /* Glowing border effect */
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 27px;
    background: linear-gradient(45deg, 
      rgba(44, 62, 80, 0.3), 
      rgba(135, 206, 235, 0.2), 
      rgba(44, 62, 80, 0.3),
      rgba(135, 206, 235, 0.2)
    );
    background-size: 400% 400%;
    animation: glowingBorder 8s ease-in-out infinite;
    z-index: -1;
    opacity: 0.7;
  }
  
  /* Inner glow effect */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 25px;
    background: radial-gradient(
      ellipse at center,
      rgba(135, 206, 235, 0.05) 0%,
      transparent 70%
    );
    pointer-events: none;
    animation: innerPulse 4s ease-in-out infinite alternate;
  }
  
  &:hover {
    transform: translateY(-5px) rotateX(2deg);
    box-shadow: 
      0 25px 80px rgba(0, 0, 0, 0.5),
      0 0 0 1px rgba(135, 206, 235, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
  }
  
  @keyframes heroEntrance {
    0% {
      opacity: 0;
      transform: translateY(50px) scale(0.9);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  @keyframes glowingBorder {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
  
  @keyframes innerPulse {
    0% {
      opacity: 0.05;
      transform: scale(1);
    }
    100% {
      opacity: 0.15;
      transform: scale(1.02);
    }
  }

  @media (max-width: 768px) {
    padding: 35px 25px;
    max-width: 95%;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.2rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 25px;
  text-shadow: 
    0 2px 4px rgba(0, 0, 0, 0.5),
    0 0 20px rgba(135, 206, 235, 0.3);
  background: linear-gradient(
    45deg,
    #ffffff 0%,
    #87ceeb 50%,
    #ffffff 100%
  );
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  animation: titleShimmer 3s ease-in-out infinite alternate;
  font-weight: 700;
  letter-spacing: 1px;
  
  /* Icon styling */
  svg {
    color: #87ceeb;
    filter: drop-shadow(0 0 10px rgba(135, 206, 235, 0.5));
    animation: iconFloat 3s ease-in-out infinite alternate;
  }
  
  @keyframes titleShimmer {
    0% {
      background-position: 0% 50%;
    }
    100% {
      background-position: 100% 50%;
    }
  }
  
  @keyframes iconFloat {
    0% {
      transform: translateY(0px) rotate(0deg);
    }
    100% {
      transform: translateY(-5px) rotate(5deg);
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    gap: 20px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.6rem;
  margin-bottom: 2.5rem;
  color: #87ceeb;
  text-shadow: 
    0 1px 2px rgba(0, 0, 0, 0.3),
    0 0 15px rgba(135, 206, 235, 0.2);
  font-weight: 300;
  letter-spacing: 0.5px;
  line-height: 1.4;
  animation: subtitleFade 1.5s ease-out 0.3s both;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #87ceeb, transparent);
    animation: underlineExpand 1s ease-out 1s both;
  }
  
  @keyframes subtitleFade {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes underlineExpand {
    0% {
      width: 0;
      opacity: 0;
    }
    100% {
      width: 60px;
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }
`;

const Features = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;
  margin: 30px 0;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 15px;
    margin: 20px 0;
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgba(44, 62, 80, 0.6);
  padding: 15px 25px;
  border-radius: 35px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(135, 206, 235, 0.2);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  font-weight: 500;
  animation: featureSlideIn 0.8s ease-out;
  animation-delay: calc(var(--delay, 0) * 0.2s);
  animation-fill-mode: both;
  
  /* Glowing effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(135, 206, 235, 0.2),
      transparent
    );
    transition: left 0.6s ease;
  }
  
  /* Icon styling */
  svg {
    color: #87ceeb;
    font-size: 1.1rem;
    filter: drop-shadow(0 0 5px rgba(135, 206, 235, 0.3));
    transition: all 0.3s ease;
  }

  &:hover {
    background: rgba(44, 62, 80, 0.8);
    transform: translateY(-5px) scale(1.05);
    box-shadow: 
      0 10px 25px rgba(0, 0, 0, 0.3),
      0 0 20px rgba(135, 206, 235, 0.2);
    border-color: rgba(135, 206, 235, 0.4);
    
    &::before {
      left: 100%;
    }
    
    svg {
      transform: scale(1.2) rotate(5deg);
      filter: drop-shadow(0 0 10px rgba(135, 206, 235, 0.5));
    }
  }
  
  &:nth-child(1) { --delay: 0; }
  &:nth-child(2) { --delay: 1; }
  &:nth-child(3) { --delay: 2; }
  
  @keyframes featureSlideIn {
    0% {
      opacity: 0;
      transform: translateX(-30px) scale(0.8);
    }
    100% {
      opacity: 1;
      transform: translateX(0) scale(1);
    }
  }

  @media (max-width: 768px) {
    padding: 12px 18px;
    font-size: 0.9rem;
    gap: 10px;
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  background: linear-gradient(45deg, #2c3e6b, #34495e);
  color: white;
  padding: 20px 50px;
  border-radius: 35px;
  text-decoration: none;
  font-weight: 700;
  font-size: 1.3rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 2px solid rgba(135, 206, 235, 0.3);
  box-shadow: 
    0 8px 25px rgba(44, 62, 80, 0.5),
    0 0 0 0 rgba(135, 206, 235, 0.4);
  position: relative;
  overflow: hidden;
  animation: ctaEntrance 1s ease-out 1.5s both;
  letter-spacing: 0.5px;
  
  /* Animated background */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(135, 206, 235, 0.2),
      transparent
    );
    transition: left 0.8s ease;
  }
  
  /* Pulsing glow effect */
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 37px;
    background: linear-gradient(45deg, 
      rgba(135, 206, 235, 0.3), 
      rgba(44, 62, 80, 0.3),
      rgba(135, 206, 235, 0.3)
    );
    background-size: 400% 400%;
    animation: buttonGlow 3s ease-in-out infinite;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  /* Icon styling */
  svg {
    transition: all 0.3s ease;
    filter: drop-shadow(0 0 5px rgba(135, 206, 235, 0.3));
  }

  &:hover {
    transform: translateY(-8px) scale(1.05);
    box-shadow: 
      0 15px 40px rgba(44, 62, 80, 0.7),
      0 0 30px rgba(135, 206, 235, 0.4);
    background: linear-gradient(45deg, #34495e, #2c3e6b);
    border-color: rgba(135, 206, 235, 0.6);
    
    &::before {
      left: 100%;
    }
    
    &::after {
      opacity: 1;
    }
    
    svg {
      transform: scale(1.2) rotate(10deg);
      filter: drop-shadow(0 0 10px rgba(135, 206, 235, 0.6));
    }
  }

  &:active {
    transform: translateY(-4px) scale(1.02);
  }
  
  @keyframes ctaEntrance {
    0% {
      opacity: 0;
      transform: translateY(30px) scale(0.8);
    }
    100% {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
  
  @keyframes buttonGlow {
    0%, 100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }

  @media (max-width: 768px) {
    padding: 16px 35px;
    font-size: 1.1rem;
    gap: 12px;
  }
`;

const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroContent>
        <HeroTitle>
          <FaCut /> Professional Barbershop <FaCut />
        </HeroTitle>
        <HeroSubtitle>Sizning uslubingiz, bizning mutaxassirlik</HeroSubtitle>
        
        <Features>
          <Feature>
            <FaStar /> Yuqori sifat
          </Feature>
          <Feature>
            <FaAward /> Tajribali usta
          </Feature>
          <Feature>
            <FaCalendarAlt /> Qulay vaqt
          </Feature>
        </Features>
        
        <CTAButton to="booking" smooth={true} duration={500}>
          <FaCalendarAlt /> Hozir bron qilish
        </CTAButton>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;