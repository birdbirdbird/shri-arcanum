import React from 'react';
import './Dropdown-Items.css'
import { Text } from 'components/Base/Content/Text'

export default ({ isOpen, items, repoSelect }) => (
  <div className={`Dropdown-Items ${(isOpen && 'Dropdown-Items_open_true')}`}>{
    items &&
    items.map((item,i)=>(
      <div key={i} className='Dropdown-Item' onClick={()=>repoSelect(item)}>
        <Text size='m'>{item}</Text>
      </div>
    ))}
  </div>
)
