import React from 'react';
import 'components/Base/Theme/Theme.css'
import './Page.css';
import Header from '../Header/Header'
import Content from '../Content/Content'
import Footer from '../Footer/Footer'
import { cn } from '@bem-react/classname'
export const cnPage = cn('Page')

export default () => (
  <div className={cnPage(null, ['Theme'])}>
    <Header	/>	
    <Content />	
    <Footer	/>	
  </div>
)
