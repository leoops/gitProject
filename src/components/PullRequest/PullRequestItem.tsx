import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import PullRequestBody from './PullRequestBody';
import PullRequestHeader from './PullRequestHeader';

export interface PullRequest {
  onPress: () => void;
  user: { avatar_url: string; login: string };
  date: string;
  title: string;
  description: string;
}

export default function PullRequestItem(props: PullRequest) {
  const { onPress, user, date, title, description } = props;

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <PullRequestHeader
        date={date}
        imageUrl={user.avatar_url}
        user={user.login}
      />
      <PullRequestBody description={description} title={title} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: '#0007',
    padding: 10,
    marginHorizontal: 9,
    marginVertical: 5,
    borderRadius: 5,
  },
});
