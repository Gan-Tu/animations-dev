'use client'

import { useEffect, useState } from 'react'
import './styles.css'

export default function Toaster() {
  const [toasts, setToasts] = useState(0)

  return (
    <div className="wrapper">
      <div className="toaster">
        {Array.from({ length: toasts }).map((_, i) => (
          // Make the newest toast at bottom
          <Toast key={i} index={toasts - (i + 1)} />
        ))}
      </div>
      <button
        className="button"
        onClick={() => {
          setToasts(toasts + 1)
        }}
      >
        Add toast
      </button>
    </div>
  )
}

function Toast({ index }) {
  // The only thing left now is to add an enter transition. CSS Animations, which we will cover in the next lesson, are good for this, but they are not interruptible, so it won't work. What we can do instead, is to set the default transform value to translateY(100%) and then set it to our calculated value when the toast is mounted.
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="toast" style={{ '--index': index }} data-mounted={mounted}>
      <span className="title">Event {index} Created </span>
      <span className="description">Monday, January 3rd at 6:00pm</span>
    </div>
  )
}
