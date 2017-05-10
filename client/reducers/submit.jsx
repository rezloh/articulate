const submit = (state = { title: '', body: '' }, action) => {
  switch(action.type) {
    case 'EDIT_SUBMIT':
      return Object.assign({}, state, action.submit);
    default:
      return state;
  };
};

export default submit;
