import React from 'react';
import './Table-Header.css'
import TableItem from '../-Item/Table-Item'
import { Text } from 'components/Base/Content/Text'
import Grid from 'components/Base/Layout/Grid/Grid'

const colNames = ['Name', 'Last commit', 'Commit message', 'Committer', 'Updated']
const colWidth = [2, 2, 4, 2, 2]

export default () => (
  <div className="Table-Header Grid Grid_m-columns_12">{
    colNames.map((elem, i) => (
      <TableItem key={i} m={colWidth[i]}><Text size='m'>{elem}</Text></TableItem>
    ))}
  </div>
)
