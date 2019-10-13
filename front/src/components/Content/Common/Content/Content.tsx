import React from 'react';
import './Content.css';
import Breadcrumbs from 'containers/Breadcrumbs/Breadcrumbs'
import BranchSelect from 'containers/BranchSelect/BranchSelect'
import FilesList from 'containers/FilesList/FilesList'

const	Content	=	()	=>	(	
  <main className="Content">	
    <Breadcrumbs />
    <BranchSelect />
    <FilesList />
  </main>
)

export default Content;
