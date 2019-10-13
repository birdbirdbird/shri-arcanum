import React, { ReactNode } from 'react';
import './Text.css'
import { cnText } from './index'

type Params = {
   children: ReactNode
   className: string
}

export default (params: Params) => (
   <p className={cnText(null, [params.className])}>{params.children}</p>
)