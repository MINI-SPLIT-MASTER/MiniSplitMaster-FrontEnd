import React from 'react';
import withRouter from '../common/withRouter';
import { useTheme } from '../common/ThemeContext';
import { darkthemecolors, themecolor } from '../config';


const NonAuthLayout = ({ children }) => {
  const { theme } = useTheme();

  // Puedes pasar el theme como prop o contexto a tus componentes
  // Aquí solo se envuelve el children y se expone el theme
  return (
    <div className={theme === 'dark' ? 'dark-theme' : 'light-theme'}>
      {children}
    </div>
  );
}

export default withRouter(NonAuthLayout);