import React, { useState } from 'react';
import { Button, message, Steps, theme } from 'antd';
import { primaryColor } from "../../config";
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    content: 'Select the size of the room where you want to install and the distance between the units.',
  },
  {
    content: 'Select the unit you want.',
  },
  {
    content: 'Select where the condenser will be mounted and whether it requires city permission.',
  },
  {
    content: 'Schedule your appointment on the day and time that works best for you.',
  },
  {
    content: 'Fill out the form with your information and make the payment.',
  },
  {
    content: 'Wait for your appointment day and enjoy the comfort!',
  },
];

export const StepsCard = ({sty}) => {
  const navigate = useNavigate();
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map(item => ({ key: item.title, title: item.title }));
  const contentStyle = {
    lineHeight: '100px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  return (
    <>
      <Steps current={current} items={items} />
      <div style={contentStyle}>{steps[current].content}</div>
      <div style={{ marginTop: 24 }}>
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => navigate('/install-now')}>
            Book your installation
          </Button>
        )}
      </div>
    </>
  );
};