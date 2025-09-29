import { Typography } from 'antd';
import React from 'react';
import { useTheme } from './ThemeContext';
import { getTheme } from '../config';

const IconText = ({ icon: Icon, title, text, styleText }) => {
  const { Text, Title } = Typography;
  const { theme } = useTheme();
  const currentTheme = getTheme(theme);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '18%' }}>
      {Icon}
      <Title level={4} style={{ margin: 0, marginTop: 6, marginBottom: 4, textAlign: 'center', ...currentTheme.components.Typography }}>{title}</Title>
      <Text style={{ margin: 0, textAlign: 'center', whiteSpace: 'pre-line', ...styleText }}>{text}</Text>
    </div>
  );
}

export default IconText;