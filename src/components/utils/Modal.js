import React, {
  useState,
  useEffect,
  forwardRef,
  useCallback,
  useImperativeHandle,
} from 'react'
import { createPortal } from 'react-dom'
import './modal.scss'

const modalElement = document.getElementById('modal-root')

const Modal = ({ children }, ref) => {
  const [show, setShow] = useState(false)

  const close = useCallback(() => setShow(false), [])

  useImperativeHandle(
    ref,
    () => ({
      open: () => setShow(true),
      close,
    }),
    [close]
  )

  const handleEscClose = (e) => {
    if (e.key === 'Escape') {
      setShow(false)
    }
  }

  const handleClose = () => {
    setShow(false)
  }

  useEffect(() => {
    if (show) {
      document
        .getElementById('modal-close')
        .addEventListener('click', handleClose, false)
      document.addEventListener('keydown', handleEscClose, false)
    }
    return () => {
      document.removeEventListener('click', handleClose, false)
      document.removeEventListener('keydown', handleEscClose, false)
    }
  }, [show])

  return createPortal(
    show ? (
      <div className="modal">
        <div className="modal-content">
          <span
            role="button"
            id="modal-close"
            className="modal-close"
            aria-label="close"
            onClick={() => handleClose}
          >
            x
          </span>
          <div className="children">{children}</div>
        </div>
      </div>
    ) : null,
    modalElement
  )
}

export default forwardRef(Modal)
