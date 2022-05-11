import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { RepositoryIcon } from '.';
import { Separator } from '..';
import starImage from '../../assets/images/favorites.png';
import forkImage from '../../assets/images/fork.png';
import { getCurrentTheme } from '../../utils/Utils';

interface Props {
  name: string;
  forks_count: number;
  stargazers_count: number;
  description: string;
}

export default (props: Props) => {
  const theme = getCurrentTheme();
  const styles = StyleSheet.create({
    textName: {
      flex: theme.FULL,
      color: theme.PRIMARY_TEXT_COLOR,
      fontSize: theme.FONT_SIZE_HIGH,
      fontWeight: theme.FONT_WEIGHT_BOLD,
    },
    textDescription: {
      color: theme.PRIMARY_TEXT_COLOR,
      opacity: theme.FONT_OPACITY_MEDIUM,
      fontSize: theme.FONT_SIZE_MEDIUM,
      paddingTop: 5,
      lineHeight: theme.TEXT_LINE_SPACE_HIGH,
    },
    rowContainer: {
      flexDirection: 'row',
    },
  });

  const { name, forks_count, stargazers_count, description } = props;
  const { textName, rowContainer } = styles;

  return (
    <>
      <Text numberOfLines={1} style={textName}>
        {name}
      </Text>
      <Separator onlyVertical />
      <View style={rowContainer}>
        <RepositoryIcon image={forkImage} text={forks_count} />
        <Separator onlyHorizontal />
        <RepositoryIcon image={starImage} text={stargazers_count} />
      </View>
      <Separator onlyHorizontal />
      <Text numberOfLines={2} style={styles.textDescription}>
        {description}
      </Text>
    </>
  );
};
