import { useField } from 'formik';
import { Calendar } from '../../components/ui/calendar';


export const CalendarFormik = ({ label, withFormItem = true, ...props }) => {
	const [field, meta, helpers] = useField(props.name);

	const handleSelect = (date) => {
        console.log("Selected date:", date);
		helpers.setValue(date ?? null);
		if (props.onChange) props.onChange(date);
	};

	const calendarElement = (
		<Calendar
			mode="single"
			selected={field.value ?? undefined}
			onSelect={handleSelect}
			{...props}
		/>
	);

	if (!withFormItem) return calendarElement;

	return (
		<div style={{ marginBottom: 16 }}>
			{label && (
				<label style={{ display: 'block', marginBottom: 4, textAlign: 'left' }}>{label}</label>
			)}
			{calendarElement}
			{meta.touched && meta.error && (
				<div style={{ color: 'red', fontSize: 12, marginTop: 4 }}>{meta.error}</div>
			)}
		</div>
	);
};
