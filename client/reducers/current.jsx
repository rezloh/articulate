const current = (state = { title: '', body: '', editing: false }, action) => {
  switch (action.type) {
    case 'SET_CURRENT':
      return Object.assign({}, state, action.article);
    case 'EDIT_ARTICLE':
     console.log(action)
      return Object.assign({}, state, action.editing);
    default:
      return state;
  };
};

export default current;
