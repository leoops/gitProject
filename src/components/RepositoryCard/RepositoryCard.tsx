import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Repository } from '../../services/Requests';
import RepositoryCardHeader from './RepositoryCardHeader';
import RepositoryCardBody from './RepositoryCardBody';
import { Separator } from '..';
import { getCurrentTheme } from '../../utils/Utils';

interface Props {
  data: Repository;
  onPress: () => void;
  width: number;
}

export default (props: Props) => {
  const theme = getCurrentTheme();

  const { data, onPress, width } = props;
  const { description, name, forks_count, stargazers_count, owner } = data;
  const styles = StyleSheet.create({
    cardContainer: {
      padding: theme.ITEM_PADDING,
      borderRadius: theme.DEFAULT_BORDER,
      backgroundColor: theme.BACKGROUND_COLOR,
      borderColor: theme.BORDER_COLOR,
      borderWidth: theme.BORDER_SIZE,
      width,
    },
  });

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <RepositoryCardHeader owner={owner} />
      <Separator />
      <RepositoryCardBody
        name={name}
        forks_count={forks_count}
        stargazers_count={stargazers_count}
        description={description}
      />
    </TouchableOpacity>
  );
};
