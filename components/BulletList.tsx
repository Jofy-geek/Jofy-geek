import React, { useMemo, memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import { Padding, FontFamily, FontSize, Color, Border } from "../GlobalStyles";

type BulletListType = {
  title?: string;
  title1?: string;
  subtitle?: string;
  icon?: string;
  title2?: string;
  subtitle1?: string;
  icon1?: string;
  title3?: string;
  subtitle2?: string;
  icon2?: string;

  /** Style props */
  titleTop?: number | string;
  titleLeft?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const BulletList = memo(
  ({
    title,
    title1,
    subtitle,
    icon,
    title2,
    subtitle1,
    icon1,
    title3,
    subtitle2,
    icon2,
    titleTop,
    titleLeft,
  }: BulletListType) => {
    const bulletListStyle = useMemo(() => {
      return {
        ...getStyleValue("top", titleTop),
        ...getStyleValue("left", titleLeft),
      };
    }, [titleTop, titleLeft]);

    return (
      <View style={[styles.bulletList, bulletListStyle]}>
        <Text style={styles.title}>{title}</Text>
        <View style={[styles.bullet, styles.bulletSpaceBlock]}>
          <View style={[styles.background, styles.iconPosition]} />
          <Text style={[styles.title1, styles.iconTypo]}>Title</Text>
          <Text style={[styles.subtitle, styles.iconTypo]}>Subtitle</Text>
          <View style={[styles.underline, styles.iconPosition]} />
          <Text style={[styles.icon, styles.iconTypo]}>😀</Text>
        </View>
        <View style={styles.bulletSpaceBlock}>
          <View style={[styles.background, styles.iconPosition]} />
          <Text style={[styles.title1, styles.iconTypo]}>{title1}</Text>
          <Text style={[styles.subtitle, styles.iconTypo]}>{subtitle}</Text>
          <View style={[styles.underline, styles.iconPosition]} />
          <Text style={[styles.icon, styles.iconTypo]}>{icon}</Text>
        </View>
        <View style={styles.bulletSpaceBlock}>
          <View style={[styles.background, styles.iconPosition]} />
          <Text style={[styles.title1, styles.iconTypo]}>{title2}</Text>
          <Text style={[styles.subtitle, styles.iconTypo]}>{subtitle1}</Text>
          <View style={[styles.underline, styles.iconPosition]} />
          <Text style={[styles.icon, styles.iconTypo]}>{icon1}</Text>
        </View>
        <View style={styles.bulletSpaceBlock}>
          <View style={[styles.background, styles.iconPosition]} />
          <Text style={[styles.title1, styles.iconTypo]}>{title3}</Text>
          <Text style={[styles.subtitle, styles.iconTypo]}>{subtitle2}</Text>
          <View style={[styles.underline, styles.iconPosition]} />
          <Text style={[styles.icon, styles.iconTypo]}>{icon2}</Text>
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  bulletSpaceBlock: {
    justifyContent: "center",
    paddingBottom: Padding.p_5xs,
    paddingTop: Padding.p_5xs,
    paddingLeft: Padding.p_21xl,
    alignSelf: "stretch",
  },
  iconPosition: {
    left: 0,
    position: "absolute",
  },
  iconTypo: {
    fontFamily: FontFamily.robotoRegular,
    alignSelf: "stretch",
  },
  title: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    textAlign: "left",
    color: Color.gray_300,
    alignSelf: "stretch",
  },
  background: {
    marginTop: -14,
    borderRadius: Border.br_5xl,
    backgroundColor: Color.whitesmoke_200,
    width: 32,
    height: 32,
    zIndex: 0,
    top: "50%",
    left: 0,
  },
  title1: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    color: Color.typePrimary,
    zIndex: 1,
    textAlign: "left",
  },
  subtitle: {
    fontSize: FontSize.size_xs,
    lineHeight: 16,
    color: Color.gray_200,
    zIndex: 2,
    textAlign: "left",
  },
  underline: {
    bottom: 0,
    backgroundColor: Color.gray_100,
    width: 336,
    height: 1,
    zIndex: 3,
  },
  icon: {
    marginTop: -16,
    fontSize: FontSize.size_xl,
    lineHeight: 32,
    textAlign: "center",
    zIndex: 4,
    left: 0,
    position: "absolute",
    top: "50%",
    color: Color.gray_300,
  },
  bullet: {
    display: "none",
  },
  bulletList: {
    top: 180,
    left: 5,
    width: 360,
    overflow: "hidden",
    padding: Padding.p_xs,
    alignItems: "center",
    position: "absolute",
  },
});

export default BulletList;
