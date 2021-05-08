import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, View } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RepositoryCard } from '../components/';
import { requestAllRepositoriesBy, Repository } from '../services/Requests';
import ListItemSeparator from '../components/ListItemSeparator';

type Props = StackScreenProps<{}>;

interface RepositoriesRequest {
  data: { items: Repository[] };
}

export default function Repositories(props: Props) {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [refreshing, setRefreshing] = useState(true);
  const [countPage, setCountPage] = useState(1);
  const language = 'Java';
  const sort = 'stars';

  useEffect(() => {
    updateRepositories();
  }, []);

  const keyExtractor = ({ id }: Repository, index: number) => `${id}${index}`;

  const requestRepositories = (numberPage: number): Promise<Repository[]> => {
    const params = { page: numberPage, language, sort };
    const onSuccess = ({ data }: RepositoriesRequest) => data.items;
    return requestAllRepositoriesBy(params).then(onSuccess);
  };

  const loadingRepositories = async () => {
    setRefreshing(true);
    const newRepositories = await requestRepositories(countPage);
    setRepositories([...repositories, ...newRepositories]);
    setRefreshing(false);
  };

  const updateRepositories = async () => {
    try {
      await loadingRepositories();
      setCountPage(countPage + 1);
    } catch (error) {
      console.warn(error);
    }
  };

  const refreshingRepositories = async () => {
    try {
      setRepositories([]);
      setCountPage(1);
      await loadingRepositories();
    } catch (error) {
      console.warn(error);
    }
  };

  const renderCardRepository = ({ item }: { item: Repository }) => {
    const { owner, name } = item;
    const { navigate } = props.navigation;
    const params = { creator: owner.login, repository: name };
    const onPress = () => navigate('PullRequests', params);

    return <RepositoryCard data={item} onPress={onPress} />;
  };

  const renderSeparator = () => <View style={styles.separator} />;

  return (
    <FlatList
      style={styles.content}
      data={repositories}
      keyExtractor={keyExtractor}
      onEndReached={updateRepositories}
      renderItem={renderCardRepository}
      onRefresh={refreshingRepositories}
      ItemSeparatorComponent={ListItemSeparator}
      refreshing={refreshing}
    />
  );
}

const styles = StyleSheet.create({
  content: { padding: 10, backgroundColor: '#fff' },
  separator: { padding: 5 },
});
