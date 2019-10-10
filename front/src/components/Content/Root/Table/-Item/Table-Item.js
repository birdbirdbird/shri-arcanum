import React from 'react';
import './Table-Item.css'
import 'components/Base/Layout/Grid/-Fraction/_m-col/Grid-Fraction_m-col_2.css'
import 'components/Base/Layout/Grid/-Fraction/_m-col/Grid-Fraction_m-col_4.css'

export default ({ children, m }) => (
  <div className={`Table-Item Grid-Fraction_m-col_${m}`}>
    {children}    
  </div>
)
