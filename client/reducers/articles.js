const articles = (state = [], action) => {
  switch (action.type) {
    case 'GET_ARTICLES':
      return Object.assign({}, state, action.results);
    default:
      return state;
  };
};

export default articles;
