import React, { ReactNode } from 'react';
import './Menu-Item.css';
import { Text } from 'components/Base/Content/Text'

type Params = {
  children: ReactNode,
  active: boolean
}

export default (params: Params) => (
  <div className={`Menu-Item ${(params.active)&&'Menu-Item_active_true'}`}>
      <Text size='l' view={(params.active)?'primary':'secondary'}>{params.children}</Text>
  </div>
)
