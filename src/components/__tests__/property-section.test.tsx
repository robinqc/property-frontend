import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { PropertySection } from '../property-section';
jest.mock('next/navigation', () => ({ redirect: jest.fn() }));

const mockProperties = [
  {
    idProperty: '1',
    name: 'Test Property 1',
    price: 500000,
    idOwner: 'owner1',
    address: '123 Main St',
    images: [{ ifProperty: '1', file: 'https://example.com/image1.jpg' }],
    bedrooms: 3,
    bathrooms: 2,
    garageSpaces: 1,
    overview: 'Overview 1',
    livableArea: 1200,
    totalArea: 1500,
    type: 'house',
    area: 'suburb',
    city: 'Testville',
    state: 'TS',
    zipCode: '12345',
    year: 2020,
  },
  {
    idProperty: '2',
    name: 'Test Property 2',
    price: 750000,
    idOwner: 'owner2',
    address: '456 Side St',
    images: [{ ifProperty: '2', file: 'https://example.com/image2.jpg' }],
    bedrooms: 4,
    bathrooms: 3,
    garageSpaces: 2,
    overview: 'Overview 2',
    livableArea: 1600,
    totalArea: 2000,
    type: 'apartment',
    area: 'city',
    city: 'Sampletown',
    state: 'ST',
    zipCode: '67890',
    year: 2021,
  },
];

describe('PropertySection', () => {
  it('renders section title', () => {
    render(<PropertySection title="Featured Properties" properties={mockProperties} />);
    expect(screen.getByText('Featured Properties')).toBeInTheDocument();
  });

  it('renders property cards in grid view', () => {
    render(<PropertySection title="Featured Properties" properties={mockProperties} />);
    expect(screen.getByText('Test Property 1')).toBeInTheDocument();
    expect(screen.getByText('Test Property 2')).toBeInTheDocument();
  });

  it('switches to list view and renders property list items', () => {
    render(<PropertySection title="Featured Properties" properties={mockProperties} />);
    fireEvent.click(screen.getByTestId('list-view-btn'));
    expect(screen.getByText('Test Property 1')).toBeInTheDocument();
    expect(screen.getByText('Test Property 2')).toBeInTheDocument();
  });
});
