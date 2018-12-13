import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import ReposritorieCard from '../components/RepositorieCard';

const GetAllRepositoriesBy = (language, page, sort) => {
  baseLink = 'https://api.github.com/search/repositories?q=language:';
  link = `${baseLink}${language}&sort=${sort}&page=${page}`;
  return axios.get(link);
};

export default class Repositories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: [],
    };
    this.page = 1;
    this.language = 'Java';
    this.sort = 'stars';
    this.refreshing = false;
  }

  componentDidMount = () => {
    this.updateRepositories();
  };

  /**
   * @memberof Repositories
   * @instance
   * @method renderCardRepositorie
   * @description Metodo de renderização de componente de repositorio.
   * @param {object} item - Dados do card a ser renderizado.
   */
  renderCardRepositorie = ({ item }) => (
    <ReposritorieCard data={item} navigation={this.props.navigation} />
  );

  /**
   * @memberof Repositories
   * @instance
   * @method keyExtractor
   * @description Metodo contrução de key de itens do flatList
   * @param {object} item - Dados do card.
   * @param {int} index - Indice do objeto no flatList.
   * @returns {string}
   */
  keyExtractor = (item, index) => `${item.id}${index}`;

  /**
   * @memberof Repositories
   * @instance
   * @method getAllRepositories
   * @description Metodo busca de todos os repositorios
   */
  updateRepositories = () => {
    GetAllRepositoriesBy(this.language, this.page, this.sort)
      .then(({ data }) => data.items)
      .then(response => {
        let { repositories } = this.state;
        this.setState({ repositories: repositories.concat(response) });
        this.page += 1;
      })
      .catch(error => console.warn(error));
  };

  /**
   * @memberof Repositories
   * @instance
   * @method refreshingRepositories
   * @description Metodo atualizaçao de lista de repositorios
   */
  refreshingRepositories = () => {
    this.refreshing = true;
    this.page = 1;
    GetAllRepositoriesBy(this.language, this.page, this.sort)
      .then(response => response.data.items)
      .then(response => {
        this.refreshing = false;
        let { repositories } = this.state;
        this.setState({ repositories: response });
        this.page += 1;
      })
      .catch(error => console.warn(error));
  };
  render = () => {
    const { repositories } = this.state;
    return (
      <FlatList
        style={styles.content}
        data={repositories}
        keyExtractor={this.keyExtractor}
        onEndReached={this.updateRepositories}
        renderItem={this.renderCardRepositorie}
        onRefresh={this.refreshingRepositories}
        refreshing={this.refreshing}
      />
    );
  };
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});
