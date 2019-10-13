import React from 'react';
import './Header.css'

import HeaderItem from './-Item/Header-Item'

import Logo from 'components/Base/Content/Logo/Logo'
import RepoSelect from 'containers/RepoSelect/RepoSelect'

export default () => (
  <header className='Header'>
      <HeaderItem><Logo /></HeaderItem>
      <HeaderItem><RepoSelect /></HeaderItem>
  </header>
)