import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { RepositoryCard, Separator } from '../components/';
import { requestAllRepositoriesBy, Repository } from '../services/Requests';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { getCurrentTheme } from '../utils/Utils';

type Props = StackScreenProps<{}>;

interface RepositoriesRequest {
  data: { items: Repository[] };
}

export default (props: Props) => {
  const theme = getCurrentTheme();

  const styles = StyleSheet.create({
    content: {
      flex: 1,
      padding: 5,
      backgroundColor: theme.CONTAINER_COLOR,
    },
    row: { justifyContent: 'space-around' },
  });

  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [refreshing, setRefreshing] = useState(true);
  const [countPage, setCountPage] = useState(1);
  const language = 'Java';
  const sort = 'stars';
  const numColumns = 2;

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

  const defineWidthColumn = () => {
    const percent = 95 / numColumns;
    return responsiveWidth(percent);
  };

  const widthColumn = defineWidthColumn();

  const renderCardRepository = ({ item }: { item: Repository }) => {
    const { owner, name } = item;
    const { navigate } = props.navigation;
    const params = { creator: owner.login, repository: name };
    const onPress = () => navigate('PullRequests', params);

    return <RepositoryCard data={item} onPress={onPress} width={widthColumn} />;
  };

  return (
    <FlatList
      numColumns={numColumns}
      style={styles.content}
      columnWrapperStyle={styles.row}
      data={repositories}
      keyExtractor={keyExtractor}
      onEndReached={updateRepositories}
      renderItem={renderCardRepository}
      onRefresh={refreshingRepositories}
      ItemSeparatorComponent={Separator}
      refreshing={refreshing}
    />
  );
};
