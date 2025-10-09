import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingList from './BookingList';



// Mock the axios import in the BookingList component
jest.mock('axios', () => ({
  get: jest.fn()
}));

describe('BookingList Component', () => {
  it('should render without crashing', () => {
    render(<BookingList />);
    expect(screen.getByText('Bronlar')).toBeInTheDocument();
  });

  it('should display loading state initially', () => {
    render(<BookingList />);
    expect(screen.getByText('Yuklanmoqda...')).toBeInTheDocument();
  });
});