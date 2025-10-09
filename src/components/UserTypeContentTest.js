import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Header from './Header';
import BookingForm from './BookingForm';
import BookingList from './BookingList';

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

const UserTypeSelector = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 10px;
  margin: 20px 0;
`;

const TestSection = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 10px;
  margin: 20px 0;
`;

const UserTypeContentTest = () => {
  const [userType, setUserType] = useState(null);

  useEffect(() => {
    // Check if user type is already set in localStorage
    const storedUserType = localStorage.getItem('userType');
    if (storedUserType) {
      setUserType(storedUserType);
    }
  }, []);

  const setUserAsClient = () => {
    localStorage.setItem('userType', 'client');
    setUserType('client');
  };

  const setUserAsWorker = () => {
    localStorage.setItem('userType', 'worker');
    setUserType('worker');
  };

  const clearUserType = () => {
    localStorage.removeItem('userType');
    setUserType(null);
  };

  return (
    <div>
      <Header />
      <TestPage>
        <Content>
          <Title>User Type Content Test</Title>
          
          <Instructions>
            <SubTitle>How to Test User Type Content</SubTitle>
            <StepList>
              <li>Click "Set as Client" to simulate a client login</li>
              <li>Observe the booking section shows the booking form</li>
              <li>Click "Set as Worker" to simulate a worker login</li>
              <li>Observe the booking section shows the booking list</li>
              <li>Click "Clear User Type" to reset</li>
            </StepList>
          </Instructions>
          
          <Section>
            <SubTitle>Current User Type</SubTitle>
            <TestSection>
              <p><strong>Status:</strong> {userType ? `Logged in as ${userType}` : 'Not logged in'}</p>
              <p><strong>Expected Content:</strong> {userType === 'client' ? 'Booking Form' : userType === 'worker' ? 'Booking List' : 'Welcome Page'}</p>
            </TestSection>
          </Section>
          
          <Section>
            <SubTitle>User Type Controls</SubTitle>
            <UserTypeSelector>
              <Button onClick={setUserAsClient}>
                Set as Client (Mijoz)
              </Button>
              <Button onClick={setUserAsWorker}>
                Set as Worker (Ishchi)
              </Button>
              <Button onClick={clearUserType}>
                Clear User Type
              </Button>
            </UserTypeSelector>
          </Section>
          
          <Section>
            <SubTitle>Content Preview</SubTitle>
            <TestSection>
              {userType ? (
                userType === 'client' ? <BookingForm /> : <BookingList />
              ) : (
                <p>Please select a user type to see the content preview</p>
              )}
            </TestSection>
          </Section>
          
          <Section>
            <SubTitle>How It Works</SubTitle>
            <TestSection>
              <p>The system uses conditional rendering based on user type:</p>
              <FeatureList>
                <li><strong>Client View:</strong> Shows booking form for creating appointments</li>
                <li><strong>Worker View:</strong> Shows booking list for managing appointments</li>
                <li><strong>User Type Storage:</strong> Stored in localStorage for persistence</li>
                <li><strong>Dynamic Rendering:</strong> Content changes based on user type</li>
              </FeatureList>
            </TestSection>
          </Section>
        </Content>
      </TestPage>
    </div>
  );
};

export default UserTypeContentTest;