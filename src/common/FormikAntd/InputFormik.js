import { Form, Input } from 'antd'
import { useField } from 'formik'

export const InputFormik = ({ label, onChange, size = 'large', withFormItem = true, ...props }) => {
  const [field, meta] = useField({
    name: props.name,
    type: props.type || 'text',
    placeholder: props.placeholder || '',
  })

  const inputElement = (
    <Input
      size={size}
      {...field}
      {...props}
      onChange={e => {
        onChange?.(e)
        field.onChange(e)
      }}
    />
  )

  if (!withFormItem) {
    return inputElement
  }

  return (
    <Form.Item
      validateStatus={meta.touched && meta.error ? 'error' : ''}
      help={meta.touched && meta.error ? meta.error : undefined}
      label={label}
    >
      {inputElement}
    </Form.Item>
  )
}

const InputTextAreaFormik = ({
  label,
  onChange: _,
  size = 'large',
  style,
  withFormItem = true,
  ...props
}) => {
  const [field, meta] = useField({
    name: props.name,
    type: props.type || 'text',
    placeholder: props.placeholder || '',
  })

  const inputElement = (
    <Input.TextArea
      size={size}
      style={{ width: '100%', ...style }}
      status={meta.touched && meta.error ? 'error' : ''}
      {...field}
      {...props}
    />
  )

  if (!withFormItem) {
    return inputElement
  }

  return (
    <Form.Item
      validateStatus={meta.touched && meta.error ? 'error' : ''}
      help={meta.touched && meta.error ? meta.error : undefined}
      label={label}
      style={{ width: '100%' }}
    >
      {inputElement}
    </Form.Item>
  )
}

const InputPasswordFormik = ({ label, onChange: _, size = 'large', ...props }) => {
  const [field, meta] = useField({
    name: props.name,
    type: props.type || 'text',
    placeholder: props.placeholder || '',
  })
  return (
    <Form.Item
      validateStatus={meta.touched && meta.error ? 'error' : ''}
      help={meta.touched && meta.error ? meta.error : undefined}
      label={label}
    >
      <Input.Password size={size} {...field} {...props} />
    </Form.Item>
  )
}

InputFormik.Password = InputPasswordFormik
InputFormik.TextArea = InputTextAreaFormik
