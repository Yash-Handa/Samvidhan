const { UserInputError } = require('apollo-server');

const findArticle = (Articles, artNo) => {
  // eslint-disable-next-line no-param-reassign
  artNo = artNo.toUpperCase();
  const article = Articles.find((art) => art.ArtNo === artNo);
  if (!article) {
    throw new UserInputError(`Article ${artNo} does not exist`);
  }
  return article;
};

const findClause = (article, clauseNo) => {
  // eslint-disable-next-line no-param-reassign
  clauseNo = clauseNo.toUpperCase();

  if (!article.Clauses) {
    throw new UserInputError(`Article ${article.ArtNo} does not contain any Clause`);
  }

  const clause = article.Clauses.find((data) => data.ClauseNo === clauseNo);
  if (!clause) {
    throw new UserInputError(`Article ${article.ArtNo} does not contain a clause ${clauseNo}`);
  }
  return clause;
};

module.exports = {
  findArticle,
  findClause,
};
