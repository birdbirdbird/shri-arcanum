import React, { ReactNode } from 'react';
import './Table-Item.css'
import 'components/Base/Layout/Grid/-Fraction/_m-col/Grid-Fraction_m-col_2.css'
import 'components/Base/Layout/Grid/-Fraction/_m-col/Grid-Fraction_m-col_4.css'

type Params = {
  children: ReactNode
  m: string
}

export default ( params: Params) => {
  return (
  <div className={`Table-Item Grid-Fraction_m-col_${params.m}`}>
    {params.children}    
  </div>
)}
