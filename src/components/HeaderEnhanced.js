import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import { FaHome, FaInfoCircle, FaCut, FaUserTie, FaCalendarAlt, FaPhone, FaSignOutAlt } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background: rgba(43, 30, 77, 0.95);
  backdrop-filter: blur(20px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1.2rem 2.5rem;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid rgba(106, 17, 203, 0.6);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(90deg, transparent, rgba(106, 17, 203, 0.3), transparent);
    opacity: 0.4;
    pointer-events: none;
    z-index: -1;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(90deg, transparent, #6a11cb, #2575fc, transparent);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover::after {
    transform: scaleX(1);
  }
  
  /* Add prismatic effect */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(120deg, 
      rgba(106, 17, 203, 0.1) 0%, 
      rgba(37, 117, 252, 0.1) 25%, 
      rgba(255, 65, 108, 0.1) 50%, 
      rgba(255, 75, 43, 0.1) 75%, 
      rgba(106, 17, 203, 0.1) 100%);
    background-size: 300% 300%;
    opacity: 0.2;
    animation: prismaticShift 6s ease infinite;
    pointer-events: none;
    z-index: -1;
  }
  
  @keyframes prismaticShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
  
  @media (max-width: 768px) {
    padding: 1.2rem 1.5rem;
  }
`;

const HeaderContent = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #a0c4ff;
  cursor: pointer;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.4);
  background: linear-gradient(90deg, #fff, #a0c4ff, #d4c4fb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 0;
    height: 4px;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    border-radius: 2px;
  }
  
  &:hover {
    transform: scale(1.05);
    &::after {
      width: 100%;
    }
  }
  
  /* Add neon sign effect */
  text-shadow: 
    0 0 5px #fff,
    0 0 10px #fff,
    0 0 15px #6a11cb,
    0 0 20px #6a11cb,
    0 0 25px #6a11cb,
    0 0 30px #6a11cb,
    0 0 35px #6a11cb;
  animation: neonFlicker 1.5s ease-in-out infinite alternate;
  
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
  
  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2.2rem;
  
  @media (max-width: 992px) {
    gap: 1.7rem;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(Link)`
  color: #d4c4fb;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  padding: 0.8rem 1.4rem;
  border-radius: 35px;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 1.05rem;
  
  &:hover {
    color: #a0c4ff;
    background: rgba(106, 17, 203, 0.4);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(37, 117, 252, 0.4);
  }
  
  &.active {
    color: #a0c4ff;
    background: rgba(106, 17, 203, 0.4);
    box-shadow: 0 6px 20px rgba(37, 117, 252, 0.4);
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
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    transform: translateX(-50%);
  }
  
  &:hover::after {
    width: 85%;
  }
  
  @media (max-width: 992px) {
    padding: 0.7rem 1.2rem;
    font-size: 1rem;
  }
`;

const LogoutButton = styled.button`
  background: linear-gradient(45deg, #ff416c, #ff4b2b);
  color: white;
  border: none;
  padding: 0.8rem 1.7rem;
  border-radius: 35px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 6px 20px rgba(255, 65, 108, 0.5);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.05rem;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(255, 65, 108, 0.7);
    background: linear-gradient(45deg, #ff4b2b, #ff416c);
  }
  
  &:active {
    transform: translateY(-2px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(255, 65, 108, 0.3), rgba(255, 75, 43, 0.3));
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
    width: 25px;
    height: 200%;
    background: rgba(255, 255, 255, 0.4);
    transform: rotate(30deg);
    transition: all 0.8s;
  }
  
  &:hover::after {
    left: 120%;
  }
  
  @media (max-width: 992px) {
    padding: 0.7rem 1.4rem;
    font-size: 1rem;
  }
`;

const Header = ({ onLogout }) => {
  const handleLogout = () => {
    // Remove user type from localStorage
    localStorage.removeItem('userType');
    // Call the onLogout callback to update the parent state
    if (onLogout) {
      onLogout();
    }
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <FaCut /> BarberShop
        </Logo>
        
        <Nav>
          <NavItem to="hero" smooth={true} duration={500}>
            <FaHome /> Bosh sahifa
          </NavItem>
          <NavItem to="about" smooth={true} duration={500}>
            <FaInfoCircle /> Biz haqimizda
          </NavItem>
          <NavItem to="services" smooth={true} duration={500}>
            <FaCut /> Xizmatlar
          </NavItem>
          <NavItem to="masters" smooth={true} duration={500}>
            <FaUserTie /> Ustalar
          </NavItem>
          <NavItem to="booking" smooth={true} duration={500}>
            <FaCalendarAlt /> Bron qilish
          </NavItem>
          <NavItem to="contact" smooth={true} duration={500}>
            <FaPhone /> Aloqa
          </NavItem>
        </Nav>
        
        <LogoutButton onClick={handleLogout}>
          <FaSignOutAlt /> Chiqish
        </LogoutButton>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;