import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Separator } from '../';
import { getCurrentTheme } from '../../utils/Utils';

interface Props {
  description: string;
  date: string;
  title: string;
}

export default (props: Props) => {
  const theme = getCurrentTheme();
  const styles = StyleSheet.create({
    separatorVertical: { paddingTop: 5 },
    dateText: {
      color: theme.PRIMARY_TEXT_COLOR,
      opacity: theme.FONT_OPACITY_LOW,
      fontSize: theme.FONT_SIZE_LOW,
    },
    titleText: {
      color: theme.PRIMARY_TEXT_COLOR,
      opacity: theme.FONT_OPACITY_HIGH,
      fontSize: theme.FONT_SIZE_HIGH,
      fontWeight: theme.FONT_WEIGHT_BOLD,
    },
    descriptionText: {
      color: theme.PRIMARY_TEXT_COLOR,
      opacity: theme.FONT_OPACITY_MEDIUM,
      fontSize: theme.FONT_SIZE_MEDIUM,
    },
  });

  const { description, title, date } = props;
  const { titleText, dateText, descriptionText } = styles;

  return (
    <>
      <Text style={dateText}>{date}</Text>
      <Separator onlyVertical />
      <Text numberOfLines={2} style={titleText}>
        {title}
      </Text>
      <Separator onlyVertical />
      <Text numberOfLines={2} style={descriptionText}>
        {description}
      </Text>
    </>
  );
};
