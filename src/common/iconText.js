import React from 'react';
import { useTheme } from './ThemeContext';
import { getTheme } from '../config';

const IconText = ({ icon: Icon, title, text, classNameText }) => {
  // const { Text, Title } = Typography;
  const { theme } = useTheme();
  const currentTheme = getTheme(theme);

  return (
    <div className="flex flex-col items-center max-w-[18%] hover:scale-110 transition-transform duration-300 ease-in-out select-none">
      {Icon}
      <h4 className={`m-0 mt-1.5 mb-1 text-center ${currentTheme.components.Typography}`}>{title}</h4>
      <p className={`${classNameText} m-0 text-center whitespace-pre-line`}>{text}</p>
    </div>
  );
}

export default IconText;