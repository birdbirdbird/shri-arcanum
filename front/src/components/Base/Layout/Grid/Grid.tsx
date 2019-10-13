import React, {ReactNode} from 'react';
import './Grid.css';
import './_m-columns/Grid_m-columns_12.css';

type Props = {
  children: ReactNode
}

export default ({children}: Props) => (
  <div className="Grid Grid_m-columns_12">{children}</div>
)
