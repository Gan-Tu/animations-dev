'use client'

import { useState } from 'react'
import './styles.css'

const WORD = 'Animations'

export default function TextReveal() {
  const [reset, setReset] = useState(0)
  return (
    <div>
      <div key={reset}>
        <h1 className="h1">
          {WORD.split('').map((char, index) => (
            <span key={index} style={{ '--index': index }}>
              {char}
            </span>
          ))}
        </h1>
      </div>
      {/* Use this button to replay your animation */}
      <button className="button" onClick={() => setReset(reset + 1)}>
        Replay animation
      </button>
    </div>
  )
}
