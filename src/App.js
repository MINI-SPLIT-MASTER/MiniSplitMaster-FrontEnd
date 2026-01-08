//import Route
import { ThemeProvider as CustomThemeProvider } from "./common/ThemeContext";
import { RoutesComponents } from "./routes/index"
import { FooterPage, HeaderPage } from "./common/PageElements";
import { useState } from "react";


export const App = () => {
  const [currentThemePage, setCurrentThemePage] = useState('light');

  const bgColor = currentThemePage === 'light' ? '#f3f4f4' : '#878787ff';

  return (
    <CustomThemeProvider>
      <div style={{ background: bgColor }}>
        <header 
          className="p-0 h-16 sticky top-0 z-50"
        >
          <HeaderPage currentThemePage={currentThemePage} setCurrentThemePage={setCurrentThemePage} />
        </header>
        <main 
          className=""
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <RoutesComponents/>
        </main>
        <footer 
          className="relative"
        >
          <FooterPage />
        </footer>
      </div>
    </CustomThemeProvider>
  )
}