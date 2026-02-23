import { Slider } from '../../components/ui/slider'
import { Input } from '../../components/ui/input'
import { useField } from 'formik'
import RoomVisualizer from '../RoomVisualizer'

export const SliderFormik = ({ label, onChange, size = 'large', imagen , seeNumber = false, card = false, sty, style, ...props }) => {
  const [field, meta] = useField({
    name: props.name,
    placeholder: props.placeholder || '',
  })

  return (
    <div className={card ? `${sty.components.Card} p-[10px] rounded-[10px] w-full` : 'bg-transparent w-full'}>
      {imagen && <img src={imagen} alt={label} className='mx-auto min-h-[200px] w-[60%] my-[20px] rounded-[10px]'/>}
      <RoomVisualizer value={Number(field.value) || 0} />
      <div style={{ marginBottom: 16 }}>
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
