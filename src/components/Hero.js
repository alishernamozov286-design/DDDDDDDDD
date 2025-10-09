import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaCut, FaCalendarAlt, FaStar, FaAward } from 'react-icons/fa';

const HeroSection = styled.section`
  background: linear-gradient(135deg, #0d0f3d 0%, #2c1a4d 50%, #5a2d82 100%);
  color: white;
  padding: 120px 20px;
  text-align: center;
  position: relative;
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  perspective: 1000px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(3px 3px at 20px 30px, rgba(255, 255, 255, 0.8), transparent),
      radial-gradient(2px 2px at 40px 70px, rgba(255, 255, 255, 0.6), transparent),
      radial-gradient(1px 1px at 90px 40px, rgba(255, 255, 255, 0.9), transparent),
      radial-gradient(2px 2px at 130px 80px, rgba(255, 255, 255, 0.7), transparent),
      radial-gradient(3px 3px at 160px 30px, rgba(255, 255, 255, 0.8), transparent),
      radial-gradient(1px 1px at 70px 120px, rgba(255, 255, 255, 1), transparent);
    background-repeat: repeat;
    background-size: 200px 100px;
    opacity: 0.35;
    pointer-events: none;
    animation: twinkle 4s infinite alternate;
    transform: translateZ(-100px);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(106, 17, 203, 0.2), rgba(37, 117, 252, 0.2));
    opacity: 0.5;
    pointer-events: none;
    z-index: 0;
    transform: translateZ(-50px);
  }

  /* Add floating particles effect */
  .particles-container {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 0;
  }

  .particle {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    box-shadow: 0 0 10px rgba(106, 17, 203, 0.8);
    animation: float 15s infinite linear;
  }

  @keyframes float {
    0% {
      transform: translateY(100vh) translateX(0) rotate(0deg);
      opacity: 0;
    }
    10% {
      opacity: 1;
    }
    90% {
      opacity: 0.5;
    }
    100% {
      transform: translateY(-100px) translateX(100px) rotate(360deg);
      opacity: 0;
    }
  }

  @keyframes twinkle {
    0% { opacity: 0.25; }
    100% { opacity: 0.45; }
  }
  
  @media (max-width: 1200px) {
    padding: 100px 20px;
    min-height: 90vh;
  }
  
  @media (max-width: 992px) {
    padding: 90px 20px;
    min-height: 85vh;
  }
  
  @media (max-width: 768px) {
    padding: 80px 20px;
    min-height: 80vh;
  }
  
  @media (max-width: 576px) {
    padding: 70px 15px;
    min-height: 75vh;
  }
`;

const HeroContent = styled.div`
  max-width: 900px;
  z-index: 1;
  animation: fadeInUp 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  transform: translateZ(0);
  transform-style: preserve-3d;
  
  &::before {
    content: '';
    position: absolute;
    top: -25px;
    left: -25px;
    right: -25px;
    bottom: -25px;
    background: rgba(43, 30, 77, 0.5);
    border-radius: 35px;
    backdrop-filter: blur(15px);
    border: 1px solid rgba(255, 255, 255, 0.25);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
    z-index: -1;
    opacity: 0.8;
    animation: pulse 2.5s infinite;
    transform: translateZ(-20px);
  }
  
  /* Add prismatic background effect */
  &::after {
    content: '';
    position: absolute;
    top: -30px;
    left: -30px;
    right: -30px;
    bottom: -30px;
    border-radius: 40px;
    background: linear-gradient(120deg, 
      rgba(106, 17, 203, 0.1) 0%, 
      rgba(37, 117, 252, 0.1) 25%, 
      rgba(255, 65, 108, 0.1) 50%, 
      rgba(255, 75, 43, 0.1) 75%, 
      rgba(106, 17, 203, 0.1) 100%);
    background-size: 300% 300%;
    animation: prismaticShift 6s ease infinite;
    z-index: -2;
    opacity: 0.3;
  }
  
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateZ(0) translateY(40px); }
    to { opacity: 1; transform: translateZ(0) translateY(0); }
  }
  
  @keyframes pulse {
    0% { transform: translateZ(0) scale(1); opacity: 0.8; }
    50% { transform: translateZ(0) scale(1.03); opacity: 1; }
    100% { transform: translateZ(0) scale(1); opacity: 0.8; }
  }
  
  /* Prismatic animation */
  @keyframes prismaticShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @media (max-width: 1200px) {
    max-width: 800px;
  }
  
  @media (max-width: 992px) {
    max-width: 700px;
  }
  
  @media (max-width: 768px) {
    max-width: 95%;
  }
  
  @media (max-width: 576px) {
    max-width: 90%;
  }
`;

const HeroTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 1.5rem;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
  background: linear-gradient(90deg, #fff, #a0a0ff, #d4c4fb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 1.5px;
  animation: fadeIn 1.2s cubic-bezier(0.4, 0, 0.2, 1), slideInLeft 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  
  /* Add neon sign effect */
  text-shadow: 
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 15px #6a11cb,
    0 0 20px #6a11cb,
    0 0 25px #6a11cb,
    0 0 30px #6a11cb,
    0 0 35px #6a11cb;
  animation: fadeIn 1.2s cubic-bezier(0.4, 0, 0.2, 1), 
              slideInLeft 1.2s cubic-bezier(0.4, 0, 0.2, 1),
              neonFlicker 1.5s ease-in-out infinite alternate;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 130px;
    height: 5px;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    border-radius: 3px;
    animation: expandLine 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.6s both;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideInLeft {
    from { transform: translateX(-60px); }
    to { transform: translateX(0); }
  }
  
  @keyframes expandLine {
    from { width: 0; opacity: 0; }
    to { width: 130px; opacity: 1; }
  }
  
  /* Neon flicker animation */
  @keyframes neonFlicker {
    0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
      text-shadow: 
        0 0 5px #fff,
        0 0 10px #fff,
        0 0 15px #6a11cb,
        0 0 20px #6a11cb,
        0 0 25px #6a11cb,
        0 0 30px #6a11cb,
        0 0 35px #6a11cb;
      opacity: 1;
    }
    20%, 24%, 55% {  
      text-shadow: 
        0 0 2px #fff,
        0 0 5px #fff,
        0 0 7px #6a11cb,
        0 0 10px #6a11cb,
        0 0 12px #6a11cb,
        0 0 15px #6a11cb,
        0 0 17px #6a11cb;
      opacity: 0.9;
    }
  }
  
  @media (max-width: 1200px) {
    font-size: 3.5rem;
    gap: 18px;
  }
  
  @media (max-width: 992px) {
    font-size: 3rem;
    gap: 15px;
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    gap: 12px;
  }
  
  @media (max-width: 576px) {
    font-size: 2rem;
    gap: 10px;
    margin-bottom: 1rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.8rem;
  margin-bottom: 2.5rem;
  color: rgba(255, 255, 255, 0.95);
  text-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  animation: fadeIn 1.7s cubic-bezier(0.4, 0, 0.2, 1), slideInRight 1.7s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  padding: 0 25px;
  
  &::before {
    content: '';
    position: absolute;
    top: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 65px;
    height: 3px;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    animation: expandLine 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.9s both;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -20px;
    left: 50%;
    transform: translateX(-50%);
    width: 65px;
    height: 3px;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    animation: expandLine 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.9s both;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @keyframes slideInRight {
    from { transform: translateX(60px); }
    to { transform: translateX(0); }
  }
  
  @media (max-width: 1200px) {
    font-size: 1.6rem;
  }
  
  @media (max-width: 992px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 2rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
    padding: 0 15px;
  }
`;

const Features = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 30px 0;
  flex-wrap: wrap;
  
  @media (max-width: 1200px) {
    gap: 25px;
  }
  
  @media (max-width: 992px) {
    gap: 20px;
  }
  
  @media (max-width: 768px) {
    gap: 15px;
    margin: 20px 0;
  }
  
  @media (max-width: 576px) {
    gap: 12px;
    margin: 15px 0;
  }
`;

const Feature = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(106, 17, 203, 0.3);
  padding: 12px 20px;
  border-radius: 30px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  
  &:hover {
    background: rgba(106, 17, 203, 0.5);
    transform: translateY(-3px);
    box-shadow: 0 8px 20px rgba(37, 117, 252, 0.3);
  }
  
  @media (max-width: 992px) {
    padding: 10px 18px;
    font-size: 0.95rem;
  }
  
  @media (max-width: 768px) {
    padding: 8px 15px;
    font-size: 0.9rem;
  }
  
  @media (max-width: 576px) {
    padding: 8px 12px;
    font-size: 0.8rem;
    gap: 8px;
  }
`;

const CTAButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  background: linear-gradient(45deg, #6a11cb, #2575fc);
  color: white;
  padding: 18px 45px;
  border-radius: 35px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.3rem;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 25px rgba(37, 117, 252, 0.5);
  border: none;
  position: relative;
  overflow: hidden;
  animation: pulse 2.5s infinite, fadeIn 2s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateZ(0);
  transform-style: preserve-3d;
  
  &:hover {
    transform: translateZ(0) translateY(-12px) scale(1.05);
    box-shadow: 0 15px 35px rgba(37, 117, 252, 0.8);
    background: linear-gradient(45deg, #2575fc, #6a11cb);
  }
  
  &:active {
    transform: translateZ(0) translateY(-6px) scale(1.02);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(106, 17, 203, 0.3), rgba(37, 117, 252, 0.3));
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
    border-radius: 35px;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -60%;
    width: 30px;
    height: 200%;
    background: rgba(255, 255, 255, 0.4);
    transform: rotate(30deg);
    transition: all 0.8s;
  }
  
  &:hover::after {
    left: 120%;
  }
  
  @keyframes pulse {
    0% { transform: translateZ(0) scale(1); }
    50% { transform: translateZ(0) scale(1.05); }
    100% { transform: translateZ(0) scale(1); }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  
  @media (max-width: 1200px) {
    padding: 16px 40px;
    font-size: 1.2rem;
  }
  
  @media (max-width: 992px) {
    padding: 15px 35px;
    font-size: 1.1rem;
  }
  
  @media (max-width: 768px) {
    padding: 14px 30px;
    font-size: 1rem;
  }
  
  @media (max-width: 576px) {
    padding: 12px 25px;
    font-size: 0.9rem;
    border-radius: 30px;
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