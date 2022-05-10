import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Repository } from '../../services/Requests';
import RepositoryCardHeader from './RepositoryCardHeader';
import RepositoryCardBody from './RepositoryCardBody';
import { Separator } from '..';

interface Props {
  data: Repository;
  onPress: () => void;
  width: number;
}

export default function RepositoryCard(props: Props) {
  const { data, onPress, width } = props;
  const { description, name, forks_count, stargazers_count, owner } = data;
  const styles = StyleSheet.create({
    cardContainer: {
      padding: 10,
      borderRadius: 10,
      borderColor: '#0094cc',
      borderWidth: 1,
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
}
