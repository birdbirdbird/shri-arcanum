
// @ts-ignore
import React from 'react';
import './Menu.css';
import MenuItem from './-Item/Menu-Item'

type MenuI = {
  name: string
  active: boolean
}

export default (params: any) => (
  <div className="Menu">
  {params.items.map((elem: MenuI, i: number) => (<MenuItem key={i} active={elem.active}>{elem.name}</MenuItem>))}
  </div>
)
