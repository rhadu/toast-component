import React from "react"
import useEscapeKey from "../../hooks/useEscapeKey"

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const addToast = React.useCallback(({ message, variant, delay, autoHide }) => {
    const id = Math.random()
    setToasts((currentToasts) => [...currentToasts, { message, variant, id, delay, autoHide }])
  }, [])

  const dismissToast = React.useCallback((id) => {
    setToasts((currentToasts) =>
      currentToasts.filter((toast) => toast.id !== id),
    )
  }, [])

  const handleEscape = React.useCallback(() => {
    setToasts([])
  }, [])
  

  useEscapeKey(handleEscape)

  const value = React.useMemo(() => {
    return { toasts, setToasts, addToast, dismissToast }
  }, [toasts, dismissToast, addToast])

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}

export default ToastProvider
