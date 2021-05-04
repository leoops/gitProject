import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import starImage from '../assets/images/favorites.png';
import forkImage from '../assets/images/fork.png';

export default class RepositorieCard extends Component {
  render() {
    const { data, navigation } = this.props;
    return (
      <TouchableOpacity
        style={styles.cardContainer}
        onPress={() =>
          navigation.navigate('PullRequests', {
            creator: data.owner.login,
            repositorie: data.name,
          })
        }>
        <View style={styles.cardHearder}>
          <View style={styles.authorContainer}>
            <Text style={styles.textName}>{data.name}</Text>
            <View style={styles.lineContainer}>
              <Text style={styles.forkLine}>
                <Image style={styles.icon} source={forkImage} />
                {data.forks_count}
              </Text>
              <Text style={styles.starLine}>
                <Image style={styles.icon} source={starImage} />
                {data.stargazers_count}
              </Text>
            </View>
          </View>
          <View>
            <Image
              style={styles.authorAvatar}
              source={{ uri: data.owner.avatar_url }}
              resizeMode="contain"
            />
            <Text>{data.owner.login}</Text>
          </View>
        </View>

        <Text style={styles.textDescription}>{data.description}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#0004',
    padding: 10,
    marginHorizontal: 9,
    marginVertical: 5,
    borderRadius: 5,
  },
  cardHearder: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: '#0005',
    paddingBottom: 5,
  },
  authorAvatar: {
    width: 45,
    height: 45,
    borderRadius: 65,
  },
  authorContainer: {
    flex: 1,
  },
  forkLine: {
    flex: 1,
  },
  starLine: {
    flex: 1,
  },
  textDescription: {
    flex: 1,
    marginTop: 15,
    fontSize: 16,
    textAlign: 'auto',
  },
  icon: {
    width: 16,
    height: 16,
  },
  lineContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  textName: { flex: 1, fontSize: 20, fontWeight: 'bold' },
});
