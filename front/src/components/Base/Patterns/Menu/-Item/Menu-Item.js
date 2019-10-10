import React from 'react';
import './Menu-Item.css';
import { Text } from 'components/Base/Content/Text'

export default ({ children, active }) => (
  <div className={`Menu-Item ${(active)&&'Menu-Item_active_true'}`}>
      <Text size='l' view={(active)?'primary':'secondary'}>{children}</Text>
  </div>
)
