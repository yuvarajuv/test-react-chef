import React, { Suspense } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

// Block Components.
import { PageLoader } from '@test-react-chef/blocks'

// Utils.
import { RoutePaths } from '@test-react-chef/utils'

const SignInModule = React.lazy(() =>
  import(/* webpackChunkName: "modules/SignIn" */ './modules/SignIn')
)
const DashboardModule = React.lazy(() =>
  import(/* webpackChunkName: "modules/Dashboard" */ './modules/Dashboard')
)

const Routes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path={RoutePaths.SignIn} exact component={SignInModule} />
        <Route path={RoutePaths.Dashboard} component={DashboardModule} />
        <Redirect to={RoutePaths.NotFound} />
      </Switch>
    </Suspense>
  )
}

export default Routes
