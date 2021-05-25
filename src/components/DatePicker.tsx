import * as React from 'react'
import './DatePicker.scss'
import { classnames } from '../utils/classnames'

interface DatePickerProps {
  className?: string;
  value: string;
  placeholder?: string;
  onDateChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const DatePicker: React.FC<DatePickerProps> = (props) => {
  const datepickerClasses = classnames({
    datepicker: true,
    [props.className ?? '']: Boolean(props.className)
  })

  return (
    <div className={datepickerClasses}>
      <div className="datepicker__input-container input">
        <input className="text-body" type="date" value={props.value} placeholder={props.placeholder} onChange={props.onDateChange} />
      </div>
    </div>
  )
}

export default DatePicker
