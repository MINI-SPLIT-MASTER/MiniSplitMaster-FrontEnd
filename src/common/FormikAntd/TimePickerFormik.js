import { TimePicker, Form } from 'antd'
import { useField } from 'formik'

export const TimePickerFormik = ({ label, onChange, size = 'large', style, ...props }) => {
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
      <TimePicker
        size={size}
        style={{
          width: '100%',
          ...style,
        }}
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
