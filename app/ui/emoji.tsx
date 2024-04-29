import React from 'react'

interface EmojiInt {
  className?: string
  label?: string
  symbol?: string
}

const Emoji = (x: EmojiInt) => (
  <span
    className={x.className}
    role='img'
    aria-label={x.label ? x.label : ''}
    aria-hidden={x.label ? 'false' : 'true'}
  >
    {x.symbol}
  </span>
)

export default Emoji
