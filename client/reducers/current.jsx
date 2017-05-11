const current = (state = { title: '', body: '', editing: false }, action) => {
  switch (action.type) {
    case 'SET_CURRENT':
      return Object.assign({}, state, action.article);
    case 'EDIT_ARTICLE':
      return Object.assign({}, state, action.editing);
    case 'CLEAR_CURRENT':
      return Object.assign({}, { title: '', body: '', editing: false });
    default:
      return state;
  };
};

export default current;
