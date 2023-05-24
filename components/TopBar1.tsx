import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Image } from "expo-image";
import { FontSize, FontFamily, Color } from "../GlobalStyles";

type TopBar1Type = {
  title?: string;
};

const TopBar1 = memo(({ title }: TopBar1Type) => {
  return (
    <View style={[styles.topBar, styles.topPosition]}>
      <Text style={styles.title}>{title}</Text>
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
    </View>
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

export default TopBar1;
