import React from 'react';
import { cnDropdown } from '../index'
import './Dropdown-Arrow.css'
import { Text } from 'components/Base/Content/Text'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/fontawesome-free-solid'

type Params = {
  size: string,
  active: boolean, 
  isOpen: boolean, 
  onClick: any
}

export default (params: Params) => (
  <div className={cnDropdown('Arrow')} onClick={params.onClick}>
  <Text size={params.size} view={(params.active)?'primary':'secondary'}>
    {/* <FontAwesomeIcon icon={(params.isOpen)?faChevronUp:faChevronDown} /> */}
  </Text>
  </div>
)
