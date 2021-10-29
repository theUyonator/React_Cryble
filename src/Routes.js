import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Exchanges, Homepage, Cryptocurrencies, News, CryptoDetails, LoginForm, SignupForm, UserProfile } from './components';
import PrivateRoute from './PrivateRoute';

 function Routes({ login, signup, logout }) {
   
    return (
        // <>
            <Switch>
                <Route exact path="/">
                    <Homepage />
                </Route>

                <Route exact path="/login">
                    <LoginForm login={login} />
                </Route>

                <Route exact path="/signup">
                    <SignupForm signup={signup}/>
                </Route>

                <PrivateRoute exact path="/exchanges">
                    <Exchanges />
                </PrivateRoute>
                <PrivateRoute exact path="/cryptocurrencies">
                    <Cryptocurrencies />
                </PrivateRoute>
                <PrivateRoute exact path="/crypto/:coinId">
                    <CryptoDetails />
                </PrivateRoute>
                <PrivateRoute exact path="/news">
                    <News />
                </PrivateRoute>
                <PrivateRoute exact path="/profile">
                    <UserProfile logout={logout}/>
                </PrivateRoute>
                <Redirect to="/" />

            </Switch>

        // </>
    );
 }

 export default Routes;