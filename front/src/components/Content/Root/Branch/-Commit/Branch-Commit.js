
import React from 'react';
import './Branch-Commit.css';
import { Text } from '../../../../Base/Content/Text'

export default ({ commit, commitDatetime, committer }) => (
  <div className="Branch-Commit">
  <Text size='m'>Last commit </Text>
  <Text size='m' view='link'>{commit} </Text>
  <Text size='m'>on </Text>
  <Text size='m' view='link'>{commitDatetime} </Text>
  <Text size='m'>by </Text>
  <Text size='m' view='firstLetter'>{committer}</Text>
  </div>
)
