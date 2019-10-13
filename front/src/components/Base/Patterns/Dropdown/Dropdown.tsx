import React from 'react';
import './Dropdown.css';
import { cnDropdown } from './index';

import Label from './-Label/Dropdown-Label'
import Arrow from './-Arrow/Dropdown-Arrow'
import Items from './-Items/Dropdown-Items'

type Params = {
  className: string
  label: string
  param: string
  size: string
  active: boolean 
  isOpen: boolean 
  onClick: void 
  repoSelect: void
  itemsList: string[]
}

export default (params: Params) => (
  <div className={cnDropdown(null, [params.className])} > 
    <Label label={params.label} param={params.param} size={params.size} active={params.active} onClick={params.onClick}/>
    <Arrow size={`${params.size}-icon`} active={params.active} isOpen={params.isOpen} onClick={params.onClick}/>
    <Items isOpen={params.isOpen} items={params.itemsList} repoSelect={params.repoSelect}/>
  </div>
)