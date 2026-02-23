import { useField } from 'formik';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';

export const RadioFormik = ({ label, options = [], withFormItem = true, ...props }) => {
  const [field, meta, helpers] = useField(props.name);

  const radioElement = (
    <RadioGroup
      value={field.value}
      onValueChange={val => {
        helpers.setValue(val);
        if (props.onChange) props.onChange(val);
      }}
      {...props}
      className="flex flex-row flex-wrap gap-10"
    >
      {options.map(opt => (
        <div key={opt.value} className="flex items-center gap-[8px] ">
          <RadioGroupItem value={opt.value} id={`${props.name}-${opt.value}`} />
          <label htmlFor={`${props.name}-${opt.value}`}>{opt.label}</label>
        </div>
      ))}
    </RadioGroup>
  );

  if (!withFormItem) {
    return radioElement;
  }

  return (
    <div className="mt-[16px] leading-tight">
      {label && (
        <label className="block text-left w-full mb-2 font-[600] pb-4">{label}</label>
      )}
      {radioElement}
      {meta.touched && meta.error && (
        <div className="text-red-500 text-xs">{meta.error}</div>
      )}
    </div>
  );
};
