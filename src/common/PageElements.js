import React, { useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Switch } from '../components/ui/switch';
import { Tooltip, TooltipProvider } from '../components/ui/tooltip';
import "../images/logo.png";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { getTheme, primaryColor } from '../config';
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
  const [ pageActual, setPageActual ] = React.useState("/");

  useEffect(() => {
    setPageActual(window.location.pathname);
  }, [window.location.pathname]);

  const ClassNameButton = `cursor-pointer hover:scale-110 transition-all duration-300 text-[${currentTheme.token.colorText}]`;

  return (
    <>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '100%',
        ...currentTheme.components.Header
      }}>
      {/* Left: Logo/Image */}
      <button className="flex items-center gap-[10px] px-[20px] group cursor-pointer" href="/" onClick={() => {navigate("/"); setPageActual("/");}}>
        <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16" viewBox="0 0 3380 2420" role='img' aria-label='Mini Split Master Logo' preserveAspectRatio='xMidYMid meet'>
          <g id="l10IPyB5iN49NPQ1X2TisAh" fill="rgb(54,140,145)">
            <g>
              <path d="M710 2010 l0 -100 -115 0 -115 0 0 -770 0 -770 1140 0 1140 0 0 770 0 770 -115 0 -115 0 0 101 c0 88 -2 100 -16 95 -9 -3 -37 -6 -64 -6 l-48 0 -32 -95 -32 -95 -717 0 -718 0 -34 100 -34 100 -62 0 -63 0 0 -100z m730 -315 c201 -53 339 -211 376 -431 25 -144 -8 -312 -85 -432 -69 -107 -190 -194 -318 -227 -73 -19 -230 -19 -312 0 -182 43 -328 187 -375 371 -19 72 -21 220 -5 296 28 131 110 259 213 332 110 79 194 104 346 105 62 1 127 -5 160 -14z m1070 -1015 l0 -100 -215 0 -215 0 0 100 0 100 215 0 215 0 0 -100z" />
              <path 
                d="M1241 1423 c-53 -26 -73 -67 -69 -141 l4 -63 -31 8 c-88 23 -152 0 -189 -69 -19 -34 -19 -35 0 -73 34 -69 90 -91 181 -71 l30 7 -1 -60 c-1 -67 18 -102 72 -134 27 -16 37 -17 65 -8 67 23 100 85 86 164 l-7 38 32 -8 c89 -23 153 0 190 69 19 34 19 35 0 73 -34 69 -81 88 -180 71 l-41 -7 10 49 c9 41 7 55 -9 88 -18 36 -74 84 -98 84 -6 0 -26 -8 -45 -17z" 
                className="aspa-giratoria" 
              />
            </g>
          </g>
        </svg>
        <h1 
          style={{
            margin: 0,
            ...currentTheme.components.Typography
          }}
          className='text-md xl:text-lg'
        >
          MINI SPLIT MASTER
        </h1>
      </button>
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
        <div className={`nav-tab${pageActual === "/" ? " selected" : ""}`}>
          <Button className={`${ClassNameButton}`} color="default" variant="text" onClick={() => {navigate("/"); setPageActual("/");}}>Home</Button>
        </div>
        <div className={`nav-tab${pageActual === "/contact" ? " selected" : ""}`}>
          <Button className={`${ClassNameButton}`} color="default" variant="text" onClick={() => {navigate("/contact"); setPageActual("/contact");}}>Contact</Button>
        </div>
        <div className={`nav-tab${pageActual === "/install-now" ? " selected" : ""}`}>
          <Button className={`${ClassNameButton}`} color="default" variant="text" onClick={() => {navigate("/install-now"); setPageActual("/install-now");}}>Install Now</Button>
        </div>
        <div className={`nav-tab${pageActual === "/orders" ? " selected" : ""}`}>
          <Button className={`${ClassNameButton}`} color="default" variant="text" onClick={() => {navigate("/orders"); setPageActual("/orders");}}>Orders</Button>
        </div>
        <Button className={`${ClassNameButton}`} variant="default" onClick={() => {navigate("/user"); setPageActual("/user");}}>
          <User size={25} color={pageActual === "/user" ? primaryColor : "#727272ff"} />
        </Button>
      </nav>
    </div>
    </>
  );
};

export const FooterPage = () => {

  const navigate = useNavigate();
  const { theme } = useTheme();
  const currentTheme = getTheme(theme);

  return (
    <footer 
      className={`text-center w-full h-auto flex flex-col ${currentTheme.components.Footer}`}
    >
      <div 
        className='flex flex-row max-w-[50%] justify-between items-center mx-auto py-2 gap-[50px]'
      >
        <div className='flex flex-row text-left gap-[10px]'>
          <Button
            style={{ display: 'inline-block', padding: '8px 15px', backgroundColor: '#09a498', color: 'white', textDecoration: 'none', fontSize: 14, fontWeight: 600, borderRadius: 5, transition: 'background-color 0.3s ease' }}
            onClick={() => navigate('/privacy-policy/')}
          >
            Privacy Policy
          </Button>
          <Button
            style={{ display: 'inline-block', padding: '8px 15px', backgroundColor: '#09a498', color: 'white', textDecoration: 'none', fontSize: 14, fontWeight: 600, borderRadius: 5, transition: 'background-color 0.3s ease' }}
            onClick={() => navigate('/terms-and-conditions/')}
          >
            Terms & Conditions
          </Button>
          <Button
            style={{ display: 'inline-block', padding: '8px 15px', backgroundColor: '#09a498', color: 'white', textDecoration: 'none', fontSize: 14, fontWeight: 600, borderRadius: 5, transition: 'background-color 0.3s ease' }}
            onClick={() => navigate('/refund-policy/')}
          >
            Refund Policy
          </Button>
        </div>
        <div className='flex flex-col text-right leading-normal'>
          <span style={{ fontWeight: 700, color: '#09a498', fontSize: 15 }}>(786) 361-7673</span>
          {/* <span style={{ color: '#333', fontSize: 14 }}> | </span> */}
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