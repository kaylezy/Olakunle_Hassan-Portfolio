import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AppBanner from '../Hero/Hero';

// Mock the dependencies
vi.mock('../../hooks/useThemeSwitcher', () => ({
  default: () => ['dark', vi.fn()]
}));

vi.mock('../../hooks/typewriter', () => ({
  default: ({ text }) => <span>{text}</span>
}));

vi.mock('../HireMeModal/HireMeModal', () => ({
  default: () => <div data-testid="hire-me-modal">Mock Modal</div>
}));

// Mock react-icons
vi.mock('react-icons/fi', () => ({
  FiArrowDownCircle: () => <div>MockedIcon</div>
}));

// Mock framer-motion
vi.mock('framer-motion', () => ({
  motion: {
    section: ({ children, ...props }) => <section {...props}>{children}</section>,
    h1: ({ children, ...props }) => <h1 {...props}>{children}</h1>,
    p: ({ children, ...props }) => <p {...props}>{children}</p>,
    div: ({ children, ...props }) => <div {...props}>{children}</div>,
  }
}));

describe('AppBanner', () => {
  it('renders AppBanner component', () => {
    render(<AppBanner />);
    
    expect(screen.getByText(/Hi 👋🏽, I'm/i)).toBeInTheDocument();
    expect(screen.getByText('Olakunle Hassan')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer (Frontend)')).toBeInTheDocument();
    expect(screen.getByText(/Passionate about leveraging/i)).toBeInTheDocument();
  });

  it('Download CV button is present', () => {
    render(<AppBanner />);
    
    const downloadButton = screen.getByText('Download CV');
    expect(downloadButton).toBeInTheDocument();
    expect(downloadButton.closest('a')).toHaveAttribute('href', '/files/Olakunle-Hassan.pdf');
  });

  it('Hire Me button is present', () => {
    render(<AppBanner />);
    
    const hireButton = screen.getByText('Hire Me');
    expect(hireButton).toBeInTheDocument();
  });
});