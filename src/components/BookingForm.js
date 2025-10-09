import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaUser, FaPhone, FaCalendarAlt, FaClock, FaCut, FaUserTie, FaCheckCircle, FaExclamationTriangle, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const BookingSection = styled.section`
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
  
  @media (max-width: 1200px) {
    padding: 100px 20px;
  }
  
  @media (max-width: 992px) {
    padding: 90px 20px;
  }
  
  @media (max-width: 768px) {
    padding: 80px 20px;
  }
  
  @media (max-width: 576px) {
    padding: 60px 15px;
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
  
  @media (max-width: 1200px) {
    font-size: 2.5rem;
  }
  
  @media (max-width: 992px) {
    font-size: 2.3rem;
  }
  
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2.5rem;
  }
  
  @media (max-width: 576px) {
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
`;

const BookingContainer = styled.div`
  max-width: 850px;
  margin: 0 auto;
  background: rgba(43, 30, 77, 0.85);
  border-radius: 25px;
  padding: 50px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  position: relative;
  z-index: 1;
  animation: fadeIn 0.7s cubic-bezier(0.4, 0, 0.2, 1);
  transform-style: preserve-3d;
  perspective: 1000px;
  transform: translateZ(0);
  
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
  
  /* Add aurora effect */
  &::after {
    content: '';
    position: absolute;
    top: -15px;
    left: -15px;
    right: -15px;
    bottom: -15px;
    border-radius: 40px;
    background: conic-gradient(
      from 0deg at 50% 50%,
      rgba(106, 17, 203, 0.1),
      rgba(37, 117, 252, 0.1),
      rgba(255, 65, 108, 0.1),
      rgba(255, 75, 43, 0.1),
      rgba(106, 17, 203, 0.1)
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -2;
    animation: auroraRotate 20s linear infinite;
  }
  
  &:hover {
    transform: translateZ(0) translateY(-15px) rotateX(3deg);
    box-shadow: 0 25px 70px rgba(37, 117, 252, 0.5);
    
    &::before {
      opacity: 1;
    }
    
    /* Activate aurora effect on hover */
    &::after {
      opacity: 0.3;
    }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateZ(0) translateY(30px); }
    to { opacity: 1; transform: translateZ(0) translateY(0); }
  }
  
  /* Aurora rotation animation */
  @keyframes auroraRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @media (max-width: 1200px) {
    max-width: 750px;
    padding: 40px;
    border-radius: 22px;
  }
  
  @media (max-width: 992px) {
    max-width: 700px;
    padding: 35px;
    border-radius: 20px;
  }
  
  @media (max-width: 768px) {
    max-width: 90%;
    padding: 30px;
    border-radius: 18px;
  }
  
  @media (max-width: 576px) {
    max-width: 95%;
    padding: 25px 20px;
    border-radius: 16px;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 30px;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 3px;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover::after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    margin-bottom: 25px;
  }
  
  @media (max-width: 576px) {
    margin-bottom: 20px;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 12px;
  font-weight: 600;
  color: #ffffff;
  font-size: 1.15rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -6px;
    left: 0;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  }
  
  &:hover::after {
    width: 35px;
  }
  
  @media (max-width: 1200px) {
    font-size: 1.1rem;
  }
  
  @media (max-width: 992px) {
    font-size: 1.05rem;
  }
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 10px;
  }
  
  @media (max-width: 576px) {
    font-size: 0.95rem;
    margin-bottom: 8px;
  }
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  position: absolute;
  left: 15px;
  color: #6a11cb;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  pointer-events: none;
  background: rgba(106, 17, 203, 0.2);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-left: 5px;
  margin-top: -5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  ${InputWrapper}:hover & {
    background: rgba(106, 17, 203, 0.3);
    transform: scale(1.1);
  }
  
  @media (max-width: 768px) {
    width: 38px;
    height: 38px;
    left: 12px;
  }
  
  @media (max-width: 576px) {
    width: 35px;
    height: 35px;
    left: 10px;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 16px 20px 16px 65px;
  border: 2px solid rgba(106, 17, 203, 0.4);
  border-radius: 12px;
  font-size: 1.05rem;
  background: rgba(30, 20, 50, 0.7);
  color: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transform: translateZ(0);
  
  &:focus {
    outline: none;
    border-color: #6a11cb;
    box-shadow: 0 0 0 4px rgba(106, 17, 203, 0.4), 0 0 20px rgba(37, 117, 252, 0.6);
    background: rgba(30, 20, 50, 0.9);
    transform: translateZ(0) translateY(-5px);
  }
  
  &:hover {
    box-shadow: 0 6px 20px rgba(37, 117, 252, 0.4);
    transform: translateZ(0) translateY(-2px);
  }
  
  &::placeholder {
    color: rgba(212, 196, 251, 0.8);
  }
  
  /* Style for date input calendar icon */
  &[type='date'] {
    position: relative;
    padding-right: 55px;
    
    &::-webkit-calendar-picker-indicator {
      background: linear-gradient(45deg, #6a11cb, #2575fc);
      width: 28px;
      height: 28px;
      padding: 5px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 3px 10px rgba(37, 117, 252, 0.5);
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateZ(0) translateY(-50%);
    }
    
    &::-webkit-calendar-picker-indicator:hover {
      background: linear-gradient(45deg, #2575fc, #6a11cb);
      transform: translateZ(0) translateY(-50%) scale(1.2);
      box-shadow: 0 5px 15px rgba(37, 117, 252, 0.7);
    }
  }
  
  /* Add cyber glow effect */
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    border-radius: 14px;
    background: linear-gradient(45deg, #6a11cb, #2575fc);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:focus::after {
    opacity: 0.5;
    box-shadow: 0 0 15px rgba(106, 17, 203, 0.7), 0 0 30px rgba(37, 117, 252, 0.5);
  }
  
  @media (max-width: 1200px) {
    padding: 15px 20px 15px 60px;
    font-size: 1rem;
  }
  
  @media (max-width: 992px) {
    padding: 14px 18px 14px 55px;
    font-size: 0.95rem;
  }
  
  @media (max-width: 768px) {
    padding: 13px 16px 13px 50px;
    font-size: 0.9rem;
    border-radius: 10px;
  }
  
  @media (max-width: 576px) {
    padding: 12px 15px 12px 45px;
    font-size: 0.85rem;
    border-radius: 8px;
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 16px 20px 16px 65px;
  border: 2px solid rgba(106, 17, 203, 0.4);
  border-radius: 12px;
  font-size: 1.05rem;
  background: rgba(30, 20, 50, 0.7);
  color: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%236a11cb' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 18px center;
  background-size: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  &:focus {
    outline: none;
    border-color: #6a11cb;
    box-shadow: 0 0 0 4px rgba(106, 17, 203, 0.4);
    background: rgba(30, 20, 50, 0.9);
    transform: translateY(-2px);
  }
  
  option {
    background: rgba(43, 30, 77, 0.95);
    color: white;
  }
  
  @media (max-width: 1200px) {
    padding: 15px 20px 15px 60px;
    font-size: 1rem;
  }
  
  @media (max-width: 992px) {
    padding: 14px 18px 14px 55px;
    font-size: 0.95rem;
  }
  
  @media (max-width: 768px) {
    padding: 13px 16px 13px 50px;
    font-size: 0.9rem;
    border-radius: 10px;
  }
  
  @media (max-width: 576px) {
    padding: 12px 15px 12px 45px;
    font-size: 0.85rem;
    border-radius: 8px;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 16px 20px 16px 65px;
  border: 2px solid rgba(106, 17, 203, 0.4);
  border-radius: 12px;
  font-size: 1.05rem;
  background: rgba(30, 20, 50, 0.7);
  color: white;
  min-height: 140px;
  resize: vertical;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  &:focus {
    outline: none;
    border-color: #6a11cb;
    box-shadow: 0 0 0 4px rgba(106, 17, 203, 0.4);
    background: rgba(30, 20, 50, 0.9);
    transform: translateY(-2px);
  }
  
  &::placeholder {
    color: rgba(212, 196, 251, 0.8);
  }
  
  @media (max-width: 1200px) {
    padding: 15px 20px 15px 60px;
    font-size: 1rem;
    min-height: 130px;
  }
  
  @media (max-width: 992px) {
    padding: 14px 18px 14px 55px;
    font-size: 0.95rem;
    min-height: 120px;
  }
  
  @media (max-width: 768px) {
    padding: 13px 16px 13px 50px;
    font-size: 0.9rem;
    min-height: 110px;
    border-radius: 10px;
  }
  
  @media (max-width: 576px) {
    padding: 12px 15px 12px 45px;
    font-size: 0.85rem;
    min-height: 100px;
    border-radius: 8px;
  }
`;

const Button = styled.button`
  background: linear-gradient(45deg, #6a11cb, #2575fc);
  color: white;
  border: none;
  padding: 16px 35px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1.15rem;
  font-weight: 600;
  width: 100%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 6px 25px rgba(37, 117, 252, 0.5);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transform: translateZ(0);
  
  &:hover {
    transform: translateY(-5px) translateZ(0);
    box-shadow: 0 12px 30px rgba(37, 117, 252, 0.7);
    background: linear-gradient(45deg, #2575fc, #6a11cb);
  }
  
  &:disabled {
    background: #555;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  &:active {
    transform: translateY(-2px) translateZ(0);
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
    transition: all 0.8s;
  }
  
  &:hover::after {
    left: 120%;
  }
  
  @media (max-width: 1200px) {
    padding: 15px 30px;
    font-size: 1.1rem;
  }
  
  @media (max-width: 992px) {
    padding: 14px 28px;
    font-size: 1.05rem;
  }
  
  @media (max-width: 768px) {
    padding: 13px 25px;
    font-size: 1rem;
    border-radius: 10px;
  }
  
  @media (max-width: 576px) {
    padding: 12px 22px;
    font-size: 0.95rem;
    border-radius: 8px;
  }
`;

const Alert = styled.div`
  padding: 25px;
  margin-bottom: 30px;
  border-radius: 12px;
  text-align: center;
  font-weight: 500;
  animation: fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  display: flex;
  align-items: center;
  gap: 18px;
  transform: translateZ(0);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  
  ${props => props.type === 'success' && `
    background: linear-gradient(45deg, rgba(76, 175, 80, 0.4), rgba(139, 195, 74, 0.4));
    color: #c8e6c9;
    border: 1px solid rgba(76, 175, 80, 0.6);
  `}
  
  ${props => props.type === 'error' && `
    background: linear-gradient(45deg, rgba(244, 67, 54, 0.4), rgba(233, 30, 99, 0.4));
    color: #ffcdd2;
    border: 1px solid rgba(244, 67, 54, 0.6);
  `}
  
  ${props => props.type === 'warning' && `
    background: linear-gradient(45deg, rgba(255, 152, 0, 0.4), rgba(255, 193, 7, 0.4));
    color: #ffecb3;
    border: 1px solid rgba(255, 152, 0, 0.6);
  `}
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-15px); }
    to { opacity: 1; transform: translateY(0); }
  }
  
  @media (max-width: 768px) {
    padding: 20px;
    margin-bottom: 25px;
    gap: 15px;
  }
  
  @media (max-width: 576px) {
    padding: 18px;
    margin-bottom: 20px;
    gap: 12px;
    font-size: 0.9rem;
  }
`;

const TimeSlot = styled.button`
  background: ${props => props.selected 
    ? 'linear-gradient(45deg, #6a11cb, #2575fc)' 
    : 'rgba(30, 20, 50, 0.7)'};
  color: ${props => props.selected 
    ? 'white' 
    : '#d4c4fb'};
  border: 2px solid ${props => props.selected 
    ? '#6a11cb' 
    : 'rgba(106, 17, 203, 0.5)'};
  padding: 14px 18px;
  border-radius: 10px;
  cursor: pointer;
  margin: 6px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  font-weight: 500;
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transform: translateZ(0);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transform-style: preserve-3d;
  
  &:hover {
    background: ${props => props.selected 
      ? 'linear-gradient(45deg, #2575fc, #6a11cb)' 
      : 'rgba(106, 17, 203, 0.5)'};
    transform: translateZ(0) translateY(-5px) scale(1.05);
    box-shadow: 0 8px 20px rgba(37, 117, 252, 0.4);
  }
  
  &:active {
    transform: translateZ(0) translateY(-2px) scale(1.02);
  }
  
  &:disabled {
    background: #333;
    color: #868e96;
    cursor: not-allowed;
    transform: none;
    border-color: #444;
    box-shadow: none;
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
    transition: all 0.8s;
  }
  
  &:hover::after {
    left: 120%;
  }
  
  @media (max-width: 1200px) {
    padding: 13px 16px;
    font-size: 0.95rem;
  }
  
  @media (max-width: 992px) {
    padding: 12px 15px;
    font-size: 0.9rem;
  }
  
  @media (max-width: 768px) {
    padding: 11px 14px;
    font-size: 0.85rem;
    margin: 5px;
    border-radius: 8px;
  }
  
  @media (max-width: 576px) {
    padding: 10px 12px;
    font-size: 0.8rem;
    margin: 4px;
    border-radius: 6px;
  }
`;

const TimeSlotsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
  justify-content: center;
  
  @media (max-width: 768px) {
    gap: 10px;
    margin-top: 15px;
  }
  
  @media (max-width: 576px) {
    gap: 8px;
    margin-top: 12px;
  }
`;

const BookingForm = () => {
  const [services, setServices] = useState([]);
  const [masters, setMasters] = useState([]);
  const [formData, setFormData] = useState({
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    serviceId: '',
    masterId: '',
    appointmentDate: '',
    appointmentTime: ''
  });
  const [availableTimes, setAvailableTimes] = useState([]);
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);
  const [masterWorksOnSelectedDay, setMasterWorksOnSelectedDay] = useState(true);

  useEffect(() => {
    fetchServices();
    fetchMasters();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/services');
      setServices(response.data);
    } catch (error) {
      console.error('Error loading services:', error);
    }
  };

  const fetchMasters = async () => {
    try {
      const response = await axios.get('http://localhost:5001/api/masters');
      setMasters(response.data);
    } catch (error) {
      console.error('Error loading masters:', error);
    }
  };

  // Map JavaScript day index to Uzbek day names
  const getUzbekDayName = (dayIndex) => {
    const days = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
    return days[dayIndex];
  };

  // Function to add minutes to a time string (HH:MM)
  const addMinutesToTime = (time, minutes) => {
    const [hours, mins] = time.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, mins, 0, 0);
    date.setMinutes(date.getMinutes() + minutes);
    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  };

  // Function to check if two time ranges overlap
  const timesOverlap = (start1, end1, start2, end2) => {
    return start1 < end2 && start2 < end1;
  };

  const generateTimeSlots = async (startTime, endTime, masterId, date, serviceId) => {
    // Get the service duration
    const service = services.find(s => s._id === serviceId);
    if (!service) return [];
    
    const duration = service.duration; // in minutes
    
    // Get existing bookings for this master on this date
    let existingBookings = [];
    try {
      const response = await axios.get(`http://localhost:5001/api/bookings`);
      existingBookings = response.data.filter(booking => 
        booking.masterId && booking.masterId._id === masterId && 
        new Date(booking.appointmentDate).toDateString() === new Date(date).toDateString()
      );
    } catch (error) {
      console.error('Error fetching bookings:', error);
    }
    
    const slots = [];
    let currentTime = startTime;
    
    // Generate time slots at 30-minute intervals
    while (currentTime < endTime) {
      const slotEnd = addMinutesToTime(currentTime, duration);
      
      // Check if this slot is within working hours
      if (slotEnd <= endTime) {
        // Check for conflicts with existing bookings
        let hasConflict = false;
        for (const booking of existingBookings) {
          // Make sure serviceId exists and has duration
          if (!booking.serviceId || !booking.serviceId.duration) continue;
          
          const bookingStart = booking.appointmentTime;
          const bookingEnd = addMinutesToTime(bookingStart, booking.serviceId.duration);
          
          // Check if the time slots overlap
          if (timesOverlap(currentTime, slotEnd, bookingStart, bookingEnd)) {
            hasConflict = true;
            break;
          }
        }
        
        if (!hasConflict) {
          slots.push(currentTime);
        }
      }
      
      // Move to next 30-minute slot
      currentTime = addMinutesToTime(currentTime, 30);
    }
    
    return slots;
  };

  const handleMasterChange = async (e) => {
    const masterId = e.target.value;
    setFormData(prev => ({
      ...prev,
      masterId
    }));
    
    // If master, date, and service are all selected, generate time slots
    if (masterId && formData.appointmentDate && formData.serviceId) {
      const master = masters.find(m => m._id === masterId);
      if (master) {
        // Check if master works on the selected date
        const selectedDate = new Date(formData.appointmentDate);
        const dayName = getUzbekDayName(selectedDate.getDay());
        
        const worksOnDay = master.workingDays.includes(dayName);
        setMasterWorksOnSelectedDay(worksOnDay);
        
        if (worksOnDay) {
          try {
            const times = await generateTimeSlots(
              master.workingHours.start, 
              master.workingHours.end, 
              masterId, 
              formData.appointmentDate,
              formData.serviceId
            );
            setAvailableTimes(times);
          } catch (error) {
            console.error('Error generating time slots:', error);
            setAvailableTimes([]);
          }
        } else {
          setAvailableTimes([]);
          setAlert({ type: 'warning', message: `Bu usta ${dayName} ishlamaydi! Iltimos, boshqa kunni tanlang.` });
        }
      }
    } else if (masterId) {
      // Only master selected, no date yet
      const master = masters.find(m => m._id === masterId);
      if (master) {
        // Clear any previous warnings
        setAlert(null);
      }
    } else {
      // No master selected
      setAvailableTimes([]);
      setAlert(null);
    }
  };

  const handleDateChange = async (e) => {
    const date = e.target.value;
    setFormData(prev => ({
      ...prev,
      appointmentDate: date
    }));
    
    // If master, date, and service are all selected, generate time slots
    if (formData.masterId && date && formData.serviceId) {
      const master = masters.find(m => m._id === formData.masterId);
      if (master) {
        const selectedDate = new Date(date);
        const dayName = getUzbekDayName(selectedDate.getDay());
        
        const worksOnDay = master.workingDays.includes(dayName);
        setMasterWorksOnSelectedDay(worksOnDay);
        
        if (worksOnDay) {
          try {
            const times = await generateTimeSlots(
              master.workingHours.start, 
              master.workingHours.end, 
              formData.masterId, 
              date,
              formData.serviceId
            );
            setAvailableTimes(times);
            // Clear any previous warnings if they were about working days
            if (alert && alert.message.includes('ishlamaydi')) {
              setAlert(null);
            }
          } catch (error) {
            console.error('Error generating time slots:', error);
            setAvailableTimes([]);
          }
        } else {
          setAvailableTimes([]);
          setAlert({ type: 'warning', message: `Bu usta ${dayName} ishlamaydi! Iltimos, boshqa kunni tanlang.` });
        }
      }
    }
  };

  const handleServiceChange = async (e) => {
    const serviceId = e.target.value;
    setFormData(prev => ({
      ...prev,
      serviceId
    }));
    
    // If master, date, and service are all selected, generate time slots
    if (formData.masterId && formData.appointmentDate && serviceId) {
      const master = masters.find(m => m._id === formData.masterId);
      if (master) {
        const selectedDate = new Date(formData.appointmentDate);
        const dayName = getUzbekDayName(selectedDate.getDay());
        
        const worksOnDay = master.workingDays.includes(dayName);
        setMasterWorksOnSelectedDay(worksOnDay);
        
        if (worksOnDay) {
          try {
            const times = await generateTimeSlots(
              master.workingHours.start, 
              master.workingHours.end, 
              formData.masterId, 
              formData.appointmentDate,
              serviceId
            );
            setAvailableTimes(times);
          } catch (error) {
            console.error('Error generating time slots:', error);
            setAvailableTimes([]);
          }
        } else {
          setAvailableTimes([]);
          setAlert({ type: 'warning', message: `Bu usta ${dayName} ishlamaydi! Iltimos, boshqa kunni tanlang.` });
        }
      }
    }
  };

  const handleTimeSelect = (time) => {
    setFormData(prev => ({
      ...prev,
      appointmentTime: time
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.customerName || !formData.customerPhone || !formData.serviceId || 
        !formData.masterId || !formData.appointmentDate || !formData.appointmentTime) {
      setAlert({ type: 'error', message: 'Iltimos, barcha maydonlarni to\'ldiring!' });
      return;
    }
    
    // Check if master works on selected day before submitting
    const master = masters.find(m => m._id === formData.masterId);
    const selectedDate = new Date(formData.appointmentDate);
    const dayName = getUzbekDayName(selectedDate.getDay());
    
    if (!master.workingDays.includes(dayName)) {
      setAlert({ type: 'warning', message: `Bu usta ${dayName} ishlamaydi! Iltimos, boshqa kunni tanlang.` });
      return;
    }
    
    try {
      setLoading(true);
      
      // Get service price
      const service = services.find(s => s._id === formData.serviceId);
      const totalPrice = service ? service.price : 0;
      
      // Remove email from booking data if it's empty
      const bookingData = {
        ...formData,
        totalPrice
      };
      
      // Remove email field if it's empty
      if (!bookingData.customerEmail) {
        delete bookingData.customerEmail;
      }
      
      await axios.post('http://localhost:5001/api/bookings', bookingData);
      
      setAlert({ type: 'success', message: 'Buyurtma muvaffaqiyatli yaratildi!' });
      
      // Reset form (excluding email field)
      setFormData({
        customerName: '',
        customerPhone: '',
        customerEmail: '',
        serviceId: '',
        masterId: '',
        appointmentDate: '',
        appointmentTime: ''
      });
      setAvailableTimes([]);
      setMasterWorksOnSelectedDay(true);
      
      // Hide success message after 5 seconds
      setTimeout(() => setAlert(null), 5000);
    } catch (error) {
      setAlert({ type: 'error', message: 'Xatolik yuz berdi: ' + (error.response?.data?.message || error.message) });
    } finally {
      setLoading(false);
    }
  };

  return (
    <BookingSection id="booking">
      <SectionTitle>Buyurtma berish</SectionTitle>
      <BookingContainer>
        {alert && (
          <Alert type={alert.type}>
            {alert.type === 'success' && <FaCheckCircle size={26} />}
            {alert.type === 'error' && <FaExclamationTriangle size={26} />}
            {alert.type === 'warning' && <FaInfoCircle size={26} />}
            {alert.message}
          </Alert>
        )}
        
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="customerName">
              <FaUser /> Ism va familiya *
            </Label>
            <InputWrapper>
              <IconWrapper>
                <FaUser />
              </IconWrapper>
              <Input
                type="text"
                id="customerName"
                name="customerName"
                value={formData.customerName}
                onChange={(e) => setFormData(prev => ({ ...prev, customerName: e.target.value }))}
                placeholder="Ism va familiyangizni kiriting"
              />
            </InputWrapper>
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="customerPhone">
              <FaPhone /> Telefon raqam *
            </Label>
            <InputWrapper>
              <IconWrapper>
                <FaPhone />
              </IconWrapper>
              <Input
                type="tel"
                id="customerPhone"
                name="customerPhone"
                value={formData.customerPhone}
                onChange={(e) => setFormData(prev => ({ ...prev, customerPhone: e.target.value }))}
                placeholder="+998 XX XXX XX XX"
              />
            </InputWrapper>
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="customerEmail">
              <FaEnvelope /> Elektron pochta
            </Label>
            <InputWrapper>
              <IconWrapper>
                <FaEnvelope />
              </IconWrapper>
              <Input
                type="email"
                id="customerEmail"
                name="customerEmail"
                value={formData.customerEmail}
                onChange={(e) => setFormData(prev => ({ ...prev, customerEmail: e.target.value }))}
                placeholder="email@example.com"
              />
            </InputWrapper>
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="serviceId">
              <FaCut /> Xizmat turi *
            </Label>
            <InputWrapper>
              <IconWrapper>
                <FaCut />
              </IconWrapper>
              <Select
                id="serviceId"
                name="serviceId"
                value={formData.serviceId}
                onChange={handleServiceChange}
              >
                <option value="">Xizmatni tanlang</option>
                {services.map(service => (
                  <option key={service._id} value={service._id}>
                    {service.name} - {service.price.toLocaleString()} UZS ({service.duration} daqiqa)
                  </option>
                ))}
              </Select>
            </InputWrapper>
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="masterId">
              <FaUserTie /> Barber *
            </Label>
            <InputWrapper>
              <IconWrapper>
                <FaUserTie />
              </IconWrapper>
              <Select
                id="masterId"
                name="masterId"
                value={formData.masterId}
                onChange={handleMasterChange}
              >
                <option value="">Barberni tanlang</option>
                {masters.map(master => (
                  <option key={master._id} value={master._id}>
                    {master.name} ({master.experience} yillik tajriba)
                  </option>
                ))}
              </Select>
            </InputWrapper>
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="appointmentDate">
              {/* <FaCalendarAlt /> */}
              Sana *
            </Label>
            <InputWrapper>
              <IconWrapper>
                {/* <FaCalendarAlt /> */}
              </IconWrapper>
              <Input
                type="date"
                id="appointmentDate"
                name="appointmentDate"
                value={formData.appointmentDate}
                onChange={handleDateChange}
                min={new Date().toISOString().split('T')[0]}
              />
            </InputWrapper>
          </FormGroup>
          
          {formData.masterId && formData.appointmentDate && masterWorksOnSelectedDay && (
            <FormGroup>
              <Label>
                <FaClock /> Vaqt *
              </Label>
              <TimeSlotsContainer>
                {availableTimes.map(time => (
                  <TimeSlot
                    key={time}
                    selected={formData.appointmentTime === time}
                    onClick={() => handleTimeSelect(time)}
                  >
                    <FaClock /> {time}
                  </TimeSlot>
                ))}
              </TimeSlotsContainer>
            </FormGroup>
          )}
          
          <Button type="submit" disabled={loading || !masterWorksOnSelectedDay}>
            {loading ? 'Yaratilmoqda...' : <><FaCheckCircle /> Buyurtma berish</>}
          </Button>
        </form>
      </BookingContainer>
    </BookingSection>
  );
};

export default BookingForm;