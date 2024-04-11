/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//redux
import {Provider} from 'react-redux';
import ageReducer from './src/store/reducers/reducer';
import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

//      creating a custom middleware

// const logAction = store => {
//   return next => {
//     return action => {
//       const result = next(action);
//       console.log(`Caught in the middleware ${result} `);
//       return result;
//     };
//   };
// };

const store = createStore(ageReducer);

const reduxApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

// import {Provider} from 'react-redux';
// import { legacy_createStore as createStore } from 'redux';
// import reducer from './src/store/reducer';

// const store = createStore(reducer)

// const reduxApp = () => {
//     return(
//     <Provider store={store}>
//         <App/>
//     </Provider>)
// }

AppRegistry.registerComponent(appName, () => reduxApp);
