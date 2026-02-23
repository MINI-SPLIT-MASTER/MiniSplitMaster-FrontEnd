import { CardComponent } from "../../common/card"
import { CardContact } from "../../common/contact";
import { useTheme } from "../../common/ThemeContext";
import { getTheme } from "../../config";
import { FormInstall } from "./formInstall";

export const InstallNowPage = () => {
  const { theme } = useTheme();
  const currentTheme = getTheme(theme);

  return (
  <div className="flex flex-col justify-center items-center text-center">
    <CardComponent
      content={<FormInstall sty={currentTheme} />}
      className="my-[10px]"
    />
    {/* <CardComponent
      content={<CardContact sty={currentTheme} />}
      className="my-[10px]"
    /> */}
  </div>
  )
}