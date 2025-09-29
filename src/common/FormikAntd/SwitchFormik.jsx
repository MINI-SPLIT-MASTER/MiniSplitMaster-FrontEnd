import { Form, Switch } from 'antd'
import { useField } from 'formik'

export const SwitchFormik = ({ label, onChange, size = 'large', style, ...props }) => {
  const [field, meta] = useField({
    name: props.name,
    placeholder: props.placeholder || '',
  })

  return (
    <Form.Item
      validateStatus={meta.touched && meta.error ? 'error' : ''}
      help={meta.touched && meta.error ? meta.error : undefined}
      label={label}
      layout="horizontal"
    >
      <Switch
        size={size}
        style={{ ...style }}
        {...field}
        value={field.value || undefined}
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
