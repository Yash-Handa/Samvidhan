/* eslint-disable max-len */
const { UserInputError } = require('apollo-server');

const { findArticle, findClause } = require('../utils/fetchData');

const scListMapper = (sc, il) => {
  if (il) {
    const scMap = [];
    il.forEach((subClause) => {
      const subC = sc.find(subClause);
      if (!subC) {
        UserInputError(`Sub-Clause ${subClause.SubClauseNo} Does not exist`);
      }
      scMap.push(subC.SubClauseNo);
    });
    return scMap;
  }
  return sc.map((subClause) => subClause.SubClauseNo);
};

const Query = {
  article(parent, { artNo }, { COI }, info) {
    const article = findArticle(COI[0], artNo);

    const art19 = {
      artNo: article.ArtNo,
      name: article.Name,
      subHeading: article.SubHeading,
      status: article.Status || 'Active',
      explanations: null,
      artDesc: null,
      clauses: {
        hasNext: false,
        cursor: '6',
        clauseList: [
          {
            clauseNo: '1',
            clauseDesc: 'All citizens shall have the right—',
            subClauses: [
              {
                subClauseNo: 'a',
                subClauseDesc: 'to freedom of speech and expression;',
                status: 'Active',
              },
              {
                subClauseNo: 'b',
                subClauseDesc: 'to assemble peaceably and without arms;',
                status: 'Active',
              },
              {
                subClauseNo: 'c',
                subClauseDesc: 'to form associations or unions or co-operative societies;',
                status: 'Active',
              },
              {
                subClauseNo: 'd',
                subClauseDesc: 'to move freely throughout the territory of India;',
                status: 'Active',
              },
              {
                subClauseNo: 'e',
                subClauseDesc: 'to reside and settle in any part of the territory of India; and',
                status: 'Active',
              },
              {
                subClauseNo: 'f',
                subClauseDesc: 'to acquire, hold and dispose of property;',
                status: 'Omitted',
              },
              {
                subClauseNo: 'g',
                subClauseDesc: 'to practise any profession, or to carry on any occupation, trade or business',
                status: 'Active',
              },
            ],
            status: 'Active',
          },
          {
            clauseNo: '2',
            clauseDesc: 'Nothing in sub-clause (a) of clause (1) shall affect the operation of any existing law, or prevent the State from making any law, in so far as such law imposes reasonable restrictions on the exercise of the right conferred by the said sub-clause in the interests of the sovereignty and integrity of India,] the security of the State, friendly relations with foreign States, public order, decency or morality, or in relation to contempt of court, defamation or incitement to an offence.',
            status: 'Active',
          },
          {
            clauseNo: '3',
            clauseDesc: 'Nothing in sub-clause (b) of the said clause shall affect the operation of any existing law in so far as it imposes, or prevent the State from making any law imposing, in the interests of the sovereignty and integrity of India or public order, reasonable restrictions on the exercise of the right conferred by the said sub-clause.',
            status: 'Active',
          },
          {
            clauseNo: '4',
            clauseDesc: 'Nothing in sub-clause (c) of the said clause shall affect the operation of any existing law in so far as it imposes, or prevent the State from making any law imposing, in the interests of the sovereignty and integrity of India or public order or morality, reasonable restrictions on the exercise of the right conferred by the said sub-clause.',
            status: 'Active',
          },
          {
            clauseNo: '5',
            clauseDesc: 'Nothing in sub-clauses (d) and (e) of the said clause shall affect the operation of any existing law in so far as it imposes, or prevent the State from making any law imposing, reasonable restrictions on the exercise of any of the rights conferred by the said sub-clauses either in the interests of the general public or for the protection of the interests of any Scheduled Tribe.',
            status: 'Active',
          },
          {
            clauseNo: '6',
            clauseDesc: 'Nothing in sub-clause (g) of the said clause shall affect the operation of any existing law in so far as it imposes, or prevent the State from making any law imposing, in the interests of the general public, reasonable restrictions on the exercise of the right conferred by the said sub-clause, and, in particular, nothing in the said sub-clause shall affect the operation of any existing law in so far as it relates to, or prevent the State from making any law relating to,—\n(i) the professional or technical qualifications necessary for practising any profession or carrying on any occupation, trade or business, or\n(ii) the carrying on by the State, or by a corporation owned or controlled by the State, of any trade, business, industry or service, whether to the exclusion, complete or partial, of citizens or otherwise.',
            status: 'Active',
          },
        ],
      },
    };

    const art6 = {
      artNo: article.ArtNo,
      name: article.Name,
      subHeading: article.SubHeading,
      status: article.Status || 'Active',
      explanations: null,
      artDesc: 'Notwithstanding anything in article 5, a person who has migrated to the territory of India from the territory now included in Pakistan shall be deemed to be a citizen of India at the commencement of this Constitution if—\n(a) he or either of his parents or any of his grand-parents was born in India as defined in the Government of India Act, 1935 (as originally enacted); and\n(b) (i) in the case where such person has so migrated before the nineteenth day of July, 1948, he has been ordinarily resident in the territory of India since the date of his migration, or\n(ii) in the case where such person has so migrated on or after the nineteenth day of July, 1948, he has been registered as a citizen of India by an officer appointed in that behalf by the Government of the Dominion of India on an application made by him therefor to such officer before the commencement of this Constitution in the form and manner prescribed by that Government:\nProvided that no person shall be so registered unless he has been resident in the territory of India for at least six months immediately preceding the date of his application.',
      clauses: null,
    };

    const art5 = {
      artNo: article.ArtNo,
      name: article.Name,
      subHeading: article.SubHeading,
      status: article.Status || 'Active',
      explanations: null,
      artDesc: 'At the commencement of this Constitution, every person who has his domicile in the territory of India and—\n(a) who was born in the territory of India; or\n(b) either of whose parents was born in the territory of India; or\n(c) who has been ordinarily resident in the territory of India for not less than five years immediately preceding such commencement,\nshall be a citizen of India.',
      clauses: null,
    };

    if (artNo === '19') return art19;

    if (artNo === '6') return art6;
    if (artNo === '5') return art5;
  },
  articles(parent, { select }, { COI }, info) {
    return {
      cursor: '18',
      hasNext: false,
      articleList: [
        {
          artNo: '15',
          name: 'Prohibition of discrimination on grounds of religion, race, caste, sex or place of birth.',
          subHeading: 'Right to Equality',
          status: 'Active',
          explanations: [
            {
              ExplanationNo: '1',
              Explanation: 'For the purposes of this article and article 16, \"economically weaker sections\" shall be such as may be notified by the State from time to time on the basis of family income and other indicators of economic disadvantage.',
            },
          ],
          artDesc: null,
          clauses: [
            {
              clauseNo: '1',
              clauseDesc: 'The State shall not discriminate against any citizen on grounds only of religion, race, caste, sex, place of birth or any of them.',
              status: 'Active',
            },
            {
              clauseNo: '2',
              clauseDesc: 'No citizen shall, on grounds only of religion, race, caste, sex, place of birth or any of them, be subject to any disability, liability, restriction or condition with regard to—',
              subClauses: [
                {
                  subClauseNo: 'a',
                  subClauseDesc: 'access to shops, public restaurants, hotels and places of public entertainment; or',
                  status: 'Active',
                },
                {
                  subClauseNo: 'b',
                  subClauseDesc: 'the use of wells, tanks, bathing ghats, roads and places of public resort maintained wholly or partly out of State funds or dedicated to the use of the general public.',
                  status: 'Active',
                },
              ],
              status: 'Active',
            },
            {
              clauseNo: '3',
              clauseDesc: 'Nothing in this article shall prevent the State from making any special provision for women and children.',
              status: 'Active',
            },
            {
              clauseNo: '4',
              clauseDesc: 'Nothing in this article or in clause (2) of article 29 shall prevent the State from making any special provision for the advancement of any socially and educationally backward classes of citizens or for the Scheduled Castes and the Scheduled Tribes.',
              status: 'Active',
            },
            {
              clauseNo: '5',
              clauseDesc: 'Nothing in this article or in sub-clause (g) of clause (1) of article 19 shall prevent the State from making any special provision, by law, for the advancement of any socially and educationally backward classes of citizens or for the Scheduled Castes or the Scheduled Tribes in so far as such special provisions relate to their admission to educational institutions including private educational institutions, whether aided or unaided by the State, other than the minority educational institutions referred to in clause (1) of article 30.',
              status: 'Active',
            },
            {
              clauseNo: '6',
              clauseDesc: 'Nothing in this article or sub-clause (g) of clause (1) of article 19 or clause (2) of article 29 shall prevent the State from making,—',
              subClauses: [
                {
                  subClauseNo: 'a',
                  subClauseDesc: 'any special provision for the advancement of any economically weaker sections of citizens other than the classes mentioned in clauses (4) and (5); and',
                  status: 'Active',
                },
                {
                  subClauseNo: 'b',
                  subClauseDesc: 'any special provision for the advancement of any economically weaker sections of citizens other than the classes mentioned in clauses (4) and (5) in so far as such special provisions relate to their admission to educational institutions including private educational institutions, whether aided or unaided by the State, other than the minority educational institutions referred to in clause (1) of article 30, which in the case of reservation would be in addition to the existing reservations and subject to a maximum of ten per cent. of the total seats in each category.',
                  status: 'Active',
                },
              ],
              status: 'Active',
            },
          ],
        },
        {
          artNo: '16',
          name: 'Equality of opportunity in matters of public employment.',
          subHeading: 'Right to Equality',
          status: 'Active',
          explanations: null,
          artDesc: null,
          clauses: [
            {
              clauseNo: '1',
              clauseDesc: 'There shall be equality of opportunity for all citizens in matters relating to employment or appointment to any office under the State.',
              status: 'Active',
            },
            {
              clauseNo: '2',
              clauseDesc: 'No citizen shall, on grounds only of religion, race, caste, sex, descent, place of birth, residence or any of them, be ineligible for, or discriminated against in respect of, any employment or office under the State.',
              status: 'Active',
            },
            {
              clauseNo: '3',
              clauseDesc: 'Nothing in this article shall prevent Parliament from making any law prescribing, in regard to a class or classes of employment or appointment to an office under the Government of, or any local or other authority within, a State or Union territory, any requirement as to residence within that State or Union territory prior to such employment or appointment.',
              status: 'Active',
            },
            {
              clauseNo: '4',
              clauseDesc: 'Nothing in this article shall prevent the State from making any provision for the reservation of appointments or posts in favour of any backward class of citizens which, in the opinion of the State, is not adequately represented in the services under the State.',
              status: 'Active',
            },
            {
              clauseNo: '4a',
              clauseDesc: 'Nothing in this article shall prevent the State from making any provision for reservation in matters of promotion, with consequential seniority, to any class or classes of posts in the services under the State in favour of the Scheduled Castes and the Scheduled Tribes which, in the opinion of the State, are not adequately represented in the services under the State.',
              status: 'Active',
            },
            {
              clauseNo: '4b',
              clauseDesc: 'Nothing in this article shall prevent the State from considering any unfilled vacancies of a year which are reserved for being filled up in that year in accordance with any provision for reservation made under clause (4) or clause (4A) as a separate class of vacancies to be filled up in any succeeding year or years and such class of vacancies shall not be considered together with the vacancies of the year in which they are being filled up for determining the ceiling of fifty per cent. reservation on total number of vacancies of that year.',
              status: 'Active',
            },
            {
              clauseNo: '5',
              clauseDesc: 'Nothing in this article shall affect the operation of any law which provides that the incumbent of an office in connection with the affairs of any religious or denominational institution or any member of the governing body thereof shall be a person professing a particular religion or belonging to a particular denomination.',
              status: 'Active',
            },
            {
              clauseNo: '6',
              clauseDesc: 'Nothing in this article shall prevent the State from making any provision for the reservation of appointments or posts in favour of any economically weaker sections of citizens other than the classes mentioned in clause (4), in addition to the existing reservation and subject to a maximum of ten per cent. of the posts in each category.',
              status: 'Active',
            },
          ],
        },
        {
          artNo: '17',
          name: 'Abolition of Untouchability.',
          subHeading: 'Right to Equality',
          status: 'Active',
          explanations: null,
          artDesc: '\"Untouchability\" is abolished and its practice in any form is forbidden. The enforcement of any disability arising out of “Untouchability” shall be an offence punishable in accordance with law.',
          clauses: null,
        },
        {
          artNo: '18',
          name: 'Abolition of titles.',
          subHeading: 'Right to Equality',
          status: 'Active',
          explanations: null,
          artDesc: null,
          clauses: [
            {
              clauseNo: '1',
              clauseDesc: 'No title, not being a military or academic distinction, shall be conferred by the State.',
              status: 'Active',
            },
            {
              clauseNo: '2',
              clauseDesc: 'No citizen of India shall accept any title from any foreign State.',
              status: 'Active',
            },
            {
              clauseNo: '3',
              clauseDesc: 'No person who is not a citizen of India shall, while he holds any office of profit or trust under the State, accept without the consent of the President any title from any foreign State.',
              status: 'Active',
            },
            {
              clauseNo: '4',
              clauseDesc: 'No person holding any office of profit or trust under the State shall, without the consent of the President, accept any present, emolument, or office of any kind from or under any foreign State.',
              status: 'Active',
            },
          ],
        },
      ],
    };
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

    if ((select.from || select.to) && select.inputList) {
      throw new UserInputError('You cannot provide both inputList and to and from parameters');
    }


    if (select.cursor) {
      return {
        cursor: 'e',
        hasNext: false,
        subClauseList: [
          {
            subClauseNo: 'd',
            subClauseDesc: 'the extinguishment or modification of any rights of managing agents, secretaries and treasurers, managing directors, directors or managers of corporations, or of any voting rights of shareholders thereof, or',
            status: 'Active',
          },
          {
            subClauseNo: 'e',
            subClauseDesc: 'the extinguishment or modification of any rights accruing by virtue of any agreement, lease or licence for the purpose of searching for, or winning, any mineral or mineral oil, or the premature termination or cancellation of any such agreement, lease or licence,',
            status: 'Active',
          },
        ],
      };
    }

    const test = {
      cursor: 'c',
      hasNext: true,
      subClauseList: [
        {
          subClauseNo: 'a',
          subClauseDesc: 'the acquisition by the State of any estate or of any rights therein or the extinguishment or modification of any such rights, or',
          status: 'Active',
        },
        {
          subClauseNo: 'b',
          subClauseDesc: 'the taking over of the management of any property by the State for a limited period either in the public interest or in order to secure the proper management of the property, or',
          status: 'Active',
        },
        {
          subClauseNo: 'c',
          subClauseDesc: 'the amalgamation of two or more corporations either in the public interest or in order to secure the proper management of any of the corporations, or',
          status: 'Active',
        },
      ],
    };

    return test;
  },
};

module.exports = Query;
