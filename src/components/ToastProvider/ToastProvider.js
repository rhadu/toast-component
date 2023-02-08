import React from "react"
import useEscapeKey from "../../hooks/useEscapeKey"

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const addToast = React.useCallback(({ message, variant }) => {
    const id = Math.random()
    setToasts((currentToasts) => [...currentToasts, { message, variant, id }])
  }, [])

  const removeToast = React.useCallback((id) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id),
    )
  }, [])

  const handleEscape = React.useCallback(() => {
    setToasts([])
  }, [])
  
  useEscapeKey(handleEscape)

  const value = React.useMemo(() => {
    return { toasts, setToasts, addToast, removeToast }
  }, [toasts, removeToast, addToast])

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}

export default ToastProvider
