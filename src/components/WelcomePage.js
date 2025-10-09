import React, { useState } from 'react';
import styled from 'styled-components';

const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%);
  padding: 20px;
  text-align: center;
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

const WelcomeTitle = styled.h1`
  color: white;
  font-size: 3rem;
  margin-bottom: 1rem;
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
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const WelcomeSubtitle = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.5rem;
  margin-bottom: 3rem;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
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
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const UserTypeContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  animation: fadeIn 0.5s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const UserTypeButton = styled.button`
  background: rgba(43, 30, 77, 0.7);
  border: 2px solid rgba(106, 17, 203, 0.3);
  color: #d4c4fb;
  padding: 1.5rem 2rem;
  border-radius: 15px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px rgba(37, 117, 252, 0.3);
  position: relative;
  overflow: hidden;
  
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
  
  &:hover {
    background: rgba(43, 30, 77, 0.9);
    transform: translateY(-5px);
    box-shadow: 0 12px 40px rgba(37, 117, 252, 0.5);
    border-color: rgba(106, 17, 203, 0.5);
    color: #a0c4ff;
    
    &::before {
      opacity: 1;
    }
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
    padding: 1rem;
    font-size: 1rem;
  }
`;

const AdminLoginButton = styled.button`
  background: rgba(43, 30, 77, 0.5);
  border: 1px solid rgba(106, 17, 203, 0.3);
  color: #d4c4fb;
  padding: 0.8rem 1.5rem;
  border-radius: 30px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 15px rgba(37, 117, 252, 0.2);
  position: relative;
  overflow: hidden;
  
  &:hover {
    background: rgba(43, 30, 77, 0.7);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(37, 117, 252, 0.3);
    color: #a0c4ff;
    border-color: rgba(106, 17, 203, 0.5);
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

const LoginForm = styled.div`
  background: rgba(43, 30, 77, 0.7);
  padding: 2.5rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(106, 17, 203, 0.3);
  min-width: 350px;
  box-shadow: 0 15px 50px rgba(37, 117, 252, 0.3);
  position: relative;
  z-index: 1;
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
    border-radius: 20px;
  }
  
  &:hover::before {
    opacity: 1;
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @media (max-width: 768px) {
    min-width: 280px;
    padding: 1.8rem;
  }
`;

const FormTitle = styled.h2`
  color: white;
  margin-bottom: 1.5rem;
  font-size: 1.8rem;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 3px;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    border-radius: 1.5px;
    animation: expandLine 0.5s ease 0.3s both;
  }
  
  @keyframes expandLine {
    from { width: 0; opacity: 0; }
    to { width: 50px; opacity: 1; }
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const Label = styled.label`
  display: block;
  color: #d4c4fb;
  margin-bottom: 0.5rem;
  text-align: left;
  font-weight: 500;
  position: relative;
  
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
    width: 30px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border: 2px solid rgba(106, 17, 203, 0.3);
  border-radius: 10px;
  background: rgba(30, 20, 50, 0.5);
  font-size: 1rem;
  color: white;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  position: relative;
  
  &:focus {
    outline: none;
    border-color: #6a11cb;
    box-shadow: 0 0 0 3px rgba(106, 17, 203, 0.3);
    background: rgba(30, 20, 50, 0.7);
  }
  
  &::placeholder {
    color: rgba(212, 196, 251, 0.7);
  }
`;

const SubmitButton = styled.button`
  background: linear-gradient(45deg, #6a11cb, #2575fc);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  transition: all 0.3s ease;
  font-weight: 600;
  box-shadow: 0 4px 20px rgba(37, 117, 252, 0.4);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 25px rgba(37, 117, 252, 0.6);
    background: linear-gradient(45deg, #2575fc, #6a11cb);
  }
  
  &:active {
    transform: translateY(-1px);
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

const ErrorMessage = styled.div`
  color: #ff6b6b;
  background: linear-gradient(45deg, rgba(255, 107, 107, 0.2), rgba(233, 30, 99, 0.2));
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  border: 1px solid rgba(255, 107, 107, 0.3);
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.2);
  animation: fadeIn 0.3s ease;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const WelcomePage = ({ onUserTypeSelect, showLoginAlert }) => {
  const [selectedUserType, setSelectedUserType] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [adminLogin, setAdminLogin] = useState(false);
  const [adminCredentials, setAdminCredentials] = useState({
    username: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleUserTypeClick = (type) => {
    setSelectedUserType(type);
    // Reset form data with appropriate placeholders
    if (type === 'worker') {
      setFormData({ name: '', phone: '' }); // name will be password for workers
    } else {
      setFormData({ name: '', phone: '' });
    }
    setError('');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Phone number validation function
  const isValidPhoneNumber = (phone) => {
    // Remove extra spaces
    const trimmed = phone.trim();
    
    // Check if empty
    if (!trimmed) return false;
    
    // Accept the specific worker phone numbers in their exact format
    if (trimmed === '77 143 53 51' || trimmed === '+998 77 143 53 51') {
      return true;
    }
    
    // Check for common Uzbek phone number formats
    // +998 XX XXX XX XX
    // 998 XX XXX XX XX
    // XX XXX XX XX
    const formats = [
      /^\+998\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/,  // +998 XX XXX XX XX
      /^998\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/,   // 998 XX XXX XX XX
      /^\d{2}\s\d{3}\s\d{2}\s\d{2}$/,        // XX XXX XX XX
      /^\+998\d{9}$/,                           // +998XXXXXXXXX
      /^998\d{9}$/,                              // 998XXXXXXXXX
      /^\d{9}$/                                 // XXXXXXXXX
    ];
    
    return formats.some(format => format.test(trimmed));
  };

  const handleAdminInputChange = (e) => {
    const { name, value } = e.target;
    setAdminCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (adminLogin) {
      // Only accept the specific username and password
      if (adminCredentials.username === 'Alisher' && adminCredentials.password === '2011') {
        onUserTypeSelect('admin');
      } else {
        setError('Incorrect username or password');
      }
      return;
    }
    
    // For workers, check only password
    if (selectedUserType === 'worker') {
      // Accept specific password for workers
      if (formData.name === '2011') {
        onUserTypeSelect('worker');
      } else {
        setError('Invalid password');
      }
      return;
    }
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please fill in all fields');
      return;
    }
    
    // Validate phone number before proceeding
    if (!isValidPhoneNumber(formData.phone)) {
      setError('Invalid phone number format. Please enter a valid Uzbek phone number.');
      return;
    }
    
    // For clients, proceed with login
    onUserTypeSelect(selectedUserType);
  };

  const handleBack = () => {
    setSelectedUserType(null);
    setAdminLogin(false);
    setError('');
  };

  if (adminLogin) {
    return (
      <WelcomeContainer>
        <WelcomeTitle>Welcome</WelcomeTitle>
        <WelcomeSubtitle>Administrator Panel Login</WelcomeSubtitle>
        
        <LoginForm>
          <FormTitle>Administrator Login</FormTitle>
          
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="username">Username</Label>
              <Input
                type="text"
                id="username"
                name="username"
                value={adminCredentials.username}
                onChange={handleAdminInputChange}
                placeholder="Enter your username"
              />
            </FormGroup>
            
            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <Input
                type="password"
                id="password"
                name="password"
                value={adminCredentials.password}
                onChange={handleAdminInputChange}
                placeholder="Enter your password"
              />
            </FormGroup>
            
            <SubmitButton type="submit">Login</SubmitButton>
          </form>
          
          <AdminLoginButton onClick={handleBack}>
            Back
          </AdminLoginButton>
        </LoginForm>
      </WelcomeContainer>
    );
  }

  if (selectedUserType) {
    return (
      <WelcomeContainer>
        <WelcomeTitle>Welcome</WelcomeTitle>
        <WelcomeSubtitle>
          {selectedUserType === 'client' ? 'Client Login' : 
           selectedUserType === 'worker' ? 'Worker Login' : 'Administrator Login'}
        </WelcomeSubtitle>
        
        <LoginForm>
          <FormTitle>
            {selectedUserType === 'client' ? 'Client Information' : 
             selectedUserType === 'worker' ? 'Worker Login' : 'Administrator Login'}
          </FormTitle>
          
          {error && <ErrorMessage>{error}</ErrorMessage>}
          
          <form onSubmit={handleSubmit}>
            {selectedUserType === 'worker' ? (
              <>
                <FormGroup>
                  <Label htmlFor="name">Password</Label>
                  <Input
                    type="password"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter worker password"
                  />
                </FormGroup>
              </>
            ) : (
              <>
                <FormGroup>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                  />
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="XX XXX XX XX"
                  />
                </FormGroup>
              </>
            )}
            
            <SubmitButton type="submit">
              Login
            </SubmitButton>
          </form>
          
          <AdminLoginButton onClick={handleBack}>
            Back
          </AdminLoginButton>
        </LoginForm>
      </WelcomeContainer>
    );
  }

  return (
    <WelcomeContainer>
      <WelcomeTitle>Welcome</WelcomeTitle>
      <WelcomeSubtitle>Barbershop Booking System</WelcomeSubtitle>
      
      {showLoginAlert && (
        <ErrorMessage>
          You are already logged in. Please log out first.
        </ErrorMessage>
      )}
      
      {error && <ErrorMessage>{error}</ErrorMessage>}
      
      <UserTypeContainer>
        <UserTypeButton onClick={() => handleUserTypeClick('client')}>
          Client Login
        </UserTypeButton>
        <UserTypeButton onClick={() => handleUserTypeClick('worker')}>
          Worker Login
        </UserTypeButton>
      </UserTypeContainer>
      
      <AdminLoginButton onClick={() => setAdminLogin(true)}>
        Administrator Login
      </AdminLoginButton>
    </WelcomeContainer>
  );
};

export default WelcomePage;