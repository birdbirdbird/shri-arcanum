import React from 'react';
import './Dropdown.css';
import { cnDropdown } from './index';

import Label from './-Label/Dropdown-Label'
import Arrow from './-Arrow/Dropdown-Arrow'
import Items from './-Items/Dropdown-Items'

export default ({ className, label, param, size, active, isOpen, onClick, repoSelect, itemsList }) => (
  <div className={cnDropdown(null, [className])} > 
    <Label label={label} param={param} size={size} active={active} onClick={onClick}/>
    <Arrow size={`${size}-icon`} active={active} isOpen={isOpen} onClick={onClick}/>
    <Items isOpen={isOpen} items={itemsList} repoSelect={repoSelect}></Items>
  </div>
)