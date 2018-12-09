import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';

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
  }

  componentDidMount = () => {
    language = 'Java';
    sort = 'stars';
    page = 1;
    GetAllRepositoriesBy(language, page, sort)
      .then(response => response.data.items)
      .then(repositories => {
        this.setState({ repositories });
      })
      .catch(error => console.warn(error));
  };

  /**
   * @memberof Repositories
   * @instance
   * @method renderCardRepositorie
   * @description Metodo de renderização de componente de repositorio.
   * @param {object} item - Dados do card a ser renderizado.
   */
  renderCardRepositorie = ({ item }) => (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() =>
        this.props.navigation.navigate('PullRequests', {
          creator: item.owner.login,
          repositorie: item.name,
        })
      }
    >
      <View style={{ flex: 1 }}>
        <Text>{item.owner.login}</Text>
        <Image
          style={styles.authorAvatar}
          source={{ uri: item.owner.avatar_url }}
        />
      </View>
      <Text style={{ flex: 1 }}>{item.name}</Text>
      <Text style={{ flex: 1 }}>{item.description}</Text>
      <Text style={{ flex: 0.5 }}>{item.forks_count}</Text>
      <Text style={{ flex: 0.5 }}>{item.stargazers_count}</Text>
    </TouchableOpacity>
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

  render = () => {
    const { repositories } = this.state;
    return (
      <FlatList
        style={styles.content}
        data={repositories}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderCardRepositorie}
      />
    );
  };
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  cardContainer: {
    flex: 1,
    backgroundColor: '#0007',
    padding: 10,
    marginHorizontal: 9,
    marginVertical: 5,
    borderRadius: 5,
  },
  authorAvatar: {
    width: 45,
    height: 45,
    borderRadius: 65,
    resizeMode: 'contain',
  },
});
