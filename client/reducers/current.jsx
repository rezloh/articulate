const current = (state = { title: '', body: '' }, action) => {
  switch (action.type) {
    case 'SET_CURRENT':
      return Object.assign({}, state, action.article);
    case 'EDIT_ARTICLE':
      return Object.assign({}, state, action.article);
    default:
      return state;
  };
};

export default current;
