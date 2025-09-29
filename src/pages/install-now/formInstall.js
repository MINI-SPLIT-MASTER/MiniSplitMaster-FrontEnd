import { Button, Col, Flex, Form, notification, Row, Slider, Steps, theme, Typography } from "antd";
import { FormikProvider, useFormik } from "formik";
import { InputFormik } from "../../common/FormikAntd/InputFormik";
import { primaryColor } from "../../config";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { SliderFormik } from "../../common/FormikAntd/SliderFormik";
import { UnitStyle } from "../../common/UnitStyle";

const { Title, Text } = Typography;

const DistanceRoomsizeStep = ({sty}) => {
  return (
    <Flex vertical style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <Text style={{ fontSize: '16px', marginTop: 24 }}>Indicates the size of the room and the distance between the Indoor and Outdoor unit.</Text>
      <Row gutter={[16, 16]} style={{ width: '80%', marginTop: 24,  }}>
        <Col span={12}>
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
        </Col>
        <Col span={12}>
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
        </Col>
      </Row>
    </Flex>
  );
}

const UnitsStep = ({sty}) => {
  return (
    <Flex vertical style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <Text style={{ fontSize: '16px', marginTop: 24 }}> Select the unit.</Text>
      <Row gutter={[16, 16]} style={{ width: '80%', marginTop: 24,  }}>
        <Col span={24}>
          <UnitStyle />
        </Col>
      </Row>
    </Flex>
  );
}

const OthersStep = () => {
  return (
    <Flex vertical style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <Text>Select where the condenser will be mounted and whether it requires city permission:</Text>
      <InputFormik
        name="condenser"
        label="Condenser"
        variant="filled"
        aria-label="condenser"
        placeholder="Enter condenser details"
      />
    </Flex>
  );
}

const ScheduleStep = () => {
  return (
    <Flex vertical style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <Text>Schedule your appointment on the day and time that works best for you:</Text>
      <InputFormik
        name="schedule"
        label="Schedule"
        variant="filled"
        aria-label="schedule"
        placeholder="Enter schedule"
      />
    </Flex>
  );
}

const FormStep = () => {
  return (
    <Flex vertical style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
      <Text>Fill out the form with your information and make the payment:</Text>
      <InputFormik
        name="form"
        label="Form"
        variant="filled"
        aria-label="form"
        placeholder="Enter form details"
      />
    </Flex>
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
  const [current, setCurrent] = useState(0);
  const { token } = theme.useToken();
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  console.log("steps", steps({sty}))

  const items = steps({sty}).map(item => ({ key: item.title, title: item.title }));

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
    onSubmit: values => {
      notification.success({
        message: 'Success',
        description: 'Your message has been sent successfully!',
        placement: 'topRight',
      });
      formik.resetForm();
    },
  });

  const contentStyle = {
    lineHeight: '100px',
    textAlign: 'center',
    width: '90%',
    margin: '10px auto',
    // color: token.colorTextTertiary,
    // backgroundColor: token.colorFillAlter,
    // borderRadius: token.borderRadiusLG,
    // border: `1px dashed ${token.colorBorder}`,
    marginTop: 16,
  };

  return (
    <FormikProvider value={formik}>
      <Form layout="vertical" onFinish={formik.handleSubmit}>
        <Title level={2} style={{ color: primaryColor, textAlign: 'center' }}>Book your installation</Title>
        <Steps current={current} items={items} />
        <div style={contentStyle}>{steps({sty})[current].content}</div>
        <div style={{ marginTop: 24 }}>
          {current > 0 && (
            <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
              Previous
            </Button>
          )}
          {current < steps({sty}).length - 1 && (
            <Button type="primary" onClick={() => next()}>
              Next
            </Button>
          )}
          {current === steps({sty}).length - 1 && (
            <Button type="primary" onClick={() => console.log("Submit form", formik.values)}>
              Book your installation
            </Button>
          )}
        </div>
      </Form>
    </FormikProvider>
  );
}