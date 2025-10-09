import React from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCar, FaParking, FaSchool, FaTelegram, FaInstagram, FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';

const ContactSection = styled.section`
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
  
  @keyframes twinkle {
    0% { opacity: 0.15; }
    100% { opacity: 0.35; }
  }
  
  @media (max-width: 768px) {
    padding: 80px 20px;
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
  
  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
  
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 45px;
  position: relative;
  z-index: 1;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 35px;
  }
  
  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const ContactInfo = styled.div`
  background: rgba(43, 30, 77, 0.85);
  border-radius: 25px;
  padding: 45px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 1;
  animation: fadeIn 0.7s cubic-bezier(0.4, 0, 0.2, 1);
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
    border-radius: 25px;
  }
  
  &:hover {
    transform: translateZ(0) translateY(-15px) rotateX(5deg);
    box-shadow: 0 30px 80px rgba(37, 117, 252, 0.6);
    background: rgba(43, 30, 77, 0.95);
    border: 1px solid rgba(106, 17, 203, 0.6);
    
    &::before {
      opacity: 1;
    }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateZ(0) translateY(30px); }
    to { opacity: 1; transform: translateZ(0) translateY(0); }
  }
  
  @media (max-width: 768px) {
    padding: 35px;
    border-radius: 20px;
  }
  
  @media (max-width: 480px) {
    padding: 25px;
  }
`;

const InfoTitle = styled.h3`
  color: white;
  margin-bottom: 30px;
  font-size: 2rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  position: relative;
  display: flex;
  align-items: center;
  gap: 15px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -12px;
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
  
  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1.6rem;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 30px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 12px;
  }
`;

const InfoIcon = styled.div`
  background: linear-gradient(45deg, #6a11cb, #2575fc);
  width: 55px;
  height: 55px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.4rem;
  margin-right: 20px;
  flex-shrink: 0;
  box-shadow: 0 6px 20px rgba(37, 117, 252, 0.4);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  transform: translateZ(0);
  transform-style: preserve-3d;
  
  &:hover {
    transform: translateZ(0) translateY(-8px) scale(1.1);
    box-shadow: 0 10px 30px rgba(37, 117, 252, 0.7);
  }
  
  &:active {
    transform: translateZ(0) translateY(-4px) scale(1.05);
  }
  
  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -60%;
    width: 25px;
    height: 200%;
    background: rgba(255, 255, 255, 0.4);
    transform: rotate(30deg);
    transition: all 0.8s;
  }
  
  &:hover::after {
    left: 120%;
  }
  
  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    font-size: 1.2rem;
  }
`;

const InfoContent = styled.div`
  flex: 1;
`;

const InfoLabel = styled.div`
  font-weight: 600;
  color: white;
  margin-bottom: 8px;
  font-size: 1.2rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 10px;
  
  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const InfoValue = styled.div`
  color: #d4c4fb;
  line-height: 1.7;
  font-size: 1.05rem;
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const MapContainer = styled.div`
  background: rgba(30, 20, 50, 0.7);
  border-radius: 20px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #d4c4fb;
  font-weight: 500;
  border: 1px solid rgba(106, 17, 203, 0.5);
  overflow: hidden;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  
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
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(37, 117, 252, 0.4);
    
    &::before {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    height: 300px;
  }
  
  @media (max-width: 480px) {
    height: 250px;
  }
`;

const MapIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 20px;
`;

const LocationInfo = styled.div`
  background: rgba(43, 30, 77, 0.7);
  border-radius: 20px;
  padding: 25px;
  margin-top: 25px;
  border: 1px solid rgba(106, 17, 203, 0.5);
  position: relative;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
  
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
  
  &:hover::before {
    opacity: 1;
  }
  
  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const LocationTitle = styled.h4`
  color: white;
  margin: 0 0 20px 0;
  font-size: 1.5rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 3px;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    border-radius: 1.5px;
    animation: expandLine 0.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both;
  }
  
  @keyframes expandLine {
    from { width: 0; opacity: 0; }
    to { width: 40px; opacity: 1; }
  }
  
  @media (max-width: 480px) {
    font-size: 1.3rem;
  }
`;

const LocationDetail = styled.p`
  color: #d4c4fb;
  margin: 15px 0;
  line-height: 1.7;
  display: flex;
  align-items: flex-start;
  font-size: 1.05rem;
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const LocationIcon = styled.span`
  margin-right: 12px;
  font-size: 1.3rem;
  color: #a0c4ff;
  min-width: 24px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 18px;
  margin-top: 25px;
  flex-wrap: wrap;
  
  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: linear-gradient(45deg, #6a11cb, #2575fc);
  color: white;
  text-decoration: none;
  font-size: 1.4rem;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 6px 20px rgba(37, 117, 252, 0.4);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-5px) rotate(10deg);
    box-shadow: 0 8px 25px rgba(37, 117, 252, 0.6);
    background: linear-gradient(45deg, #2575fc, #6a11cb);
  }
  
  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -60%;
    width: 25px;
    height: 200%;
    background: rgba(255, 255, 255, 0.4);
    transform: rotate(30deg);
    transition: all 0.8s;
  }
  
  &:hover::after {
    left: 120%;
  }
  
  @media (max-width: 480px) {
    width: 45px;
    height: 45px;
    font-size: 1.2rem;
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <SectionTitle><FaMapMarkerAlt /> Biz bilan bog'lanish</SectionTitle>
      <ContactContainer>
        <ContactInfo>
          <InfoTitle><FaPhone /> Aloqa ma'lumotlari</InfoTitle>
          
          <InfoItem>
            <InfoIcon>
              <FaMapMarkerAlt />
            </InfoIcon>
            <InfoContent>
              <InfoLabel><FaMapMarkerAlt /> Manzil</InfoLabel>
              <InfoValue>
                Gijduvon Tumani<br />
                Buxoro Viloyati<br />
                O'zbekiston
              </InfoValue>
            </InfoContent>
          </InfoItem>
          
          <InfoItem>
            <InfoIcon>
              <FaPhone />
            </InfoIcon>
            <InfoContent>
              <InfoLabel><FaPhone /> Telefon</InfoLabel>
              <InfoValue>+998 93 123 45 67</InfoValue>
            </InfoContent>
          </InfoItem>
          
          <InfoItem>
            <InfoIcon>
              <FaEnvelope />
            </InfoIcon>
            <InfoContent>
              <InfoLabel><FaEnvelope /> Elektron pochta</InfoLabel>
              <InfoValue>info@barbershop-buxara.uz</InfoValue>
            </InfoContent>
          </InfoItem>
          
          <InfoItem>
            <InfoIcon>
              <FaClock />
            </InfoIcon>
            <InfoContent>
              <InfoLabel><FaClock /> Ish vaqti</InfoLabel>
              <InfoValue>
                Dushanba - Shanba: 9:00 - 20:00<br />
                Yakshanba: 10:00 - 18:00
              </InfoValue>
            </InfoContent>
          </InfoItem>
          
          <InfoTitle style={{ marginTop: '20px' }}><FaTelegram /> Ijtimoiy tarmoqlar</InfoTitle>
          <InfoValue>
            Bizni ijtimoiy tarmoqlarda kuzatib boring va so'ngi yangiliklar va aksiya 
            xabarlaridan xabar topib turing.
          </InfoValue>
          
          <SocialLinks>
            <SocialLink href="#" aria-label="Telegram">
              <FaTelegram />
            </SocialLink>
            <SocialLink href="#" aria-label="Instagram">
              <FaInstagram />
            </SocialLink>
            <SocialLink href="#" aria-label="Facebook">
              <FaFacebook />
            </SocialLink>
            <SocialLink href="#" aria-label="Twitter">
              <FaTwitter />
            </SocialLink>
            <SocialLink href="#" aria-label="WhatsApp">
              <FaWhatsapp />
            </SocialLink>
          </SocialLinks>
        </ContactInfo>
        
        <ContactInfo>
          <InfoTitle><FaMapMarkerAlt /> Bizning manzilimiz</InfoTitle>
          <MapContainer>
            <MapIframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100000!2d64.5000!3d40.0000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b4c2d4a4d4a4d5%3A0x4d5a4d5a4d5a4d5a!2sGijduvon%20District%2C%20Bukhara%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s" 
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Barbershop Location"
            />
          </MapContainer>
          
          <LocationInfo>
            <LocationTitle><FaMapMarkerAlt /> Joylashuv tafsilotlari</LocationTitle>
            <LocationDetail>
              <LocationIcon>
                <FaMapMarkerAlt />
              </LocationIcon>
              <span>Gijduvon Tumani, Buxoro Viloyati, O'zbekiston</span>
            </LocationDetail>
            <LocationDetail>
              <LocationIcon>
                <FaSchool />
              </LocationIcon>
              <span>Yaqin atrofdagi belgilar va mahalliy ob'ektlar</span>
            </LocationDetail>
            <LocationDetail>
              <LocationIcon>
                <FaCar />
              </LocationIcon>
              <span>Buxorodan yo'l (taxminan 40km)</span>
            </LocationDetail>
            <LocationDetail>
              <LocationIcon>
                <FaParking />
              </LocationIcon>
              <span>Saytda bepul avtoturargoh mavjud</span>
            </LocationDetail>
          </LocationInfo>
        </ContactInfo>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;