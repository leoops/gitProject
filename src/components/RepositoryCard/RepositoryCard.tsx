import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Repository } from '../../services/Requests';
import RepositoryCardHeader from './RepositoryCardHeader';
import RepositoryCardBody from './RepositoryCardBody';

interface Props {
  data: Repository;
  onPress: () => void;
}

export default function RepositoryCard(props: Props) {
  const { data, onPress } = props;
  const { description, name, forks_count, stargazers_count, owner } = data;

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <RepositoryCardHeader
        name={name}
        forks_count={forks_count}
        stargazers_count={stargazers_count}
        owner={owner}
      />
      <RepositoryCardBody text={description} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 10,
    borderRadius: 10,
    borderColor: '#0094cc',
    borderWidth: 1,
  },
});
