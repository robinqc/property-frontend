import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { PropertyCard } from '../property-card';
jest.mock('next/navigation', () => ({ redirect: jest.fn() }));

const mockProperty = {
  idProperty: '1',
  name: 'Test Property',
  price: 500000,
  idOwner: 'owner1',
  address: '123 Main St',
  images: [{ ifProperty: '1', file: 'https://example.com/image.jpg' }],
  bedrooms: 3,
  bathrooms: 2,
  garageSpaces: 1,
  overview: 'A beautiful property with lots of features and amenities. Perfect for families and professionals alike.',
  livableArea: 1200,
  totalArea: 1500,
  type: 'house',
  area: 'suburb',
  city: 'Testville',
  state: 'TS',
  zipCode: '12345',
  year: 2020,
};

describe('PropertyCard', () => {
  it('renders property details', () => {
    render(<PropertyCard {...mockProperty} />);
    expect(screen.getByText('Test Property')).toBeInTheDocument();
    expect(screen.getByText('123 Main St')).toBeInTheDocument();
    expect(screen.getByText('$')).toBeInTheDocument();
    expect(screen.getByText('500,000')).toBeInTheDocument();
  });

  it('renders property image', () => {
    render(<PropertyCard {...mockProperty} />);
    const img = screen.getByAltText('Test Property');
    expect(img).toHaveAttribute('src', 'https://example.com/image.jpg');
  });

  it('navigates to property details on click', () => {
    const { redirect } = require('next/navigation');
    render(<PropertyCard {...mockProperty} />);
    fireEvent.click(screen.getByTestId('property-card'));
    expect(redirect).toHaveBeenCalledWith('/properties/1');
  });
});
