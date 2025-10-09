import React from 'react';
import styled from 'styled-components';
import Header from './Header';

const TestPage = styled.div`
  padding-top: 80px; /* Account for fixed header */
  min-height: 100vh;
  background: linear-gradient(135deg, #0d0f3d 0%, #2c1a4d 100%);
  color: white;
  padding: 20px;
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

const MenuTest = () => {
  return (
    <div>
      <Header />
      <TestPage>
        <Content>
          <Title>Responsive Menu Test</Title>
          
          <Instructions>
            <SubTitle>How to Test the Menu</SubTitle>
            <StepList>
              <li>Resize your browser window to less than 768px width to see the mobile menu</li>
              <li>Click the hamburger icon (☰) to open the menu</li>
              <li>Click the close icon (✕) to close the menu</li>
              <li>Click outside the menu to close it</li>
              <li>Press the Escape key to close the menu</li>
              <li>Resize back to desktop view to see the menu automatically close</li>
            </StepList>
          </Instructions>
          
          <Section>
            <SubTitle>Enhanced Features</SubTitle>
            <FeatureList>
              <li>Smooth slide-in/slide-out animation</li>
              <li>Escape key support for closing the menu</li>
              <li>Automatic closing when resizing to desktop</li>
              <li>Overlay background that closes the menu when clicked</li>
              <li>Proper focus management</li>
              <li>Accessible ARIA labels</li>
              <li>Responsive design for all screen sizes</li>
            </FeatureList>
          </Section>
          
          <Section>
            <SubTitle>Test Controls</SubTitle>
            <p>Use these buttons to test different scenarios:</p>
            <Button onClick={() => window.dispatchEvent(new Event('resize'))}>
              Simulate Resize
            </Button>
            <Button onClick={() => document.dispatchEvent(new KeyboardEvent('keydown', { keyCode: 27 }))}>
              Simulate Escape Key
            </Button>
          </Section>
          
          <Section>
            <SubTitle>Menu Behavior</SubTitle>
            <p>The responsive menu now includes several improvements:</p>
            <FeatureList>
              <li><strong>Auto-close on resize:</strong> When you resize from mobile to desktop view, the menu automatically closes</li>
              <li><strong>Keyboard navigation:</strong> Press Escape to close the menu at any time</li>
              <li><strong>Click outside to close:</strong> Clicking the overlay background closes the menu</li>
              <li><strong>Smooth transitions:</strong> CSS transitions for a polished feel</li>
              <li><strong>Proper z-index management:</strong> Ensures menu appears above other content</li>
              <li><strong>Accessibility:</strong> ARIA labels for screen readers</li>
            </FeatureList>
          </Section>
        </Content>
      </TestPage>
    </div>
  );
};

export default MenuTest;