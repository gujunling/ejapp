import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ProductPage from './routes/ProductPage'
import OrderPage from './routes/OrderPage'
import HelpPage from './routes/HelpPage'
import MyPage from './routes/MyPage'
import App from './routes/App'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <App>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/order" exact component={OrderPage} />
        <Route path="/help" exact component={HelpPage} />
        <Route path="/my" exact component={MyPage} />
        <Route path="/product" exact component={ProductPage} />
      </Switch>
      </App>
    </Router>
  );
}

export default RouterConfig;
