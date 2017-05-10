const submission = (state = { title: '', body: '' }, action) => {
  switch(action.type) {
    case 'EDIT_SUBMIT':
      return Object.assign({}, state, action.article);
    default:
      return state;
  };
};

export default submission;
