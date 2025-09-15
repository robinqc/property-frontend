import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { SearchBar } from '../search-bar';


const mockReplace = jest.fn();
jest.mock('next/navigation', () => ({
  usePathname: () => '/properties',
  useRouter: () => ({ replace: mockReplace }),
  useSearchParams: () => new URLSearchParams('searchTerm=initial'),
}));

describe('SearchBar', () => {
  it('renders input with initial value from search params', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText(/search properties/i);
    expect(input).toHaveValue('initial');
  });

  it('updates input value on change', () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText(/search properties/i);
    fireEvent.change(input, { target: { value: 'new value' } });
    expect(input).toHaveValue('new value');
  });

  beforeEach(() => {
    mockReplace.mockClear();
  });

  it('calls router.replace with updated searchTerm after debounce', async () => {
    render(<SearchBar />);
    const input = screen.getByPlaceholderText(/search properties/i);
    fireEvent.change(input, { target: { value: 'debounced' } });
    await waitFor(() => {
      expect(mockReplace).toHaveBeenCalledWith(expect.stringContaining('searchTerm=debounced'));
    }, { timeout: 500 });
  });
});
