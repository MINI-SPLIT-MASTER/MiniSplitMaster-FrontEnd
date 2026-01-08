import { useNavigate } from "react-router-dom";
import { useTheme } from "../../common/ThemeContext";
import { getTheme, primaryColor } from "../../config";
import { CardComponent } from "../../common/card";
import { Form } from "../../components/ui/form";
import { Alert } from "../../components/ui/alert";
import IconText from "../../common/iconText";
import { Calendar1, MapPin, User } from "lucide-react";
import { CardContact } from "../../common/contact";
import { FormikProvider, useFormik } from "formik";
import { InputFormik } from "../../common/FormikAntd/InputFormik";

// const { Title, Text } = Typography;

const CardContactHeader = ({ sty }) => (
  <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
    <h3 style={{ color: primaryColor }}>Feel free to contact our team</h3>
    <p style={{ ...sty.components.Text }}>
      There is several ways, that you can use to contact us.
    </p>
  <div
    className="w-full justify-center flex flex-wrap mt-6 gap-28"
    >
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
    </div>
  </div>
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
      Alert({
        message: 'Success',
        description: 'Your message has been sent successfully!',
        placement: 'topRight',
      });
      formik.resetForm();
    },
  });

  return (
    <FormikProvider value={formik}>
      <form onSubmit={formik.handleSubmit}>
            <div style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
              <h3 style={{ color: primaryColor }}>Fill the form to ask about anything you want</h3>
              <div className="w-full mt-12 flex flex-col">
                <div className="flex flex-row gap-4 mb-4 w-full">
                  <div className="w-1/2">
                    <InputFormik
                      name="name"
                      label="Name"
                      variant="filled"
                      aria-label="name"
                      placeholder="Your Name"
                      className="w-full"
                    />
                  </div>
                  <div className="w-1/2">
                    <InputFormik
                      name="email"
                      variant="filled"
                      label="Email"
                      type="email"
                      aria-label="email"
                      placeholder="Your Email"
                      className="w-full"
                    />
                  </div>
                </div>
                <div>
                  <InputFormik.TextArea
                    name="message"
                    variant="filled"
                    label="Message"
                    aria-label="message"
                    placeholder="Your Message"
                  />
                </div>
              </div>
            </div>
      </form>
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
      {/* <CardComponent
        content={<CardContact sty={currentTheme} />}
        style={{ marginTop: '10px', marginBottom: '10px' }}
      /> */}
    </div>
  );
}