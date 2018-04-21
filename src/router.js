import React from 'react';
import {Route,Switch} from 'dva/router';
import Layout from './components/Layout';
import IndexPage from './routes/IndexPage';
import appRoutes from './routes/appRoutes'

// 默认路由配置
function RouterConfig({history}) {
  return (
    <Layout history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage}/>
        {appRoutes.map(item => {
          return (
            <Route key={`route${item.path}`} path={item.path} component={item.component}/>
          )
        })}
      </Switch>
    </Layout>
  );
}

export default RouterConfig;
