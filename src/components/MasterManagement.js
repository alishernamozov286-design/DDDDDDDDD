import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import axios from 'axios';
const BASE_URL ='https://backend-3-gtdh.onrender.com';

// Enhanced shimmer animation with more sophisticated effect
const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

// Enhanced floating animation for subtle movement
const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

// Enhanced pulse animation for interactive elements
const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(106, 17, 203, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(106, 17, 203, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(106, 17, 203, 0);
  }
`;

const ManagementContainer = styled.div`
  padding: 30px;
  max-width: 1400px;
  margin: 0 auto;
  color: white;
  animation: fadeIn 0.8s cubic-bezier(0.22, 0.61, 0.36, 1);
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 40px;
  color: #e0d6ff;
  font-size: 2.8rem;
  text-shadow: 0 0 20px rgba(160, 196, 255, 0.6);
  background: linear-gradient(45deg, #a0c4ff, #d0b3ff, #6a11cb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  letter-spacing: 1px;
  
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
    box-shadow: 0 0 15px rgba(106, 17, 203, 0.7);
  }
`;

const FormContainer = styled.div`
  background: rgba(43, 30, 77, 0.85);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(37, 117, 252, 0.5);
  margin-bottom: 40px;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(106, 17, 203, 0.6);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 70px rgba(37, 117, 252, 0.7);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #6a11cb, #2575fc, #a0c4ff);
    box-shadow: 0 0 15px rgba(106, 17, 203, 0.8);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at top right, rgba(106, 17, 203, 0.1), transparent 70%);
    pointer-events: none;
  }
  
  h3 {
    color: #e0d6ff;
    margin-bottom: 30px;
    font-size: 2rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    background: linear-gradient(45deg, #a0c4ff, #d0b3ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 50px;
      height: 3px;
      background: linear-gradient(90deg, #6a11cb, #2575fc);
      border-radius: 2px;
    }
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: #d0b3ff;
  font-size: 1.2rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
  position: relative;
  padding-left: 15px;
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 8px;
    height: 8px;
    background: linear-gradient(45deg, #6a11cb, #2575fc);
    border-radius: 50%;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 30px;
  position: relative;
  
  &:hover {
    & > ${Label} {
      color: #a0c4ff;
      text-shadow: 0 0 10px rgba(160, 196, 255, 0.8);
      transform: translateX(5px);
    }
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 18px 20px;
  border: 2px solid rgba(106, 17, 203, 0.6);
  border-radius: 12px;
  font-size: 17px;
  background: rgba(30, 20, 50, 0.8);
  color: white;
  backdrop-filter: blur(8px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: inset 0 3px 15px rgba(0, 0, 0, 0.4), 0 5px 15px rgba(0, 0, 0, 0.2);
  
  &:focus {
    outline: none;
    border-color: #6a11cb;
    box-shadow: 0 0 0 4px rgba(106, 17, 203, 0.6), 0 0 20px rgba(106, 17, 203, 0.8);
    background: rgba(35, 25, 55, 0.9);
  }
  
  &::placeholder {
    color: rgba(212, 196, 251, 0.8);
    font-style: italic;
  }
  
  &:hover {
    border-color: #a0c4ff;
    box-shadow: 0 0 15px rgba(160, 196, 255, 0.6), inset 0 3px 15px rgba(0, 0, 0, 0.4);
    background: rgba(35, 25, 55, 0.85);
  }
  
  /* Style for date and time input calendar/clock icons */
  &[type='date'], &[type='time'] {
    position: relative;
    
    &::-webkit-calendar-picker-indicator {
      background: linear-gradient(45deg, #6a11cb, #2575fc);
      width: 30px;
      height: 30px;
      padding: 5px;
      border-radius: 8px;
      cursor: pointer;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      box-shadow: 0 3px 10px rgba(37, 117, 252, 0.5);
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
    }
    
    &::-webkit-calendar-picker-indicator:hover {
      background: linear-gradient(45deg, #2575fc, #6a11cb);
      transform: translateY(-50%) scale(1.2);
      box-shadow: 0 5px 15px rgba(37, 117, 252, 0.7);
    }
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 18px 20px;
  border: 2px solid rgba(106, 17, 203, 0.6);
  border-radius: 12px;
  font-size: 17px;
  min-height: 140px;
  background: rgba(30, 20, 50, 0.8);
  color: white;
  backdrop-filter: blur(8px);
  resize: vertical;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: inset 0 3px 15px rgba(0, 0, 0, 0.4), 0 5px 15px rgba(0, 0, 0, 0.2);
  
  &:focus {
    outline: none;
    border-color: #6a11cb;
    box-shadow: 0 0 0 4px rgba(106, 17, 203, 0.6), 0 0 20px rgba(106, 17, 203, 0.8);
    background: rgba(35, 25, 55, 0.9);
  }
  
  &::placeholder {
    color: rgba(212, 196, 251, 0.8);
    font-style: italic;
  }
  
  &:hover {
    border-color: #a0c4ff;
    box-shadow: 0 0 15px rgba(160, 196, 255, 0.6), inset 0 3px 15px rgba(0, 0, 0, 0.4);
    background: rgba(35, 25, 55, 0.85);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 18px 20px;
  border: 2px solid rgba(106, 17, 203, 0.6);
  border-radius: 12px;
  font-size: 17px;
  background: rgba(30, 20, 50, 0.8);
  color: white;
  backdrop-filter: blur(8px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: inset 0 3px 15px rgba(0, 0, 0, 0.4), 0 5px 15px rgba(0, 0, 0, 0.2);
  
  &:focus {
    outline: none;
    border-color: #6a11cb;
    box-shadow: 0 0 0 4px rgba(106, 17, 203, 0.6), 0 0 20px rgba(106, 17, 203, 0.8);
    background: rgba(35, 25, 55, 0.9);
  }
  
  &:hover {
    border-color: #a0c4ff;
    box-shadow: 0 0 15px rgba(160, 196, 255, 0.6), inset 0 3px 15px rgba(0, 0, 0, 0.4);
    background: rgba(35, 25, 55, 0.85);
  }
`;

const Button = styled.button`
  background: linear-gradient(45deg, #6a11cb, #2575fc);
  color: white;
  border: none;
  padding: 16px 35px;
  border-radius: 12px;
  cursor: pointer;
  font-size: 17px;
  font-weight: 600;
  margin-right: 20px;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 6px 20px rgba(37, 117, 252, 0.7);
  position: relative;
  overflow: hidden;
  letter-spacing: 0.5px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(37, 117, 252, 0.9);
    background: linear-gradient(45deg, #2575fc, #6a11cb);
  }
  
  &:disabled {
    background: rgba(255, 255, 255, 0.2);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  &:active {
    transform: translateY(1px);
  }
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:focus {
    outline: none;
    animation: ${pulse} 1.5s infinite;
  }
`;

const Alert = styled.div`
  padding: 25px;
  margin-bottom: 25px;
  border-radius: 12px;
  background: ${props => props.type === 'error' 
    ? 'linear-gradient(45deg, rgba(244, 67, 54, 0.5), rgba(233, 30, 99, 0.5))' 
    : 'linear-gradient(45deg, rgba(76, 175, 80, 0.5), rgba(139, 195, 74, 0.5))'};
  color: white;
  border: 1px solid ${props => props.type === 'error' ? 'rgba(244, 67, 54, 0.8)' : 'rgba(76, 175, 80, 0.8)'};
  backdrop-filter: blur(8px);
  box-shadow: 0 6px 20px ${props => props.type === 'error' 
    ? 'rgba(244, 67, 54, 0.4)' 
    : 'rgba(76, 175, 80, 0.4)'};
  animation: ${props => props.type === 'error' ? 'shake 0.6s' : 'fadeIn 0.6s'};
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    animation: ${shimmer} 3s infinite;
    background-size: 200% 100%;
  }
  
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%, 60% { transform: translateX(-8px); }
    40%, 80% { transform: translateX(8px); }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(-10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const MasterList = styled.div`
  background: rgba(43, 30, 77, 0.85);
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 20px 60px rgba(37, 117, 252, 0.5);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(106, 17, 203, 0.6);
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 25px 70px rgba(37, 117, 252, 0.7);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #6a11cb, #2575fc, #a0c4ff);
    box-shadow: 0 0 15px rgba(106, 17, 203, 0.8);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at top right, rgba(106, 17, 203, 0.1), transparent 70%);
    pointer-events: none;
  }
  
  h3 {
    color: #e0d6ff;
    margin-bottom: 30px;
    font-size: 2rem;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    background: linear-gradient(45deg, #a0c4ff, #d0b3ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
    display: inline-block;
    
    &::after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 50px;
      height: 3px;
      background: linear-gradient(90deg, #6a11cb, #2575fc);
      border-radius: 2px;
    }
  }
`;

const MasterItem = styled.div`
  border: 1px solid rgba(106, 17, 203, 0.6);
  border-radius: 15px;
  padding: 30px;
  margin-bottom: 25px;
  background: rgba(43, 30, 77, 0.7);
  backdrop-filter: blur(8px);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  animation: ${float} 6s ease-in-out infinite;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(37, 117, 252, 0.4);
    border-color: rgba(106, 17, 203, 0.9);
    background: rgba(43, 30, 77, 0.9);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(106, 17, 203, 0.15), transparent);
    animation: ${shimmer} 3s infinite;
    background-size: 200% 100%;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at top left, rgba(160, 196, 255, 0.05), transparent 70%);
    pointer-events: none;
  }
`;

const MasterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 20px;
  position: relative;
  z-index: 1;
`;

const MasterName = styled.h3`
  margin: 0;
  color: #e0d6ff;
  font-size: 1.8rem;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  background: linear-gradient(45deg, #a0c4ff, #d0b3ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  position: relative;
  display: inline-block;
`;

const ActionButton = styled.button`
  background: ${props => props.danger 
    ? 'linear-gradient(45deg, #ff416c, #ff4b2b)' 
    : 'linear-gradient(45deg, #2196f3, #21cbf3)'};
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 10px;
  cursor: pointer;
  margin-left: 15px;
  font-weight: 600;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 5px 18px ${props => props.danger 
    ? 'rgba(255, 65, 108, 0.5)' 
    : 'rgba(33, 150, 243, 0.5)'};
  position: relative;
  overflow: hidden;
  font-size: 16px;
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px ${props => props.danger 
      ? 'rgba(255, 65, 108, 0.7)' 
      : 'rgba(33, 150, 243, 0.7)'};
    opacity: 0.95;
  }
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
    transition: 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  &:focus {
    outline: none;
    animation: ${pulse} 1.5s infinite;
  }
`;

const WorkingHoursContainer = styled.div`
  display: flex;
  gap: 25px;
  margin-bottom: 20px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const DayCheckboxContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    gap: 12px;
  }
`;

const DayCheckbox = styled.label`
  display: flex;
  align-items: center;
  gap: 10px;
  background: rgba(106, 17, 203, 0.5);
  padding: 15px 22px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  color: #d0b3ff;
  font-weight: 500;
  position: relative;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  
  &:hover {
    background: rgba(106, 17, 203, 0.7);
    transform: translateY(-3px);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
  }
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: 0.5s;
  }
  
  &:hover::before {
    left: 100%;
  }
  
  input {
    margin: 0;
    width: 20px;
    height: 20px;
    accent-color: #6a11cb;
    cursor: pointer;
  }
`;

const MasterDetail = styled.p`
  color: #d0b3ff;
  margin: 12px 0;
  font-size: 17px;
  position: relative;
  z-index: 1;
  padding-left: 20px;
  
  strong {
    color: #a0c4ff;
    font-weight: 600;
  }
  
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    background: linear-gradient(45deg, #6a11cb, #2575fc);
    border-radius: 50%;
  }
`;

const daysOfWeek = [
  'Dushanba',
  'Seshanba', 
  'Chorshanba',
  'Payshanba',
  'Juma',
  'Shanba',
  'Yakshanba'
];

const MasterManagement = () => {
  const [masters, setMasters] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    experience: '',
    specialization: '',
    phone: '',
    workingHours: { start: '09:00', end: '18:00' },
    workingDays: []
  });
  const [editingId, setEditingId] = useState(null);
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchMasters();
  }, []);

  const fetchMasters = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/api/masters`);
      setMasters(response.data);
    } catch (error) {
      showAlert('Xatolik yuz berdi: ' + error.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 5000);
  };

  const validateForm = () => {
    if (!formData.name.trim()) {
      showAlert("Ismni kiriting", 'error');
      return false;
    }
    
    if (!formData.experience || formData.experience <= 0) {
      showAlert("Tajribani kiriting (musbat son)", 'error');
      return false;
    }
    
    if (!formData.phone.trim()) {
      showAlert("Telefon raqamni kiriting", 'error');
      return false;
    }
    
    if (!formData.specialization.trim()) {
      showAlert("Mutaxassizlikni kiriting", 'error');
      return false;
    }
    
    if (formData.workingDays.length === 0) {
      showAlert("Kamida bitta ish kunini tanlang", 'error');
      return false;
    }
    
    return true;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleWorkingHoursChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      workingHours: {
        ...prev.workingHours,
        [field]: value
      }
    }));
  };

  const handleDayToggle = (day) => {
    setFormData(prev => {
      const workingDays = prev.workingDays.includes(day)
        ? prev.workingDays.filter(d => d !== day)
        : [...prev.workingDays, day];
      
      return {
        ...prev,
        workingDays
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    const dataToSend = {
      ...formData,
      experience: parseInt(formData.experience),
      specialization: formData.specialization.split(',').map(s => s.trim()).filter(s => s)
    };
    
    try {
      setLoading(true);
      
      if (editingId) {
        // Update existing master
        await axios.put(`${BASE_URL}/api/masters/` + editingId, dataToSend);
        showAlert("Usta muvaffaqiyatli yangilandi!", 'success');
      } else {
        // Create new master
        await axios.post(`${BASE_URL}/api/masters`, dataToSend);
        showAlert("Yangi usta muvaffaqiyatli qo'shildi!", 'success');
      }
      
      // Reset form
      setFormData({
        name: '',
        experience: '',
        specialization: '',
        phone: '',
        workingHours: { start: '09:00', end: '18:00' },
        workingDays: []
      });
      setEditingId(null);
      
      // Refresh masters list
      fetchMasters();
    } catch (error) {
      showAlert('Xatolik yuz berdi: ' + (error.response?.data?.message || error.message), 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (master) => {
    setFormData({
      name: master.name,
      experience: master.experience.toString(),
      specialization: master.specialization.join(', '),
      phone: master.phone,
      workingHours: master.workingHours,
      workingDays: master.workingDays
    });
    setEditingId(master._id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Haqiqatan ham bu ustani o'chirmoqchimisiz?")) {
      return;
    }
    
    try {
      setLoading(true);
      await axios.delete(`${BASE_URL}/api/masters/` + id);
      showAlert("Usta muvaffaqiyatli o'chirildi!", 'success');
      fetchMasters();
    } catch (error) {
      showAlert('Xatolik yuz berdi: ' + (error.response?.data?.message || error.message), 'error');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setFormData({
      name: '',
      experience: '',
      specialization: '',
      phone: '',
      workingHours: { start: '09:00', end: '18:00' },
      workingDays: []
    });
    setEditingId(null);
  };

  return (
    <ManagementContainer>
      <SectionTitle>Ustalarni Boshqarish</SectionTitle>
      
      {alert && (
        <Alert type={alert.type}>
          {alert.message}
        </Alert>
      )}
      
      <FormContainer>
        <h3>
          {editingId ? 'Ustani Tahrirlash' : 'Yangi Usta Qo\'shish'}
        </h3>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Ism Sharif *</Label>
            <Input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Masalan: Aziz Karimov"
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="experience">Tajriba (yil) *</Label>
            <Input
              type="number"
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              placeholder="Masalan: 5"
              min="0"
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="specialization">Mutaxassizliklar *</Label>
            <TextArea
              id="specialization"
              name="specialization"
              value={formData.specialization}
              onChange={handleInputChange}
              placeholder="Masalan: Klassik soch kesish, Soqol tarash, Styling (vergul bilan ajrating)"
            />
          </FormGroup>
          
          <FormGroup>
            <Label htmlFor="phone">Telefon Raqam *</Label>
            <Input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Masalan: +998 90 123 45 67"
            />
          </FormGroup>
          
          <FormGroup>
            <Label>Ish Vaqti *</Label>
            <WorkingHoursContainer>
              <div>
                <Label htmlFor="start">Boshlanish vaqti</Label>
                <Input
                  type="time"
                  id="start"
                  value={formData.workingHours.start}
                  onChange={(e) => handleWorkingHoursChange('start', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="end">Tugash vaqti</Label>
                <Input
                  type="time"
                  id="end"
                  value={formData.workingHours.end}
                  onChange={(e) => handleWorkingHoursChange('end', e.target.value)}
                />
              </div>
            </WorkingHoursContainer>
          </FormGroup>
          
          <FormGroup>
            <Label>Ish Kunlari *</Label>
            <DayCheckboxContainer>
              {daysOfWeek.map(day => (
                <DayCheckbox key={day}>
                  <input
                    type="checkbox"
                    checked={formData.workingDays.includes(day)}
                    onChange={() => handleDayToggle(day)}
                  />
                  {day}
                </DayCheckbox>
              ))}
            </DayCheckboxContainer>
          </FormGroup>
          
          <div>
            <Button type="submit" disabled={loading}>
              {loading ? 'Saqlanmoqda...' : (editingId ? 'Yangilash' : 'Qo\'shish')}
            </Button>
            {editingId && (
              <Button type="button" onClick={handleCancel} disabled={loading}>
                Bekor qilish
              </Button>
            )}
          </div>
        </form>
      </FormContainer>
      
      <MasterList>
        <h3>Mavjud Ustalar</h3>
        {loading ? (
          <p style={{ color: '#d0b3ff', textAlign: 'center', fontSize: '1.3rem', marginTop: '30px' }}>Ma'lumotlar yuklanmoqda...</p>
        ) : masters.length === 0 ? (
          <p style={{ color: '#d0b3ff', textAlign: 'center', fontSize: '1.3rem', marginTop: '30px' }}>Hozircha ustalar mavjud emas</p>
        ) : (
          masters.map(master => (
            <MasterItem key={master._id}>
              <MasterHeader>
                <MasterName>{master.name}</MasterName>
                <div>
                  <ActionButton onClick={() => handleEdit(master)}>
                    Tahrirlash
                  </ActionButton>
                  <ActionButton danger onClick={() => handleDelete(master._id)}>
                    O'chirish
                  </ActionButton>
                </div>
              </MasterHeader>
              <MasterDetail><strong>Tajriba:</strong> {master.experience} yil</MasterDetail>
              <MasterDetail><strong>Mutaxassizliklar:</strong> {master.specialization.join(', ')}</MasterDetail>
              <MasterDetail><strong>Telefon:</strong> {master.phone}</MasterDetail>
              <MasterDetail><strong>Ish vaqti:</strong> {master.workingHours.start} - {master.workingHours.end}</MasterDetail>
              <MasterDetail><strong>Ish kunlari:</strong> {master.workingDays.join(', ')}</MasterDetail>
            </MasterItem>
          ))
        )}
      </MasterList>
    </ManagementContainer>
  );
};

export default MasterManagement;