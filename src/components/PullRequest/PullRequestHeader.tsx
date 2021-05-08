import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface Props {
  imageUrl: string;
  user: string;
  date: string;
}

export default function PullRequestHeader(props: Props) {
  const { user, date, imageUrl } = props;
  const { container, image, userContainer, login, dateText } = styles;

  return (
    <View style={container}>
      <Image style={image} source={{ uri: imageUrl }} resizeMode="contain" />
      <View style={userContainer}>
        <Text style={login}>{user}</Text>
        <Text style={dateText}>{date}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: 'row', alignItems: 'center' },
  image: {},
  userContainer: { paddingLeft: 10 },
  login: {},
  dateText: { flex: 1, fontSize: 16, fontWeight: '500' },
});
