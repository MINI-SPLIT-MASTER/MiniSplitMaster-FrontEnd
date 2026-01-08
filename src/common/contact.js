import { primaryColor } from "../config";

// const { Title, Text } = Typography;

export const CardContact = ({sty}) => (
  <div style={{ width: '100%', justifyContent: 'space-between', gap: 32 }}>
    <div>
      <p>
        Do you have questions or want to contact us?<br />
        Send us an email at:
      </p>
      <h4 style={{ color: primaryColor, marginTop: 8 }}>hello@minisplitmaster.us</h4>
    </div>
    <div style={{ textAlign: 'right' }}>
      <p>Do you want to receive a detailed job quote?</p>
      <h5 style={{ color: primaryColor }}>Use our online form.</h5>
      <p style={{ color: sty.name === 'light' ? 'rgba(0, 0, 0, 0.52)' : '#ffffffbb' }}>Miami, FL</p>
    </div>
  </div>
)