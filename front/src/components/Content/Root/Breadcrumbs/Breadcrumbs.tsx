import React, { ReactNode } from 'react';
import './Breadcrumbs.css'
import { Text } from 'components/Base/Content/Text'

type Props = {
  children: ReactNode
}

export default (parmas: Props) => (
  <div className="Breadcrumbs">
    <Text size='m' weight='bold'>{parmas.children}</Text>
  </div>
)
