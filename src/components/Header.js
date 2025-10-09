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
  background: linear-gradient(135deg, #0d0f3d 0%, #2c1a4d 50%, #5a2d82 100%);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid rgba(106, 17, 203, 0.6);
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
    opacity: 0.2;
    pointer-events: none;
    z-index: -1;
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

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

const Logo = styled.div`
  font-size: 2rem;
  font-weight: 800;
  color: #a0c4ff;
  cursor: pointer;
  background: linear-gradient(90deg, #fff, #a0c4ff, #d4c4fb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover {
    transform: scale(1.05);
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

  @media (max-width: 1200px) {
    gap: 1.5rem;
  }

  @media (max-width: 992px) {
    gap: 1.2rem;
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

  svg {
    font-size: 1.1rem;
    vertical-align: middle;
    position: relative;
    top: -1px;
    transition: transform 0.3s ease;
  }

  &:hover {
    color: #a0c4ff;
    background: rgba(106, 17, 203, 0.4);
    transform: translateY(-2px);
  }

  &:hover svg {
    transform: scale(1.2);
  }

  &.active {
    color: #a0c4ff;
    background: rgba(106, 17, 203, 0.4);
  }

  @media (max-width: 1200px) {
    padding: 0.6rem 1rem;
    font-size: 1rem;
  }

  @media (max-width: 992px) {
    padding: 0.5rem 0.8rem;
    font-size: 0.95rem;
  }
`;

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

  svg {
    vertical-align: middle;
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

  @media (max-width: 992px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.95rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #d4c4fb;
  font-size: 1.8rem;
  cursor: pointer;
  z-index: 1001;
  padding: 0.5rem;

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
    background: linear-gradient(135deg, #0d0f3d 0%, #2c1a4d 100%);
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
  color: #d4c4fb;
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

  svg {
    font-size: 1.3rem;
    vertical-align: middle;
    position: relative;
    top: -1px;
  }

  &:hover {
    color: #a0c4ff;
    background: rgba(106, 17, 203, 0.4);
    transform: translateX(5px);
  }

  &.active {
    color: #a0c4ff;
    background: rgba(106, 17, 203, 0.4);
  }
  
  @media (max-width: 576px) {
    padding: 0.8rem 1.2rem;
    font-size: 1.1rem;
    
    svg {
      font-size: 1.1rem;
    }
  }
`;

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
      <HeaderContent>
        <Logo onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <FaCut />
          <span className="hide-xs">BarberShop</span>
          <span className="hide-sm">BS</span>
        </Logo>

        <Nav>
          <NavItem to="hero" smooth duration={500}>
            <FaHome /> Bosh sahifa
          </NavItem>
          <NavItem to="about" smooth duration={500}>
            <FaInfoCircle /> Biz haqimizda
          </NavItem>
          <NavItem to="services" smooth duration={500}>
            <FaCut /> Xizmatlar
          </NavItem>
          <NavItem to="masters" smooth duration={500}>
            <FaUserTie /> Ustalar
          </NavItem>
          <NavItem to="booking" smooth duration={500}>
            <FaCalendarAlt /> Bron qilish
          </NavItem>
          <NavItem to="contact" smooth duration={500}>
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
            <MobileNavItem to="hero" smooth duration={500} onClick={closeMenu}>
              <FaHome /> Bosh sahifa
            </MobileNavItem>
            <MobileNavItem to="about" smooth duration={500} onClick={closeMenu}>
              <FaInfoCircle /> Biz haqimizda
            </MobileNavItem>
            <MobileNavItem to="services" smooth duration={500} onClick={closeMenu}>
              <FaCut /> Xizmatlar
            </MobileNavItem>
            <MobileNavItem to="masters" smooth duration={500} onClick={closeMenu}>
              <FaUserTie /> Ustalar
            </MobileNavItem>
            <MobileNavItem to="booking" smooth duration={500} onClick={closeMenu}>
              <FaCalendarAlt /> Bron qilish
            </MobileNavItem>
            <MobileNavItem to="contact" smooth duration={500} onClick={closeMenu}>
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
