import * as React from 'react'
import './DatePicker.scss'

interface DatePickerProps {
  value: string;
  placeholder?: string;
  onDateChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DatePicker: React.FC<DatePickerProps> = (props) => (
  <div className="datepicker">
    <div className="datepicker__input-container input">
      <input className="text-body" type="date" value={props.value} placeholder={props.placeholder} onChange={props.onDateChange} />
    </div>
  </div>
)

export default DatePicker
