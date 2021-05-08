import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Separator } from '../';

interface Props {
  description: string;
  date: string;
  title: string;
}
export default function PullRequestBody(props: Props) {
  const { description, title, date } = props;
  const { titleText, dateText } = styles;

  return (
    <View>
      <Text style={dateText}>{date}</Text>
      <Separator onlyVertical />
      <Text numberOfLines={2} style={titleText}>
        {title}
      </Text>
      <Separator onlyVertical />
      <Text numberOfLines={2}>{description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  separatorVertical: { paddingTop: 5 },
  dateText: {
    fontSize: 12,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '800',
  },
});
