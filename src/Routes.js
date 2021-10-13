import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails } from './components'

 function Routes() {
   
    return (
        // <>
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>

                {/* <Route exact path="/login">
                    <LoginForm login={login} />
                </Route>

                <Route exact path="/signup">
                    <SignupForm signup={signup}/>
                </Route> */}

                <Route exact path="/exchanges">
                    <Exchanges />
                </Route>
                <Route exact path="/cryptocurrencies">
                    <Cryptocurrencies />
                </Route>
                <Route exact path="/crypto/:coinId">
                    <CryptoDetails />
                </Route>
                <Route exact path="/news">
                    <News />
                </Route>

            </Switch>

        // </>
    );
 }

 export default Routes;