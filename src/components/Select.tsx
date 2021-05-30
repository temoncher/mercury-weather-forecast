import * as React from 'react'
import './Select.scss'
import ChevronTopSrc from '../assets/icons/16/chevron-top.svg'
import { OptionProps } from './Option'
import { useClickOutside } from '../hooks/useClickOutside'
import { classnames } from '../utils/classnames'

interface SelectProps {
  value: string;
  label?: string;
  placeholder?: string;
  onOptionClick: (value: unknown) => void;
}

const Select: React.FC<SelectProps> = (props) => {
  const rootRef = React.useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = React.useState(false)
  const [isFocused, setIsFocused] = React.useState(false)
  const [currentElementIndex, setCurrentElementIndex] = React.useState(0)

  React.useEffect(() => {
    if (!isFocused) {
      setIsOpen(false)
    }
  }, [isFocused])

  React.useEffect(() => {
    if (isOpen) {
      setIsFocused(true)
    }
  }, [isOpen])

  useClickOutside(rootRef, () => setIsOpen(false))

  const chooseOption = (value: unknown) => {
    props.onOptionClick(value)
    setIsOpen(false)
  }

  const renderOptions = () => {
    const children = props.children as React.FunctionComponentElement<OptionProps>

    return React.Children.map(children, (child, index) => {
      const additionalProps: Pick<OptionProps, 'onClick' | 'onHover' | 'isSelected' | 'isHighlighted'> = {
        onClick: () => {
          chooseOption(child.props.value)
        },
        onHover: () => {
          setCurrentElementIndex(index)
        },
        isSelected: child.props.value === props.value,
        isHighlighted: index === currentElementIndex
      }

      return React.cloneElement(child, additionalProps)
    })
  }

  const chooseOptionByIndex = (index: number) => {
    const children = React.Children.toArray(props.children) as React.FunctionComponentElement<OptionProps>[]
    const currentlyHighlightedChild = children.find((element, elementIndex) => elementIndex === index)

    if (currentlyHighlightedChild) {
      chooseOption(currentlyHighlightedChild.props.value)
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (isOpen) {
      const childrenCount = React.Children.count(props.children)

      switch (event.key) {
        case 'Escape':
          setIsOpen(false)
          break
        case 'ArrowDown':
          setCurrentElementIndex(currentElementIndex + 1 >= childrenCount ? 0 : currentElementIndex + 1)
          break
        case 'ArrowUp':
          setCurrentElementIndex(currentElementIndex - 1 < 0 ? childrenCount - 1 : currentElementIndex - 1)
          break
        case 'Enter':
          chooseOptionByIndex(currentElementIndex)
          break
        default:
          break
      }

      return
    }

    if (event.key === 'Enter') {
      setIsOpen(!isOpen)
    }
  }

  const selectClass = classnames({
    select: true,
    'select--focused': isFocused,
    'select--open': isOpen
  })

  return (
    <div ref={rootRef} className={selectClass}>
      <div className="select__input-container input" onClick={() => setIsOpen(!isOpen)}>
        <input
          className="text-body"
          readOnly
          value={props.label ?? props.value}
          placeholder={props.placeholder}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
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
