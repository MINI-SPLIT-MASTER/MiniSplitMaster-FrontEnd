import { Button } from "../../components/ui/button";
import { CardComponent } from "../../common/card";
import { useTheme } from "../../common/ThemeContext";
import { getTheme } from "../../config";
import bgPage from "../../images/bgPage.png";
import { useNavigate } from "react-router-dom";
import { primaryColor } from "../../config";
import IconText from "../../common/iconText";
import { Leaf, Recycle, Snowflake, SquareRoundCorner, VolumeX } from "lucide-react";
import "../../images/steps.png"
import { CardContact } from "../../common/contact";
import { StepsCard } from "./stepsCard";

// const { Text, Title } = Typography;

const CardVideo = ({sty}) => (
  <div className="flex justify-center items-center text-center flex-col">
    <h3 style={{ color: primaryColor }}>What is a Mini Split?</h3>
    <p className={sty.components.Text}>A mini-split (also known as a ductless mini-split) is a type of heating and cooling system commonly used in homes and buildings. Unlike traditional HVAC systems that rely on ductwork to distribute air, mini-split systems are ductless.</p>
    <div 
      className="w-[80%] flex justify-center items-center rounded-lg mt-4 overflow-hidden mx-auto shadow-lg"
      >
      <video
        width="100%"
        height="500"
        controls
        className="rounded-[8px] block mx-auto max-h-[500px] object-contain"
        style={{ background: sty.name === 'light' ? '#fff' : '#000' }}
      >
        <source src="https://minisplitmaster.us/wp-content/uploads/2025/06/video_2025-06-25_14-40-14.mp4#t=0.701" type="video/mp4" />
      </video>
    </div>
  </div>
)

const CardAbout = ({sty}) => (
  <div className="justify-center items-center text-center flex flex-col gap-4">
    <h3 style={{ color: primaryColor }}>ABOUT MINI SPLIT TECHNOLOGY</h3>
    <p className={sty.components.Text}>Mini split systems are a modern, energy-efficient solution for heating and cooling individual rooms or zones in your home. Unlike traditional HVAC systems, they don’t rely on bulky ductwork, making them ideal for retrofits, room additions, or spaces where ducts aren’t feasible.</p>
    <div 
    className="w-full flex justify-center gap-6 flex-wrap mt-6"
      >
      <IconText
        icon={<Leaf color={primaryColor} size={50} />}
        title="Energy Efficiency"
        text="Save money with systems that only heat or cool where you need."
        classNameText="max-w-[80%]"
      />
      <IconText
        icon={<Snowflake color={primaryColor} size={50} />}
        title="Individual Comfort"
        text="Set different temperatures for different rooms."
        classNameText="max-w-[80%]"
      />
      <IconText
        icon={<VolumeX color={primaryColor} size={50} />}
        title="Quiet Operation"
        text="Whisper-quiet design keeps your space peaceful."
        classNameText="max-w-[80%]"
      />
      <IconText
        icon={<SquareRoundCorner color={primaryColor} size={50} />}
        title="Compact and Stylish"
        text="Sleek indoor units blend seamlessly with any décor."
        classNameText="max-w-[80%]"
      />
      <IconText
        icon={<Recycle color={primaryColor} size={50} />}
        title="Eco-Friendly"
        text="Many systems use environmentally friendly refrigerants."
        classNameText="max-w-[80%]"
      />
    </div>
  </div>
)

const CardHowItWorks = ({sty}) => (
  <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
    <h3 style={{ color: primaryColor }}>How it works</h3>
    <p className={sty.components.Text}>Simple Steps to Get Your Mini Split Installed.</p>
    <img src={require("../../images/steps.png")} alt="Steps" style={{ width: '90%', marginTop: 10 }} />
  </div>
)

export const HomePage = () => {
  const { theme } = useTheme();
  const currentTheme = getTheme(theme);
  const navigate = useNavigate();

  return (
    <div
      className="w-full h-auto"
    >
      <div style={{ position: 'relative', width: '100%' }}>
        <img src={bgPage} alt="BGPrincipal" className="w-full max-h-[85vh] object-cover block"/>
        <div 
          className="absolute w-full h-full top-[25%] flex flex-col items-center text-center gap-[10px]"
        >
          <div className="pointer-events-auto flex flex-col items-center gap-[10px] w-full">
            <p className="text-[16px] text-black">Ready for a Comfort Upgrade?</p>
            <h2 className="text-[24px] font-bold text-black">Get Your Mini Split Installed Today!</h2>
            <p className="w-full font-bold text-[18px] text-white bg-[rgba(0,0,0,0.19)] py-[12px] px-[16px]">All equipment includes installation</p>
            <Button
              variant="default"
              className={`mt-[10px] p-[20px] rounded-[25px] ${currentTheme.components.Button}`}
              style={{ backgroundColor: primaryColor }}
              onClick={() => navigate('/install-now')}
            >
              Book your installation
            </Button>
          </div>
        </div>
      </div>
      <CardComponent
        content={<CardVideo sty={currentTheme} />}
        className="mt-[10px]"
      />
      <CardComponent
        content={<CardAbout sty={currentTheme} />}
        className="mt-[10px]"
      />
      <CardComponent
        content={<StepsCard sty={currentTheme} />}
        className="my-[10px]"
      />
      {/* <CardComponent
        content={<CardContact sty={currentTheme} />}
        className="my-[10px]"
      /> */}
    </div>
  );
};
