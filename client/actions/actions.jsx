// ARTICLE SUBMISSIONS
export const submitArticle = article => ({
  type: 'EDIT_SUBMIT',
  article
});

export const loadArticles = (articles) => ({
  type: 'LOAD_ARTICLES',
  articles
})
