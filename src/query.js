const { UserInputError } = require('apollo-server');

const { findArticle, findClause } = require('../utils/fetchData');

const Query = {
  article(parent, args, ctx, info) {
    
  },
  articles(parent, args, ctx, info) {

  },
  clause(parent, args, ctx, info) {
    
  },
  clauses(parent, args, ctx, info) {
    
  },
  subClause(parent, { artNo, clauseNo, SubClauseNo }, { COI }, info) {
    const article = findArticle(COI[0], artNo);
    const clause = findClause(article, clauseNo);

    if (!clause.SubClauses) {
      throw new UserInputError(`Clause ${clause.ClauseNo} of Article ${article.ArtNo} does not contain any sub-clause`);
    }

    // eslint-disable-next-line no-param-reassign
    SubClauseNo = SubClauseNo.toLowerCase();
    const subClause = clause.SubClauses.find((sc) => sc.SubClauseNo === SubClauseNo);

    if (!subClause) {
      throw new UserInputError(`Clause ${clause.ClauseNo} of Article ${article.ArtNo} does not contain a sub-clause ${subClause}`);
    }

    // return the object
    return {
      subClauseNo: subClause.SubClauseNo,
      subClauseDesc: subClause.SubClauseDesc,
      status: subClause.Status || 'Active',
    };
  },
  subclauses(parent, { artNo, clauseNo, select }, { COI }, info) {
    const article = findArticle(COI[0], artNo);
    const clause = findClause(article, clauseNo);

    if (!clause.SubClauses) {
      throw new UserInputError(`Clause ${clause.ClauseNo} of Article ${article.ArtNo} does not contain any sub-clause`);
    }

    // return object of subclause feed
  },
};

module.exports = Query;
