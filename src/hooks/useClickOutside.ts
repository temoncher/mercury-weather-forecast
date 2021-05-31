import * as React from 'react'

export const useClickOutside = <T extends Element>(ref: React.RefObject<T>, handler: (e: Event) => void): void => {
  React.useEffect(
    () => {
      const listener = (event: Event) => {
        const target = event?.target
        if (!ref.current || !(target instanceof Node) || ref.current.contains(target)) {
          return
        }

        handler(event)
      }

      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)

      return () => {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('touchstart', listener)
      }
    },
    [ref, handler]
  )
}
