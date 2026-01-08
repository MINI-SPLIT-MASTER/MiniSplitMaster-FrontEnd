import React, { useState } from 'react';
import { getTheme } from '../../config';
import { Button } from '../../components/ui/button';
import { Stepper } from '../../components/ui/stepper';
import { primaryColor } from "../../config";
import { useNavigate } from 'react-router-dom';


const steps = [
  {
    label: 'Room & Distance',
    content: 'Select the size of the room where you want to install and the distance between the units.'
  },
  {
    label: 'Unit',
    content: 'Select the unit you want.'
  },
  {
    label: 'Condenser',
    content: 'Select where the condenser will be mounted and whether it requires city permission.'
  },
  {
    label: 'Schedule',
    content: 'Schedule your appointment on the day and time that works best for you.'
  },
  {
    label: 'Form & Payment',
    content: 'Fill out the form with your information and make the payment.'
  },
  {
    label: 'Enjoy',
    content: 'Wait for your appointment day and enjoy the comfort!'
  },
];

export const StepsCard = ({sty}) => {
  const navigate = useNavigate();
  const theme = getTheme();
  const { token } = theme;
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent(current + 1);
  const prev = () => setCurrent(current - 1);
  const contentStyle = {
    lineHeight: '100px',
    textAlign: 'center',
    color: token.colorTextTertiary,
    backgroundColor: token.colorFillAlter,
    border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };
  // fallback defensivo para evitar undefined
  const safeSteps = Array.isArray(steps) ? steps : [];
  return (
    <div className="w-full h-auto relative">
      <Stepper steps={safeSteps} activeStep={current} />
      <div style={contentStyle} className='rounded-xl'>{safeSteps[current]?.content || ''}</div>
      <div style={{ marginTop: 24 }} className="flex w-full justify-between items-center">
        {/* Botón Previous a la izquierda */}
        <div>
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={prev}>
              Previous
            </Button>
          )}
        </div>
        {/* Botón Next o Book a la derecha */}
        <div>
          {current < safeSteps.length - 1 && (
            <Button type="primary" onClick={next}>
              Next
            </Button>
          )}
          {current === safeSteps.length - 1 && (
            <Button type="primary" onClick={() => navigate('/install-now')}>
              Book your installation
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};