// import { Form, Input } from 'antd'
import { Input } from '../../components/ui/input';
import { useField } from 'formik';

export const InputFormik = ({ label, onChange, withFormItem = true, ...props }) => {
  const [field, meta] = useField({
    name: props.name,
    type: props.type || 'text',
    placeholder: props.placeholder || '',
  });

  const inputElement = (
    <Input
      {...field}
      {...props}
      onChange={e => {
        onChange?.(e);
        field.onChange(e);
      }}
    />
  );

  if (!withFormItem) {
    return inputElement;
  }

  return (
    <div style={{ marginBottom: 16 }}>
      {label && (
        <label
          htmlFor={props.name}
          style={{ display: 'block', marginBottom: 4, textAlign: 'left' }}
        >
          {label}
        </label>
      )}
      {inputElement}
      {meta.touched && meta.error && (
        <div style={{ color: 'red', fontSize: 12, marginTop: 4 }}>{meta.error}</div>
      )}
    </div>
  );
};

const InputTextAreaFormik = ({
  label,
  onChange: _,
  withFormItem = true,
  ...props
}) => {
  const [field, meta] = useField({
    name: props.name,
    type: props.type || 'text',
    placeholder: props.placeholder || '',
  });

  const inputElement = (
    <Input.TextArea
      {...field}
      {...props}
    />
  );

  if (!withFormItem) {
    return inputElement;
  }

  return (
    <div style={{ marginBottom: 16 }}>
      {label && (
        <label
          htmlFor={props.name}
          style={{ display: 'block', marginBottom: 4, textAlign: 'left' }}
        >
          {label}
        </label>
      )}
      {inputElement}
      {meta.touched && meta.error && (
        <div style={{ color: 'red', fontSize: 12, marginTop: 4 }}>{meta.error}</div>
      )}
    </div>
  );
};

const InputPasswordFormik = ({ label, onChange: _, withFormItem = true, ...props }) => {
  const [field, meta] = useField({
    name: props.name,
    type: 'password',
    placeholder: props.placeholder || '',
  });

  const inputElement = (
    <Input.Password
      {...field}
      {...props}
    />
  );

  if (!withFormItem) {
    return inputElement;
  }

  return (
    <div style={{ marginBottom: 16 }}>
      {label && (
        <label
          htmlFor={props.name}
          style={{ display: 'block', marginBottom: 4, textAlign: 'left' }}
        >
          {label}
        </label>
      )}
      {inputElement}
      {meta.touched && meta.error && (
        <div style={{ color: 'red', fontSize: 12, marginTop: 4 }}>{meta.error}</div>
      )}
    </div>
  );
};

InputFormik.Password = InputPasswordFormik
InputFormik.TextArea = InputTextAreaFormik
