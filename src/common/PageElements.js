import React from 'react';
import { Button, Flex, Switch, Tooltip, Typography  } from 'antd';
import "../images/logo.png";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { getTheme } from '../config';
import { useTheme } from './ThemeContext';
import "./index.css"
import { User } from 'lucide-react';

const { Title } = Typography;

const StyledTitle = styled(Title)`
  font-family: "Montserrat", sans-serif;
`;

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
      <Flex align="center" gap="10px" style={{ padding: '0 20px' }}>
        <img src={require("../images/logo.png")} alt="Logo" style={{ height: '40px' }} />
        <StyledTitle 
          level={2}
          style={{
            margin: 0,
            ...currentTheme.components.Typography
          }}
        >
          MINI SPLIT MASTER
        </StyledTitle>
      </Flex>
      {/* Right: Navigation */}
      <nav style={{ display: 'flex', alignItems: 'center', gap: '20px', fontFamily: '"Inter", sans-serif' }}>
        <Tooltip title="Toggle Dark/Light Theme">
          <Switch
            onChange={() => {
              toggleTheme()
              setCurrentThemePage(currentThemePage === 'light' ? 'dark' : 'light')
            }} className="custom-switch" />
        </Tooltip>
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

  const { theme } = useTheme();
  const currentTheme = getTheme(theme);

  return (
    <footer style={{
      padding: '10px 20px',
      textAlign: 'center',
      height: '100%',
      ...currentTheme.components.Footer
    }}>
      <span>© 2025 MINI SPLIT MASTER. All rights reserved.</span>
    </footer>
  );
};