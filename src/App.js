import "antd/dist/reset.css";

//import Route
import { ThemeProvider as CustomThemeProvider } from "./common/ThemeContext";
import { RoutesComponents } from "./routes/index"
import { Layout } from "antd";
import { FooterPage, HeaderPage } from "./common/PageElements";
import { useState } from "react";


export const App = () => {
  const { Header, Content, Footer } = Layout;
  const [currentThemePage, setCurrentThemePage] = useState('light');

  const bgColor = currentThemePage === 'light' ? '#f3f4f4' : '#878787ff';

  return (
    <CustomThemeProvider>
      <Layout style={{ background: bgColor }}>
        <Header style={{ padding: '0', height: 'calc(7vh)' }}>
          <HeaderPage currentThemePage={currentThemePage} setCurrentThemePage={setCurrentThemePage} />
        </Header>
        <Content style={{ height: 'calc(88vh)', overflowY: 'auto' }}>
          <RoutesComponents/>
        </Content>
        <Footer style={{ textAlign: 'center', padding: '0', height: 'calc(5vh)' }}>
          <FooterPage />
        </Footer>
      </Layout>
    </CustomThemeProvider>
  )
}