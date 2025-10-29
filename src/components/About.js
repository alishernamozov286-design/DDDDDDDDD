import React from 'react';
import styled from 'styled-components';
import { FaInfoCircle, FaStar, FaUserTie, FaSmile, FaAward } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: 80px 20px;
  background: linear-gradient(135deg, #0c1a33 0%, #1a2a4a 50%, #2c3e6b 100%);
  color: white;
  min-height: 90vh;
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(2px 2px at 20px 30px, rgba(255, 255, 255, 0.7), transparent),
      radial-gradient(1px 1px at 40px 70px, rgba(255, 255, 255, 0.5), transparent),
      radial-gradient(1px 1px at 90px 40px, rgba(255, 255, 255, 0.8), transparent),
      radial-gradient(2px 2px at 130px 80px, rgba(255, 255, 255, 0.6), transparent);
    background-repeat: repeat;
    background-size: 300px 150px;
    opacity: 0.25;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 60px 15px;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 2.5rem;
  color: white;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

const AboutContent = styled.div`
  max-width: 950px;
  margin: 0 auto;
  text-align: center;
  padding: 50px;
  background: rgba(12, 26, 51, 0.9);
  border-radius: 25px;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(135, 206, 235, 0.3);
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(135, 206, 235, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  position: relative;
  animation: contentSlideUp 1s cubic-bezier(0.4, 0, 0.2, 1);
  
  /* Floating orbs effect */
  &::before {
    content: '';
    position: absolute;
    top: -50px;
    left: -50px;
    width: 100px;
    height: 100px;
    background: radial-gradient(circle, rgba(135, 206, 235, 0.1), transparent);
    border-radius: 50%;
    animation: floatOrb1 6s ease-in-out infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -30px;
    right: -30px;
    width: 60px;
    height: 60px;
    background: radial-gradient(circle, rgba(44, 62, 80, 0.2), transparent);
    border-radius: 50%;
    animation: floatOrb2 8s ease-in-out infinite reverse;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 
      0 25px 80px rgba(0, 0, 0, 0.5),
      0 0 0 1px rgba(135, 206, 235, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.15);
  }
  
  @keyframes contentSlideUp {
    0% {
      opacity: 0;
      transform: translateY(50px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes floatOrb1 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    33% { transform: translate(20px, -20px) scale(1.1); }
    66% { transform: translate(-10px, 10px) scale(0.9); }
  }
  
  @keyframes floatOrb2 {
    0%, 100% { transform: translate(0, 0) scale(1); }
    50% { transform: translate(-15px, -15px) scale(1.2); }
  }

  @media (max-width: 768px) {
    padding: 35px 25px;
    max-width: 95%;
  }
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #87ceeb;
  line-height: 1.7;
  margin-bottom: 2.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 2rem;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 25px;
  margin-top: 35px;

  @media (max-width: 768px) {
    gap: 20px;
    margin-top: 30px;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatItem = styled.div`
  background: rgba(44, 62, 80, 0.5);
  padding: 25px 20px;
  border-radius: 15px;
  text-align: center;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(44, 62, 80, 0.3);
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-5px);
    background: rgba(44, 62, 80, 0.7);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 20px 15px;
  }
`;

const StatIcon = styled.div`
  font-size: 2.2rem;
  margin-bottom: 15px;
  color: #87ceeb;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    margin-bottom: 10px;
  }
`;

const StatNumber = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: white;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 8px;
  }
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: #e0e0ff;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <AboutContent>
        <SectionTitle>
          <FaInfoCircle /> Biz haqimizda
        </SectionTitle>
        
        <Description>
          Professional Barbershop oilaviy biznes sifatida 2011 yildan beri Gijduvon tumanida 
          faoliyat yuritib kelmoqda. Bizning jamoamiz tajribali va malakali barbirlardan iborat 
          bo'lib, mijozlarimizga eng yuqori darajadagi xizmatlarni taklif etadi.
        </Description>
        
        <Stats>
          <StatItem>
            <StatIcon>
              <FaUserTie />
            </StatIcon>
            <StatNumber>5+</StatNumber>
            <StatLabel>Tajribali Usta</StatLabel>
          </StatItem>
          
          <StatItem>
            <StatIcon>
              <FaSmile />
            </StatIcon>
            <StatNumber>1000+</StatNumber>
            <StatLabel>BaxtlI Mijoz</StatLabel>
          </StatItem>
          
          <StatItem>
            <StatIcon>
              <FaStar />
            </StatIcon>
            <StatNumber>4.9</StatNumber>
            <StatLabel>Reyting</StatLabel>
          </StatItem>
          
          <StatItem>
            <StatIcon>
              <FaAward />
            </StatIcon>
            <StatNumber>10+</StatNumber>
            <StatLabel>Yillik Tajriba</StatLabel>
          </StatItem>
        </Stats>
      </AboutContent>
    </AboutSection>
  );
};

export default About;