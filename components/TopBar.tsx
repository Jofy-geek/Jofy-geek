import React, { useMemo, memo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

type TopBarType = {
  title?: string;

  /** Style props */
  topTop?: number | string;

  /** Action props */
  onTopBarPress?: () => void;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const TopBar = memo(({ title, topTop, onTopBarPress }: TopBarType) => {
  const titleStyle = useMemo(() => {
    return {
      ...getStyleValue("top", topTop),
    };
  }, [topTop]);

  return (
    <Pressable
      style={[styles.topBar, styles.topPosition]}
      onPress={onTopBarPress}
    >
      <Text style={[styles.title, titleStyle]}>{title}</Text>
      <Image
        style={[styles.topIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/top.png")}
      />
      <Image
        style={[styles.icLeftIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/icleft.png")}
      />
    </Pressable>
  );
});

const styles = StyleSheet.create({
  topPosition: {
    width: 360,
    left: 0,
    top: 0,
  },
  iconLayout: {
    height: 24,
    position: "absolute",
  },
  title: {
    top: 44,
    left: 32,
    fontSize: FontSize.size_lg,
    lineHeight: 24,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.typePrimary,
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 296,
    position: "absolute",
  },
  topIcon: {
    width: 360,
    left: 0,
    top: 0,
  },
  icLeftIcon: {
    marginTop: 0,
    top: "50%",
    right: 324,
    width: 24,
  },
  topBar: {
    backgroundColor: Color.white,
    height: 88,
    position: "absolute",
  },
});

export default TopBar;
