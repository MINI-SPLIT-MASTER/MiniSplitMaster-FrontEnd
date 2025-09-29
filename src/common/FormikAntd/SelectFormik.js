import { Form, Select } from 'antd'
import { useField } from 'formik'

export const SelectFormik = ({
  label,
  onChange,
  size = 'large',
  style,
  options,
  defaultValue,
  withFormItem = true,
  ...props
}) => {
  const [field, meta, helpers] = useField({
    name: props.name,
    placeholder: props.placeholder || '',
  })

  if (defaultValue && !field.value) {
    helpers.setValue(defaultValue)
  }

  const inputElement = (
    <Select
      size={size}
      style={{
        width: '100%',
        ...style,
      }}
      {...field}
      value={field.value || undefined}
      {...props}
      placeholder={props.placeholder}
      status={meta.touched && meta.error ? 'error' : ''}
      onChange={value => {
        onChange?.(value)
        field.onChange({
          target: { value, name: props.name },
        })
      }}
    >
      {options.map(option => (
        <Select.Option key={option.value} value={option.value} disabled={option.disabled || false}>
          {option.label}
        </Select.Option>
      ))}
    </Select>
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
