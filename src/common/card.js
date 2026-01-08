import { CardContent } from '../components/ui/card';
import { useTheme } from './ThemeContext';
import { getTheme } from '../config';

export const CardComponent = ({ content, style }) => {
  const { theme } = useTheme();
  const currentTheme = getTheme(theme);
  console.log(currentTheme);

  return (
    <CardContent style={{
      borderRadius: '8px',
      padding: '16px',
      width: '95%',
      margin: '0 auto',
      ...currentTheme.components.Card,
      ...style
    }}>
      {content}
    </CardContent>
  );
};
