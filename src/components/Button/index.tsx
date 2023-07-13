import React, { ReactNode } from "react"

import style from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className={style.botao}>{children}</button>
  )
}
