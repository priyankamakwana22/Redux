const initialState = {
  age: 0,
  history: [],
};

const ageReducer = (state = initialState, action) => {
  const newState = {...state};
  console.log('fafaf', state.history);
  switch (action.type) {
    case 'ADD_UP':
      return {
        ...state,
        age: state.age + action.value,
        history: state.history.concat({
          id: Math.random(),
          age: state.age + action.value,
        }),
      };

    case 'ADD_DOWN':
      return {
        ...state,
        age: state.age - action.value,
        history: state.history.concat({
          id: Math.random(),
          age: state.age - action.value,
        }),
      };

    case 'DEL_ITEM':
      return {
        ...state,
        history: state.history.filter(item => item.id !== action.value),
      };
    default:
      return newState;
  }
};

export default ageReducer;
