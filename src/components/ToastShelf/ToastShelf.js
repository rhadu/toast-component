import React from "react"

import { ToastContext } from "../ToastProvider"
import Toast from "../Toast"
import styles from "./ToastShelf.module.css"

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext)

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ message, variant, id, delay, autoHide }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast autohide={autoHide} delay={delay} variant={variant} id={id}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  )
}

export default React.memo(ToastShelf)
