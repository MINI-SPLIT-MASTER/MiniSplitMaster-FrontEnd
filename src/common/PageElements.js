import React from 'react';
import { Button } from '../components/ui/button';
import { Switch } from '../components/ui/switch';
import { Tooltip, TooltipProvider } from '../components/ui/tooltip';
import "../images/logo.png";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { getTheme } from '../config';
import { useTheme } from './ThemeContext';
import "./index.css"
import { User } from 'lucide-react';

// const StyledTitle = styled(Title)`
//   font-family: "Montserrat", sans-serif;
// `;

export const HeaderPage = ({ currentThemePage, setCurrentThemePage }) => {
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const currentTheme = getTheme(theme);

  const StyledButton = {
    fontFamily: '"Inter", sans-serif',
    color: currentTheme.token.colorText,
    border: 'none',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
    },
  };

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '100%',
      ...currentTheme.components.Header
    }}>
      {/* Left: Logo/Image */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '0 20px' }}>
        <img src={require("../images/logo.png")} alt="Logo" style={{ height: '40px' }} />
        <h1 
          style={{
            margin: 0,
            ...currentTheme.components.Typography
          }}
          className='text-md xl:text-lg'
        >
          MINI SPLIT MASTER
        </h1>
      </div>
      {/* Right: Navigation */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '20px', fontFamily: '"Inter", sans-serif' }}>
        <TooltipProvider>
          <Tooltip title="Toggle Dark/Light Theme">
            <Switch
              onCheckedChange={() => {
                toggleTheme()
                setCurrentThemePage(currentThemePage === 'light' ? 'dark' : 'light')
              }}
              className="custom-switch"
            />
          </Tooltip>
        </TooltipProvider>
        <Button style= {StyledButton} color="default" variant="text" onClick={() => navigate("/")}>Home</Button>
        <Button style= {StyledButton} color="default" variant="text" onClick={() => navigate("/contact")}>Contact</Button>
        <Button style= {StyledButton} color="default" variant="text" onClick={() => navigate("/install-now")}>Install Now</Button>
        <Button style= {StyledButton} color="default" variant="text" onClick={() => navigate("/orders")}>Orders</Button>
        <Button style= {StyledButton} color="default" variant="text" onClick={() => navigate("/user")}>
          <User size={25} />
        </Button>
      </nav>
    </div>
  );
};

export const FooterPage = () => {

  const navigate = useNavigate();
  const { theme } = useTheme();
  const currentTheme = getTheme(theme);

  return (
    <footer 
      className='text-center w-full h-auto flex flex-col'
      style={{
        ...currentTheme.components.Footer
      }}
    >
      <div 
        className='flex max-w-[50%] justify-between items-center mx-auto py-2 gap-2'
      >
        <div style={{ flex: 2, textAlign: 'left', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          <a href="https://minisplitmaster.us/privacy-policy/" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '8px 15px', backgroundColor: '#09a498', color: 'white', textDecoration: 'none', fontSize: 14, fontWeight: 600, borderRadius: 5, transition: 'background-color 0.3s ease' }}>
            Privacy Policy
          </a>
          <a href="https://minisplitmaster.us/terms-and-conditions/" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '8px 15px', backgroundColor: '#09a498', color: 'white', textDecoration: 'none', fontSize: 14, fontWeight: 600, borderRadius: 5, transition: 'background-color 0.3s ease' }}>
            Terms & Conditions
          </a>
          <a href="https://minisplitmaster.us/refund_returns/" target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', padding: '8px 15px', backgroundColor: '#09a498', color: 'white', textDecoration: 'none', fontSize: 14, fontWeight: 600, borderRadius: 5, transition: 'background-color 0.3s ease' }}>
            Refund Policy
          </a>
        </div>
        <div style={{ flex: 1, textAlign: 'right', lineHeight: 1.6 }}>
          <span style={{ fontWeight: 700, color: '#09a498', fontSize: 15 }}>(786) 361-7673</span>
          <span style={{ color: '#333', fontSize: 14 }}> | </span>
          <a href="mailto:hello@minisplitmaster.us" style={{ color: '#09a498', textDecoration: 'none', fontWeight: 700, fontSize: 15 }}>hello@minisplitmaster.us</a>
        </div>
      </div>
      <span 
        className='text-[12px] text-center w-full block mt-2 font-[300] text-gray-600'
      >
        © 2025 MINI SPLIT MASTER. All rights reserved.
      </span>
      {/* iconos de whatsapp e instagram */}
      <div className='flex flex-row gap-4 mx-auto pt-2 pb-4 contrast-0'>
        <a href="https://wa.me/17863617673" target="_blank" rel="noopener noreferrer">
          <img src="/images/whatsapp.png" alt="WhatsApp" className='w-5 h-5' />
        </a>
        <a href="https://www.instagram.com/minisplitmaster.us/" target="_blank" rel="noopener noreferrer">
          <img src="/images/instagram.png" alt="Instagram" className='w-5 h-5' />
        </a>
      </div>
    </footer>
  );
};