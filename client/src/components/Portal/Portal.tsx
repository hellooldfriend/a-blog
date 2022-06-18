import React, { useEffect, useState, ReactNode } from 'react'
import { createPortal } from 'react-dom'

const Portal = ({ children }: { children: ReactNode }) => {
  const [container] = useState(() => {
    const portalRoot = document.createElement('div')
    portalRoot.id = 'portal-root'
    return portalRoot
  })

  useEffect(() => {
    document.body.appendChild(container)

    return () => {
      document.body.removeChild(container)
    }
  }, [])

  return createPortal(children, container)
}

export default Portal
