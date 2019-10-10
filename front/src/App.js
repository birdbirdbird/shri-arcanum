import React from 'react';
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Page from 'components/Content/Common/Page/Page'
import { Redirect } from 'react-router';

const App =	({store}) => (	
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" render={() => (<Redirect to="/api/repos" />)}/>
        <Route path="/api/repos" component={Page}/>        
      </Switch>
    </Router>
  </Provider>
)

export default App;


