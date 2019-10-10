import React from 'react';
import './Breadcrumbs.css'
import { Text } from 'components/Base/Content/Text'

export default ({ children }) => (
  <div className="Breadcrumbs">
    <Text size='m' weight='bold'>{children}</Text>
  </div>
)
