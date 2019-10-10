import React from 'react';
import './Header.css'
import { cnHeader } from './index'

import HeaderItem from './-Item/Header-Item'

import Logo from 'components/Base/Content/Logo/Logo'
import RepoSelect from 'containers/RepoSelect/RepoSelect'

export default ({ className, repos, isRepoSelectOpen }) => (
  <header className={cnHeader(null, [className])}>
      <HeaderItem><Logo /></HeaderItem>
      <HeaderItem><RepoSelect /></HeaderItem>
  </header>
)