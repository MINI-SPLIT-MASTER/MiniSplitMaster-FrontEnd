import { Slider } from '../../components/ui/slider'
import { Input } from '../../components/ui/input'
import { useField } from 'formik'

export const SliderFormik = ({ label, onChange, size = 'large', imagen, seeNumber = false, card = false, sty, style, ...props }) => {
  const [field, meta] = useField({
    name: props.name,
    placeholder: props.placeholder || '',
  })

  return (
    <div style={{ background: card ? sty.components.Card.backgroundCard : 'transparent', padding: card ? '10px' : '0', borderRadius: card ? '10px' : '0' }}>
      <img src={imagen} alt={label} style={{ width: '60%', marginBottom: 20, marginTop: 20, borderRadius: '10px' }} className='mx-auto'/>
      <div style={{ marginLeft: '10px', marginBottom: 16 }}>
        {label && <label htmlFor={props.name} style={{ display: 'block', marginBottom: 0, textAlign: 'left' }}>{label}</label>}
        {seeNumber && field.value !== undefined ?
          <Input value={field.value}
            variant='borderless'
            style={{ fontSize: '24px', justifyContent: 'center', textAlign: 'center', marginBottom: 20, width: '20%' }}
            className='mx-auto'
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
          value={field.value !== undefined ? [Number(field.value)] : [0]}
          {...props}
          onValueChange={valueArr => {
            const value = valueArr[0];
            onChange?.(value);
            field.onChange({
              target: { value, name: props.name },
            });
          }}
        />
        {meta.touched && meta.error && (
          <div style={{ color: 'red', fontSize: 12, marginTop: 4 }}>{meta.error}</div>
        )}
      </div>
    </div>
  )
}
