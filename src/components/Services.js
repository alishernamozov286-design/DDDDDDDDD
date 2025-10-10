import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaCut, FaSoap, FaMagic } from 'react-icons/fa';

// We'll use a different icon for beard and face since some icons don't exist in react-icons/fa
import { GiBeard, GiFaceToFace } from 'react-icons/gi';

const ServicesSection = styled.section`
  padding: 120px 20px;
  background: linear-gradient(135deg, #0d0f3d 0%, #2c1a4d 50%, #5a2d82 100%);
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
  text-shadow: 0 4px 15px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 1;
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

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 35px;
  max-width: 1300px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
  }
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 25px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
    gap: 25px;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ServiceCard = styled.div`
  background: rgba(43, 30, 77, 0.85);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  flex-direction: column;
  height: 100%;
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
  
  /* Add cyber glow effect */
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 22px;
    background: linear-gradient(45deg, #6a11cb, #2575fc);
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -2;
    blur: 10px;
  }
  
  &:hover {
    transform: translateZ(0) translateY(-20px) rotateX(5deg);
    box-shadow: 0 25px 60px rgba(37, 117, 252, 0.6);
    background: rgba(43, 30, 77, 0.95);
    border: 1px solid rgba(106, 17, 203, 0.6);
    
    &::before {
      opacity: 1;
    }
    
    /* Activate cyber glow on hover */
    &::after {
      opacity: 0.7;
      box-shadow: 0 0 20px rgba(106, 17, 203, 0.7), 0 0 40px rgba(37, 117, 252, 0.5);
    }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateZ(0) translateY(30px); }
    to { opacity: 1; transform: translateZ(0) translateY(0); }
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

const ServiceImage = styled.div`
  height: 220px;
  background: linear-gradient(45deg, #6a11cb, #2575fc);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 3.5rem;
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  
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
  
  /* Add holographic effect */
  background: linear-gradient(45deg, #6a11cb, #2575fc);
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
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, 
      transparent 0%, 
      rgba(255, 255, 255, 0.1) 50%, 
      transparent 100%);
    background-size: 200% 100%;
    animation: holographicScan 2s linear infinite;
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
  
  /* Holographic scan animation */
  @keyframes holographicScan {
    0% { background-position: -100% 0; }
    100% { background-position: 100% 0; }
  }
  
  @media (max-width: 1200px) {
    height: 200px;
    font-size: 3.2rem;
  }
  
  @media (max-width: 992px) {
    height: 180px;
    font-size: 3rem;
  }
  
  @media (max-width: 768px) {
    height: 170px;
    font-size: 2.8rem;
  }
  
  @media (max-width: 576px) {
    height: 160px;
    font-size: 2.5rem;
  }
`;

// New styled component for actual service images
const ServiceActualImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
  
  @media (max-width: 1200px) {
    border-radius: 18px 18px 0 0;
  }
  
  @media (max-width: 992px) {
    border-radius: 16px 16px 0 0;
  }
  
  @media (max-width: 576px) {
    border-radius: 15px 15px 0 0;
  }
`;

const ServiceContent = styled.div`
  padding: 30px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  
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

const ServiceName = styled.h3`
  margin: 0 0 18px 0;
  color: white;
  font-size: 1.7rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    border-radius: 2px;
    animation: expandLine 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both;
  }
  
  @keyframes expandLine {
    from { width: 0; opacity: 0; }
    to { width: 60px; opacity: 1; }
  }
  
  @media (max-width: 1200px) {
    font-size: 1.6rem;
  }
  
  @media (max-width: 992px) {
    font-size: 1.5rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.3rem;
    margin: 0 0 15px 0;
  }
`;

const ServiceDescription = styled.p`
  color: #d4c4fb;
  margin: 0 0 25px 0;
  flex-grow: 1;
  line-height: 1.7;
  font-size: 1.05rem;
  
  @media (max-width: 1200px) {
    font-size: 1rem;
  }
  
  @media (max-width: 992px) {
    font-size: 0.95rem;
  }
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin: 0 0 20px 0;
  }
  
  @media (max-width: 576px) {
    font-size: 0.85rem;
  }
`;

const ServicePrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(106, 17, 203, 0.7), transparent);
    animation: expandLine 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.5s both;
  }
  
  @keyframes expandLine {
    from { width: 0; opacity: 0; }
    to { width: 100%; opacity: 1; }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    padding-top: 15px;
  }
  
  @media (max-width: 576px) {
    gap: 10px;
    padding-top: 12px;
  }
`;

const Price = styled.span`
  font-weight: bold;
  color: #a0c4ff;
  font-size: 1.4rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  
  @media (max-width: 1200px) {
    font-size: 1.3rem;
  }
  
  @media (max-width: 992px) {
    font-size: 1.2rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const Duration = styled.span`
  background: rgba(106, 17, 203, 0.4);
  padding: 8px 16px;
  border-radius: 25px;
  font-size: 1rem;
  color: #e0e0ff;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  
  &:hover {
    background: rgba(106, 17, 203, 0.6);
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(37, 117, 252, 0.3);
  }
  
  @media (max-width: 1200px) {
    padding: 7px 15px;
    font-size: 0.95rem;
  }
  
  @media (max-width: 992px) {
    padding: 6px 14px;
    font-size: 0.9rem;
  }
  
  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 0.85rem;
  }
  
  @media (max-width: 576px) {
    padding: 5px 10px;
    font-size: 0.8rem;
  }
`;

// Function to get appropriate icon based on service name
const getServiceIcon = (serviceName) => {
  const name = serviceName.toLowerCase();
  if (name.includes('soch') || name.includes('hair')) {
    return <FaCut />;
  } else if (name.includes('soqol') || name.includes('beard')) {
    return <GiBeard />;
  } else if (name.includes('yuz') || name.includes('face')) {
    return <GiFaceToFace />;
  } else if (name.includes('moy') || name.includes('oil')) {
    return <FaSoap />;
  } else {
    return <FaMagic />;
  }
};

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('https://backend-1-1kq5.onrender.com/api/services');
      setServices(response.data);
    } catch (error) {
      console.error('Error loading services:', error);
    }
  };

  return (
    <ServicesSection id="services">
      <SectionTitle>Bizning xizmatlar</SectionTitle>
      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard key={service._id} style={{ animationDelay: `${index * 0.1}s` }}>
            {/* Display actual image if available, otherwise show icon */}
            {service.image ? (
              <ServiceActualImage src={service.image} alt={service.name} />
            ) : (
              <ServiceImage>
                {getServiceIcon(service.name)}
              </ServiceImage>
            )}
            <ServiceContent>
              <ServiceName>{service.name}</ServiceName>
              <ServiceDescription>{service.description}</ServiceDescription>
              <ServicePrice>
                <Price>{service.price.toLocaleString()} UZS</Price>
                <Duration>{service.duration} daqiqa</Duration>
              </ServicePrice>
            </ServiceContent>
          </ServiceCard>
        ))}
      </ServicesGrid>
    </ServicesSection>
  );
};

export default Services;