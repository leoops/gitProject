//  https://api.github.com/search/repositories?q=language:Java&sort=stars&page=1
baseLink = 'https://api.github.com/search/repositories?q=language:';
language = '';
sort = '';
page = 0;
link = `${baseLink}${language}&sort${sort}&page${page}`;
