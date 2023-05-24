import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import TopBar1 from "../components/TopBar1";
import Image1 from "../components/Image1";
import Input from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import Showcase from "../components/Showcase";
import { Color, Padding, Border, FontFamily, FontSize } from "../GlobalStyles";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.login}>
      <TopBar1 title="Log in or sign up" />
      <Image1 title="Welcome back!" rectangle3347MarginTop={-20.5} />
      <Input title="Email" propTop={219} />
      <Input title="Password" propTop={305} />
      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("BlutoothConnectivity")}
      >
        <View style={styles.button1}>
          <Text style={styles.title}>Log in</Text>
        </View>
      </Pressable>
      <Showcase />
      <View style={styles.selection}>
        <Text style={[styles.title1, styles.textClr]}>Language</Text>
        <View style={styles.chipGroup}>
          <View style={[styles.chip, styles.chipFlexBox]}>
            <Text style={[styles.text, styles.textClr]}>Chip Text Long</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text, styles.textClr]}>English</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text, styles.textClr]}>Spanish</Text>
          </View>
          <View style={[styles.chip1, styles.chipFlexBox]}>
            <Text style={[styles.text, styles.textClr]}>German</Text>
          </View>
        </View>
      </View>
      <Image
        style={styles.loginChild}
        contentFit="cover"
        source={require("../assets/group-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textClr: {
    color: Color.typePrimary,
    textAlign: "left",
  },
  chipFlexBox: {
    padding: Padding.p_5xs,
    backgroundColor: Color.whitesmoke_100,
    borderRadius: Border.br_7xs,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 22,
    fontSize: FontSize.size_base,
  },
  button1: {
    borderRadius: Border.br_5xs,
    backgroundColor: Color.black,
    paddingVertical: Padding.p_3xs,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "stretch",
    paddingHorizontal: Padding.p_xs,
  },
  button: {
    top: 391,
    paddingVertical: Padding.p_base,
    paddingHorizontal: Padding.p_xs,
    left: 0,
    width: 360,
    position: "absolute",
    overflow: "hidden",
  },
  title1: {
    fontFamily: FontFamily.robotoMedium,
    fontWeight: "500",
    lineHeight: 22,
    fontSize: FontSize.size_base,
    color: Color.typePrimary,
    alignSelf: "stretch",
  },
  text: {
    fontSize: FontSize.size_sm,
    lineHeight: 20,
    fontFamily: FontFamily.robotoRegular,
  },
  chip: {
    display: "none",
  },
  chip1: {
    marginLeft: 8,
  },
  chipGroup: {
    flexDirection: "row",
    marginTop: 8,
    alignSelf: "stretch",
  },
  selection: {
    top: 959,
    padding: Padding.p_xs,
    alignItems: "center",
    width: 360,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  loginChild: {
    top: 753,
    left: 4,
    height: 47,
    width: 360,
    position: "absolute",
  },
  login: {
    backgroundColor: Color.white,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Login;
