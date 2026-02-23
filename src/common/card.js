import { CardContent } from '../components/ui/card';
import { useTheme } from './ThemeContext';
import { getTheme } from '../config';

export const CardComponent = ({ content, className }) => {
  const { theme } = useTheme();
  const currentTheme = getTheme(theme);
  console.log(currentTheme);

  return (
    <CardContent 
      className={`rounded-[8px] p-[16px] w-[95%] mx-auto ${currentTheme.components.Card} ${className}`}
    >
      {content}
    </CardContent>
  );
};
