// URL= <criador>/<repositório>/pulls
baseLink = 'https://api.github.com/repos';
creator = '';
repositorie = '';
link = `${baseLink}/${creator}/${repositorie}/pulls`;

const GetAllPullResquestsBy = (creator, repositorie) => {
  baseLink = 'https://api.github.com/repos';
  link = `${baseLink}/${creator}/${repositorie}/pulls`;
  return axios.get(link);
};
