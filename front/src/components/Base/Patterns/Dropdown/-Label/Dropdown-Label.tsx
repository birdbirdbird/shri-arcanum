import React from 'react';
import { cnDropdown } from '../index'
import './Dropdown-Label.css'
import { Text } from 'components/Base/Content/Text'

type Params = {
  label: string 
  param: string 
  size: string 
  active: boolean
  onClick: any
}

export default (params: Params) => (
  <div className={`${cnDropdown('Label')} ${(params.active)&&'Dropdown-Label_active_true'}`} onClick={params.onClick}>
    <Text weight='bold' size={params.size}>{params.label}</Text>
    <Text size='s'>  </Text>
    <Text size={params.size} view={(params.active)?'primary':'secondary'}>{params.param}</Text>
  </div>
)
