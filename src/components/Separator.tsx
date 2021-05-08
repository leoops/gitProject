import React from 'react';
import { StyleSheet, View } from 'react-native';

interface Props {
  onlyHorizontal?: boolean;
  onlyVertical?: boolean;
}

export default function Separator(props: Props) {
  const mountStyle = (vertical?: boolean, horizontal?: boolean) => {
    if (horizontal || vertical) {
      if (horizontal) return styles.separatorHorizontal;
      if (vertical) return styles.separatorVertical;
    }

    return styles.separator;
  };

  const { onlyHorizontal, onlyVertical } = props;
  const style = mountStyle(onlyVertical, onlyHorizontal);

  return <View style={style} />;
}

const styles = StyleSheet.create({
  separatorHorizontal: { paddingHorizontal: 5 },
  separatorVertical: { paddingVertical: 5 },
  separator: { padding: 5 },
});
