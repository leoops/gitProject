import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  title: string;
  description: string;
}
export default function PullRequestBody(props: Props) {
  const { title, description } = props;
  const { container, titleText, descriptionText } = styles;

  return (
    <View style={container}>
      <Text style={titleText}>{title}</Text>
      <Text style={descriptionText}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 10 },
  titleText: {
    flex: 2,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 10,
  },
  descriptionText: { flex: 1 },
});
