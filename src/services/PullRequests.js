import axios from 'axios';

/**
 * @instance
 * @method GetAllPullResquestsBy
 * @description Busca de pull requests de repositorio especifico
 * @param {string} creator - Nome do criador do repositorio
 * @param {string} repositorie - Nome do repositorio
 */
// URL= <criador>/<repositório>/pulls
export const GetAllPullResquestsBy = (creator, repositorie) => {
  baseLink = 'https://api.github.com/repos';
  link = `${baseLink}/${creator}/${repositorie}/pulls`;
  return axios.get(link);
};
