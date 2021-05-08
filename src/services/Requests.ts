import axios from './Axios';

export interface RepoProperties {
  language: string;
  page: number;
  sort: string;
}

export interface Repository {
  id: string;
  name: string;
  forks_count: number;
  stargazers_count: number;
  owner: {
    avatar_url: string;
    login: string;
  };
  description: string;
}

export interface PullRequest {
  id: string;
  user: { avatar_url: string; login: string };
  created_at: string;
  body: string;
  title: string;
  html_url: string;
}

export interface PullRequestProperties {
  creator: string;
  repository: string;
}

/**
 * @instance
 * @method getAllRepositoriesBy
 * @description Pesquisa de repositórios
 * @param {string} language - Linguagem a ser pesquisada
 * @param {int} page - Numero da pagina
 * @param {string} sort - Parâmetro de ordenação da lista de repositórios
 */
//  https://api.github.com/search/repositories?q=language:Java&sort=stars&page=1
export const requestAllRepositoriesBy = (params: RepoProperties) => {
  const { language, page, sort } = params;
  const query = `language:${language}&sort=${sort}&page=${page}`;
  const url = `/search/repositories?q=${query}`;

  return axios.get(url);
};

/**
 * @instance
 * @method GetAllPullResquestsBy
 * @description Busca de pull requests de repositório especifico
 * @param {string} creator - Nome do criador do repositório
 * @param {string} repositor - Nome do repositório
 */
// URL= <criador>/<repositório>/pulls
export const requestAllPullRequestsBy = (params: PullRequestProperties) => {
  const { creator, repository } = params;
  const url = `/repos/${creator}/${repository}/pulls`;

  return axios.get(url);
};
