import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface Props {
  imageUrl: string;
  user: string;
}

export default function PullRequestHeader(props: Props) {
  const { user, imageUrl } = props;
  const { container, image, login } = styles;

  return (
    <View style={container}>
      <Image style={image} source={{ uri: imageUrl }} resizeMode="contain" />
      <Text style={login}>{user}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: 45,
    height: 45,
    borderRadius: 65,
  },
  login: {
    fontSize: 14,
    fontWeight: '500',
  },
});
