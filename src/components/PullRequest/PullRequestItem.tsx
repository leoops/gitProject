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
      <PullRequestHeader imageUrl={user.avatar_url} user={user.login} />
      <PullRequestBody description={description} date={date} title={title} />
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
