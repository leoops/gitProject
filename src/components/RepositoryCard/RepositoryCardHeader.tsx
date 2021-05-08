import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import starImage from '../../assets/images/favorites.png';
import forkImage from '../../assets/images/fork.png';
import RepositoryIcon from './RepositoryIcon';

interface Props {
  name: string;
  forks_count: number;
  stargazers_count: number;
  owner: { avatar_url: string; login: string };
}

export default function RepositoryCardHeader(props: Props) {
  const { name, forks_count, stargazers_count, owner } = props;

  return (
    <View style={styles.cardHeader}>
      <View style={styles.authorContainer}>
        <Text style={styles.textName}>{name}</Text>
        <View style={styles.rowContainer}>
          <RepositoryIcon image={forkImage} text={forks_count} />
          <RepositoryIcon image={starImage} text={stargazers_count} />
        </View>
      </View>
      <View>
        <Image
          style={styles.authorAvatar}
          source={{ uri: owner.avatar_url }}
          resizeMode="contain"
        />
        <Text>{owner.login}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardHeader: {
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
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  textName: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
