# React_Cryble
[Cryble](https://danieluyo-cryble.surge.sh) pronounced cri-ble is a fullstack React app that provides educational content on the top cryptocurrencies in the world. The front end code for this web app can be seen on the [React_Cryble](https://github.com/theUyonator/React_Cryble) repository, while the back end code can be viewed on the [React_Cryble_Backend](https://github.com/theUyonator/React_Cryble_Backend) repository. Think of it as an encyclopedia for cryptocurrencies, showing the general stats for the cryptocurrency markets, individual stats and background information for the top 100 cryptocurrencies in the world, exchanges, and recent news articles on cryptocurrency. This app makes use of the [Rapid Api Hub](https://rapidapi.com/hub), specifically the [Coinranking Api](https://rapidapi.com/Coinranking/api/coinranking1/) for information on the cryptocurrency markets and individual currencies or tokens and the [Bing News Search Api](https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/) which filters and retrieves recent news articles on the cryptocurrency markets and individual tokens. This web app is geared towards users that are seeking knowledge on cryptocurrencies in order to make educated investment decisions.



# Documentation
1. Details:  
a. Visit the web app Cryble today to start learning all about cryptocurrencies, [click the link to use](https://danieluyo-cryble.surge.sh).  
b. Cryble prompts the user to register or login to begin viewing the content.  
c. Key features include:    
  i. Register.   
  ii. Login.   
 iii. General Market stats  
 iv.Top 10 cryptocurrencies in the world   
 v. Top 100 cryptocurrencies in the world  
 vi. Details and financial stats about each cryptocurrency displayed  
 vii. Most recent news articles on cryptocurrencies  
 viii. Filtered search of news articles on individual tokens   
 ix. Information on available exchanges    
 x. User account update
 xi. User account delete  
 
d. Standard User Flow:  
 - Starts on the anonymous homepage with the nav bar showing sign up and login links.  
 - If user does not have an active account, user can go ahead and create one with the sign up link.  
 - Once an account is created, Cryble takes the user to the site homepage which displays general crypto stats, the top 10 cryptocurrencies in the world and 6 most recent news articles on cryptocurrency. The active nav bar shows links for homepage, cryptocurrencies, exchanges, news, user profile and logout.
 - The user can click on the cards displayed for the top 10 cryptocurrencies to view their individual stats and details.  
 - The user can also opt to click the see more link which will then display the top 100 cryptocurrencies in the world along with a search form to allow the user to filter a specific cryptocurrency. The user can also click on individual cards to view stats and details on individual tokens. 
 - The user can then navigate to the exchanges tab in the nav bar to view crypto exchanges, and the news tab to view crypto news. 
 - To update account information and delete account, the user can navigate to the user profile tab.
 - Finally, to leave the web app, the user clicks the nav link "logout".
 
 
e. APIS used:  
 - [Rapid Api Hub](https://rapidapi.com/hub)
 - [Coinranking Api](https://rapidapi.com/Coinranking/api/coinranking1/)  
 - [Bing News Search Api](https://rapidapi.com/microsoft-azure-org-microsoft-cognitive-services/api/bing-news-search1/)

f. Technology stack, frameworks, libraries and packages  used to create [Cryble](https://danieluyo-cryble.surge.sh) include:  
 - React 
 - Node.js 
 - Redux 
 - Ant Design 
 - Chart.js 
 - Millify 
 - Momment 
 - PostgreSQL  




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
