import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const BookingSection = styled.section`
  padding: 100px 0;
  background-color: white;
  
  @media (max-width: 768px) {
    padding: 60px 0;
  }
  
  @media (max-width: 480px) {
    padding: 40px 0;
  }
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;
  
  @media (max-width: 480px) {
    padding: 0 15px;
  }
`;

const SectionTitle = styled.div`
  text-align: center;
  margin-bottom: 60px;
  
  h2 {
    font-size: 2.5rem;
    color: #1a1a1a;
    margin-bottom: 1rem;
  }
  
  p {
    font-size: 1.2rem;
    color: #666;
  }
  
  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
    
    p {
      font-size: 1.1rem;
    }
  }
  
  @media (max-width: 480px) {
    h2 {
      font-size: 1.8rem;
    }
    
    p {
      font-size: 1rem;
    }
    
    margin-bottom: 40px;
  }
`;

const RefreshButton = styled.button`
  background-color: #d4af37;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  margin-left: 15px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #b8941f;
    transform: translateY(-2px);
  }
  
  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 0.9rem;
  }
`;

const BookingTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: #f8f9fa;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    border-radius: 10px;
  }
`;

const TableHeader = styled.thead`
  background-color: #d4af37;
  color: white;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #e0e0e0;
  
  &:nth-child(even) {
    background-color: #f0f0f0;
  }
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    &:nth-child(even) {
      background-color: #f8f9fa;
    }
  }
`;

const TableHeaderCell = styled.th`
  padding: 15px 20px;
  text-align: left;
  font-weight: 600;
  
  @media (max-width: 768px) {
    padding: 12px 15px;
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 0.8rem;
  }
`;

const TableCell = styled.td`
  padding: 15px 20px;
  color: #333;
  
  @media (max-width: 768px) {
    padding: 12px 15px;
    font-size: 0.9rem;
  }
  
  @media (max-width: 480px) {
    padding: 10px 12px;
    font-size: 0.8rem;
  }
`;

const StatusBadge = styled.span`
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  
  ${props => {
    switch(props.status) {
      case 'tasdiqlangan':
        return `
          background-color: #d4edda;
          color: #155724;
        `;
      case 'bajarilgan':
        return `
          background-color: #cce7ff;
          color: #004085;
        `;
      case 'bekor_qilingan':
        return `
          background-color: #f8d7da;
          color: #721c24;
        `;
      case 'kutilmoqda':
      default:
        return `
          background-color: #fff3cd;
          color: #856404;
        `;
    }
  }}
  
  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 0.7rem;
  }
`;

const ResponsiveTableContainer = styled.div`
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  
  @media (max-width: 768px) {
    margin: 0 -20px;
  }
  
  @media (max-width: 480px) {
    margin: 0 -15px;
  }
`;

const MobileBookingCard = styled.div`
  background: #f8f9fa;
  border-radius: 10px;
  padding: 20px;
  margin-bottom: 15px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  
  &:last-child {
    margin-bottom: 0;
  }
  
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #e0e0e0;
`;

const MobileCardTitle = styled.h3`
  font-size: 1.1rem;
  color: #1a1a1a;
  margin: 0;
`;

const MobileCardRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const MobileCardLabel = styled.span`
  font-weight: 600;
  color: #1a1a1a;
  font-size: 0.9rem;
`;

const MobileCardValue = styled.span`
  color: #666;
  font-size: 0.9rem;
  text-align: right;
`;

const BookingList = ({ refreshKey }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchBookings();
  }, [refreshKey]);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await axios.get('http://localhost:5001/api/bookings');
      // Sort bookings by creation date (newest first)
      const sortedBookings = response.data.sort((a, b) => 
        new Date(b.createdAt) - new Date(a.createdAt)
      );
      setBookings(sortedBookings);
    } catch (err) {
      setError('Bronlarni yuklashda xatolik yuz berdi');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString) => {
    const options = { 
      year: 'numeric', 
      month: '2-digit', 
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString('uz-UZ', options);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('uz-UZ').format(price) + ' so\'m';
  };

  if (loading) {
    return (
      <BookingSection>
        <Container>
          <SectionTitle>
            <h2>Bronlar</h2>
            <p>Yuklanmoqda...</p>
          </SectionTitle>
        </Container>
      </BookingSection>
    );
  }

  if (error) {
    return (
      <BookingSection>
        <Container>
          <SectionTitle>
            <h2>Bronlar</h2>
            <p style={{ color: 'red' }}>{error}</p>
          </SectionTitle>
        </Container>
      </BookingSection>
    );
  }

  return (
    <BookingSection>
      <Container>
        <SectionTitle>
          <h2>Bronlar Ro'yxati</h2>
          <p>Barcha bron qilingan xizmatlar va ularning yaratilgan vaqtlari</p>
          <div style={{ marginTop: '15px' }}>
            <RefreshButton onClick={fetchBookings}>
              Yangilash
            </RefreshButton>
          </div>
        </SectionTitle>

        {/* Desktop Table View */}
        <ResponsiveTableContainer>
          <BookingTable>
            <TableHeader>
              <tr>
                <TableHeaderCell>Mijoz</TableHeaderCell>
                <TableHeaderCell>Xizmat</TableHeaderCell>
                <TableHeaderCell>Usta</TableHeaderCell>
                <TableHeaderCell>Sana/Vaqt</TableHeaderCell>
                <TableHeaderCell>Yaratilgan vaqt</TableHeaderCell>
                <TableHeaderCell>Narx</TableHeaderCell>
                <TableHeaderCell>Status</TableHeaderCell>
              </tr>
            </TableHeader>
            <tbody>
              {bookings.map(booking => (
                <TableRow key={booking._id}>
                  <TableCell>{booking.customerName}</TableCell>
                  <TableCell>{booking.serviceId?.name || 'Noma\'lum'}</TableCell>
                  <TableCell>{booking.masterId?.name || 'Noma\'lum'}</TableCell>
                  <TableCell>
                    {new Date(booking.appointmentDate).toLocaleDateString('uz-UZ')} 
                    <br />
                    {booking.appointmentTime}
                  </TableCell>
                  <TableCell>{formatDate(booking.createdAt)}</TableCell>
                  <TableCell>{formatPrice(booking.totalPrice)}</TableCell>
                  <TableCell>
                    <StatusBadge status={booking.status}>
                      {booking.status === 'kutilmoqda' && 'Kutilmoqda'}
                      {booking.status === 'tasdiqlangan' && 'Tasdiqlangan'}
                      {booking.status === 'bajarilgan' && 'Bajarilgan'}
                      {booking.status === 'bekor_qilingan' && 'Bekor qilingan'}
                    </StatusBadge>
                  </TableCell>
                </TableRow>
              ))}
            </tbody>
          </BookingTable>
        </ResponsiveTableContainer>

        {/* Mobile Card View */}
        <div>
          {bookings.map(booking => (
            <MobileBookingCard key={booking._id}>
              <MobileCardHeader>
                <MobileCardTitle>{booking.customerName}</MobileCardTitle>
                <StatusBadge status={booking.status}>
                  {booking.status === 'kutilmoqda' && 'Kutilmoqda'}
                  {booking.status === 'tasdiqlangan' && 'Tasdiqlangan'}
                  {booking.status === 'bajarilgan' && 'Bajarilgan'}
                  {booking.status === 'bekor_qilingan' && 'Bekor qilingan'}
                </StatusBadge>
              </MobileCardHeader>
              
              <MobileCardRow>
                <MobileCardLabel>Xizmat:</MobileCardLabel>
                <MobileCardValue>{booking.serviceId?.name || 'Noma\'lum'}</MobileCardValue>
              </MobileCardRow>
              
              <MobileCardRow>
                <MobileCardLabel>Usta:</MobileCardLabel>
                <MobileCardValue>{booking.masterId?.name || 'Noma\'lum'}</MobileCardValue>
              </MobileCardRow>
              
              <MobileCardRow>
                <MobileCardLabel>Sana:</MobileCardLabel>
                <MobileCardValue>{new Date(booking.appointmentDate).toLocaleDateString('uz-UZ')}</MobileCardValue>
              </MobileCardRow>
              
              <MobileCardRow>
                <MobileCardLabel>Vaqt:</MobileCardLabel>
                <MobileCardValue>{booking.appointmentTime}</MobileCardValue>
              </MobileCardRow>
              
              <MobileCardRow>
                <MobileCardLabel>Yaratilgan:</MobileCardLabel>
                <MobileCardValue>{formatDate(booking.createdAt)}</MobileCardValue>
              </MobileCardRow>
              
              <MobileCardRow>
                <MobileCardLabel>Narx:</MobileCardLabel>
                <MobileCardValue>{formatPrice(booking.totalPrice)}</MobileCardValue>
              </MobileCardRow>
            </MobileBookingCard>
          ))}
        </div>
        
        {bookings.length === 0 && (
          <div style={{ textAlign: 'center', padding: '40px', color: '#666' }}>
            <p>Hozircha bron qilinmagan</p>
          </div>
        )}
      </Container>
    </BookingSection>
  );
};

export default BookingList;