import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Masters from './components/Masters';
import BookingForm from './components/BookingForm';
// Removed unused BookingList import
import About from './components/About';
import Contact from './components/Contact';
import WelcomePage from './components/WelcomePage';
import AdminDashboard from './components/AdminDashboard';
// import ResponsiveDemo from './components/ResponsiveDemo';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color: #f5f5f5;
  color: #333;
  transition: background-color 0.3s ease, color 0.3s ease;
  
  @media (max-width: 768px) {
    min-height: 95vh;
  }
  
  @media (max-width: 576px) {
    min-height: 90vh;
  }
`;

const SectionWrapper = styled.div`
  min-height: 100vh;
  
  @media (max-width: 768px) {
    min-height: 90vh;
  }
  
  @media (max-width: 576px) {
    min-height: 85vh;
  }
`;

const Alert = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
  padding: 15px;
  border-radius: 4px;
  z-index: 10000;
  animation: fadeIn 0.3s ease, fadeOut 0.3s ease 2.7s forwards;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @keyframes fadeOut {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(-10px); }
  }
  
  @media (max-width: 768px) {
    top: 15px;
    right: 15px;
    padding: 12px;
    font-size: 0.9rem;
  }
  
  @media (max-width: 576px) {
    top: 10px;
    right: 10px;
    padding: 10px;
    font-size: 0.8rem;
  }
`;

// Create a component that handles navigation
const AppContent = ({ userType, setUserType, showLoginAlert, handleUserTypeSelect }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserType(null);
    // Remove user type from localStorage
    localStorage.removeItem('userType');
    // Navigate to the home page (welcome page)
    navigate('/');
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // For single page scroll, we'll show all sections on the main route
  return (
    <>
      {userType && userType !== 'admin' && userType !== 'worker' && <Header onLogout={handleLogout} />}
      <Routes>
        <Route 
          path="/" 
          element={
            userType ? (
              (userType === 'admin' || userType === 'worker') ? (
                <AdminDashboard onLogout={handleLogout} userType={userType} />
              ) : (
                // Single page scroll with all sections
                <div>
                  <SectionWrapper id="hero">
                    <Hero />
                  </SectionWrapper>
                  <SectionWrapper id="about">
                    <About />
                  </SectionWrapper>
                  <SectionWrapper id="services">
                    <Services />
                  </SectionWrapper>
                  <SectionWrapper id="masters">
                    <Masters />
                  </SectionWrapper>
                  <SectionWrapper id="booking">
                    <BookingForm />
                  </SectionWrapper>
                  <SectionWrapper id="contact">
                    <Contact />
                  </SectionWrapper>
                </div>
              )
            ) : (
              // Show welcome page if not logged in
              <WelcomePage onUserTypeSelect={handleUserTypeSelect} showLoginAlert={showLoginAlert} />
            )
          } 
        />
        <Route 
          path="/admin" 
          element={<AdminDashboard onLogout={handleLogout} userType={userType} />} 
        />
        {userType && userType !== 'admin' && userType !== 'worker' && (
          <>
            {/* Keep individual routes for direct access, but they'll redirect to home */}
            <Route path="/services" element={
              <div>
                <SectionWrapper id="hero">
                  <Hero />
                </SectionWrapper>
                <SectionWrapper id="about">
                  <About />
                </SectionWrapper>
                <SectionWrapper id="services">
                  <Services />
                </SectionWrapper>
                <SectionWrapper id="masters">
                  <Masters />
                </SectionWrapper>
                <SectionWrapper id="booking">
                  <BookingForm />
                </SectionWrapper>
                <SectionWrapper id="contact">
                  <Contact />
                </SectionWrapper>
              </div>
            } />
            <Route path="/masters" element={
              <div>
                <SectionWrapper id="hero">
                  <Hero />
                </SectionWrapper>
                <SectionWrapper id="about">
                  <About />
                </SectionWrapper>
                <SectionWrapper id="services">
                  <Services />
                </SectionWrapper>
                <SectionWrapper id="masters">
                  <Masters />
                </SectionWrapper>
                <SectionWrapper id="booking">
                  <BookingForm />
                </SectionWrapper>
                <SectionWrapper id="contact">
                  <Contact />
                </SectionWrapper>
              </div>
            } />
            <Route path="/booking" element={
              <div>
                <SectionWrapper id="hero">
                  <Hero />
                </SectionWrapper>
                <SectionWrapper id="about">
                  <About />
                </SectionWrapper>
                <SectionWrapper id="services">
                  <Services />
                </SectionWrapper>
                <SectionWrapper id="masters">
                  <Masters />
                </SectionWrapper>
                <SectionWrapper id="booking">
                  <BookingForm />
                </SectionWrapper>
                <SectionWrapper id="contact">
                  <Contact />
                </SectionWrapper>
              </div>
            } />
            <Route path="/bookings" element={
              <div>
                <SectionWrapper id="hero">
                  <Hero />
                </SectionWrapper>
                <SectionWrapper id="about">
                  <About />
                </SectionWrapper>
                <SectionWrapper id="services">
                  <Services />
                </SectionWrapper>
                <SectionWrapper id="masters">
                  <Masters />
                </SectionWrapper>
                <SectionWrapper id="booking">
                  <BookingForm />
                </SectionWrapper>
                <SectionWrapper id="contact">
                  <Contact />
                </SectionWrapper>
              </div>
            } />
            <Route path="/about" element={
              <div>
                <SectionWrapper id="hero">
                  <Hero />
                </SectionWrapper>
                <SectionWrapper id="about">
                  <About />
                </SectionWrapper>
                <SectionWrapper id="services">
                  <Services />
                </SectionWrapper>
                <SectionWrapper id="masters">
                  <Masters />
                </SectionWrapper>
                <SectionWrapper id="booking">
                  <BookingForm />
                </SectionWrapper>
                <SectionWrapper id="contact">
                  <Contact />
                </SectionWrapper>
              </div>
            } />
            <Route path="/contact" element={
              <div>
                <SectionWrapper id="hero">
                  <Hero />
                </SectionWrapper>
                <SectionWrapper id="about">
                  <About />
                </SectionWrapper>
                <SectionWrapper id="services">
                  <Services />
                </SectionWrapper>
                <SectionWrapper id="masters">
                  <Masters />
                </SectionWrapper>
                <SectionWrapper id="booking">
                  <BookingForm />
                </SectionWrapper>
                <SectionWrapper id="contact">
                  <Contact />
                </SectionWrapper>
              </div>
            } />
          </>
        )}
      </Routes>
      {showLoginAlert && (
        <Alert>
          Siz allaqachon tizimga kirgansiz. Avval chiqib turing.
        </Alert>
      )}
    </>
  );
};

function App() {
  const [userType, setUserType] = useState(null);
  const [showLoginAlert, setShowLoginAlert] = useState(false);

  // Check if user is already logged in when app loads
  useEffect(() => {
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType) {
      setUserType(storedUserType);
    }
  }, []);

  const handleUserTypeSelect = (type) => {
    // If user is already logged in, show alert
    if (userType) {
      setShowLoginAlert(true);
      setTimeout(() => setShowLoginAlert(false), 3000); // Hide alert after 3 seconds
      return;
    }
    
    setUserType(type);
    // Store user type in localStorage to persist login state
    localStorage.setItem('userType', type);
  };

  return (
    <Router>
      <AppContainer>
        <AppContent 
          userType={userType} 
          setUserType={setUserType} 
          showLoginAlert={showLoginAlert} 
          handleUserTypeSelect={handleUserTypeSelect} 
        />
      </AppContainer>
    </Router>
  );
}

export default App;