import React from 'react'

const Button = ({long, short, medium, inactive, icon, title}) => {
  return (
    <button className={short ? 'short' : 'classic'}>{title}</button>
  )
}

export default Button