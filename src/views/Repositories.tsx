import React, { Component } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import RepositorieCard from '../components/RepositorieCard';
import { GetAllRepositoriesBy } from '../services/Repositories';

export default class Repositories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: [],
      refreshing: true,
    };
    this.page = 1;
    this.language = 'Java';
    this.sort = 'stars';
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
    <RepositorieCard data={item} navigation={this.props.navigation} />
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
    this.setState({ refreshing: true });
    GetAllRepositoriesBy(this.language, this.page, this.sort)
      .then(({ data }) => data.items)
      .then(response => {
        let { repositories } = this.state;
        this.setState({
          repositories: repositories.concat(response),
          refreshing: false,
        });
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
    this.setState({ refreshing: true });
    this.page = 1;
    GetAllRepositoriesBy(this.language, this.page, this.sort)
      .then(response => response.data.items)
      .then(response => {
        let { repositories } = this.state;
        this.setState({ repositories: response, refreshing: false });
        this.page += 1;
      })
      .catch(error => console.warn(error));
  };
  render = () => {
    const { repositories, refreshing } = this.state;
    return (
      <FlatList
        style={styles.content}
        data={repositories}
        keyExtractor={this.keyExtractor}
        onEndReached={this.updateRepositories}
        renderItem={this.renderCardRepositorie}
        onRefresh={this.refreshingRepositories}
        refreshing={refreshing}
      />
    );
  };
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
});
