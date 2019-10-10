import React from 'react';
import './Table.css'
import TableHeader from './-Header/Table-Header'
import TableRow from './-Row/Table-Row'

export default ({ children, data }) => (
  <div className="Table">
    <TableHeader />
    {data.map((elem,i) => (
      <TableRow key={i} data={elem}/>
    ))}
  </div>
)
