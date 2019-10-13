import React, { ReactNode } from 'react';
import './Header-Item.css'

type Props = {
  children: ReactNode
}

export default (props: Props) => (
  <div className='Header-Item'>{props.children}</div>
)
