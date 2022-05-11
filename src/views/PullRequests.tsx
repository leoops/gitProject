import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, Linking, View } from 'react-native';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { StackScreenProps } from '@react-navigation/stack';
import { requestAllPullRequestsBy, PullRequest } from '../services/Requests';
import { PullRequestItem, Separator } from '../components/';
import { formatData, getCurrentTheme } from '../utils/Utils';

type Props = StackScreenProps<{}>;

export default (props: Props) => {
  const theme = getCurrentTheme();
  const styles = StyleSheet.create({
    content: {
      flex: theme.FULL,
      backgroundColor: theme.CONTAINER_COLOR,
      padding: 5,
    },
    row: {
      justifyContent: 'space-around',
    },
  });

  const { route, navigation } = props;
  const { creator, repository } = route.params;
  const [pullRequests, setPullRequests] = useState<PullRequest[]>([]);
  const numColumns = 2;
  navigation.setOptions({ title: repository });

  useEffect(() => {
    const params = { creator, repository };
    requestAllPullRequestsBy(params)
      .then(response => response.data)
      .then(pullRequests => {
        setPullRequests(pullRequests);
      })
      .catch(error => console.warn(error));
  }, []);

  const openURLLink = (url: string) => () => {
    Linking.canOpenURL(url).then(supported => {
      if (supported) {
        Linking.openURL(url);
      } else {
        console.log("Don't know how to open URI: " + url);
      }
    });
  };

  const defineWidthColumn = () => {
    const percent = 95 / numColumns;
    return responsiveWidth(percent);
  };

  const widthColumn = defineWidthColumn();

  const keyExtractor = ({ id }: PullRequest, index: number) => `${id}${index}`;

  const renderCardPullRequest = ({ item }: { item: PullRequest }) => {
    const { user, created_at, body, title, html_url } = item;
    const date = formatData(created_at);
    const onPress = openURLLink(html_url);

    return (
      <PullRequestItem
        user={user}
        date={date}
        description={body}
        onPress={onPress}
        title={title}
        width={widthColumn}
      />
    );
  };

  return (
    <FlatList
      numColumns={numColumns}
      style={styles.content}
      columnWrapperStyle={styles.row}
      data={pullRequests}
      keyExtractor={keyExtractor}
      horizontal={false}
      renderItem={renderCardPullRequest}
      ItemSeparatorComponent={Separator}
    />
  );
};
