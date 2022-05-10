import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Separator } from '../';
import { PullRequestBody, PullRequestHeader } from './';

export interface PullRequest {
  onPress: () => void;
  user: { avatar_url: string; login: string };
  date: string;
  title: string;
  description: string;
  width: number;
}

export default function PullRequestItem(props: PullRequest) {
  const { onPress, user, date, title, description, width } = props;

  const styles = StyleSheet.create({
    cardContainer: {
      flex: 1,
      padding: 10,
      borderRadius: 10,
      borderColor: '#0094cc',
      borderWidth: 1,
      width,
    },
  });

  return (
    <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
      <PullRequestHeader imageUrl={user.avatar_url} user={user.login} />
      <Separator onlyVertical />
      <PullRequestBody description={description} date={date} title={title} />
    </TouchableOpacity>
  );
}
