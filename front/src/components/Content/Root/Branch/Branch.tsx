
import React, {FC} from 'react';
import './Branch.css';
import { Dropdown } from 'components/Base/Patterns/Dropdown'
import Menu from 'components/Base/Patterns/Menu/Menu'
import BranchCommit from './-Commit/Branch-Commit'

type RepoSelect = {
  repo: string
  branch: string
}

export const Branch: FC<RepoSelect> = (params: RepoSelect) => (
  <div className="Branch">
    <Dropdown label={params.repo} param={params.branch} size='xl' active={false}/>
    <BranchCommit commit='c4d248' commitDatetime='20 Oct 2017, 12:24' committer='robot-srch-releaser'/>
    <Menu items={[{ name: 'files', active: true}, { name: 'branches', active: false}]}/>
  </div>
)
