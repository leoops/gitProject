import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Linking,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import { GetAllPullResquestsBy } from '../services/PullRequests';
import moment from 'moment';

export default class PullRequests extends Component {
  constructor(props) {
    super(props);
    const { navigation } = this.props;
    const { creator, repositorie } = navigation.state.params;
    this.creator = creator;
    this.repositorie = repositorie;
    this.state = {
      pullRequests: [],
    };
  }

  componentDidMount = () => {
    GetAllPullResquestsBy(this.creator, this.repositorie)
      .then(response => response.data)
      .then(pullRequests => {
        this.setState({ pullRequests });
      })
      .catch(error => console.warn(error));
  };

  /**
   * @memberof PullRequests
   * @instance
   * @method openUrlLink
   * @description Metodo de redirecionamento para pagina web.
   * @param {string} url - link de.
   */
  openURLLink = url => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  formatData = data => {
    return moment(data).format('DD/MM/YYYY h:mm');
  };

  /**
   * @memberof PullRequests
   * @instance
   * @method renderCardPullRequest
   * @description Metodo de renderização de componente de pull request.
   * @param {object} item - Dados do card a ser renderizado.
   */
  renderCardPullRequest = ({ item }) => (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => this.openURLLink(item.html_url)}
    >
      {/* Nome / Foto do autor do PR, Título do PR, Data do PR e Body do PR */}
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <FastImage
          style={styles.authorAvatar}
          source={{ uri: item.user.avatar_url }}
          resizeMode={FastImage.resizeMode.contain}
        />
        <View style={{ paddingLeft: 10 }}>
          <Text style={{ font: 1 }}>{item.user.login}</Text>
          <Text style={{ flex: 1, fontSize: 16, fontWeight: '500' }}>
            {this.formatData(item.created_at)}
          </Text>
        </View>
      </View>
      <View style={{ flex: 1, marginTop: 10 }}>
        <Text
          style={{ flex: 1, fontSize: 20, fontWeight: '800', marginBottom: 10 }}
        >
          {item.title}
        </Text>
        <Text style={{ flex: 0.5 }}>{item.body}</Text>
      </View>
    </TouchableOpacity>
  );

  /**
   * @memberof PullRequests
   * @instance
   * @method keyExtractor
   * @description Metodo contrução de key de itens do flatList
   * @param {object} item - Dados do card.
   * @param {int} index - Indice do objeto no flatList.
   * @returns {string}
   */
  keyExtractor = (item, index) => `${item.id}${index}`;

  render = () => {
    const { pullRequests } = this.state;
    return (
      <FlatList
        style={styles.content}
        data={pullRequests}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderCardPullRequest}
      />
    );
  };
}

// PullRequests.navigationOptions = {
//   title: navigation.state.params.repositorie,
// };

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
  },
});
