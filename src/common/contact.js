import { Flex, Typography } from "antd";
import { primaryColor } from "../config";

const { Title, Text } = Typography;

export const CardContact = ({sty}) => (
  <Flex style={{ width: '100%', justifyContent: 'space-between', gap: 32 }}>
    <Flex vertical>
      <Text>
        Do you have questions or want to contact us?<br />
        Send us an email at:
      </Text>
      <Title level={4} style={{ color: primaryColor, marginTop: 8 }}>hello@minisplitmaster.us</Title>
    </Flex>
    <Flex vertical style={{ textAlign: 'right' }}>
      <Text>Do you want to receive a detailed job quote?</Text>
      <Title level={5} style={{ color: primaryColor }}>Use our online form.</Title>
      <Text style={{ color: sty.name === 'light' ? 'rgba(0, 0, 0, 0.52)' : '#ffffffbb' }}>Miami, FL</Text>
    </Flex>
  </Flex>
)