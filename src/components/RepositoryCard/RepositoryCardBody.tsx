import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { RepositoryIcon } from '.';
import { Separator } from '..';
import starImage from '../../assets/images/favorites.png';
import forkImage from '../../assets/images/fork.png';

interface Props {
  name: string;
  forks_count: number;
  stargazers_count: number;
  description: string;
}

export default function RepositoryCardBody(props: Props) {
  const { name, forks_count, stargazers_count, description } = props;
  const { container, textName, rowContainer } = styles;
  return (
    <View>
      <View style={container}>
        <Text numberOfLines={1} style={textName}>
          {name}
        </Text>
        <Separator onlyVertical />
        <View style={rowContainer}>
          <RepositoryIcon image={forkImage} text={forks_count} />
          <Separator onlyHorizontal />
          <RepositoryIcon image={starImage} text={stargazers_count} />
        </View>
      </View>
      <Text numberOfLines={2} style={styles.textDescription}>
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textDescription: {
    paddingTop: 7,
    fontSize: 16,
    lineHeight: 20,
  },
  container: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
  },
  textName: {
    flex: 1,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
