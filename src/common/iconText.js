import React from 'react';
import { useTheme } from './ThemeContext';
import { getTheme } from '../config';

const IconText = ({ icon: Icon, title, text, styleText }) => {
  // const { Text, Title } = Typography;
  const { theme } = useTheme();
  const currentTheme = getTheme(theme);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '18%' }}>
      {Icon}
      <h4 style={{ margin: 0, marginTop: 6, marginBottom: 4, textAlign: 'center', ...currentTheme.components.Typography }}>{title}</h4>
      <p style={{ margin: 0, textAlign: 'center', whiteSpace: 'pre-line', ...styleText }}>{text}</p>
    </div>
  );
}

export default IconText;