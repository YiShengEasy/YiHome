import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Layout from './components/Layout';
import IndexPage from './routes/IndexPage';

function RouterConfig({ history }) {
  return (
    <Layout>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={IndexPage} />
        </Switch>
      </Router>
    </Layout>
    );
  }
  
  export default RouterConfig;
