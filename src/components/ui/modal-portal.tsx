import { FunctionComponent, ReactNode } from 'react'
import reactDom from 'react-dom'
interface ModalPortalProps {
  children: ReactNode
}

const ModalPortal: FunctionComponent<ModalPortalProps> = ({ children }) => {
  if (typeof window === 'undefined') return null
  const modalRoot = document.getElementById('modal-root')
  if (!modalRoot) return null
  return reactDom.createPortal(children, modalRoot)
}

export default ModalPortal
