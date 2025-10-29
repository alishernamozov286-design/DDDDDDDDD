import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import {
  FaHome,
  FaInfoCircle,
  FaCut,
  FaUserTie,
  FaCalendarAlt,
  FaPhone,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from 'react-icons/fa';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, #0c1a33 0%, #1a2a4a 50%, #2c3e6b 100%);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid rgba(44, 62, 80, 0.6);
  transition: all 0.3s ease;

  &::before {
    content: '';
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
    opacity: 0.25;
    pointer-events: none;
    z-index: -1;
    animation: twinkle 3s infinite alternate;
  }

  @keyframes twinkle {
    0% { opacity: 0.15; }
    100% { opacity: 0.35; }
  }

  @media (max-width: 992px) {
    padding: 1rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
  }
  
  @media (max-width: 576px) {
    padding: 0.8rem 1rem;
  }
`;

const HeaderContent = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;

  @media (max-width: 768px) {
    flex-wrap: nowrap;
  }
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: white;
  cursor: pointer;
  background: linear-gradient(90deg, #fff, #fff, #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  white-space: nowrap;
  animation: fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    transform: scale(1.05);
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateX(-20px); }
    to { opacity: 1; transform: translateX(0); }
  }

  @media (max-width: 992px) {
    font-size: 1.8rem;
  }

  @media (max-width: 768px) {
    font-size: 1.7rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.5rem;
  }

  .hide-xs {
    display: block;
  }

  .hide-sm {
    display: none;
  }

  @media (max-width: 768px) {
    .hide-xs {
      display: none;
    }

    .hide-sm {
      display: block;
    }
  }

  svg {
    font-size: 1.6rem;
    vertical-align: middle;
    position: relative;
    top: -1px;
    color: white;
    animation: pulse 2s infinite;
    
    @keyframes pulse {
      0% { transform: scale(1); }
      50% { transform: scale(1.1); }
      100% { transform: scale(1); }
    }
    
    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
    
    @media (max-width: 576px) {
      font-size: 1.2rem;
    }
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 1.8rem;
  flex-wrap: nowrap;
  align-items: center;
  position: relative;

  /* Bottom border for the entire navbar */
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(44, 62, 80, 0.8), transparent);
    animation: expandLine 1s cubic-bezier(0.4, 0, 0.2, 1) 0.5s both;
  }
  
  @keyframes expandLine {
    from { width: 0; opacity: 0; }
    to { width: 100%; opacity: 1; }
  }

  @media (max-width: 1200px) {
    gap: 1.5rem;
  }

  @media (max-width: 992px) {
    gap: 1rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavItem = styled(Link)`
  color: #e0e0ff;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0.7rem 1.2rem;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 1.05rem;
  line-height: 1;
  white-space: nowrap;
  flex-shrink: 0;
  animation: fadeIn 1.2s cubic-bezier(0.4, 0, 0.2, 1);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(44, 62, 80, 0.2), rgba(52, 73, 94, 0.2));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
    pointer-events: none;
    border-radius: 30px;
  }

  svg {
    font-size: 1.1rem;
    vertical-align: middle;
    position: relative;
    top: -1px;
    transition: transform 0.3s ease;
    color: #e0e0ff;
  }

  &:hover {
    color: white;
    background: rgba(44, 62, 80, 0.4);
    transform: translateY(-2px);
    
    &::before {
      opacity: 1;
    }
  }

  &:hover svg {
    transform: scale(1.2);
    color: white;
  }

  &.active {
    color: white;
    background: rgba(44, 62, 80, 0.4);
  }

  /* White underline indicator for active and hover states */
  &.active::after,
  &:hover::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 5px;
    background: #ffffff;
    border-radius: 4px;
    animation: expandLine 0.4s cubic-bezier(0.4, 0, 0.2, 1) both;
  }
  
  @keyframes expandLine {
    from { width: 0; opacity: 0; }
    to { width: 60%; opacity: 1; }
  }

  @media (max-width: 1200px) {
    padding: 0.6rem 1rem;
    font-size: 1rem;
  }

  @media (max-width: 992px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.9rem;
  }
  
  @media (max-width: 850px) {
    padding: 0.5rem 0.7rem;
    font-size: 0.85rem;
    gap: 6px;
  }
  
  @media (max-width: 768px) {
    padding: 0.5rem 0.6rem;
    font-size: 0.8rem;
    gap: 5px;
  }
`;

// Yangi qizil rangli chiqish tugmasi
const LogoutButton = styled.button`
  background: linear-gradient(45deg, #ff416c, #ff4b2b);
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 65, 108, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 1rem;
  white-space: nowrap;
  flex-shrink: 0;
  animation: fadeIn 1.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
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

  svg {
    vertical-align: middle;
    position: relative;
    top: -1px;
    font-size: 0.9rem;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(255, 65, 108, 0.6);
    background: linear-gradient(45deg, #ff4b2b, #ff416c);
  }

  &:active {
    transform: translateY(-1px);
  }

  @media (max-width: 1200px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.95rem;
  }

  @media (max-width: 992px) {
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
  }
  
  @media (max-width: 850px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.85rem;
    gap: 6px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #87ceeb;
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 1001;
  padding: 0.5rem;
  animation: fadeIn 1.3s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    display: block;
  }
  
  @media (max-width: 576px) {
    font-size: 1.6rem;
    padding: 0.4rem;
  }
`;

const MobileMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    width: 80%;
    max-width: 300px;
    height: 100vh;
    background: linear-gradient(135deg, #0c1a33 0%, #1a2a4a 100%);
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.5);
    z-index: 1000;
    padding: 6rem 1.5rem 2rem;
    overflow-y: auto;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease;
    
    @media (max-width: 576px) {
      width: 90%;
      max-width: 280px;
    }
  }
`;

const MobileNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MobileNavItem = styled(Link)`
  color: #e0e0ff;
  text-decoration: none;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 1rem 1.5rem;
  border-radius: 30px;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-size: 1.2rem;
  line-height: 1;
  position: relative;
  animation: fadeIn 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(44, 62, 80, 0.2), rgba(52, 73, 94, 0.2));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
    pointer-events: none;
    border-radius: 30px;
  }

  svg {
    font-size: 1.3rem;
    vertical-align: middle;
    position: relative;
    top: -1px;
    color: #e0e0ff;
  }

  &:hover {
    color: white;
    background: rgba(44, 62, 80, 0.4);
    transform: translateX(5px);
    
    &::before {
      opacity: 1;
    }
  }

  &:hover svg {
    color: white;
  }

  &.active {
    color: white;
    background: rgba(44, 62, 80, 0.4);
  }

  /* White underline indicator for active and hover states */
  &.active::after,
  &:hover::after {
    content: '';
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60%;
    height: 3px;
    background: #ffffff;
    border-radius: 2px;
    animation: expandLine 0.4s cubic-bezier(0.4, 0, 0.2, 1) both;
  }
  
  @keyframes expandLine {
    from { width: 0; opacity: 0; }
    to { width: 60%; opacity: 1; }
  }
  
  @media (max-width: 576px) {
    padding: 0.8rem 1.2rem;
    font-size: 1.1rem;
    
    svg {
      font-size: 1.1rem;
    }
  }
`;

// Yangi qizil rangli mobil chiqish tugmasi
const MobileLogoutButton = styled.button`
  background: linear-gradient(45deg, #ff416c, #ff4b2b);
  color: white;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 65, 108, 0.4);
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 1.2rem;
  margin-top: 1rem;
  width: calc(100% - 3rem);
  position: relative;
  overflow: hidden;
  
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

  svg {
    position: relative;
    top: -1px;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(255, 65, 108, 0.6);
    background: linear-gradient(45deg, #ff4b2b, #ff416c);
  }

  &:active {
    transform: translateY(-1px);
  }
  
  @media (max-width: 576px) {
    padding: 0.8rem 1.2rem;
    font-size: 1.1rem;
    width: calc(100% - 2.4rem);
  }
`;

const Overlay = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
`;

// Neon effect container
const NeonEffect = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  overflow: hidden;
  border-radius: 10px;
  
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    left: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      from 0deg at 50% 50%,
      transparent,
      rgba(44, 62, 80, 0.3),
      transparent,
      rgba(52, 73, 94, 0.3),
      transparent
    );
    animation: neonRotate 4s linear infinite;
    opacity: 0.5;
  }
  
  @keyframes neonRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Header = ({ onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('userType');
    if (onLogout) onLogout();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) setIsMenuOpen(false);
    };
    if (isMenuOpen) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [isMenuOpen]);

  return (
    <HeaderContainer>
      <NeonEffect />
      <HeaderContent>
        <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <FaCut />
          <span className="hide-xs">BarberShop</span>
          <span className="hide-sm">BS</span>
        </Logo>

        <Nav>
          <NavItem to="hero" smooth duration={500} spy activeClass="active">
            <FaHome /> Bosh sahifa
          </NavItem>
          <NavItem to="about" smooth duration={500} spy activeClass="active">
            <FaInfoCircle /> Biz haqimizda
          </NavItem>
          <NavItem to="services" smooth duration={500} spy activeClass="active">
            <FaCut /> Xizmatlar
          </NavItem>
          <NavItem to="masters" smooth duration={500} spy activeClass="active">
            <FaUserTie /> Ustalar
          </NavItem>
          <NavItem to="booking" smooth duration={500} spy activeClass="active">
            <FaCalendarAlt /> Bron qilish
          </NavItem>
          <NavItem to="contact" smooth duration={500} spy activeClass="active">
            <FaPhone /> Aloqa
          </NavItem>
        </Nav>

        <LogoutButton onClick={handleLogout}>
          <FaSignOutAlt /> Chiqish
        </LogoutButton>

        <MobileMenuButton onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MobileMenuButton>

        <MobileMenu isOpen={isMenuOpen}>
          <MobileNav>
            <MobileNavItem to="hero" smooth duration={500} onClick={closeMenu} spy activeClass="active">
              <FaHome /> Bosh sahifa
            </MobileNavItem>
            <MobileNavItem to="about" smooth duration={500} onClick={closeMenu} spy activeClass="active">
              <FaInfoCircle /> Biz haqimizda
            </MobileNavItem>
            <MobileNavItem to="services" smooth duration={500} onClick={closeMenu} spy activeClass="active">
              <FaCut /> Xizmatlar
            </MobileNavItem>
            <MobileNavItem to="masters" smooth duration={500} onClick={closeMenu} spy activeClass="active">
              <FaUserTie /> Ustalar
            </MobileNavItem>
            <MobileNavItem to="booking" smooth duration={500} onClick={closeMenu} spy activeClass="active">
              <FaCalendarAlt /> Bron qilish
            </MobileNavItem>
            <MobileNavItem to="contact" smooth duration={500} onClick={closeMenu} spy activeClass="active">
              <FaPhone /> Aloqa
            </MobileNavItem>
            <MobileLogoutButton
              onClick={() => {
                handleLogout();
                closeMenu();
              }}
            >
              <FaSignOutAlt /> Chiqish
            </MobileLogoutButton>
          </MobileNav>
        </MobileMenu>

        <Overlay isOpen={isMenuOpen} onClick={closeMenu} />
      </HeaderContent>
    </HeaderContainer>
  );
};

export default Header;