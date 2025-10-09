import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaUser, FaPhone, FaClock, FaStar, FaMedal, FaUserTie } from 'react-icons/fa';

const MastersSection = styled.section`
  padding: 120px 20px;
  background: linear-gradient(135deg, #0d0f3d 0%, #2c1a4d 50%, #5a2d82 100%);
  color: white;
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
      radial-gradient(3px 3px at 20px 30px, rgba(255, 255, 255, 0.7), transparent),
      radial-gradient(2px 2px at 40px 70px, rgba(255, 255, 255, 0.5), transparent),
      radial-gradient(1px 1px at 90px 40px, rgba(255, 255, 255, 0.8), transparent),
      radial-gradient(2px 2px at 130px 80px, rgba(255, 255, 255, 0.6), transparent),
      radial-gradient(3px 3px at 160px 30px, rgba(255, 255, 255, 0.7), transparent);
    background-repeat: repeat;
    background-size: 200px 100px;
    opacity: 0.25;
    pointer-events: none;
    animation: twinkle 4s infinite alternate;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(106, 17, 203, 0.15), rgba(37, 117, 252, 0.15));
    opacity: 0.4;
    pointer-events: none;
    z-index: 0;
  }
  
  @keyframes twinkle {
    0% { opacity: 0.15; }
    100% { opacity: 0.35; }
  }
  
  @media (max-width: 1200px) {
    padding: 100px 20px;
  }
  
  @media (max-width: 992px) {
    padding: 90px 20px;
  }
  
  @media (max-width: 768px) {
    padding: 80px 20px;
  }
  
  @media (max-width: 576px) {
    padding: 60px 15px;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: white;
  font-size: 2.8rem;
  position: relative;
  z-index: 1;
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  animation: fadeInDown 1s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 120px;
    height: 5px;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    border-radius: 3px;
    animation: expandLine 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s both;
  }
  
  @keyframes fadeInDown {
    from { opacity: 0; transform: translateY(-40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes expandLine {
    from { width: 0; opacity: 0; }
    to { width: 120px; opacity: 1; }
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
  }
`;

const MastersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 35px;
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
  }
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 25px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 25px;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const MasterCard = styled.div`
  background: rgba(43, 30, 77, 0.85);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 1;
  animation: fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateZ(0);
  transform-style: preserve-3d;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(106, 17, 203, 0.2), rgba(37, 117, 252, 0.2));
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -1;
    pointer-events: none;
    border-radius: 20px;
  }
  
  /* Add liquid animation effect */
  &::after {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: 30px;
    background: radial-gradient(circle, rgba(106, 17, 203, 0.1) 0%, transparent 70%);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -2;
    animation: liquidWave 8s linear infinite;
  }
  
  &:hover {
    transform: translateZ(0) translateY(-20px) rotateX(5deg);
    box-shadow: 0 25px 60px rgba(37, 117, 252, 0.6);
    background: rgba(43, 30, 77, 0.95);
    border: 1px solid rgba(106, 17, 203, 0.6);
    
    &::before {
      opacity: 1;
    }
    
    /* Activate liquid effect on hover */
    &::after {
      opacity: 0.5;
    }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateZ(0) translateY(30px); }
    to { opacity: 1; transform: translateZ(0) translateY(0); }
  }
  
  /* Liquid wave animation */
  @keyframes liquidWave {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @media (max-width: 1200px) {
    border-radius: 18px;
  }
  
  @media (max-width: 992px) {
    border-radius: 16px;
  }
  
  @media (max-width: 576px) {
    border-radius: 15px;
  }
`;

const MasterImage = styled.div`
  height: 270px;
  background: linear-gradient(45deg, #6a11cb, #2575fc);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 4.5rem;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: rotate(45deg);
    animation: shine 3.5s infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 12px;
    left: 12px;
    right: 12px;
    bottom: 12px;
    border: 3px solid rgba(255, 255, 255, 0.4);
    border-radius: 15px;
    pointer-events: none;
    animation: pulseBorder 2.5s infinite;
  }
  
  /* Add quantum field effect */
  position: relative;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: linear-gradient(
      45deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: rotate(45deg);
    animation: shine 3.5s infinite;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(2px 2px at 20% 30%, rgba(255, 255, 255, 0.6), transparent),
      radial-gradient(1px 1px at 60% 70%, rgba(255, 255, 255, 0.6), transparent),
      radial-gradient(3px 3px at 80% 40%, rgba(255, 255, 255, 0.6), transparent);
    background-size: 100px 100px;
    animation: quantumPulse 4s ease-in-out infinite alternate;
    pointer-events: none;
  }
  
  @keyframes shine {
    0% { transform: rotate(45deg) translateX(-100%); }
    100% { transform: rotate(45deg) translateX(100%); }
  }
  
  @keyframes pulseBorder {
    0% { opacity: 0.6; }
    50% { opacity: 1; }
    100% { opacity: 0.6; }
  }
  
  /* Quantum pulse animation */
  @keyframes quantumPulse {
    0% { opacity: 0.3; transform: scale(1); }
    100% { opacity: 0.7; transform: scale(1.2); }
  }
  
  @media (max-width: 1200px) {
    height: 250px;
    font-size: 4.2rem;
  }
  
  @media (max-width: 992px) {
    height: 230px;
    font-size: 4rem;
  }
  
  @media (max-width: 768px) {
    height: 210px;
    font-size: 3.5rem;
  }
  
  @media (max-width: 576px) {
    height: 190px;
    font-size: 3rem;
  }
`;

const MasterContent = styled.div`
  padding: 30px;
  
  @media (max-width: 1200px) {
    padding: 25px;
  }
  
  @media (max-width: 992px) {
    padding: 22px;
  }
  
  @media (max-width: 768px) {
    padding: 20px;
  }
  
  @media (max-width: 576px) {
    padding: 18px;
  }
`;

const MasterName = styled.h3`
  margin: 0 0 20px 0;
  color: white;
  font-size: 1.8rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 65px;
    height: 4px;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    border-radius: 2px;
    animation: expandLine 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both;
  }
  
  @keyframes expandLine {
    from { width: 0; opacity: 0; }
    to { width: 65px; opacity: 1; }
  }
  
  @media (max-width: 1200px) {
    font-size: 1.7rem;
  }
  
  @media (max-width: 992px) {
    font-size: 1.6rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.4rem;
    margin: 0 0 15px 0;
  }
`;

const MasterInfo = styled.div`
  margin-bottom: 20px;
  
  @media (max-width: 576px) {
    margin-bottom: 15px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  align-items: center;
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(106, 17, 203, 0.7), transparent);
    animation: expandLine 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s both;
  }
  
  &:last-child {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
    
    &::before {
      display: none;
    }
  }
  
  @keyframes expandLine {
    from { width: 0; opacity: 0; }
    to { width: 100%; opacity: 1; }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
    align-items: flex-start;
    margin-bottom: 12px;
    padding-bottom: 12px;
  }
  
  @media (max-width: 576px) {
    margin-bottom: 10px;
    padding-bottom: 10px;
  }
`;

const InfoLabel = styled.span`
  color: #d4c4fb;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.05rem;
  
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
    font-size: 0.85rem;
  }
`;

const InfoValue = styled.span`
  color: white;
  font-weight: 500;
  font-size: 1.05rem;
  
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
    font-size: 0.85rem;
  }
`;

const Specialization = styled.div`
  background: rgba(106, 17, 203, 0.4);
  padding: 10px 18px;
  border-radius: 25px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin: 6px 6px 0 0;
  font-size: 0.95rem;
  color: #e0e0ff;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(106, 17, 203, 0.3), rgba(37, 117, 252, 0.3));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover {
    background: rgba(106, 17, 203, 0.6);
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(37, 117, 252, 0.3);
    
    &::before {
      opacity: 1;
    }
  }
  
  @media (max-width: 1200px) {
    padding: 9px 16px;
    font-size: 0.9rem;
  }
  
  @media (max-width: 992px) {
    padding: 8px 15px;
    font-size: 0.85rem;
  }
  
  @media (max-width: 768px) {
    padding: 7px 14px;
    font-size: 0.8rem;
    margin: 4px 4px 0 0;
  }
  
  @media (max-width: 576px) {
    padding: 6px 12px;
    font-size: 0.75rem;
    margin: 4px 4px 0 0;
  }
`;

const Rating = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #FFD700;
  font-weight: 600;
  margin-top: 15px;
  
  @media (max-width: 576px) {
    margin-top: 12px;
    font-size: 0.9rem;
  }
`;

const Masters = () => {
  const [masters, setMasters] = useState([]);

  useEffect(() => {
    fetchMasters();
  }, []);

  const fetchMasters = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/masters');
      setMasters(response.data);
    } catch (error) {
      console.error('Error loading masters:', error);
    }
  };

  // Function to generate random rating between 4.0 and 5.0
  const generateRating = () => {
    return (Math.random() * 1 + 4).toFixed(1);
  };

  return (
    <MastersSection id="masters">
      <SectionTitle>Bizning barberlar</SectionTitle>
      <MastersGrid>
        {masters.map((master, index) => (
          <MasterCard key={master._id} style={{ animationDelay: `${index * 0.1}s` }}>
            <MasterImage>
              <FaUserTie />
            </MasterImage>
            <MasterContent>
              <MasterName>
                <FaUserTie /> {master.name}
              </MasterName>
              <MasterInfo>
                <InfoItem>
                  <InfoLabel>
                    <FaMedal /> Tajriba:
                  </InfoLabel>
                  <InfoValue>{master.experience} yil</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>
                    <FaPhone /> Telefon:
                  </InfoLabel>
                  <InfoValue>{master.phone}</InfoValue>
                </InfoItem>
                <InfoItem>
                  <InfoLabel>
                    <FaClock /> Ish vaqti:
                  </InfoLabel>
                  <InfoValue>{master.workingHours.start} - {master.workingHours.end}</InfoValue>
                </InfoItem>
              </MasterInfo>
              <div>
                <InfoLabel>Malakalar:</InfoLabel>
                <div>
                  {master.specialization.map((spec, index) => (
                    <Specialization key={index}>
                      <FaStar /> {spec}
                    </Specialization>
                  ))}
                </div>
              </div>
              <Rating>
                <FaStar /> {generateRating()}/5.0
              </Rating>
            </MasterContent>
          </MasterCard>
        ))}
      </MastersGrid>
    </MastersSection>
  );
};

export default Masters;