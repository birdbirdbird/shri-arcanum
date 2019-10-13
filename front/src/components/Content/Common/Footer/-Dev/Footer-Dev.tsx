import React, { ReactNode } from 'react';
import './Footer-Dev.css'

type Props = {
  children: ReactNode
}

export default (props: Props) => (
  <div className='Footer-Dev'>{props.children}</div>
)
