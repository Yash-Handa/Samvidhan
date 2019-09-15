/* eslint-disable max-len */
const { UserInputError } = require('apollo-server');

const SubClause = () => {
  return null;
};

const SubClauseFeed = {
  // cursor({ subClauses, select }) {
  //   // if (!select) {
  //   //   return subClauses[subClauses.length - 1].SubClauseNo;
  //   // }

  //   // if (select.inputList) {
  //   //   if (select.limit) {
  //   //     if (select.cursor) {
  //   //       const currIndex = select.inputList.indexOf(select.cursor);
  //   //       // eslint-disable-next-line max-len
  //   //       return select.inputList[select.limit + currIndex] || select.inputList[select.inputList.length - 1];
  //   //     }
  //   //     return select.inputList[select.limit - 1] || select.inputList[select.inputList.length - 1];
  //   //   }
  //   //   return select.inputList[select.inputList.length - 1];
  //   // }

  //   // if (select.from && select.to) {
  //   //   const start = subClauses.find((sc) => sc.SubClauseNo === select.from);
  //   //   const stop = subClauses.find((sc) => sc.SubClauseNo === select.to);
  //   //   if (!(start && stop)) {
  //   //     throw new UserInputError('Either To or From does not exist');
  //   //   }
  //   //   if (select.limit) {
  //   //     if (select.cursor) {
  //   //       const curr = subClauses.find((sc) => sc.SubClauseNo === select.cursor);
  //   //       const currIndex = subClauses.indexOf(curr);
  //   //       const nextIndex = currIndex + select.limit < subClauses.indexOf(stop) ? currIndex + select.limit : subClauses.indexOf(stop);
  //   //       // eslint-disable-next-line security/detect-object-injection
  //   //       return subClauses[nextIndex].SubClauseNo;
  //   //     }
  //   //     const startIndex = subClauses.indexOf(start);
  //   //     const nextIndex = startIndex + select.limit < subClauses.indexOf(stop) ? startIndex + select.limit : subClauses.indexOf(stop);
  //   //     // eslint-disable-next-line security/detect-object-injection
  //   //     return subClauses[nextIndex].SubClauseNo;
  //   //   }
  //   //   return select.from;
  //   // }

  //   // if (select.cursor) {
  //   //   const curr = subClauses.find((sc) => sc.SubClauseNo === select.cursor);
  //   //   const currIndex = subClauses.indexOf(curr);
  //   //   return subClauses[currIndex + select.limit].SubClauseNo || subClauses[subClauses.length - 1].SubClauseNo;
  //   // }
  //   // return subClauses[select.limit - 1].subClauseNo;
  // },
  // hasNext(parent) {

  // },
  // subClauseList(parent) {

  // },
};

module.exports = {
  SubClause,
  SubClauseFeed,
};
