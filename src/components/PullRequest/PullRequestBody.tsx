import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  description: string;
  date: string;
  title: string;
}
export default function PullRequestBody(props: Props) {
  const { description, title, date } = props;
  const {
    container,
    descriptionText,
    titleText,
    dateText,
    separatorVertical,
  } = styles;

  const VerticalSeparator = () => <View style={separatorVertical} />;

  return (
    <View style={container}>
      <Text style={dateText}>{date}</Text>
      <VerticalSeparator />
      <Text numberOfLines={1} style={titleText}>
        {title}
      </Text>
      <VerticalSeparator />
      <Text numberOfLines={2} style={descriptionText}>
        {description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 10 },
  descriptionText: { flex: 1 },
  separatorVertical: { paddingTop: 5 },
  dateText: {
    fontSize: 12,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '800',
  },
});
