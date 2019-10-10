import React from 'react';
import './Text.css'
import { cnText } from './index'

export default ({ children, className }) => (
   <p className={cnText(null, [className])}>{children}</p>
)