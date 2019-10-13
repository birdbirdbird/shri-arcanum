import React from 'react';
import './Dropdown-Items.css'
import { Text } from 'components/Base/Content/Text'

type Params = {
  isOpen: boolean
  items: string[] 
  repoSelect: any
}

export default (params: Params) => (
  // tslint:disable-next-line: jsx-no-multiline-js
  <div className={`Dropdown-Items ${(params.isOpen && 'Dropdown-Items_open_true')}`}>{
    params.items &&
    params.items.map((item: string, i: number)=>(
      <div key={i} className='Dropdown-Item' onClick={()=>params.repoSelect(item)}>
        <Text size='m'>{item}</Text>
      </div>
    ))}
  </div>
)
