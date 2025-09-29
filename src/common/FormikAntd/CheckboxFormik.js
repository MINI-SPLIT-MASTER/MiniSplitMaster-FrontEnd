import { Checkbox, Form } from 'antd'
import { useField } from 'formik'

export const CheckboxFormik = ({ label, onChange, style, ...props }) => {
  const [field, meta] = useField({
    name: props.name,
    type: 'checkbox',
  })

  return (
    <Form.Item
      validateStatus={meta.touched && meta.error ? 'error' : ''}
      help={meta.touched && meta.error ? meta.error : undefined}
    >
      <Checkbox
        style={style}
        {...field}
        {...props}
        checked={field.value || false}
        onChange={e => {
          field.onChange({
            target: { value: e.target.checked, name: props.name },
          })
          onChange?.(e.target.checked)
        }}
      >
        {label}
      </Checkbox>
    </Form.Item>
  )
}
