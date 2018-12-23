import axios from 'axios';

/**
 * @instance
 * @method GetAllRepositoriesBy
 * @description Pesquisa de repositorios
 * @param {string} language - Linguagem a ser pesquisada
 * @param {int} page - Numero da pagina
 * @param {string} sort - Parametro de ordenação da lista de repositorios
 */
//  https://api.github.com/search/repositories?q=language:Java&sort=stars&page=1
export const GetAllRepositoriesBy = (language, page, sort) => {
  baseLink = 'https://api.github.com/search/repositories?q=language:';
  link = `${baseLink}${language}&sort=${sort}&page=${page}`;
  return axios.get(link);
};
