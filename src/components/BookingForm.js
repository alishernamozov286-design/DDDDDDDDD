import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { FaUser, FaPhone, FaClock, FaCut, FaUserTie, FaCheckCircle, FaExclamationTriangle, FaInfoCircle } from 'react-icons/fa';

const BASE_URL = 'https://backend-2-1-o1wi.onrender.com';

const BookingSection = styled.section`
  padding: 120px 20px;
  background: linear-gradient(135deg, #0c1a33 0%, #1a2a4a 50%, #2c3e6b 100%);
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
  
  /* Floating particles effect */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      radial-gradient(circle at 10% 20%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    animation: floatingParticles 8s ease-in-out infinite;
    pointer-events: none;
  }
  
  @keyframes twinkle {
    0% { opacity: 0.15; }
    100% { opacity: 0.35; }
  }
  
  @keyframes floatingParticles {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    33% { transform: translateY(-10px) rotate(120deg); }
    66% { transform: translateY(5px) rotate(240deg); }
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
    background: linear-gradient(90deg, #2c3e6b, #34495e);
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
  background: rgba(12, 26, 51, 0.85);
  border-radius: 25px;
  padding: 50px;
  box-shadow: 
    0 20px 60px rgba(0, 0, 0, 0.4),
    0 0 0 1px rgba(255, 255, 255, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(44, 62, 80, 0.4);
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
    background: linear-gradient(45deg, rgba(44, 62, 80, 0.3), rgba(52, 73, 94, 0.3));
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
      rgba(44, 62, 80, 0.2),
      rgba(52, 73, 94, 0.2),
      rgba(44, 62, 80, 0.2),
      rgba(44, 62, 80, 0.2)
    );
    opacity: 0;
    transition: opacity 0.4s ease;
    z-index: -2;
    animation: auroraRotate 20s linear infinite;
  }
  
  &:hover {
    transform: translateZ(0) translateY(-15px) rotateX(3deg);
    box-shadow: 0 25px 70px rgba(44, 62, 80, 0.5);
    
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
    background: linear-gradient(90deg, #2c3e6b, #34495e);
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
  text-shadow: 0 1px 2px rgba(0, 0, 0, 1);
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
    background: linear-gradient(90deg, #2c3e6b, #34495e);
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
  color: #87ceeb;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  pointer-events: none;
  background: rgba(44, 62, 80, 0.2);
  width: 42px;
  height: 42px;
  border-radius: 50%;
  margin-left: 5px;
  margin-top: -5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;
  
  ${InputWrapper}:hover & {
    background: rgba(44, 62, 80, 0.3);
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
  border: 2px solid rgba(44, 62, 80, 0.4);
  border-radius: 12px;
  font-size: 1.05rem;
  background: rgba(12, 26, 51, 0.7);
  color: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transform: translateZ(0);
  
  &:focus {
    outline: none;
    border-color: #87ceeb;
    box-shadow: 0 0 0 4px rgba(44, 62, 80, 0.4), 0 0 20px rgba(44, 62, 80, 0.6);
    background: rgba(12, 26, 51, 0.9);
    transform: translateZ(0) translateY(-5px);
  }
  
  &:hover {
    box-shadow: 0 6px 20px rgba(44, 62, 80, 0.4);
    transform: translateZ(0) translateY(-2px);
  }
  
  &::placeholder {
    color: rgba(224, 224, 255, 0.8);
  }
  
  /* Style for date input calendar icon */
  &[type='date'] {
    position: relative;
    padding-right: 55px;
    
    &::-webkit-calendar-picker-indicator {
      background: linear-gradient(45deg, #2c3e6b, #34495e);
      width: 28px;
      height: 28px;
      padding: 5px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      box-shadow: 0 3px 10px rgba(44, 62, 80, 0.5);
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateZ(0) translateY(-50%);
    }
    
    &::-webkit-calendar-picker-indicator:hover {
      background: linear-gradient(45deg, #34495e, #2c3e6b);
      transform: translateZ(0) translateY(-50%) scale(1.2);
      box-shadow: 0 5px 15px rgba(44, 62, 80, 0.7);
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
    background: linear-gradient(45deg, #2c3e6b, #34495e);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:focus::after {
    opacity: 0.5;
    box-shadow: 0 0 15px rgba(44, 62, 80, 0.7), 0 0 30px rgba(44, 62, 80, 0.5);
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
  border: 2px solid rgba(44, 62, 80, 0.4);
  border-radius: 12px;
  font-size: 1.05rem;
  background: rgba(12, 26, 51, 0.7);
  color: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  appearance: none;
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2387ceeb' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 18px center;
  background-size: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  
  &:focus {
    outline: none;
    border-color: #87ceeb;
    box-shadow: 0 0 0 4px rgba(44, 62, 80, 0.4);
    background: rgba(12, 26, 51, 0.9);
    transform: translateY(-2px);
  }
  
  option {
    background: rgba(12, 26, 51, 0.95);
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



const Button = styled.button`
  background: linear-gradient(45deg, #2c3e6b, #34495e);
  color: white;
  border: none;
  padding: 16px 35px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 1.15rem;
  font-weight: 600;
  width: 100%;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 6px 25px rgba(44, 62, 80, 0.5);
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transform: translateZ(0);
  
  &:hover {
    transform: translateY(-5px) translateZ(0);
    box-shadow: 0 12px 30px rgba(44, 62, 80, 0.7);
    background: linear-gradient(45deg, #34495e, #2c3e6b);
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
    background: linear-gradient(45deg, rgba(44, 62, 80, 0.4), rgba(52, 73, 94, 0.4));
    color: #e0e0ff;
    border: 1px solid rgba(44, 62, 80, 0.6);
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
    ? 'linear-gradient(45deg, #2c3e6b, #34495e)' 
    : 'rgba(12, 26, 51, 0.7)'};
  color: ${props => props.selected 
    ? 'white' 
    : '#e0e0ff'};
  border: 2px solid ${props => props.selected 
    ? '#2c3e6b' 
    : 'rgba(44, 62, 80, 0.5)'};
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
      ? 'linear-gradient(45deg, #34495e, #2c3e6b)' 
      : 'rgba(44, 62, 80, 0.5)'};
    transform: translateZ(0) translateY(-5px) scale(1.05);
    box-shadow: 0 8px 20px rgba(44, 62, 80, 0.4);
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

const CyberGlow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
  border-radius: 25px;
  overflow: hidden;
  
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
      rgba(44, 62, 80, 0.2),
      transparent,
      rgba(52, 73, 94, 0.2),
      transparent
    );
    animation: cyberRotate 4s linear infinite;
    opacity: 0.3;
  }
  
  @keyframes cyberRotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;


const BookingForm = () => {
  const [services, setServices] = useState([]);
  const [masters, setMasters] = useState([]);
  const [formData, setFormData] = useState({
    customerName: "",
    customerPhone: "",
    serviceId: "",
    masterId: "",
    appointmentDate: "",
    appointmentTime: "",
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
      const response = await axios.get(BASE_URL + '/api/services');
      setServices(response.data);
    } catch (error) {
      console.error("Error loading services:", error);
    }
  };

  const fetchMasters = async () => {
    try {
      const response = await axios.get(BASE_URL + '/api/masters');
      setMasters(response.data);
    } catch (error) {
      console.error("Error loading masters:", error);
    }
  };

  const getUzbekDayName = (dayIndex) => {
    const days = [
      "Yakshanba",
      "Dushanba",
      "Seshanba",
      "Chorshanba",
      "Payshanba",
      "Juma",
      "Shanba",
    ];
    return days[dayIndex];
  };

  const generateTimeSlots = async (startTime, endTime, masterId, date, serviceId) => {
    const timeToMinutes = (t) => {
      const [hh, mm] = t.split(":").map(Number);
      return hh * 60 + mm;
    };
    const minutesToTime = (mins) => {
      const n = ((mins % 1440) + 1440) % 1440;
      const hh = String(Math.floor(n / 60)).padStart(2, "0");
      const mm = String(n % 60).padStart(2, "0");
      return hh + ":" + mm;
    };

    const service = services.find((s) => s._id === serviceId);
    if (!service) return [];
    const duration = Number(service.duration) || 0;

    const startMin = timeToMinutes(startTime);
    const endMin = timeToMinutes(endTime);

    // Mavjud bronlarni olish
    let bookedTimes = [];
    try {
      const response = await axios.get(`${BASE_URL}/api/bookings`);
      const bookings = response.data;
      
      // Shu kun va shu usta uchun band vaqtlarni topish
      bookedTimes = bookings
        .filter(booking => 
          booking.masterId._id === masterId &&
          new Date(booking.appointmentDate).toDateString() === new Date(date).toDateString() &&
          booking.status !== 'bekor_qilingan' &&
          !booking.isDeleted
        )
        .map(booking => booking.appointmentTime);
    } catch (error) {
      console.error("Mavjud bronlarni olishda xatolik:", error);
    }

    // Barcha vaqt slotlarini yaratish va band bo'lganlarini chiqarib tashlash
    const today = new Date();
    const isToday = new Date(date).toDateString() === today.toDateString();
    const nowMinutes = isToday ? today.getHours() * 60 + today.getMinutes() : -1;

    const slots = [];
    for (let t = startMin; t + duration <= endMin; t += 30) {
      const timeSlot = minutesToTime(t);
      
      // O'tgan vaqtlarni chiqarib tashlash
      if (isToday && t < nowMinutes) continue;
      
      // Band vaqtlarni chiqarib tashlash
      if (!bookedTimes.includes(timeSlot)) {
        slots.push(timeSlot);
      }
    }

    return slots;
  };

  const handleMasterChange = async (e) => {
    const masterId = e.target.value;
    const newForm = { ...formData, masterId };
    setFormData(newForm);
    setAvailableTimes([]);

    if (masterId && newForm.appointmentDate && newForm.serviceId) {
      await updateAvailableTimes(newForm);
    }
  };

  const handleDateChange = async (e) => {
    const appointmentDate = e.target.value;
    const newForm = { ...formData, appointmentDate };
    setFormData(newForm);
    setAvailableTimes([]);

    if (newForm.masterId && appointmentDate && newForm.serviceId) {
      await updateAvailableTimes(newForm);
    }
  };

  const handleServiceChange = async (e) => {
    const serviceId = e.target.value;
    const newForm = { ...formData, serviceId };
    setFormData(newForm);
    setAvailableTimes([]);

    if (newForm.masterId && newForm.appointmentDate && serviceId) {
      await updateAvailableTimes(newForm);
    }
  };

  const updateAvailableTimes = async (form) => {
    const master = masters.find((m) => m._id === form.masterId);
    if (!master) return;

    const selectedDate = new Date(form.appointmentDate);
    const dayName = getUzbekDayName(selectedDate.getDay());
    const worksOnDay = master.workingDays.includes(dayName);
    setMasterWorksOnSelectedDay(worksOnDay);

    if (worksOnDay) {
      try {
        const times = await generateTimeSlots(
          master.workingHours.start,
          master.workingHours.end,
          form.masterId,
          form.appointmentDate,
          form.serviceId
        );
        setAvailableTimes(times);
        setAlert(null);
      } catch (err) {
        console.error("Error generating time slots:", err);
        setAvailableTimes([]);
      }
    } else {
      setAvailableTimes([]);
      setAlert({
        type: "warning",
        message: 'Bu usta ' + dayName + ' ishlamaydi! Iltimos, boshqa kunni tanlang.',
      });
    }
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, "");
    
    // If user types +998, ignore it since it's already displayed
    if (value.startsWith("998")) {
      value = value.substring(3);
    }
    
    // Limit to 9 digits
    if (value.length > 9) {
      value = value.substring(0, 9);
    }
    
    setFormData((prev) => ({ ...prev, customerPhone: value }));
  };

  const formatPhoneNumber = (value) => {
    if (!value) return "+998 ";
    
    const cleaned = value.replace(/\D/g, "");
    let formatted = "+998";
    
    if (cleaned.length > 0) {
      formatted += " " + cleaned.substring(0, 2);
    }
    if (cleaned.length > 2) {
      formatted += " " + cleaned.substring(2, 5);
    }
    if (cleaned.length > 5) {
      formatted += " " + cleaned.substring(5, 7);
    }
    if (cleaned.length > 7) {
      formatted += " " + cleaned.substring(7, 9);
    }
    
    return formatted;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (
      !formData.customerName ||
      !formData.customerPhone ||
      !formData.serviceId ||
      !formData.masterId ||
      !formData.appointmentDate ||
      !formData.appointmentTime
    ) {
      setAlert({
        type: "error",
        message: "Iltimos, barcha maydonlarni to'ldiring!"
      });
      return;
    }

    if (formData.customerPhone.length !== 9) {
      setAlert({
        type: "error",
        message: "Telefon raqam 9 ta raqamdan iborat bo'lishi kerak! (+998 XX XXX XX XX)"
      });
      return;
    }

    const master = masters.find((m) => m._id === formData.masterId);
    const selectedDate = new Date(formData.appointmentDate);
    const dayName = getUzbekDayName(selectedDate.getDay());

    if (!master.workingDays.includes(dayName)) {
      setAlert({
        type: "warning",
        message: 'Bu usta ' + dayName + ' ishlamaydi! Iltimos, boshqa kunni tanlang.'
      });
      return;
    }

    try {
      setLoading(true);
      const service = services.find((s) => s._id === formData.serviceId);
      const totalPrice = service ? service.price : 0;

      const bookingData = { ...formData, totalPrice };
      await axios.post(BASE_URL + '/api/bookings', bookingData);

      setAlert({
        type: "success",
        message: "Buyurtma muvaffaqiyatli yaratildi! Telegram botga xabar yuborildi va ustalar paneliga qo'shildi."
      });
      
      // Formani tozalash
      setFormData({
        customerName: "",
        customerPhone: "",
        serviceId: "",
        masterId: "",
        appointmentDate: "",
        appointmentTime: "",
      });
    } catch (error) {
      console.error("Error creating booking:", error);
      
      // Vaqt toqnashuvi xatosini alohida ko'rsatish
      if (error.response?.data?.conflict) {
        setAlert({
          type: "warning",
          message: error.response.data.message
        });
      } else {
        setAlert({
          type: "error",
          message: "Buyurtma yaratishda xatolik yuz berdi: " + (error.response?.data?.message || error.message)
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <BookingSection id="booking">
      <SectionTitle>Buyurtma berish</SectionTitle>
      <BookingContainer>
        <CyberGlow />
        {alert && (
          <Alert type={alert.type}>
            {alert.type === 'success' && <FaCheckCircle />}
            {alert.type === 'error' && <FaExclamationTriangle />}
            {alert.type === 'warning' && <FaInfoCircle />}
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
                value={formatPhoneNumber(formData.customerPhone)}
                onChange={handlePhoneChange}
                placeholder="+998 XX XXX XX XX"
                maxLength="17"
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
              Sana *
            </Label>
            <InputWrapper>
              <IconWrapper>
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
                <FaClock /> Vaqt tanlang
              </Label>
              <TimeSlotsContainer>
                {availableTimes.map(time => (
                  <TimeSlot
                    key={time}
                    selected={formData.appointmentTime === time}
                    onClick={() => setFormData(prev => ({ ...prev, appointmentTime: time }))}
                  >
                    <FaClock /> {time}
                  </TimeSlot>
                ))}
              </TimeSlotsContainer>
            </FormGroup>
          )}
          
          <Button type="submit" disabled={loading || !formData.appointmentTime}>
            {loading ? 'Yuborilmoqda...' : 'Bron qilish'}
          </Button>
        </form>
      </BookingContainer>
    </BookingSection>
  );
};

export default BookingForm;