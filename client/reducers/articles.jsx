const articles = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_ARTICLES':
      return action.articles;
    default:
      return state;
  };
};

export default articles;
