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
  const {
    cardHeader,
    authorAvatar,
    authorContainer,
    textName,
    rowContainer,
    separatorHorizontal,
    separatorVertical,
  } = styles;

  const VerticalSeparator = () => <View style={separatorVertical} />;

  const HorizontalSeparator = () => <View style={separatorHorizontal} />;

  return (
    <View style={cardHeader}>
      <Image
        style={authorAvatar}
        source={{ uri: owner.avatar_url, cache: 'force-cache' }}
        resizeMode="contain"
      />
      <View style={authorContainer}>
        <Text numberOfLines={1} style={textName}>
          {name}
        </Text>
        <VerticalSeparator />
        <View style={rowContainer}>
          <RepositoryIcon image={forkImage} text={forks_count} />
          <HorizontalSeparator />
          <RepositoryIcon image={starImage} text={stargazers_count} />
        </View>
        <VerticalSeparator />
        <Text numberOfLines={1}>{owner.login}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 5,
  },
  separatorHorizontal: { paddingHorizontal: 5 },
  separatorVertical: { paddingTop: 5 },
  authorAvatar: {
    width: 45,
    height: 45,
    borderRadius: 65,
  },
  authorContainer: {
    paddingLeft: 10,
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  textName: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
