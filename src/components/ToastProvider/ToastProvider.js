import React from "react"
import useEscapeKey from "../../hooks/useEscapeKey"

export const ToastContext = React.createContext()

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])
  useEscapeKey(() => setToasts([]))

  const removeToast = React.useCallback((id) => {
    setToasts((currentToasts) => {
      return currentToasts.filter((toast) => toast.id !== id)
    })
  }, [])

  const value = React.useMemo(() => {
    return { toasts, setToasts, removeToast }
  },[toasts, removeToast])

  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}

export default ToastProvider
