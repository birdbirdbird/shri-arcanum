import React from 'react';
import { cnDropdown } from '../index'
import './Dropdown-Label.css'
import { Text } from 'components/Base/Content/Text'

export default ({ label, param, size, active, onClick }) => (
  <div className={`${cnDropdown('Label')} ${(active)&&'Dropdown-Label_active_true'}`} onClick={onClick}>
    <Text weight='bold' size={size}>{label}</Text>
    <Text size='s'>  </Text>
    <Text size={size} view={(active)?'primary':'secondary'}>{param}</Text>
  </div>
)
