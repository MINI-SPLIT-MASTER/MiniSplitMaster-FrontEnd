import { Col, Form, Input, Slider } from 'antd'
import { useField } from 'formik'

export const SliderFormik = ({ label, onChange, size = 'large', imagen, seeNumber = false, card = false, sty, style, ...props }) => {
  const [field, meta] = useField({
    name: props.name,
    placeholder: props.placeholder || '',
  })

  return (
    <div style={{ background: card ? sty.components.Card.backgroundCard : 'transparent', padding: card ? '10px' : '0', borderRadius: card ? '10px' : '0' }}>
      <img src={imagen} alt={label} style={{ width: '60%', marginBottom: 20, marginTop: 20, borderRadius: '10px' }} />
      <Form.Item
        validateStatus={meta.touched && meta.error ? 'error' : ''}
        help={meta.touched && meta.error ? meta.error : undefined}
        label={label}
        style={{ marginLeft: '10px' }}
      >
        {seeNumber && field.value !== undefined ?
            <Input value={field.value}
              variant='borderless'
              style={{ fontSize: '24px', justifyContent: 'center', textAlign: 'center', marginBottom: 6, width: '20%' }}
              onChange={e => {
                const value = Number(e.target.value);
                if (!isNaN(value)) {
                  if (value < props.min) {
                    onChange?.(props.min)
                    field.onChange({
                      target: { value: props.min, name: props.name },
                    })
                  } else if (value > props.max) {
                    onChange?.(props.max)
                    field.onChange({
                      target: { value: props.max, name: props.name },
                    })
                  } else {
                    onChange?.(value)
                    field.onChange({
                      target: { value, name: props.name },
                    })
                  }
                }
              }}
            />
          : null}
        <Slider
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
    </div>
  )
}
