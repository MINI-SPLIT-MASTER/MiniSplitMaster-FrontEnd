
import { Slider } from '../../components/ui/slider'
import { Input } from '../../components/ui/input'
import { useField } from 'formik'


export const SliderUnitsFormik = ({ label, onChange, size = 'large', seeNumber = true, card = true, sty, style, ...props }) => {
  const [field, meta] = useField({
    name: props.name,
    placeholder: props.placeholder || '',
  })

  const currentValue = Number(field.value) || props.min || 0;
  const minVal = props.min || 0;
  const maxVal = props.max || 150;

  // Cálculo del porcentaje para el movimiento (0 a 1)
  const percentage = (currentValue * 80) / maxVal;
  // const maxSeparation = 80;
  // const indoorOffset = -percentage;
  // const outdoorOffset = percentage + maxSeparation;

  return (
    <div className={card ? `${sty.components.Card} p-[10px] rounded-[10px] w-full` : 'bg-transparent w-full'}>
      {/* Zona visual dinámica */}
      <div className='relative mx-auto w-[80%] my-[20px] rounded-[10px] flex flex-row items-center justify-center min-h-[200px] overflow-hidden'>
        {/* Imagen interior */}
        <div className="flex items-center justify-center h-32 max-w-[50%] w-[345px] z-10 overflow-visible">
          <img src="/images/mini-split-indoor.png" alt="Indoor Unit" className="object-cover object-right h-full rounded-[10px] mb-[4px]" />
        </div>

        {/* TUBO DE COBRE DINÁMICO FLEX */}
        <div 
          className="h-[20px] transition-all duration-300 ease-in-out z-0 overflow-hidden flex-shrink-0"
          style={{ 
            width: `${percentage}%`,
            minWidth: '0px',
            maxWidth: '100%',
            background: 'linear-gradient(to bottom, #8B4513 0%, #CD7F32 25%, #E3963E 50%, #CD7F32 75%, #8B4513 100%)',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
          }}
        >
          {/* Reflejo de luz superior para realismo extra */}
          <div className="absolute top-[1px] left-0 w-full h-[1px] bg-white opacity-30 pointer-events-none"></div>
        </div>

        {/* Imagen exterior */}
        <div className="flex items-center justify-center h-40 max-w-[50%] w-[345px] z-10 overflow-visible">
          <img src="/images/mini-split-outdoor.png" alt="Outdoor Compressor" className="object-cover object-left h-full rounded-[10px] mb-[4px]" />
        </div>
      </div>
      {/* Controles */}
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
          min={minVal}
          max={maxVal}
          step={props.step || 1}
          onValueChange={valueArr => {
            const value = valueArr[0];
            onChange?.(value);
            field.onChange({
              target: { value, name: props.name },
            });
          }}
        />
        <div className="flex justify-between mt-3 text-base text-slate-400 font-semibold">
          <span>{minVal} ft</span>
          <span>{maxVal} ft</span>
        </div>
        {meta.touched && meta.error && (
          <div className="text-red-500 text-sm mt-1">{meta.error}</div>
        )}
      </div>
    </div>
  )
}