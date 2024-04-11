// // Store has two things state and a reducer

// import {legacy_createStore as createStore} from 'redux';

// //reducer
// const initialState = {
//   age: 21,
// };

// const myReducer = (state = initialState, action) => {
//   console.log('🚀 ~ myReducer ~ state:', state);
//   const newState = {...state};
//   if (action.type === 'ADD') {
//     newState.age += 1;
//   }
//   return newState;
// };

// //store
// const store = createStore(myReducer);

// //action
// store.dispatch({type: 'ADD'});
// export default store;

// import {legacy_createStore as createStore} from 'redux';

// const initialState = {
//   age: 22,
// };

// const myReducer = (state = initialState, action) => {
//   console.log('🚀 ~ myReducer ~ state:', state);
//   const newState = {...state};
//   console.log('🚀 ~ myReducer ~ newState:', newState);

//   if (action.type === 'ADD') {
//     newState.age +=action.val ;
//   } else if (action.type === 'SUBTRACT') {
//     newState.age -= action.val;
//   }
//   return newState; 
// };

// const store = createStore(myReducer);

// store.subscribe(() => {
//   console.log('initial state = ' + JSON.stringify(store.getState()));
// });

// store.dispatch({
//   type: 'ADD',
//   val : 10
// });

// store.dispatch({
//   type: 'SUBTRACT',
//   val : 10
// });
// export default store;
