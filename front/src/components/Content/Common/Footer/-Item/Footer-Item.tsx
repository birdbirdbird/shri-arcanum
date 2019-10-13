import React, { ReactNode } from 'react';
import './Footer-Item.css'

type Props = {
  children: ReactNode
}

export default (props: Props) => (
  <div className='Footer-Item'>{props.children}</div>
)
