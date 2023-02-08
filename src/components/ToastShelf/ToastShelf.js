import React from "react"

import { ToastContext } from "../ToastProvider"
import Toast from "../Toast"
import styles from "./ToastShelf.module.css"

function ToastShelf() {
  const { toasts, removeToast } = React.useContext(ToastContext)

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ message, variant, id }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast variant={variant} handleDismiss={() => removeToast(id)}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  )
}

export default React.memo(ToastShelf)
