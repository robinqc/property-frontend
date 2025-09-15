import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { ImageCarousel } from '../image-carousel';

const mockImages = [
  { ifProperty: '1', file: 'https://example.com/image1.jpg' },
  { ifProperty: '1', file: 'https://example.com/image2.jpg' },
  { ifProperty: '1', file: 'https://example.com/image3.jpg' },
];

describe('ImageCarousel', () => {
  it('renders the first image and title', () => {
    render(<ImageCarousel images={mockImages} title="Test Property" />);
    expect(screen.getByAltText('Test Property - Image 1')).toHaveAttribute('src', mockImages[0].file);
    expect(screen.getByText('1 / 3')).toBeInTheDocument();
  });

  it('navigates to next and previous images', () => {
    render(<ImageCarousel images={mockImages} title="Test Property" />);
    // Next
    fireEvent.click(screen.getByLabelText('Next image'));
    expect(screen.getByAltText('Test Property - Image 2')).toHaveAttribute('src', mockImages[1].file);
    // Previous
    fireEvent.click(screen.getByLabelText('Previous image'));
    expect(screen.getByAltText('Test Property - Image 1')).toHaveAttribute('src', mockImages[0].file);
  });

  it('shows image thumbnails and navigates on click', () => {
    render(<ImageCarousel images={mockImages} title="Test Property" />);
    const thumbnails = screen.getAllByAltText(/Thumbnail/);
    expect(thumbnails).toHaveLength(3);
    fireEvent.click(thumbnails[2]);
    expect(screen.getByAltText('Test Property - Image 3')).toHaveAttribute('src', mockImages[2].file);
  });
});
