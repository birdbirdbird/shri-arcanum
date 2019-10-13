
import React, {ReactNode} from 'react';
import './Grid-Fraction.css';
import './_m-col/Grid-Fraction_m-col_2.css';
import './_m-col/Grid-Fraction_m-col_4.css';

type Props = {
  children: ReactNode
}

export default (props: Props) => (
  <div className="Grid Grid_m-columns_12">{props.children}</div>
)
