import React from "react"
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from "react-feather"

import VisuallyHidden from "../VisuallyHidden"

import styles from "./Toast.module.css"
import { ToastContext } from "../ToastProvider"

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
}

function Toast({ autohide = false, delay = 5000, variant, id, children }) {
  const IconTag = ICONS_BY_VARIANT[variant]
  const { dismissToast } = React.useContext(ToastContext)

  React.useEffect(() => {
    if (autohide) {
      const timeoutId = window.setTimeout(() => {
        dismissToast(id)
      }, delay)
      return () => {
        window.clearTimeout(timeoutId)
      }
    }
  }, [dismissToast, id, autohide, delay])

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      {autohide && (
        <div
          className={styles.countdown}
          style={{ "--duration": `${delay}ms` }}
        ></div>
      )}
      <div className={styles.iconContainer}>
        <IconTag size={24} />
      </div>
      <p className={styles.content}>{children}</p>
      <button className={styles.closeButton} onClick={() => dismissToast(id)}>
        <X size={24} />
        <VisuallyHidden>Dismiss message</VisuallyHidden>
      </button>
    </div>
  )
}

export default React.memo(Toast)
