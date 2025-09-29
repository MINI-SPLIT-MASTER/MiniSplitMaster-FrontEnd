import { Form, Radio } from 'antd'
import { useField } from 'formik'

export const RadioGroupFormik = ({ label, onChange, size = 'large', style, ...props }) => {
  const [field, meta] = useField({
    name: props.name,
    placeholder: props.placeholder || '',
  })

  return (
    <Form.Item
      validateStatus={meta.touched && meta.error ? 'error' : ''}
      help={meta.touched && meta.error ? meta.error : undefined}
      label={label}
    >
      <Radio.Group
        size={size}
        style={{ width: '100%', ...style }}
        {...field}
        {...props}
        onChange={e => {
          onChange?.(e)
          field.onChange(e)
        }}
      />
    </Form.Item>
  )
}