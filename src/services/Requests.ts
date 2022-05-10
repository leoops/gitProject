import axios from './Axios';

export interface RepositoryParams {
  language: string;
  page: number;
  sort: string;
}

export interface PullRequestParams {
  creator: string;
  repository: string;
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

/* https://api.github.com/search/repositories?q=language:Java&sort=stars&page=1 */
export const requestAllRepositoriesBy = (params: RepositoryParams) => {
  const { language, page, sort } = params;
  const query = `language:${language}&sort=${sort}&page=${page}`;
  const url = `/search/repositories?q=${query}`;

  return axios.get(url);
};

/* URL= https://api.github.com/repos<criador>/<repositório>/pulls */
export const requestAllPullRequestsBy = (params: PullRequestParams) => {
  const { creator, repository } = params;
  const url = `/repos/${creator}/${repository}/pulls`;

  return axios.get(url);
};
