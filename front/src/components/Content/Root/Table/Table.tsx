import React from 'react';
import './Table.css'
import TableHeader from './-Header/Table-Header'
import TableRow from './-Row/Table-Row'
import { File } from 'types'

export default ({ data }:{[key:string]:File[]}) => (
  <div className="Table">
    <TableHeader /> 
    {data.map((elem: File, i: any) => (<TableRow key={i} data={elem}/>))}
  </div>
)
