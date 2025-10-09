import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import Hero from './Hero';
import Services from './Services';
import Masters from './Masters';
import BookingForm from './BookingForm';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const TestPage = styled.div`
  background: linear-gradient(135deg, #0d0f3d 0%, #2c1a4d 100%);
  color: white;
  min-height: 100vh;
  padding-top: 80px;
`;

const Content = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  backdrop-filter: blur(10px);
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const Title = styled.h1`
  color: #d4af37;
  text-align: center;
  margin-bottom: 30px;
`;

const SubTitle = styled.h2`
  color: #3f51b5;
  margin-bottom: 20px;
`;

const Instructions = styled.div`
  background: rgba(0, 0, 0, 0.3);
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
`;

const StepList = styled.ol`
  padding-left: 20px;
  
  li {
    margin-bottom: 15px;
    line-height: 1.6;
  }
`;

const FeatureList = styled.ul`
  padding-left: 20px;
  
  li {
    margin-bottom: 10px;
    line-height: 1.6;
  }
`;

const Button = styled.button`
  background: #d4af37;
  color: #1a1a1a;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin: 10px 10px 10px 0;
  transition: all 0.3s ease;
  
  &:hover {
    background: #b8941f;
    transform: translateY(-2px);
  }
`;

const TestSection = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 10px;
  margin: 20px 0;
`;

const SectionNavigationTest = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div>
      <Header />
      <TestPage>
        <Content>
          <Title>Section Navigation Test</Title>
          
          <Instructions>
            <SubTitle>How to Test Section Navigation</SubTitle>
            <StepList>
              <li>Click on the "Xizmatlar" (Services) link in the header menu</li>
              <li>Observe how the page smoothly scrolls to the Services section</li>
              <li>Click on the "Ustalar" (Masters) link in the header menu</li>
              <li>Observe how the page smoothly scrolls to the Masters section</li>
              <li>Try the test buttons below to simulate the navigation</li>
            </StepList>
          </Instructions>
          
          <Section>
            <SubTitle>Navigation Features</SubTitle>
            <FeatureList>
              <li>Smooth scrolling to sections</li>
              <li>Proper offset for fixed header</li>
              <li>Responsive design for all screen sizes</li>
              <li>Visual feedback during navigation</li>
            </FeatureList>
          </Section>
          
          <Section>
            <SubTitle>Test Controls</SubTitle>
            <p>Use these buttons to test navigation to different sections:</p>
            <Button onClick={() => scrollToSection('services')}>
              Go to Services
            </Button>
            <Button onClick={() => scrollToSection('masters')}>
              Go to Masters
            </Button>
            <Button onClick={() => scrollToSection('booking')}>
              Go to Booking
            </Button>
            <Button onClick={() => scrollToSection('about')}>
              Go to About
            </Button>
            <Button onClick={() => scrollToSection('contact')}>
              Go to Contact
            </Button>
          </Section>
          
          <Section>
            <SubTitle>How It Works</SubTitle>
            <TestSection>
              <p>The navigation system uses:</p>
              <FeatureList>
                <li><strong>ID-based scrolling:</strong> Each section has a unique ID</li>
                <li><strong>Smooth behavior:</strong> CSS smooth scrolling for better UX</li>
                <li><strong>Header offset:</strong> Adjusts for the fixed header position</li>
                <li><strong>Event handling:</strong> Proper click handlers on menu items</li>
              </FeatureList>
            </TestSection>
          </Section>
        </Content>
      </TestPage>
      
      {/* The actual sections for testing */}
      <div id="services">
        <Services />
      </div>
      <div id="masters">
        <Masters />
      </div>
      <div id="booking">
        <BookingForm />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default SectionNavigationTest;