import React from 'react';
import { cnDropdown } from '../index'
import './Dropdown-Arrow.css'
import { Text } from 'components/Base/Content/Text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/fontawesome-free-solid'

export default ({ size, active, isOpen, onClick }) => (
  <div className={cnDropdown('Arrow')} onClick={onClick}>
  <Text size={size} view={(active)?'primary':'secondary'}>
    <FontAwesomeIcon icon={(isOpen)?faChevronUp:faChevronDown} />
  </Text>
  </div>
)
