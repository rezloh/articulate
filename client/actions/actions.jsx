// ARTICLE SUBMISSIONS
export const submitArticle = article => ({
  type: 'EDIT_SUBMIT',
  article
});

export const loadArticles = articles => ({
  type: 'LOAD_ARTICLES',
  articles
});

export const setCurrent = article => ({
  type: 'SET_CURRENT',
  article
});

export const editArticle = editing => ({
  type: 'EDIT_ARTICLE',
  editing
});
