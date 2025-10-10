import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
const BASE_URL = 'https://backend-2-fkeh.onrender.com';

const ManagementContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(135deg, #0d0f3d 0%, #2c1a4d 50%, #5a2d82 100%);
  min-height: 100vh;
  padding-top: 80px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(2px 2px at 20px 30px, rgba(255, 255, 255, 0.7), transparent),
      radial-gradient(1px 1px at 40px 70px, rgba(255, 255, 255, 0.5), transparent),
      radial-gradient(1px 1px at 90px 40px, rgba(255, 255, 255, 0.8), transparent),
      radial-gradient(2px 2px at 130px 80px, rgba(255, 255, 255, 0.6), transparent),
      radial-gradient(1px 1px at 160px 30px, rgba(255, 255, 255, 0.4), transparent);
    background-repeat: repeat;
    background-size: 300px 150px;
    opacity: 0.2;
    pointer-events: none;
    z-index: 0;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: white;
  font-size: 2.5rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 1;
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

const FormContainer = styled.div`
  background: rgba(43, 30, 77, 0.85);
  border-radius: 20px;
  padding: 35px;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.5);
  margin-bottom: 40px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(106, 17, 203, 0.5);
  position: relative;
  z-index: 1;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, #6a11cb, #2575fc);
    border-radius: 20px 20px 0 0;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 25px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-weight: 600;
  color: #d4c4fb;
  font-size: 1.1rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 14px 18px;
  border: 1px solid rgba(106, 17, 203, 0.5);
  border-radius: 10px;
  font-size: 1rem;
  background: rgba(30, 20, 50, 0.7);
  color: white;
  transition: all 0.3s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
    border-color: #6a11cb;
    box-shadow: 0 0 0 3px rgba(106, 17, 203, 0.3), 0 6px 15px rgba(0, 0, 0, 0.3);
    background: rgba(30, 20, 50, 0.9);
  }
  &::placeholder {
    color: rgba(212, 196, 251, 0.7);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 14px 18px;
  border: 1px solid rgba(106, 17, 203, 0.5);
  border-radius: 10px;
  font-size: 1rem;
  background: rgba(30, 20, 50, 0.7);
  color: white;
  transition: all 0.3s ease;
  min-height: 120px;
  resize: vertical;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  &:focus {
    outline: none;
    border-color: #6a11cb;
    box-shadow: 0 0 0 3px rgba(106, 17, 203, 0.3), 0 6px 15px rgba(0, 0, 0, 0.3);
    background: rgba(30, 20, 50, 0.9);
  }
  &::placeholder {
    color: rgba(212, 196, 251, 0.7);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ActionButton = styled.button`
  background: linear-gradient(45deg, #6a11cb, #2575fc);
  color: white;
  border: none;
  padding: 14px 28px;
  border-radius: 35px;
  cursor: pointer;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 6px 20px rgba(37, 117, 252, 0.5);
  position: relative;
  overflow: hidden;
  flex: 1;
  max-width: 200px;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(37, 117, 252, 0.7);
    background: linear-gradient(45deg, #2575fc, #6a11cb);
  }
  &:active {
    transform: translateY(-2px);
  }
  &:disabled {
    background: rgba(255, 255, 255, 0.2);
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
  &::after {
    content: "";
    position: absolute;
    top: -50%;
    left: -60%;
    width: 25px;
    height: 200%;
    background: rgba(255, 255, 255, 0.4);
    transform: rotate(30deg);
    transition: all 0.8s;
  }
  &:hover::after {
    left: 120%;
  }
  @media (max-width: 768px) {
    max-width: none;
  }
`;

const CancelButton = styled(ActionButton)`
  background: linear-gradient(45deg, #ff416c, #ff4b2b);
  box-shadow: 0 6px 20px rgba(255, 65, 108, 0.5);
  max-width: 200px;
  &:hover {
    box-shadow: 0 8px 25px rgba(255, 65, 108, 0.7);
    background: linear-gradient(45deg, #ff4b2b, #ff416c);
  }
  @media (max-width: 768px) {
    max-width: none;
  }
`;

const TableContainer = styled.div`
  background: rgba(43, 30, 77, 0.85);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(106, 17, 203, 0.5);
  position: relative;
  z-index: 1;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHead = styled.thead`
  background: linear-gradient(45deg, #6a11cb, #2575fc);
  color: white;
`;

const TableHeader = styled.th`
  padding: 18px 15px;
  text-align: left;
  font-weight: 600;
  font-size: 1.1rem;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid rgba(106, 17, 203, 0.3);
  &:hover {
    background: rgba(106, 17, 203, 0.2);
  }
  &:last-child {
    border-bottom: none;
  }
`;

const TableCell = styled.td`
  padding: 18px 15px;
  color: #d4c4fb;
  font-size: 1rem;
`;

const ServiceImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 10px;
  object-fit: cover;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const TableActionButton = styled.button`
  background: linear-gradient(45deg, #6a11cb, #2575fc);
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 0.95rem;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(37, 117, 252, 0.4);
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(37, 117, 252, 0.6);
    background: linear-gradient(45deg, #2575fc, #6a11cb);
  }
  &:active {
    transform: translateY(0);
  }
`;

const TableDeleteButton = styled(TableActionButton)`
  background: linear-gradient(45deg, #ff416c, #ff4b2b);
  box-shadow: 0 4px 15px rgba(255, 65, 108, 0.4);
  &:hover {
    box-shadow: 0 6px 20px rgba(255, 65, 108, 0.6);
    background: linear-gradient(45deg, #ff4b2b, #ff416c);
  }
`;

const Alert = styled.div`
  padding: 20px;
  border-radius: 12px;
  margin-bottom: 25px;
  font-size: 1.1rem;
  position: relative;
  z-index: 1;
`;

const SuccessAlert = styled(Alert)`
  background: rgba(40, 167, 69, 0.25);
  color: #a0ffa0;
  border: 1px solid rgba(40, 167, 69, 0.5);
  box-shadow: 0 5px 15px rgba(40, 167, 69, 0.3);
`;

const ErrorAlert = styled(Alert)`
  background: rgba(220, 53, 69, 0.25);
  color: #ffa0a0;
  border: 1px solid rgba(220, 53, 69, 0.5);
  box-shadow: 0 5px 15px rgba(220, 53, 69, 0.3);
`;

// New styled component for image preview
const ImagePreview = styled.div`
  margin-top: 10px;
  img {
    max-width: 200px;
    max-height: 150px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  }
`;

// New styled component for help text
const HelpText = styled.p`
  color: #a0c4ff;
  font-size: 0.9rem;
  margin-top: 5px;
  font-style: italic;
`;

// New styled component for loading state
const LoadingText = styled.p`
  color: #d4c4fb;
  font-size: 0.9rem;
  margin-top: 5px;
`;

const ServiceManagement = () => {
  const [services, setServices] = useState([]);
  const [formData, setFormData] = useState({ name: '', description: '', price: '', duration: '', image: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [imageLoading, setImageLoading] = useState(false);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/api/services`);
      setServices(response.data);
    } catch (error) {
      console.error('Error loading services:', error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    // When image URL changes, show loading state
    if (e.target.name === 'image' && e.target.value) {
      setImageLoading(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description || !formData.price || !formData.duration) {
      setError("Barcha maydonlarni to'ldiring");
      return;
    }
    try {
      if (isEditing) {
        await axios.put(`${BASE_URL}/api/services/${editingId}`, formData);
        setSuccess('Xizmat muvaffaqiyatli yangilandi');
      } else {
        await axios.post(`${BASE_URL}/api/services`, formData);
        setSuccess("Xizmat muvaffaqiyatli qo'shildi");
      }
      setFormData({ name: '', description: '', price: '', duration: '', image: '' });
      setIsEditing(false);
      setEditingId(null);
      fetchServices();
      setTimeout(() => setSuccess(''), 3000);
    } catch (error) {
      setError("Xatolik yuz berdi. Qaytadan urinib ko'ring.");
      console.error('Error saving service:', error);
    }
  };

  const handleEdit = (service) => {
    setFormData({
      name: service.name,
      description: service.description,
      price: service.price,
      duration: service.duration,
      image: service.image || '',
    });
    setIsEditing(true);
    setEditingId(service._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Haqiqatan ham bu xizmatni o'chirmoqchimisiz?")) {
      try {
        await axios.delete(`${BASE_URL}/api/services/${id}`);
        setSuccess("Xizmat muvaffaqiyatli o'chirildi");
        fetchServices();
        setTimeout(() => setSuccess(''), 3000);
      } catch (error) {
        setError("Xizmatni o'chirishda xatolik yuz berdi");
        console.error('Error deleting service:', error);
      }
    }
  };

  const handleCancel = () => {
    setFormData({ name: '', description: '', price: '', duration: '', image: '' });
    setIsEditing(false);
    setEditingId(null);
    setError('');
  };

  return (
    <ManagementContainer>
      <SectionTitle>Xizmatlarni boshqarish</SectionTitle>
      {success && <SuccessAlert>{success}</SuccessAlert>}
      {error && <ErrorAlert>{error}</ErrorAlert>}

      <FormContainer>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="name">Xizmat nomi</Label>
            <Input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} placeholder="Xizmat nomini kiriting" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="description">Tavsif</Label>
            <TextArea id="description" name="description" value={formData.description} onChange={handleInputChange} placeholder="Xizmat tavsifini kiriting" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="price">Narxi (UZS)</Label>
            <Input type="number" id="price" name="price" value={formData.price} onChange={handleInputChange} placeholder="Xizmat narxini kiriting" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="duration">Davomiyligi (daqiqada)</Label>
            <Input type="number" id="duration" name="duration" value={formData.duration} onChange={handleInputChange} placeholder="Xizmat davomiyligini kiriting" />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="image">Rasm URL (ixtiyoriy)</Label>
            <Input type="text" id="image" name="image" value={formData.image} onChange={handleInputChange} placeholder="Rasm URL manzilini kiriting (masalan: https://example.com/image.jpg)" />
            <HelpText>Rasm joylashtirish uchun URL manzilini kiriting. Agar rasm kiritilmasa, standart belgi ishlatiladi.</HelpText>
            {formData.image && (
              <>
                {imageLoading && <LoadingText>Rasm yuklanmoqda...</LoadingText>}
                <ImagePreview>
                  <img 
                    src={formData.image} 
                    alt="Preview" 
                    onLoad={() => setImageLoading(false)}
                    onError={(e) => { 
                      e.target.style.display = 'none'; 
                      setImageLoading(false);
                    }} 
                  />
                </ImagePreview>
              </>
            )}
          </FormGroup>

          <ButtonGroup>
            <ActionButton type="submit">{isEditing ? 'Yangilash' : "Qo'shish"}</ActionButton>
            {isEditing && (
              <CancelButton type="button" onClick={handleCancel}>
                Bekor qilish
              </CancelButton>
            )}
          </ButtonGroup>
        </form>
      </FormContainer>

      <TableContainer>
        <Table>
          <TableHead>
            <tr>
              <TableHeader>Rasm</TableHeader>
              <TableHeader>Nomi</TableHeader>
              <TableHeader>Tavsif</TableHeader>
              <TableHeader>Narxi</TableHeader>
              <TableHeader>Davomiyligi</TableHeader>
              <TableHeader>Amallar</TableHeader>
            </tr>
          </TableHead>
          <tbody>
            {services.map((service) => (
              <TableRow key={service._id}>
                <TableCell>
                  {service.image ? <ServiceImage src={service.image} alt={service.name} /> : '—'}
                </TableCell>
                <TableCell>{service.name}</TableCell>
                <TableCell>{service.description}</TableCell>
                <TableCell>{service.price.toLocaleString()} UZS</TableCell>
                <TableCell>{service.duration} daqiqa</TableCell>
                <TableCell>
                  <ButtonContainer>
                    <TableActionButton onClick={() => handleEdit(service)}>Tahrirlash</TableActionButton>
                    <TableDeleteButton onClick={() => handleDelete(service._id)}>O'chirish</TableDeleteButton>
                  </ButtonContainer>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </ManagementContainer>
  );
};

export default ServiceManagement;