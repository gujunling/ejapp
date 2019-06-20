import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import ProductPage from './routes/ProductPage'
import OrderPage from './routes/OrderPage'
import HelpPage from './routes/HelpPage'
import MyPage from './routes/MyPage'
import App from './routes/App'
import Help01 from './routes/Help01'
import Help02 from './routes/Help02'
import Help03 from './routes/Help03'
import Help04 from './routes/Help04'
import Help05 from './routes/Help05'
import My01 from './routes/My01'
import My02 from './routes/My02'
import My03 from './routes/My03'
import My04 from './routes/My04'
import My05 from './routes/My05'

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
        <Route path="/help01" exact component={Help01} />
        <Route path="/help02" exact component={Help02} />
        <Route path="/help03" exact component={Help03} />
        <Route path="/help04" exact component={Help04} />
        <Route path="/help05" exact component={Help05} />
        <Route path="/my01" exact component={My01} />
        <Route path="/my02" exact component={My02} />
        <Route path="/my03" exact component={My03} />
        <Route path="/my04" exact component={My04} />
        <Route path="/my05" exact component={My05} />
      </Switch>
      </App>
    </Router>
  );
}
document.title="E洁家政";
export default RouterConfig;
