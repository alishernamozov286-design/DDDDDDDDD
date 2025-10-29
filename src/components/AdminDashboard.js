import React, { useState } from 'react';
import styled from 'styled-components';
import MasterManagement from './MasterManagement';
import ServiceManagement from './ServiceManagement';
import BookingManagement from './BookingManagement';

const DashboardContainer = styled.div`
  padding: 20px;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  min-height: 100vh;
  padding-top: 80px;
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
    opacity: 0.4;
    pointer-events: none;
    animation: twinkle 3s infinite alternate;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(106, 17, 203, 0.1), rgba(37, 117, 252, 0.1));
    opacity: 0.3;
    pointer-events: none;
    z-index: 0;
  }

  @keyframes twinkle {
    0% { opacity: 0.3; }
    100% { opacity: 0.5; }
  }
`;

const DashboardHeader = styled.div`
  background: rgba(43, 30, 77, 0.7);
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 15px 50px rgba(37, 117, 252, 0.3);
  margin-bottom: 30px;
  text-align: center;
  position: relative;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(106, 17, 203, 0.3);
  animation: fadeIn 0.5s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(106, 17, 203, 0.1), rgba(37, 117, 252, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
    pointer-events: none;
    border-radius: 15px;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const Title = styled.h1`
  color: white;
  margin: 0;
  font-size: 2.5rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  background: linear-gradient(90deg, #fff, #a0c4ff, #d4c4fb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  letter-spacing: 1px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    border-radius: 2px;
    animation: expandLine 1s ease 0.5s both;
  }
  
  @keyframes expandLine {
    from { width: 0; opacity: 0; }
    to { width: 100px; opacity: 1; }
  }
`;

const Subtitle = styled.p`
  color: #d4c4fb;
  margin: 10px 0 0 0;
  font-size: 1.2rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  padding: 0 20px;
  
  &::before {
    content: '';
    position: absolute;
    top: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    animation: expandLine 1s ease 0.7s both;
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    animation: expandLine 1s ease 0.7s both;
  }
  
  @keyframes expandLine {
    from { width: 0; opacity: 0; }
    to { width: 50px; opacity: 1; }
  }
`;

const LogoutButton = styled.button`
  position: absolute;
  top: 25px;
  right: 25px;
  background: linear-gradient(45deg, #ff416c, #ff4b2b);
  color: white;
  border: none;
  padding: 12px 20px;
  border-radius: 30px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(255, 65, 108, 0.4);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(255, 65, 108, 0.6);
    background: linear-gradient(45deg, #ff4b2b, #ff416c);
  }
  
  &:active {
    transform: translateY(0);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(255, 65, 108, 0.2), rgba(255, 75, 43, 0.2));
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
`;

const NavigationTabs = styled.div`
  display: flex;
  background: rgba(43, 30, 77, 0.7);
  border-radius: 15px;
  padding: 10px;
  box-shadow: 0 15px 50px rgba(37, 117, 252, 0.3);
  margin-bottom: 30px;
  overflow-x: auto;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(106, 17, 203, 0.3);
  position: relative;
  z-index: 1;
  animation: fadeIn 0.5s ease 0.2s both;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(106, 17, 203, 0.1), rgba(37, 117, 252, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
    pointer-events: none;
    border-radius: 15px;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const TabButton = styled.button`
  flex: 1;
  padding: 18px 25px;
  border: none;
  background: ${props => props.active 
    ? 'linear-gradient(45deg, #6a11cb, #2575fc)' 
    : 'transparent'};
  color: ${props => props.active ? 'white' : '#d4c4fb'};
  cursor: pointer;
  border-radius: 10px;
  margin: 0 5px;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 1.1rem;
  position: relative;
  overflow: hidden;
  
  &:hover {
    background: ${props => props.active 
      ? 'linear-gradient(45deg, #2575fc, #6a11cb)' 
      : 'rgba(106, 17, 203, 0.3)'};
    color: white;
    transform: translateY(-2px);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(106, 17, 203, 0.2), rgba(37, 117, 252, 0.2));
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
  
  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;

const ContentArea = styled.div`
  background: rgba(43, 30, 77, 0.7);
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 15px 50px rgba(37, 117, 252, 0.3);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(106, 17, 203, 0.3);
  position: relative;
  z-index: 1;
  animation: fadeIn 0.5s ease 0.4s both;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(106, 17, 203, 0.1), rgba(37, 117, 252, 0.1));
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
    pointer-events: none;
    border-radius: 15px;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const AdminDashboard = ({ onLogout, userType }) => {
  // For workers, default to bookings tab
  const defaultTab = userType === 'worker' ? 'bookings' : 'masters';
  const [activeTab, setActiveTab] = useState(defaultTab);

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

  const renderContent = () => {
    switch (activeTab) {
      case 'services':
        return <ServiceManagement />;
      case 'bookings':
        return <BookingManagement />;
      case 'masters':
      default:
        return <MasterManagement />;
    }
  };

  // For workers, only show bookings tab
  const isWorker = userType === 'worker';

  return (
    <DashboardContainer>
      <DashboardHeader>
        <Title>{isWorker ? 'Worker Panel' : 'Administrator Panel'}</Title>
        <Subtitle>{isWorker ? 'Booking Management' : 'Barbershop Management System'}</Subtitle>

        <LogoutButton onClick={handleLogout}>
          Logout
        </LogoutButton>
      </DashboardHeader>
      
      <NavigationTabs>
        {!isWorker && (
          <>
            <TabButton 
              active={activeTab === 'masters'} 
              onClick={() => setActiveTab('masters')}
            >
              Master Management
            </TabButton>
            <TabButton 
              active={activeTab === 'services'} 
              onClick={() => setActiveTab('services')}
            >
              Service Management
            </TabButton>
          </>
          
        )}
        <TabButton 
          active={activeTab === 'bookings'} 
          onClick={() => setActiveTab('bookings')}
        >
          Booking Management
        </TabButton>
      </NavigationTabs>
      
      <ContentArea>
        {renderContent()}
      </ContentArea>
    </DashboardContainer>
  );
};

export default AdminDashboard;