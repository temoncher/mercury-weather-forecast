import * as React from 'react'
import { classnames } from '../utils/classnames'
import './Option.scss'

export interface OptionProps {
  onClick?: (value: unknown) => void;
  isSelected?: boolean;
  value: string;
}

const Option: React.FC<OptionProps> = (props) => {
  const liClass = classnames({
    'select-option': true,
    'select-option--selected': Boolean(props.isSelected)
  })

  return <li className={liClass} onClick={props.onClick}>{props.children}</li>
}

export default Option
