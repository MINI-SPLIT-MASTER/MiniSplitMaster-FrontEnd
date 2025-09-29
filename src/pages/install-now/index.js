import { Flex } from "antd"
import { CardComponent } from "../../common/card"
import { CardContact } from "../../common/contact";
import { useTheme } from "../../common/ThemeContext";
import { getTheme } from "../../config";
import { FormInstall } from "./formInstall";

export const InstallNowPage = () => {
  const { theme } = useTheme();
  const currentTheme = getTheme(theme);

  return (
  <Flex vertical style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
    <CardComponent
      content={<FormInstall sty={currentTheme} />}
      style={{ marginTop: '10px', marginBottom: '10px' }}
    />
    <CardComponent
      content={<CardContact sty={currentTheme} />}
      style={{ marginTop: '10px', marginBottom: '10px' }}
    />
  </Flex>
  )
}