import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { LoginPage, Content1 } from './pages'
import Product from './pages/Product'
import Accounts from './pages/Sale/Accounts'
import Order from './pages/Order'
import AccountsForSearch from './pages/Sale/accountSearch/AccountSearch'
import PrivateRoute from './components/PrivateRoute'
import OrderFillter from './pages/Order/OrderFillter'
import Spendpage from './pages/Spend/index'
import Performpage from './pages/Perform/index'
import Universepage from './pages/Universe/index'
import Uni from './pages/Universe/uni'
function App() {
  return (
    <Switch>
      <PrivateRoute exact path="/" component={Universepage} />
      <PrivateRoute path="/perform" component={Performpage} />
      <PrivateRoute path="/uni" component={Uni} />
      {/* <PrivateRoute path="/Inbox" component={Content1} /> */}
      <PrivateRoute path="/Sales/Accounts" component={Accounts} />
      <PrivateRoute path="/Product" component={Product} />
      <PrivateRoute path="/Order" component={Order} />
      <PrivateRoute path="/Sales/Sale" component={AccountsForSearch} />
      <PrivateRoute path="/OrderFillter" component={OrderFillter} />
      <Route path="*" component={LoginPage} />
    </Switch>
  )
}

export default App
