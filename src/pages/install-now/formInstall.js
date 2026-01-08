import { Alert } from "../../components/ui/alert";
import { Stepper } from "../../components/ui/stepper";
import { Button } from "../../components/ui/button";
import { Form } from "../../components/ui/form";
import { getTheme } from "../../config";
import { FormikProvider, useFormik } from "formik";
import { InputFormik } from "../../common/FormikAntd/InputFormik";
import { primaryColor } from "../../config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SliderFormik } from "../../common/FormikAntd/SliderFormik";
import { UnitStyle } from "../../common/UnitStyle";
import { useFetch } from "../../common/hooks/useFetch";
import { getMiniSplits } from "../../helpers/backend_helper";

// const { Title, Text } = Typography;

const DistanceRoomsizeStep = ({sty}) => {
  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <p style={{ fontSize: '16px', marginTop: 24 }}>Indicates the size of the room and the distance between the Indoor and Outdoor unit.</p>
      <div style={{ width: '80%', marginTop: 24,  }} className="flex flex-row mx-auto">
        <div style={{ display: 'flex', gap: 16 }}>
          <SliderFormik
            name="roomsize"
            label="Room Size (square feet)"
            sty={sty}
            aria-label="roomsize"
            placeholder="Enter room size"
            defaultValue={0}
            imagen="https://minisplitmaster.us/wp-content/uploads/2025/09/ChatGPT-Image-1-sept-2025-09_56_44-p1.png"
            card={true}
            min={0}
            seeNumber={true}
            max={1200}
            step={5}
          />
        </div>
        <div style={{ display: 'flex', gap: 16 }}>
          <SliderFormik
            sty={sty}
            name="distance"
            label="Distance (feet)"
            aria-label="distance"
            placeholder="Enter distance"
            defaultValue={15}
            seeNumber={true}
            imagen="https://minisplitmaster.us/wp-content/uploads/2025/09/ChatGPT-Image-2-sept-2025-10_31_44-p.m.png"
            card={true}
            min={0}
            max={150}
            step={5}
          />
        </div>
      </div>
    </div>
  );
}

const UnitsStep = ({sty}) => {
  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <p style={{ fontSize: '16px', marginTop: 24 }}> Select the unit.</p>
      <div style={{ width: '80%', marginTop: 24,  }}>
        <div style={{ display: 'flex', gap: 16 }}>
          <UnitStyle />
        </div>
      </div>
    </div>
  );
}

const OthersStep = () => {
  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <p>Select where the condenser will be mounted and whether it requires city permission:</p>
      <InputFormik
        name="condenser"
        label="Condenser"
        variant="filled"
        aria-label="condenser"
        placeholder="Enter condenser details"
      />
    </div>
  );
}

const ScheduleStep = () => {
  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <p>Schedule your appointment on the day and time that works best for you:</p>
      <InputFormik
        name="schedule"
        label="Schedule"
        variant="filled"
        aria-label="schedule"
        placeholder="Enter schedule"
      />
    </div>
  );
}

const FormStep = () => {
  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <p>Fill out the form with your information and make the payment:</p>
      <InputFormik
        name="form"
        label="Form"
        variant="filled"
        aria-label="form"
        placeholder="Enter form details"
      />
    </div>
  );
}

const steps = ({sty}) => {
  return [
    {
      content: (<DistanceRoomsizeStep sty={sty} />),
    },
    {
      content: (<UnitsStep sty={sty} />),
    },
    {
      content: (<OthersStep sty={sty} />),
    },
    {
      content: (<ScheduleStep sty={sty} />),
    },
    {
      content: (<FormStep sty={sty} />),
    },
    {
      content: 'Wait for your appointment day and enjoy the comfort!',
    },
  ]
}

export const FormInstall = ({sty, onSubmitForm}) => {
  const navigate = useNavigate();
  const theme = getTheme();
  const [current, setCurrent] = useState(0);
  const [alert, setAlert] = useState({ type: '', message: '' });
  const { token } = theme;
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };

  // const minisplitsQuery = useFetch({
  //   fetch: getMiniSplits,
  //   variables: {},
  //   isGet: true,
  //   transformData: res => res,
  //   initialValues: [],
  //   onSuccess: data => data,
  // });

  // Adaptar para Stepper seguro y API correcta
  const safeSteps = Array.isArray(steps({sty})) ? steps({sty}) : [];
  const stepperSteps = safeSteps.map((item, idx) => ({ label: `Paso ${idx + 1}`, ...item }));

  const formik = useFormik({
    initialValues: {
      roomsize: 0,
      distance: 15,
      unit: '',
      condenser_location: '',
      city_permisology: '',
      schedule: '',
      name: '',
      email: '',
      message: ''
    },
    onSubmit: (values, { resetForm }) => {
      try {
        // Simula éxito
        setAlert({ type: 'success', message: 'Your message has been sent successfully!' });
        resetForm();
      } catch (error) {
        setAlert({ type: 'error', message: typeof error === 'string' ? error : (error?.message || JSON.stringify(error)) });
      }
    },
  });

  const contentStyle = {
    lineHeight: '100px',
    textAlign: 'center',
    width: '90%',
    margin: '10px auto',
    marginTop: 16,
  };

  return (
    <FormikProvider value={formik}>
      {alert.type === 'success' && (
        <Alert>
          <strong>Success:</strong> {alert.message}
        </Alert>
      )}
      {alert.type === 'error' && (
        <Alert variant="destructive">
          <strong>Error:</strong> {alert.message}
        </Alert>
      )}
      <Form layout="vertical" onFinish={formik.handleSubmit}>
        <h2 style={{ color: primaryColor, textAlign: 'center' }}>Book your installation</h2>
        <Stepper steps={stepperSteps} activeStep={current} />
        <div style={contentStyle}>{safeSteps[current]?.content || ''}</div>
        <div style={{ marginTop: 24 }}>
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
          {current < safeSteps.length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === safeSteps.length - 1 && (
            <Button type="primary" onClick={async () => {
              try {
                // Si el submit es asíncrono, espera el resultado
                const maybePromise = formik.handleSubmit();
                if (maybePromise && typeof maybePromise.then === 'function') {
                  await maybePromise;
                }
              } catch (error) {
                setAlert({ type: 'error', message: typeof error === 'string' ? error : (error?.message || JSON.stringify(error)) });
              }
            }}>
              Book your installation
            </Button>
          )}
        </div>
      </Form>
    </FormikProvider>
  );
}