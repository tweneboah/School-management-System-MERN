import React, {Suspense} from 'react'
import { Redirect, Route, Switch } from 'react-router-dom';
import { CContainer } from '@coreui/react';


function Index() {
    const loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>
    return (
       
             <CContainer fluid>
              <Suspense fallback={loading()}>
                {/* <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/dashboard" />
                </Switch> */}
                <h1>Messages</h1>
              </Suspense>
            </CContainer>
    )
}

export default Index
