import * as React from 'react'
import './Select.scss'
import ChevronTopSrc from '../assets/icons/16/chevron-top.svg'
import { OptionProps } from './Option'
import { useClickOutside } from '../hooks/useClickOutside'
import { classnames } from '../utils/classnames'

interface SelectProps {
  className?: string;
  value: string;
  label?: string;
  placeholder?: string;
  onOptionClick: (value: unknown) => void;
}

const Select: React.FC<SelectProps> = (props) => {
  const rootRef = React.useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = React.useState(false)

  useClickOutside(rootRef, () => setIsOpen(false))

  const renderOptions = () => {
    const children = props.children as React.FunctionComponentElement<OptionProps>

    return React.Children.map(children, (child) => {
      const additionalProps: Pick<OptionProps, 'onClick' | 'isSelected'> = {
        onClick: () => {
          props.onOptionClick(child.props.value)
          setIsOpen(false)
        },
        isSelected: child.props.value === props.value
      }

      return React.cloneElement(child, additionalProps)
    })
  }

  const selectClass = classnames({
    select: true,
    'select--focused': isOpen,
    [props.className ?? '']: Boolean(props.className)
  })

  return (
    <div ref={rootRef} className={selectClass}>
      <div className="select__input-container" onClick={() => setIsOpen(!isOpen)}>
        <input className="text-body" readOnly value={props.label ?? props.value} placeholder={props.placeholder} />
        <img className="icon" src={ChevronTopSrc} alt={isOpen ? 'chevron-top' : 'chevron-bottom'} />
      </div>

      {props.children && (
        <div className="select__dropdown">
          <ol className="select__dropdown__list">
            {renderOptions()}
          </ol>
        </div>
      )}
    </div>
  )
}

export default Select
