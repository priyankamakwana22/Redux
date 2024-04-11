/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

//redux
import {Provider} from 'react-redux';
import ageReducer from './src/store/reducers/reducer';
import {legacy_createStore as createStore} from 'redux';

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

AppRegistry.registerComponent(appName, () => reduxApp);
