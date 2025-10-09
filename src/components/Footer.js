import React from 'react';
import styled from 'styled-components';
import { FaTelegram, FaInstagram, FaFacebook } from 'react-icons/fa';

const FooterSection = styled.footer`
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  color: white;
  padding: 60px 20px 30px;
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
      radial-gradient(3px 3px at 20px 30px, #fff, transparent),
      radial-gradient(2px 2px at 40px 70px, rgba(255, 255, 255, 0.8), transparent),
      radial-gradient(1px 1px at 90px 40px, #fff, transparent),
      radial-gradient(2px 2px at 130px 80px, rgba(255, 255, 255, 0.6), transparent),
      radial-gradient(3px 3px at 160px 30px, #fff, transparent);
    background-repeat: repeat;
    background-size: 200px 100px;
    opacity: 0.2;
    pointer-events: none;
    animation: twinkle 3s infinite alternate;
  }
  
  @keyframes twinkle {
    0% { opacity: 0.1; }
    100% { opacity: 0.3; }
  }
  
  @media (max-width: 1200px) {
    padding: 50px 20px 25px;
  }
  
  @media (max-width: 992px) {
    padding: 45px 20px 22px;
  }
  
  @media (max-width: 768px) {
    padding: 40px 20px 20px;
  }
  
  @media (max-width: 576px) {
    padding: 30px 15px 15px;
  }
`;

const FooterContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 35px;
  }
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: 25px;
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const FooterColumn = styled.div`
  margin-bottom: 30px;
  animation: fadeIn 0.5s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
  
  @media (max-width: 576px) {
    margin-bottom: 20px;
  }
`;

const FooterLogo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 20px;
  background: linear-gradient(90deg, #fff, #a0c4ff, #d4c4fb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    transform: scale(1.05);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
  
  @media (max-width: 1200px) {
    font-size: 1.7rem;
    margin-bottom: 18px;
  }
  
  @media (max-width: 992px) {
    font-size: 1.6rem;
    margin-bottom: 16px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 15px;
  }
  
  @media (max-width: 576px) {
    font-size: 1.4rem;
    margin-bottom: 12px;
  }
`;

const FooterText = styled.p`
  color: #d4c4fb;
  line-height: 1.6;
  margin-bottom: 20px;
  
  @media (max-width: 1200px) {
    font-size: 0.95rem;
    margin-bottom: 18px;
  }
  
  @media (max-width: 992px) {
    font-size: 0.9rem;
    margin-bottom: 16px;
  }
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 15px;
  }
  
  @media (max-width: 576px) {
    font-size: 0.8rem;
    margin-bottom: 12px;
  }
`;

const FooterHeading = styled.h3`
  color: white;
  margin-bottom: 20px;
  font-size: 1.3rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 30px;
    height: 2px;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    border-radius: 1px;
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 50px;
  }
  
  @media (max-width: 1200px) {
    font-size: 1.2rem;
    margin-bottom: 18px;
  }
  
  @media (max-width: 992px) {
    font-size: 1.1rem;
    margin-bottom: 16px;
  }
  
  @media (max-width: 768px) {
    font-size: 1.05rem;
    margin-bottom: 15px;
  }
  
  @media (max-width: 576px) {
    font-size: 1rem;
    margin-bottom: 12px;
  }
`;

const FooterLink = styled.a`
  display: block;
  color: #d4c4fb;
  text-decoration: none;
  margin-bottom: 12px;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    color: white;
    transform: translateX(5px);
  }
  
  &::before {
    content: "»";
    position: absolute;
    left: -15px;
    opacity: 0;
    transition: all 0.3s ease;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  @media (max-width: 1200px) {
    font-size: 0.95rem;
    margin-bottom: 10px;
  }
  
  @media (max-width: 992px) {
    font-size: 0.9rem;
    margin-bottom: 9px;
  }
  
  @media (max-width: 768px) {
    font-size: 0.85rem;
    margin-bottom: 8px;
  }
  
  @media (max-width: 576px) {
    font-size: 0.8rem;
    margin-bottom: 6px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  
  @media (max-width: 1200px) {
    gap: 13px;
    margin-top: 18px;
  }
  
  @media (max-width: 992px) {
    gap: 12px;
    margin-top: 16px;
  }
  
  @media (max-width: 768px) {
    gap: 10px;
    margin-top: 15px;
  }
  
  @media (max-width: 576px) {
    gap: 8px;
    margin-top: 12px;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(106, 17, 203, 0.3);
  color: white;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  transform-style: preserve-3d;
  
  &:hover {
    background: linear-gradient(45deg, #6a11cb, #2575fc);
    transform: translateZ(0) translateY(-6px) scale(1.15);
    box-shadow: 0 6px 20px rgba(37, 117, 252, 0.4);
  }
  
  &:active {
    transform: translateZ(0) translateY(-3px) scale(1.1);
  }
  
  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -60%;
    width: 20px;
    height: 200%;
    background: rgba(255, 255, 255, 0.3);
    transform: rotate(30deg);
    transition: all 0.6s;
  }
  
  &:hover::after {
    left: 120%;
  }
  
  @media (max-width: 1200px) {
    width: 38px;
    height: 38px;
    font-size: 1.05rem;
  }
  
  @media (max-width: 992px) {
    width: 36px;
    height: 36px;
    font-size: 1rem;
  }
  
  @media (max-width: 768px) {
    width: 34px;
    height: 34px;
    font-size: 0.95rem;
  }
  
  @media (max-width: 576px) {
    width: 32px;
    height: 32px;
    font-size: 0.9rem;
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding-top: 30px;
  margin-top: 30px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(212, 196, 251, 0.6);
  font-size: 0.9rem;
  position: relative;
  z-index: 1;
  animation: fadeIn 1s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 1px;
    background: linear-gradient(90deg, transparent, #6a11cb, #2575fc, transparent);
    transition: width 0.5s ease;
  }
  
  &:hover::before {
    width: 100px;
  }
  
  @media (max-width: 1200px) {
    padding-top: 25px;
    margin-top: 25px;
    font-size: 0.85rem;
  }
  
  @media (max-width: 992px) {
    padding-top: 22px;
    margin-top: 22px;
    font-size: 0.8rem;
  }
  
  @media (max-width: 768px) {
    padding-top: 20px;
    margin-top: 20px;
    font-size: 0.75rem;
  }
  
  @media (max-width: 576px) {
    padding-top: 15px;
    margin-top: 15px;
    font-size: 0.7rem;
  }
`;

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <FooterColumn>
          <FooterLogo>BarberShop</FooterLogo>
          <FooterText>
            Professional barbershop services. 
            Making you look stylish and feel confident is our goal.
          </FooterText>
          <SocialLinks>
            <SocialLink href="https://t.me/barbershop" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
              <FaTelegram />
            </SocialLink>
            <SocialLink href="https://instagram.com/barbershop" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="https://facebook.com/barbershop" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebook />
            </SocialLink>
          </SocialLinks>
        </FooterColumn>
        
        <FooterColumn>
          <FooterHeading>Services</FooterHeading>
          <FooterLink href="#services">Haircut</FooterLink>
          <FooterLink href="#services">Beard Trim</FooterLink>
          <FooterLink href="#services">Facial Care</FooterLink>
          <FooterLink href="#services">Head Massage</FooterLink>
          <FooterLink href="#services">Styling</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterHeading>Information</FooterHeading>
          <FooterLink href="#about">About Us</FooterLink>
          <FooterLink href="#masters">Our Barbers</FooterLink>
          <FooterLink href="#booking">Book Appointment</FooterLink>
          <FooterLink href="#contact">Contact</FooterLink>
        </FooterColumn>
        
        <FooterColumn>
          <FooterHeading>Contact</FooterHeading>
          <FooterText>
            <strong>Address:</strong><br />
            Gijduvon District<br />
            Bukhara Region, Uzbekistan
          </FooterText>
          <FooterText>
            <strong>Phone:</strong><br />
            +998 93 123 45 67
          </FooterText>
          <FooterText>
            <strong>Email:</strong><br />
            info@barbershop-buxara.uz
          </FooterText>
          <FooterText>
            <strong>Working Hours:</strong><br />
            Monday - Saturday: 9:00 AM - 8:00 PM<br />
            Sunday: 10:00 AM - 6:00 PM
          </FooterText>
        </FooterColumn>
      </FooterContainer>
      
      <Copyright>
        © {new Date().getFullYear()} BarberShop. All rights reserved.
      </Copyright>
    </FooterSection>
  );
};

export default Footer;