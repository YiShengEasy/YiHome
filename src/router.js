import React from 'react';
import {Route,Switch} from 'dva/router';
import Layout from './components/Layout';
import appRoutes from './routes/appRoutes'
import ReactTree from "./routes/ReactTree";

// 默认路由配置
function RouterConfig({history}) {
  return (
    <Layout history={history}>
      <Switch>
        <Route path="/" exact component={appRoutes[0].component}/>
        {appRoutes.map(item => {
          return (
            <Route key={`route${item.path}`} exact path={item.path} component={item.component}/>
          )
        })}
        <Route path="/reactPage/tree"  component={ReactTree}/>
      </Switch>
    </Layout>
  );
}

export default RouterConfig;
