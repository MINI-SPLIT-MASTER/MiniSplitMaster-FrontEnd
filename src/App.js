//import Route
import { ThemeProvider as CustomThemeProvider } from "./common/ThemeContext";
import { RoutesComponents } from "./routes/index"
import { FooterPage, HeaderPage } from "./common/PageElements";
import { ToastManager } from "./components/ui/alert";
import { useState } from "react";


export const App = () => {
  const [currentThemePage, setCurrentThemePage] = useState('light');

  const bgColor = currentThemePage === 'light' ? '#f3f4f4' : '#878787ff';

  return (
    <CustomThemeProvider>
      <ToastManager />
      <div
        style={{
          background: bgColor,
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <header className="p-0 h-16 sticky top-0 z-50">
          <HeaderPage currentThemePage={currentThemePage} setCurrentThemePage={setCurrentThemePage} />
        </header>
        <main
          style={{
            fontFamily: "'Inter', sans-serif",
            flex: 1,
            width: '100%',
            minHeight: 0,
            display: 'flex',
            flexDirection: 'column',
          }}
          className="min-h-[75vh] w-full"
        >
          <RoutesComponents />
        </main>
        <footer className="relative">
          <FooterPage />
        </footer>
      </div>
    </CustomThemeProvider>
  )
}