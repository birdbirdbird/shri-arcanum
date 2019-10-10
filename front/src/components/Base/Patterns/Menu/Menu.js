
import React from 'react';
import './Menu.css';
import MenuItem from './-Item/Menu-Item'

export default ({ items }) => (
  <div className="Menu">{
    items.map((elem, i) => (
      <MenuItem key={i} active={elem.active}>{elem.name}</MenuItem>
    ))}
  </div>
)
