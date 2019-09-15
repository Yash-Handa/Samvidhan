const Articles = {
  // eslint-disable-next-line no-underscore-dangle
  __resolveType(obj, context, info) {
    if (obj.artDesc) {
      return 'ArticlesWithArtDesc';
    }

    if (obj.clauses) {
      return 'ArticlesWithClauses';
    }

    return null;
  },
};

const Article = {
  // eslint-disable-next-line no-underscore-dangle
  __resolveType(obj, context, info) {
    if (obj.artDesc) {
      return 'ArticleWithArtDesc';
    }

    if (obj.clauses) {
      return 'ArticleWithClauses';
    }

    return null;
  },
};

module.exports = {
  Articles,
  Article,
};
