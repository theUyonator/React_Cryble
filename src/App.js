import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import Routes from './Routes';
import { Navbar } from './components';
import Loader from './components/Loader';
import CrybleApi from './api/api';
import useLocalStorage from './hooks/useLocalStorage';
import UserContext from './auth/UserContext';
import jwt from 'jsonwebtoken';
import './App.css';

// Key name for storing token in localStorage for "remember me" re-login
export const TOKEN_STORAGE_ID = "cryble-token";

/** Cryble application.
 *
 * - infoLoaded: has user data been pulled from API?
 *   (this manages spinner for "loading...")
 *
 * - currentUser: user obj from API. This becomes the canonical way to tell
 *   if someone is logged in. This is passed around via context throughout app.
 *
 * - token: for logged in users, this is their authentication JWT.
 *   Is required to be set for most API calls. This is initially read from
 *   localStorage and synced to there via the useLocalStorage hook.
 *
 * App -> Routes
 */

const App = () => {

    const [infoLoaded, setInfoLoaded] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);
    const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
  
    console.debug(
        "App",
        "infoLoaded=", infoLoaded,
        "currentUser=", currentUser,
        "token=", token,
    );
  
    // Load user info from API. Until a user is logged in and they have a token,
    // this should not run. It only needs to re-run when a user logs out, so
    // the value of the token is a dependency for this effect.
  
    useEffect(function loadUserInfo() {
      console.debug("App useEffect loadUserInfo", "token=", token);
  
      async function getCurrentUser() {
        if (token) {
          try {
            let { username } = jwt.decode(token);
            // put the token on the Api class so it can use it to call the API.
            CrybleApi.token = token;
            let currentUser = await CrybleApi.getCurrentUser(username);
            setCurrentUser(currentUser);
          } catch (err) {
            console.error("App loadUserInfo: problem loading", err);
            setCurrentUser(null);
          }
        }
        setInfoLoaded(true);
      }
  
      // set infoLoaded to false while async getCurrentUser runs; once the
      // data is fetched (or even if an error happens!), this will be set back
      // to false to control the spinner.
      setInfoLoaded(false);
      getCurrentUser();
    }, [token]);
  
    /** Handles site-wide logout. */
    function logout() {
      setCurrentUser(null);
      setToken(null);
    }
  
    /** Handles site-wide signup.
     *
     * Automatically logs them in (set token) upon signup.
     *
     * Make sure you await this function and check its return value!
     */
    async function signup(signupData) {
      try {
        let token = await CrybleApi.signup(signupData);
        setToken(token);
        return { success: true };
      } catch (errors) {
        console.error("signup failed", errors);
        return { success: false, errors };
      }
    }
  
    /** Handles site-wide login.
     *
     * Make sure you await this function and check its return value!
     */
    async function login(loginData) {
      try {
        let token = await CrybleApi.login(loginData);
        setToken(token);
        return { success: true };
      } catch (errors) {
        console.error("login failed", errors, loginData);
        return { success: false, errors };
      }
    }
  
    if (!infoLoaded) return <Loader />;
  

    return (
        <div className="app">
            <UserContext.Provider
                value={{ currentUser, setCurrentUser }}>
                <div className="navbar">
                    <Navbar logout={logout}/>
                </div>
                <div className="main">
                    <Layout>
                        <div className="routes">
                            <Routes login={login} signup={signup} logout={logout}/>
                        </div>
                    </Layout>
                    <div className="footer">
                        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center'}}>
                            Cryble <br/>
                            All rights reserved 
                        </Typography.Title>
                        <Space>
                            <Link to="/">Home</Link>
                            <Link to="/exchanges">Exchanges</Link>
                            <Link to="/news">News</Link>
                        </Space>
                    </div>
                </div>
            </UserContext.Provider>
          
        </div>
    )
}

export default App;
