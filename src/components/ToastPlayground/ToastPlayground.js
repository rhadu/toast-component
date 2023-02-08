import React from "react"

import { ToastContext } from "../ToastProvider"
import Button from "../Button"
import ToastShelf from "../ToastShelf"

import styles from "./ToastPlayground.module.css"

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"]
const INITIAL_VARIANT = VARIANT_OPTIONS[0]

function ToastPlayground() {
  const { toasts, setToasts } = React.useContext(ToastContext) 
  const [message, setMessage] = React.useState("")
  const [variant, setVariant] = React.useState(INITIAL_VARIANT)

  function handleSubmit(event) {
    event.preventDefault()
    const id = Math.random()
    const nextToasts = [...toasts, { message, variant, id }]
    setToasts(nextToasts)
    setVariant(INITIAL_VARIANT)
    setMessage("")
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf/>

      <form onSubmit={handleSubmit} className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Messages
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              required
              className={styles.messageInput}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => (
              <label key={option} htmlFor={`variant-${option}`}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={variant === option}
                  onChange={(event) => {
                    setVariant(event.target.value)
                  }}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default ToastPlayground
