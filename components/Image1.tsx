import React, { useMemo, memo } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Border, Color, FontSize, FontFamily, Padding } from "../GlobalStyles";

type Image1Type = {
  title?: string;

  /** Style props */
  rectangle3347MarginTop?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Image1 = memo(({ title, rectangle3347MarginTop }: Image1Type) => {
  const descriptionStyle = useMemo(() => {
    return {
      ...getStyleValue("marginTop", rectangle3347MarginTop),
    };
  }, [rectangle3347MarginTop]);

  return (
    <View style={styles.image}>
      <View style={styles.img} />
      <View
        style={[
          styles.description,
          styles.paginationPosition,
          descriptionStyle,
        ]}
      >
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={[styles.pagination, styles.paginationPosition]}>
        <View style={[styles.paginationChild, styles.paginationLayout]} />
        <View style={[styles.paginationItem, styles.paginationLayout]} />
        <View style={[styles.paginationItem, styles.paginationLayout]} />
        <View style={[styles.paginationItem, styles.paginationLayout]} />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  paginationPosition: {
    flexDirection: "row",
    left: "50%",
    position: "absolute",
  },
  paginationLayout: {
    height: 4,
    borderRadius: Border.br_81xl,
  },
  img: {
    top: 8,
    left: 12,
    borderRadius: Border.br_7xs,
    backgroundColor: Color.gainsboro,
    width: 336,
    height: 115,
    position: "absolute",
  },
  title: {
    flex: 1,
    fontSize: FontSize.size_base,
    lineHeight: 22,
    fontWeight: "700",
    fontFamily: FontFamily.robotoBold,
    color: Color.typePrimary,
    textAlign: "center",
  },
  description: {
    marginTop: -31.5,
    marginLeft: -140,
    top: "50%",
    borderRadius: Border.br_5xs,
    width: 280,
    padding: Padding.p_3xs,
  },
  paginationChild: {
    backgroundColor: Color.white,
    width: 20,
  },
  paginationItem: {
    backgroundColor: Color.gray_400,
    width: 4,
    marginLeft: 4,
  },
  pagination: {
    marginLeft: -22,
    bottom: 16,
  },
  image: {
    top: 88,
    left: 0,
    width: 360,
    height: 131,
    overflow: "hidden",
    position: "absolute",
  },
});

export default Image1;
