import React, { useEffect, useState } from 'react';
import { StyleSheet, FlatList, Linking } from 'react-native';
import { requestAllPullRequestsBy, PullRequest } from '../services/Requests';
import { PullRequestItem } from '../components/';
import { formatData } from '../utils/Utils';
import ListItemSeparator from '../components/ListItemSeparator';

export default function PullRequests(props) {
  const { route, navigation } = props;
  const { creator, repository } = route.params;
  const [pullRequests, setPullRequests] = useState<PullRequest[]>([]);
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

  const keyExtractor = ({ id }: PullRequest, index: number) => `${id}${index}`;

  const renderCardPullRequest = ({ item }: { item: PullRequest }) => {
    const { user, created_at, body, title, html_url } = item;
    const date = formatData(created_at);
    const onPress = openURLLink(html_url);
    console.log(item);

    return (
      <PullRequestItem
        user={user}
        date={date}
        description={body}
        onPress={onPress}
        title={title}
      />
    );
  };

  return (
    <FlatList
      style={styles.content}
      data={pullRequests}
      keyExtractor={keyExtractor}
      renderItem={renderCardPullRequest}
      ItemSeparatorComponent={ListItemSeparator}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 10,
  },
});
