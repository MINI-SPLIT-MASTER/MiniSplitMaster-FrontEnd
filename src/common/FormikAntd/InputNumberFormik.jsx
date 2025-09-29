import { Form, InputNumber } from 'antd'
import { useField } from 'formik'

export const InputNumberFormik = ({ label, onChange, size = 'large', ...props }) => {
  const [field, meta] = useField({
    name: props.name,
    type: props?.type || 'text',
    placeholder: props.placeholder || '',
  })
  return (
    <Form.Item
      validateStatus={meta.touched && meta.error ? 'error' : ''}
      help={meta.touched && meta.error ? meta.error : undefined}
      label={label}
    >
      <InputNumber
        style={{ width: '100%' }}
        size={size}
        {...field}
        {...props}
        onChange={value => {
          onChange?.(value)
          field.onChange({
            target: { value, name: props.name },
          })
        }}
      />
    </Form.Item>
  )
}
