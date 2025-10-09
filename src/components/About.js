import React from 'react';
import styled from 'styled-components';
import { FaInfoCircle, FaStar, FaUserTie, FaSmile, FaAward } from 'react-icons/fa';

const AboutSection = styled.section`
  padding: 80px 20px;
  background: linear-gradient(135deg, #0d0f3d 0%, #2c1a4d 50%, #5a2d82 100%);
  color: white;
  min-height: 100vh;
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
      radial-gradient(2px 2px at 130px 80px, rgba(255, 255, 255, 0.6), transparent),
      radial-gradient(1px 1px at 160px 30px, rgba(255, 255, 255, 0.4), transparent);
    background-repeat: repeat;
    background-size: 300px 150px;
    opacity: 0.3;
    pointer-events: none;
    z-index: 0;
  }

  @media (max-width: 1200px) {
    padding: 70px 20px;
  }

  @media (max-width: 992px) {
    padding: 60px 20px;
  }

  @media (max-width: 768px) {
    padding: 50px 20px;
  }

  @media (max-width: 576px) {
    padding: 40px 15px;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: white;
  font-size: 2.8rem;
  position: relative;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 4px;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    border-radius: 2px;
  }
  
  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 992px) {
    font-size: 2.3rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
    gap: 12px;
  }
`;

const AboutContent = styled.div`
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 1;
  
  @media (max-width: 1200px) {
    max-width: 800px;
  }
  
  @media (max-width: 992px) {
    max-width: 700px;
  }
  
  @media (max-width: 768px) {
    max-width: 90%;
  }
  
  @media (max-width: 576px) {
    max-width: 95%;
  }
`;

const Description = styled.p`
  font-size: 1.3rem;
  color: #d4c4fb;
  line-height: 1.8;
  margin-bottom: 3rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  
  @media (max-width: 1200px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 992px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.9rem;
    margin-bottom: 2rem;
    line-height: 1.7;
  }
`;

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 40px;
  
  @media (max-width: 1200px) {
    gap: 25px;
    margin-top: 35px;
  }
  
  @media (max-width: 992px) {
    gap: 20px;
    margin-top: 30px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 15px;
    margin-top: 25px;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr 1fr;
    gap: 12px;
    margin-top: 20px;
  }
`;

const StatItem = styled.div`
  background: rgba(43, 30, 77, 0.85);
  padding: 30px 20px;
  border-radius: 15px;
  text-align: center;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  
  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 30px rgba(37, 117, 252, 0.4);
    background: rgba(43, 30, 77, 0.95);
    border: 1px solid rgba(106, 17, 203, 0.6);
  }
  
  @media (max-width: 1200px) {
    padding: 25px 18px;
  }
  
  @media (max-width: 992px) {
    padding: 22px 16px;
  }
  
  @media (max-width: 768px) {
    padding: 20px 15px;
  }
  
  @media (max-width: 576px) {
    padding: 18px 12px;
  }
`;

const StatIcon = styled.div`
  font-size: 2.8rem;
  color: #a0c4ff;
  margin-bottom: 20px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 1200px) {
    font-size: 2.5rem;
    margin-bottom: 18px;
  }
  
  @media (max-width: 992px) {
    font-size: 2.2rem;
    margin-bottom: 16px;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 14px;
  }
  
  @media (max-width: 576px) {
    font-size: 1.8rem;
    margin-bottom: 12px;
  }
`;

const StatNumber = styled.div`
  font-size: 2.2rem;
  font-weight: 700;
  color: white;
  margin-bottom: 12px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 1200px) {
    font-size: 2rem;
  }
  
  @media (max-width: 992px) {
    font-size: 1.8rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 10px;
  }
  
  @media (max-width: 576px) {
    font-size: 1.4rem;
    margin-bottom: 8px;
  }
`;

const StatLabel = styled.div`
  font-size: 1.1rem;
  color: #d4c4fb;
  font-weight: 500;
  
  @media (max-width: 1200px) {
    font-size: 1rem;
  }
  
  @media (max-width: 992px) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
  
  @media (max-width: 576px) {
    font-size: 0.8rem;
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
          Professional barbershopimizda sizga eng yuqori sifatli xizmatlar ko'rsatiladi. 
          Tajribali barberlarimiz har bir mijozga individual yondashuv bilan kerakli 
          xizmatlarni taqdim etadi. Bizning maqsadimiz - sizni chiroyli va ishonchli 
          his qilish.
        </Description>
        
        <Stats>
          <StatItem>
            <StatIcon>
              <FaUserTie />
            </StatIcon>
            <StatNumber>5+</StatNumber>
            <StatLabel>Tajribali barber</StatLabel>
          </StatItem>
          
          <StatItem>
            <StatIcon>
              <FaSmile />
            </StatIcon>
            <StatNumber>1000+</StatNumber>
            <StatLabel>Baxtlı mijoz</StatLabel>
          </StatItem>
          
          <StatItem>
            <StatIcon>
              <FaStar />
            </StatIcon>
            <StatNumber>4.9/5</StatNumber>
            <StatLabel>Reyting</StatLabel>
          </StatItem>
          
          <StatItem>
            <StatIcon>
              <FaAward />
            </StatIcon>
            <StatNumber>3</StatNumber>
            <StatLabel>Yillik tajriba</StatLabel>
          </StatItem>
        </Stats>
      </AboutContent>
    </AboutSection>
  );
};

export default About;