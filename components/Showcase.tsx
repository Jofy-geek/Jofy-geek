import React, { memo } from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";

const Showcase = memo(() => {
  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.showcase}
      onPress={() => navigation.navigate("Signup")}
    >
      <View style={styles.top}>
        <Text style={styles.title}>Don't have an account? Sign up now!</Text>
        <Text style={[styles.subtitle, styles.title1Typo]}>Subtitle</Text>
        <View style={styles.button}>
          <Text style={[styles.title1, styles.title1Typo]}>Sign up</Text>
          <Image
            style={styles.icon}
            contentFit="cover"
            source={require("../assets/icon.png")}
          />
        </View>
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  title1Typo: {
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 16,
    fontSize: FontSize.size_xs,
    textAlign: "left",
  },
  title: {
    fontSize: FontSize.size_base,
    lineHeight: 22,
    fontWeight: "500",
    fontFamily: FontFamily.robotoMedium,
    color: Color.gray_300,
    zIndex: 0,
    textAlign: "left",
    alignSelf: "stretch",
  },
  subtitle: {
    color: Color.gray_200,
    display: "none",
    zIndex: 1,
    alignSelf: "stretch",
  },
  title1: {
    color: Color.black,
  },
  icon: {
    width: 12,
    height: 12,
  },
  button: {
    marginTop: -10,
    top: "50%",
    right: 16,
    borderRadius: Border.br_9xs,
    borderStyle: "solid",
    borderColor: "#000",
    borderWidth: 1,
    flexDirection: "row",
    paddingLeft: Padding.p_5xs,
    paddingTop: Padding.p_11xs,
    paddingRight: Padding.p_10xs,
    paddingBottom: Padding.p_11xs,
    alignItems: "center",
    zIndex: 2,
    position: "absolute",
  },
  top: {
    paddingLeft: Padding.p_xs,
    paddingTop: Padding.p_xs,
    paddingRight: Padding.p_71xl,
    paddingBottom: Padding.p_xs,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  showcase: {
    top: 465,
    left: 0,
    borderRadius: Border.br_5xs,
    width: 360,
    overflow: "hidden",
    position: "absolute",
  },
});

export default Showcase;
