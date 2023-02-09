import React from "react"

import { ToastContext } from "../ToastProvider"
import Toast from "../Toast"
import styles from "./ToastShelf.module.css"

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext)

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ message, variant, id }) => (
        <li key={id} className={styles.toastWrapper}>
          <Toast autohide delay={15000} variant={variant} id={id}>
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  )
}

export default React.memo(ToastShelf)
