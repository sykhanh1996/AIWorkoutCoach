import { Link } from 'react-router-dom'
import { FloatingPortal, useFloating, arrow, FloatingArrow, offset, type Placement } from '@floating-ui/react'
import { ElementType, useId, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface Props {
  children: React.ReactNode
  renderPopover: React.ReactNode
  className?: string
  as?: ElementType
  initialOpen?: boolean
  placement?: Placement
}
export default function Popover({
  children,
  renderPopover,
  className,
  as: Element = 'div',
  initialOpen,
  placement = 'bottom-end'
}: Props) {
  const [open, setOpen] = useState(initialOpen || false)
  const arrowRef = useRef(null)

  const { x, y, refs, floatingStyles, context, strategy, middlewareData } = useFloating({
    middleware: [
      arrow({
        element: arrowRef
      }),
      offset(6)
    ],
    placement: placement
  })
  const id = useId()
  const showPopover = () => {
    setOpen(true)
  }
  const hidePopover = () => {
    setOpen(false)
  }

  return (
    <Element className={className} ref={refs.setReference} onMouseEnter={showPopover} onMouseLeave={hidePopover}>
      {children}
      <FloatingPortal id={id}>
        <AnimatePresence>
          {open && (
            <motion.div
              ref={refs.setFloating}
              style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
                width: 'max-content',
                transformOrigin: `${middlewareData.arrow?.x}px top`
              }}
              initial={{ opacity: 0, transform: 'scale(0)' }}
              animate={{ opacity: 1, transform: 'scale(1)' }}
              exit={{ opacity: 0, transform: 'scale(0)' }}
              transition={{ duration: 0.2 }}
            >
              <FloatingArrow ref={arrowRef} context={context} fill='white' />
              {renderPopover}
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </Element>
  )
}
