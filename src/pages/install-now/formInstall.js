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
import { SliderUnitsFormik } from "../../common/FormikAntd/SliderUnitsFormik";
import { RadioFormik } from "../../common/FormikAntd/RadioFormik";
import { RadioGroupHtmlItem } from "../../components/ui/radio-group";
import { RadioGroup } from "../../components/ui/radio-group";
import { useField } from "formik";
import { CalendarFormik } from "../../common/FormikAntd/CalendarFormik";

// const { Title, Text } = Typography;

const DistanceRoomsizeStep = ({sty}) => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <p className="text-[16px] mt-[24px]">Indicates the size of the room and the distance between the Indoor and Outdoor unit.</p>
      <div className="w-[80%] mt-[24px] flex flex-row mx-auto gap-6">
        <div className="flex gap-[16px] w-1/2">
          <SliderFormik
            name="roomsize"
            label="Room Size (square feet)"
            sty={sty}
            aria-label="roomsize"
            placeholder="Enter room size"
            defaultValue={0}
            // imagen="https://minisplitmaster.us/wp-content/uploads/2025/09/ChatGPT-Image-1-sept-2025-09_56_44-p1.png"
            card={true}
            min={0}
            seeNumber={true}
            max={1200}
            step={5}
          />
        </div>
        <div className="flex gap-[16px] w-1/2">
          <SliderUnitsFormik
            sty={sty}
            name="distance"
            label="Distance (feet)"
            aria-label="distance"
            placeholder="Enter distance"
            defaultValue={15}
            seeNumber={true}
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
  // Opciones de ejemplo, reemplaza por tus datos reales
  const units = [
    { value: "modelo1", data: { nombre: "Modelo 1" } },
    { value: "modelo2", data: { nombre: "Modelo 2" } },
  ];
  const [field, , helpers] = useField("unit");
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <p className="text-[16px] mt-[24px]"> Select the unit.</p>
      <div className="w-[80%] mt-[24px]">
        <RadioGroup
          value={field.value}
          onValueChange={val => helpers.setValue(val)}
          style={{ gap: "20px", justifyContent: "center", width: "100%" }}
          name="unit"
        >
          {units.map(unit => (
            <RadioGroupHtmlItem value={unit.value} key={unit.value}>
              <UnitStyle data={unit.data} />
            </RadioGroupHtmlItem>
          ))}
        </RadioGroup>
      </div>
    </div>
  );
}

const OthersStep = ({formik, sty}) => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <div className="flex flex-row gap-8 w-[80%] mt-[24px] items-center justify-center">
        <div className="flex flex-col">
          {formik.values.condenser_mounting === 'wall' ? (
            <img
              src="https://minisplitmaster.us/wp-content/uploads/2025/09/ChatGPT-Image-2-sept-2025-01_44_38-p.m.png"
              alt="Condenser Location Options"
              style={{ maxWidth: '400px', height: 'auto', margin: '0 auto' }}
            />
          ) : formik.values.condenser_mounting === 'floor' ? (
            <img
              src="https://minisplitmaster.us/wp-content/uploads/2025/10/Gemini_Generated_Image_ap9csxap9csxap9c.png"
              alt="Condenser Location Options"
              style={{ maxWidth: '400px', height: 'auto', margin: '0 auto' }}
            />
          ) : (
            <p>other</p>
          )}
          <RadioFormik
            name="condenser_mounting"
            label="Condenser Mounting"
            // variant="filled"
            aria-label="condenser_mounting"
            options={[
              { label: 'Floor Mounting', value: 'floor' },
              { label: 'Wall Mounting', value: 'wall' },
              { label: "Don't Know", value: 'dontknow' },
            ]}
          />
        </div>
        {formik.values.condenser_mounting === 'wall' && (
          <div className="flex flex-col">
            {formik.values.installation_access_difficulty === 'low' && (
              <img
                src="https://minisplitmaster.us/wp-content/uploads/2025/10/Gemini_Generated_Image_2iabm22iabm22iab-e1759791134299.png"
                alt="Condenser Location Options"
                style={{ maxWidth: '400px', height: 'auto', margin: '0 auto' }}
              />
            )}
            {formik.values.installation_access_difficulty === 'high' && (
              <img
                src="https://minisplitmaster.us/wp-content/uploads/2025/10/Gemini_Generated_Image_r9oaidr9oaidr9oa.png"
                alt="Condenser Location Options"
                style={{ maxWidth: '400px', height: 'auto', margin: '0 auto' }}
              />
            )}
              <RadioFormik
                name="installation_access_difficulty"
                label="Installation Access Difficulty"
                variant="filled"
                aria-label="installation_access_difficulty"
                options={[
                  { label: 'Low Difficulty', value: 'low' },
                  { label: 'High Difficulty', value: 'high' },
                ]}
              />
          </div>
        )}
      </div>
    </div>
  );
}

const ScheduleStep = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
      <CalendarFormik
        name="fecha"
        label="Selecciona la fecha de instalación"
        // Puedes pasarle props extra de Calendar si lo necesitas
      />
    </div>
  );
}

const FormStep = () => {
  return (
    <div className="flex flex-col justify-center items-center text-center">
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

const steps = ({sty, formik}) => {
  return [
    {
      content: (<DistanceRoomsizeStep sty={sty} />),
    },
    {
      content: (<OthersStep sty={sty} formik={formik} />),
    },
    {
      content: (<UnitsStep sty={sty} />),
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
      message: '',
      fecha: null, // <-- importante para CalendarFormik
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

  console.log("Formik values:", formik.values);

  // Adaptar para Stepper seguro y API correcta
  const safeSteps = Array.isArray(steps({sty, formik})) ? steps({sty, formik}) : [];
  const stepperSteps = safeSteps.map((item, idx) => ({ label: `Paso ${idx + 1}`, ...item }));



  const contentClass = "leading-[100px] text-center w-[90%] mx-auto mt-[16px]";

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
        <h2 className="text-center" style={{ color: primaryColor }}>Book your installation</h2>
        <Stepper steps={stepperSteps} activeStep={current} />
        <div className={contentClass}>{safeSteps[current]?.content || ''}</div>
        <div className="flex w-full justify-between items-center mt-[24px] ">
          <div>
            {current > 0 && (
              <Button style={{ margin: '0 8px', backgroundColor: '#BAADAB' }} onClick={prev} className="text-white hover:!bg-[#a79896] hover:!font-[700] transition-colors duration-600">
                Previous
              </Button>
            )}
          </div>
          {/* Botón Next o Book a la derecha */}
          <div>
            {current < safeSteps.length - 1 && (
              <Button variant="default" onClick={next} className={theme.components.Button} style={{ backgroundColor: primaryColor }}>
                Next
              </Button>
            )}
          
            {current === safeSteps.length - 1 && (
              <Button variant="default" className={theme.components.Button} style={{ backgroundColor: primaryColor }} onClick={async () => {
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
        </div>
      </Form>
    </FormikProvider>
  );
}