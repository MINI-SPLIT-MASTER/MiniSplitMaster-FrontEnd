import { Button, Flex, Row, Typography } from "antd";
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

const { Text, Title } = Typography;

const CardVideo = ({sty}) => (
  <Flex vertical style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
    <Title level={3} style={{ color: primaryColor }}>What is a Mini Split?</Title>
    <Text style={{ ...sty.components.Text }}>A mini-split (also known as a ductless mini-split) is a type of heating and cooling system commonly used in homes and buildings. Unlike traditional HVAC systems that rely on ductwork to distribute air, mini-split systems are ductless.</Text>
    <div style={{
      width: '80%',
      background: 'black',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '8px',
      marginTop: '15px',
      overflow: 'hidden',
    }}>
      <video
        width="100%"
        height="500"
        controls
        style={{ background: sty.name === 'light' ? '#fff' : '#000', borderRadius: '8px', display: 'block', maxHeight: 500, objectFit: 'contain' }}
      >
        <source src="https://minisplitmaster.us/wp-content/uploads/2025/06/video_2025-06-25_14-40-14.mp4#t=0.701" type="video/mp4" />
      </video>
    </div>
  </Flex>
)

const CardAbout = ({sty}) => (
  <Flex vertical style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
    <Title level={3} style={{ color: primaryColor }}>ABOUT MINI SPLIT TECHNOLOGY</Title>
    <Text style={{ ...sty.components.Text }}>Mini split systems are a modern, energy-efficient solution for heating and cooling individual rooms or zones in your home. Unlike traditional HVAC systems, they don’t rely on bulky ductwork, making them ideal for retrofits, room additions, or spaces where ducts aren’t feasible.</Text>
    <Flex style={{ width: '100%', justifyContent: 'center', gap: 24, flexWrap: 'wrap', marginTop: 24 }}>
      <IconText
        icon={<Leaf color={primaryColor} size={50} />}
        title="Energy Efficiency"
        text="Save money with systems that only heat or cool where you need."
        styleText={{ maxWidth: '80%' }}
      />
      <IconText
        icon={<Snowflake color={primaryColor} size={50} />}
        title="Individual Comfort"
        text="Set different temperatures for different rooms."
        styleText={{ maxWidth: '80%' }}
      />
      <IconText
        icon={<VolumeX color={primaryColor} size={50} />}
        title="Quiet Operation"
        text="Whisper-quiet design keeps your space peaceful."
        styleText={{ maxWidth: '80%' }}
      />
      <IconText
        icon={<SquareRoundCorner color={primaryColor} size={50} />}
        title="Compact and Stylish"
        text="Sleek indoor units blend seamlessly with any décor."
        styleText={{ maxWidth: '80%' }}
      />
      <IconText
        icon={<Recycle color={primaryColor} size={50} />}
        title="Eco-Friendly"
        text="Many systems use environmentally friendly refrigerants."
        styleText={{ maxWidth: '80%' }}
      />
    </Flex>
  </Flex>
)

const CardHowItWorks = ({sty}) => (
  <Flex vertical style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
    <Title level={3} style={{ color: primaryColor }}>How it works</Title>
    <Text style={{ ...sty.components.Text }}>Simple Steps to Get Your Mini Split Installed.</Text>
    <img src={require("../../images/steps.png")} alt="Steps" style={{ width: '90%', marginTop: 10 }} />
  </Flex>
)

export const HomePage = () => {
  const { theme } = useTheme();
  const currentTheme = getTheme(theme);
  const navigate = useNavigate();

  return (
    <div>
      <div style={{ position: 'relative', width: '100%' }}>
        <img src={bgPage} alt="ChatGPT" style={{ width: "100%", maxHeight: "85vh", objectFit: "cover", display: 'block' }} />
        <Flex vertical style={{
          position: 'absolute',
          top: '30%',
          left: '50%',
          transform: 'translate(-50%, -20%)',
          textAlign: 'center',
          gap: '10px',
          width: '100%',
          pointerEvents: 'none',
        }}>
          <div style={{ pointerEvents: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <Text style={{ fontSize: '16px', color: 'black' }}>Ready for a Comfort Upgrade?</Text>
            <Text  style={{ fontSize: '24px', fontWeight: 'bold', color: 'black'}}>Get Your Mini Split Installed Today!</Text>
            <Text  style={{ color: "white", backgroundColor: 'rgba(0, 0, 0, 0.19)', width: '100%', fontWeight: 'bold', fontSize: '18px', padding: '12px 16px' }}>All equipment includes installation</Text>
            <Button
              type="primary" 
              style={{ 
                marginTop: '10px',
                padding: '20px',
                borderRadius: '25px',
                ...currentTheme.components.Button
              }}
              onClick={() => navigate('/install-now')}
            >
              Book your installation
            </Button>
          </div>
        </Flex>
      </div>
      <CardComponent
        content={<CardVideo sty={currentTheme} />}
        style={{ marginTop: '10px' }}
      />
      <CardComponent
        content={<CardAbout sty={currentTheme} />}
        style={{ marginTop: '10px' }}
      />
      <CardComponent
        content={<StepsCard sty={currentTheme} />}
        style={{ marginTop: '10px' }}
      />
      <CardComponent
        content={<CardContact sty={currentTheme} />}
        style={{ marginTop: '10px', marginBottom: '10px' }}
      />
    </div>
  );
};
