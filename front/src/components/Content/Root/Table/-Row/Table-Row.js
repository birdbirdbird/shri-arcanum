import React from 'react';
import './Table-Row.css'
import { Text } from 'components/Base/Content/Text'
import TableItem from '../-Item/Table-Item'
import Grid from 'components/Base/Layout/Grid/Grid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFolder, faFileCode } from '@fortawesome/fontawesome-free-solid'

const colWidth = [2, 2, 4, 2, 2]

export default ({data}) => (
  <div className="Table-Row Grid Grid_m-columns_12">
    <TableItem m='2'>
      <Text size='m'><FontAwesomeIcon className='Table-Icon' icon={(data.type==='blob')?faFileCode:faFolder} /></Text>
      <Text size='m' weight='bold'>{data.name}</Text>
    </TableItem>
    <TableItem m='2'>
      <Text size='m' view='link'>{data.lastCommit || 'last commit'}</Text>
    </TableItem>
    <TableItem m='4'>
      <Text size='m'>{data.commitMessage || 'commit message'}</Text>
    </TableItem>
    <TableItem m='2'>
      <Text size='m' view='firstLetter'>{data.committer || 'committer'}</Text>
      </TableItem>
    <TableItem m='2'>
      <Text size='m'>{data.updated || 'updated'}</Text>
    </TableItem>
  </div>
)


