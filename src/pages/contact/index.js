import { useNavigate } from "react-router-dom";
import { useTheme } from "../../common/ThemeContext";
import { getTheme, primaryColor } from "../../config";
import { CardComponent } from "../../common/card";
import { Col, Flex, Form, notification, Row, Typography } from "antd";
import IconText from "../../common/iconText";
import { Calendar1, MapPin, User } from "lucide-react";
import { CardContact } from "../../common/contact";
import { FormikProvider, useFormik } from "formik";
import { InputFormik } from "../../common/FormikAntd/InputFormik";

const { Title, Text } = Typography;

const CardContactHeader = ({ sty }) => (
  <Flex vertical style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
    <Title level={3} style={{ color: primaryColor }}>Feel free to contact our team</Title>
    <Text style={{ ...sty.components.Text }}>
      There is several ways, that you can use to contact us.
    </Text>
  <Flex style={{ width: '100%', justifyContent: 'space-evenly', flexWrap: 'wrap', marginTop: 24, gap: 24 }}>
      <IconText
        icon={<MapPin color={primaryColor} size={50} />}
        title="Company address"
        text={`BeRepair LTD\n100 Orchard St, New York,\nNY 10002, USA`}
        styleText={{ maxWidth: '100%' }}
      />
      <IconText
        icon={<User color={primaryColor} size={50} />}
        title="Phone & email"
        text={`Phone: +91-8010200666\nFax: +91-8010200645\nEmail: office@berepair.com`}
        styleText={{ maxWidth: '100%' }}
      />
      <IconText
        icon={<Calendar1 color={primaryColor} size={50} />}
        title="Opening hours"
        text={`Monday - Friday: 09:00 AM - 06:00 PM\nSaturday: 10:00 AM - 05:00 PM\nSunday: Closed`}
        styleText={{ maxWidth: '100%' }}
      />
    </Flex>
  </Flex>
);

const CardFormContact = ({ sty, onSubmitEmail }) => {

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      message: ''
    },
    onSubmit: values => {
      if (onSubmitEmail) {
        onSubmitEmail(values);
      }
      notification.success({
        message: 'Success',
        description: 'Your message has been sent successfully!',
        placement: 'topRight',
      });
      formik.resetForm();
    },
  });

  return (
    <FormikProvider value={formik}>
      <Form layout="vertical" onFinish={formik.handleSubmit}>
        <Flex vertical style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <Title level={3} style={{ color: primaryColor }}>Fill the form to ask about anything you want</Title>
          <Row gutter={[16, 16]} style={{ width: '80%', marginTop: 24 }}>
            <Col span={12}>
              <InputFormik
                name="name"
                label="Name"
                variant="filled"
                aria-label="name"
                placeholder="Your Name"
              />
            </Col>
            <Col span={12}>
              <InputFormik
                name="email"
                variant="filled"
                label="Email"
                type="email"
                aria-label="email"
                placeholder="Your Email"
              />
            </Col>
            <Col span={24}>
              <InputFormik.TextArea
                name="message"
                variant="filled"
                label="Message"
                aria-label="message"
                placeholder="Your Message"
              />
            </Col>
          </Row>
        </Flex>
      </Form>
    </FormikProvider>
  );
}

export const ContactPage = () => {
  const { theme } = useTheme();
  const currentTheme = getTheme(theme);
  const navigate = useNavigate();

  return (
    <div>
      <CardComponent
        content={<CardContactHeader sty={currentTheme} />}
        style={{ marginTop: '10px', marginBottom: '10px' }}
      />
      <CardComponent
        content={<CardFormContact sty={currentTheme} />}
        style={{ marginTop: '10px', marginBottom: '10px' }}
      />
      <CardComponent
        content={<CardContact sty={currentTheme} />}
        style={{ marginTop: '10px', marginBottom: '10px' }}
      />
    </div>
  );
}