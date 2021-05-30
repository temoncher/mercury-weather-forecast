import * as React from 'react'
import { classnames } from '../utils/classnames'
import './DatePicker.scss'

interface DatePickerProps {
  value: string;
  placeholder?: string;
  min?: string | number;
  max?: string | number;
  onDateChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DatePicker: React.FC<DatePickerProps> = (props) => {
  const [isFocused, setIsFocused] = React.useState(false)

  const datepickerClass = classnames({
    datepicker: true,
    'datepicker--focused': isFocused
  })

  return (
    <div className={datepickerClass}>
      <div className="datepicker__input-container input">
        <input
          className="text-body"
          type="date"
          min={props.min}
          max={props.max}
          value={props.value ?? ''}
          placeholder={props.placeholder}
          onChange={props.onDateChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  )
}

export default DatePicker
