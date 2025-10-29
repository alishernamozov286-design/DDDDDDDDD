import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import axios from 'axios';
const BASE_URL = 'https://backend-2-1-o1wi.onrender.com';

// Add shimmer animation for enhanced visual appeal
const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const ManagementContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  animation: fadeIn 0.5s ease-in;
  
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #e0d6ff;
  font-size: 2.5rem;
  text-shadow: 0 0 15px rgba(160, 196, 255, 0.5);
  background: linear-gradient(45deg, #a0c4ff, #d0b3ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
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
  }
`;

const Button = styled.button`
  background: linear-gradient(45deg, #6a11cb, #2575fc);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  margin-right: 10px;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(37, 117, 252, 0.6);
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(37, 117, 252, 0.8);
    background: linear-gradient(45deg, #2575fc, #6a11cb);
  }
  
  &:disabled {
    background: rgba(255, 255, 255, 0.2);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  
  &:active {
    transform: translateY(0);
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
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(106, 17, 203, 0.5), 0 6px 25px rgba(37, 117, 252, 0.8);
  }
`;

const Alert = styled.div`
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  background: ${props => props.type === 'error' 
    ? 'linear-gradient(45deg, rgba(244, 67, 54, 0.4), rgba(233, 30, 99, 0.4))' 
    : 'linear-gradient(45deg, rgba(76, 175, 80, 0.4), rgba(139, 195, 74, 0.4))'};
  color: white;
  border: 1px solid ${props => props.type === 'error' ? 'rgba(244, 67, 54, 0.7)' : 'rgba(76, 175, 80, 0.7)'};
  backdrop-filter: blur(5px);
  box-shadow: 0 4px 15px ${props => props.type === 'error' 
    ? 'rgba(244, 67, 54, 0.3)' 
    : 'rgba(76, 175, 80, 0.3)'};
  animation: ${props => props.type === 'error' ? 'shake 0.5s' : 'fadeIn 0.5s'};
  
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    20%, 60% { transform: translateX(-5px); }
    40%, 80% { transform: translateX(5px); }
  }
  
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`;

const BookingList = styled.div`
  background: rgba(43, 30, 77, 0.8);
  border-radius: 15px;
  padding: 30px;
  box-shadow: 0 15px 50px rgba(37, 117, 252, 0.4);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(106, 17, 203, 0.5);
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #6a11cb, #2575fc, #a0c4ff);
  }
  
  h3 {
    color: #e0d6ff;
    margin-bottom: 20px;
    font-size: 1.8rem;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    background: linear-gradient(45deg, #a0c4ff, #d0b3ff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const BookingItem = styled.div`
  border: 1px solid rgba(106, 17, 203, 0.5);
  border-radius: 12px;
  padding: 25px;
  margin-bottom: 20px;
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 25px rgba(37, 117, 252, 0.3);
    border-color: rgba(106, 17, 203, 0.8);
    background: rgba(43, 30, 77, 0.8);
  }
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(106, 17, 203, 0.1), transparent);
    animation: ${shimmer} 2s infinite;
    background-size: 200% 100%;
  }
  
  background: ${props => {
    switch(props.status) {
      case 'kutilmoqda': return 'rgba(255, 152, 0, 0.2)';
      case 'tasdiqlangan': return 'rgba(76, 175, 80, 0.2)';
      case 'bekor_qilingan': return 'rgba(244, 67, 54, 0.2)';
      default: return 'rgba(43, 30, 77, 0.6)';
    }
  }};
  
  border-left: 5px solid ${props => {
    switch(props.status) {
      case 'kutilmoqda': return '#ff9800';
      case 'tasdiqlangan': return '#4caf50';
      case 'bekor_qilingan': return '#f44336';
      default: return '#9e9e9e';
    }
  }};
`;

const BookingHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  flex-wrap: wrap;
  gap: 15px;
`;

const CustomerName = styled.h3`
  margin: 0;
  color: #e0d6ff;
  font-size: 1.6rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  background: linear-gradient(45deg, #a0c4ff, #d0b3ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const StatusBadge = styled.span`
  padding: 8px 15px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  background: ${props => {
    switch(props.status) {
      case 'kutilmoqda': return 'linear-gradient(45deg, #ff9800, #ff5722)';
      case 'tasdiqlangan': return 'linear-gradient(45deg, #4caf50, #8bc34a)';
      case 'bekor_qilingan': return 'linear-gradient(45deg, #f44336, #e91e63)';
      default: return 'linear-gradient(45deg, #9e9e9e, #607d8b)';
    }
  }};
  color: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  
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

const ActionButton = styled.button`
  background: ${props => props.danger 
    ? 'linear-gradient(45deg, #ff416c, #ff4b2b)' 
    : props.success 
      ? 'linear-gradient(45deg, #00c853, #64dd17)' 
      : 'linear-gradient(45deg, #2196f3, #21cbf3)'};
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 10px;
  font-weight: 600;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px ${props => props.danger 
    ? 'rgba(255, 65, 108, 0.4)' 
    : props.success 
      ? 'rgba(0, 200, 83, 0.4)' 
      : 'rgba(33, 150, 243, 0.4)'};
  position: relative;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px ${props => props.danger 
      ? 'rgba(255, 65, 108, 0.6)' 
      : props.success 
        ? 'rgba(0, 200, 83, 0.6)' 
        : 'rgba(33, 150, 243, 0.6)'};
    opacity: 0.9;
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
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${props => props.danger 
      ? 'rgba(255, 65, 108, 0.5)' 
      : props.success 
        ? 'rgba(0, 200, 83, 0.5)' 
        : 'rgba(33, 150, 243, 0.5)'};
  }
`;

const BookingDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 15px;
  margin-top: 15px;
`;

const DetailItem = styled.div`
  p {
    margin: 5px 0;
    font-size: 14px;
    color: #d0b3ff;
  }
  
  strong {
    display: block;
    color: #a0c4ff;
    font-weight: 600;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    font-size: 1.1rem;
  }
`;

const BookingManagement = () => {
  const [bookings, setBookings] = useState([]);
  const [masters, setMasters] = useState([]);
  const [services, setServices] = useState([]);
  const [alert, setAlert] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchBookings();
    fetchMasters();
    fetchServices();
  }, []);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${BASE_URL}/api/bookings`);
      setBookings(response.data);
    } catch (error) {
      showAlert('Xatolik yuz berdi: ' + error.message, 'error');
    } finally {
      setLoading(false);
    }
  };

  const fetchMasters = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/masters`);
      setMasters(response.data);
    } catch (error) {
      console.error('Ustalarni yuklashda xatolik:', error);
    }
  };

  const fetchServices = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/services`);
      setServices(response.data);
    } catch (error) {
      console.error('Xizmatlarni yuklashda xatolik:', error);
    }
  };

  const showAlert = (message, type) => {
    setAlert({ message, type });
    setTimeout(() => setAlert(null), 5000);
  };

  const updateBookingStatus = async (id, status) => {
    try {

      
      setLoading(true);
      await axios.patch(`${BASE_URL}/api/bookings/` + id + '/status', { status });
      showAlert(`Bron ${status === 'tasdiqlangan' ? 'tasdiqlandi' : 'bekor qilindi'}!`, 'success');
      fetchBookings();
    } catch (error) {
      showAlert('Xatolik yuz berdi: ' + (error.response?.data?.message || error.message), 'error');
    } finally {
      setLoading(false);
    }
  };

  const deleteBooking = async (id) => {
    if (window.confirm('Haqiqatan ham bu bronni o\'chirmoqchimisiz?')) {
      try {
        setLoading(true);
        await axios.delete(`${BASE_URL}/api/bookings/` + id);
        showAlert('Bron muvaffaqiyatli o\'chirildi!', 'success');
        fetchBookings();
      } catch (error) {
        showAlert('Xatolik yuz berdi: ' + (error.response?.data?.message || error.message), 'error');
      } finally {
        setLoading(false);
      }
    }
  };

  const getStatusText = (status) => {
    switch(status) {
      case 'kutilmoqda': return 'Kutilmoqda';
      case 'tasdiqlangan': return 'Tasdiqlangan';
      case 'bekor_qilingan': return 'Bekor qilingan';
      default: return status;
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('uz-UZ');
  };

  return (
    <ManagementContainer>
      <SectionTitle>Bronlarni Boshqarish</SectionTitle>
      

      
      {alert && (
        <Alert type={alert.type}>
          {alert.message}
        </Alert>
      )}
      
      <BookingList>
        <h3>Bronlar Ro'yxati</h3>
        {loading ? (
          <p style={{ color: '#d0b3ff', textAlign: 'center', fontSize: '1.2rem' }}>Ma'lumotlar yuklanmoqda...</p>
        ) : bookings.length === 0 ? (
          <p style={{ color: '#d0b3ff', textAlign: 'center', fontSize: '1.2rem' }}>Hozircha bronlar mavjud emas</p>
        ) : (
          bookings.map(booking => (
            <BookingItem key={booking._id} status={booking.status}>
              <BookingHeader>
                <CustomerName>{booking.customerName}</CustomerName>
                <StatusBadge status={booking.status}>
                  {getStatusText(booking.status)}
                </StatusBadge>
                <div>
                  {booking.status === 'kutilmoqda' && (
                    <>
                      <ActionButton 
                        success 
                        onClick={() => updateBookingStatus(booking._id, 'tasdiqlangan')}
                        disabled={loading}
                      >
                        Tasdiqlash
                      </ActionButton>
                      <ActionButton 
                        danger 
                        onClick={() => updateBookingStatus(booking._id, 'bekor_qilingan')}
                        disabled={loading}
                      >
                        Bekor qilish
                      </ActionButton>
                    </>
                  )}
                  <ActionButton 
                    danger 
                    onClick={() => deleteBooking(booking._id)}
                    disabled={loading}
                  >
                    O'chirish
                  </ActionButton>
                </div>
              </BookingHeader>
              
              <BookingDetails>
                <DetailItem>
                  <strong>Telefon</strong>
                  <p>{booking.customerPhone}</p>
                </DetailItem>
                
                <DetailItem>
                  <strong>Xizmat</strong>
                  <p>{booking.serviceId?.name || "Noma'lum"}</p>
                </DetailItem>
                
                <DetailItem>
                  <strong>Usta</strong>
                  <p>{booking.masterId?.name || "Noma'lum"}</p>
                </DetailItem>
                
                <DetailItem>
                  <strong>Sana</strong>
                  <p>{formatDate(booking.appointmentDate)}</p>
                </DetailItem>
                
                <DetailItem>
                  <strong>Vaqt</strong>
                  <p>{booking.appointmentTime}</p>
                </DetailItem>
                
                <DetailItem>
                  <strong>Narx</strong>
                  <p>{booking.totalPrice?.toLocaleString() || "Noma'lum"} so'm</p>
                </DetailItem>
              </BookingDetails>
              
              {booking.notes && (
                <div style={{ marginTop: '15px' }}>
                  <strong>Izoh:</strong>
                  <p style={{ color: '#d0b3ff', marginTop: '5px' }}>{booking.notes}</p>
                </div>
              )}
            </BookingItem>
          ))
        )}
      </BookingList>
    </ManagementContainer>
  );
};

export default BookingManagement;